import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import type { MotionValue } from 'framer-motion';

// Ashima Arts 3D simplex noise (MIT)
const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;

const blobVertex = /* glsl */ `
uniform float uTime;
uniform float uDistort;
uniform float uFrequency;
varying vec3 vNormal;
varying vec3 vViewPos;
varying float vNoise;
${NOISE_GLSL}

float displace(vec3 p){
  float n = snoise(p * uFrequency + vec3(uTime * 0.22));
  float detail = snoise(p * uFrequency * 2.6 - vec3(uTime * 0.31)) * 0.3;
  return (n + detail) * uDistort;
}

vec3 orthogonal(vec3 v){
  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
}

void main(){
  vec3 n = normalize(normal);
  float d = displace(position);
  vec3 displaced = position + n * d;

  // Recompute the normal from two neighbouring displaced points
  float eps = 0.012;
  vec3 t = orthogonal(n);
  vec3 b = normalize(cross(n, t));
  vec3 pt = position + t * eps;
  vec3 pb = position + b * eps;
  vec3 dt = pt + normalize(pt) * displace(pt);
  vec3 db = pb + normalize(pb) * displace(pb);
  vec3 newNormal = normalize(cross(dt - displaced, db - displaced));

  vNormal = normalize(normalMatrix * newNormal);
  vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
  vViewPos = -mv.xyz;
  vNoise = d;
  gl_Position = projectionMatrix * mv;
}
`;

const blobFragment = /* glsl */ `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vViewPos;
varying float vNoise;

// Brand gradient: magenta -> violet -> cyan -> ember
vec3 brand(float t){
  vec3 c1 = vec3(0.714, 0.0, 0.659);
  vec3 c2 = vec3(0.463, 0.129, 0.690);
  vec3 c3 = vec3(0.12, 0.62, 0.95);
  vec3 c4 = vec3(0.86, 0.36, 0.05);
  t = fract(t) * 4.0;
  vec3 col = mix(c1, c2, smoothstep(0.0, 1.0, t));
  col = mix(col, c3, smoothstep(1.0, 2.0, t));
  col = mix(col, c4, smoothstep(2.0, 3.0, t));
  col = mix(col, c1, smoothstep(3.0, 4.0, t));
  return col;
}

void main(){
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewPos);
  float facing = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - facing, 2.2);

  vec3 L1 = normalize(vec3(0.5, 0.9, 0.6));
  vec3 L2 = normalize(vec3(-0.8, -0.3, 0.4));
  float diff = max(dot(N, L1), 0.0) * 0.8 + max(dot(N, L2), 0.0) * 0.35;
  float spec = pow(max(dot(N, normalize(L1 + V)), 0.0), 48.0);

  // Thin-film style hue shift driven by normal, view angle and displacement
  float hue = vNoise * 0.9 + dot(N, vec3(0.25, 0.4, 0.15)) + fresnel * 0.35 + uTime * 0.03;
  vec3 base = brand(hue);

  vec3 col = base * (0.18 + diff * 0.85);
  col += brand(hue + 0.35) * fresnel * 1.35;
  col += vec3(1.0, 0.92, 1.0) * spec * 0.75;
  col = pow(col, vec3(0.92));

  gl_FragColor = vec4(col, 1.0);
}
`;

const pointsVertex = /* glsl */ `
uniform float uTime;
uniform float uPixelRatio;
attribute float aScale;
attribute float aSeed;
varying float vAlpha;
varying float vSeed;

void main(){
  vec3 p = position;
  p.y += sin(uTime * 0.3 + aSeed * 6.2831) * 0.12;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aScale * 26.0 * uPixelRatio / -mv.z;
  vAlpha = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 1.4 + aSeed * 40.0));
  vSeed = aSeed;
}
`;

const pointsFragment = /* glsl */ `
varying float vAlpha;
varying float vSeed;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float strength = smoothstep(0.5, 0.0, d);
  vec3 col = mix(vec3(0.85, 0.55, 1.0), vec3(0.55, 0.85, 1.0), step(0.6, vSeed));
  gl_FragColor = vec4(col, strength * strength * vAlpha * 0.8);
}
`;

interface SceneProps {
  scroll?: MotionValue<number>;
  animate: boolean;
}

const usePointer = () => {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return pointer;
};

const Blob: React.FC<SceneProps> = ({ scroll, animate }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);
  const pointer = usePointer();
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDistort: { value: 0.24 },
      uFrequency: { value: 0.95 },
    }),
    []
  );

  useFrame((_, delta) => {
    const dt = Math.min(delta, 1 / 30);
    if (animate) uniforms.uTime.value += dt;
    const s = scroll?.get() ?? 0;

    // Distortion swells slightly with pointer distance from centre and with scroll
    const energy = Math.hypot(pointer.current.x, pointer.current.y);
    uniforms.uDistort.value = THREE.MathUtils.damp(uniforms.uDistort.value, 0.2 + energy * 0.1 + s * 0.3, 2.5, dt);

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.current.x * 0.5, 3, dt);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.current.y * 0.35, 3, dt);
      // On portrait screens the heading sits high, so lift the orb to sit behind it
      const portrait = viewport.aspect < 1;
      const baseY = portrait ? viewport.height * 0.2 : 0.15;
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, baseY + s * 1.6, 6, dt);
      const scale = (portrait ? Math.min(0.75, viewport.width / 3.6) : Math.min(1, viewport.width / 7)) * (1 + s * 0.35);
      group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, scale, 4, dt));
    }
    if (mesh.current && animate) {
      mesh.current.rotation.z += dt * 0.05;
      mesh.current.rotation.y += dt * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.3, 48]} />
        <shaderMaterial vertexShader={blobVertex} fragmentShader={blobFragment} uniforms={uniforms} />
      </mesh>
    </group>
  );
};

const Particles: React.FC<SceneProps & { count: number }> = ({ count, scroll, animate }) => {
  const points = useRef<THREE.Points>(null);
  const pointer = usePointer();
  const { gl } = useThree();

  const [positions, scales, seeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const scl = new Float32Array(count);
    const sd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Distribute in a thick spherical shell around the orb
      const r = 2.4 + Math.pow(Math.random(), 0.6) * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 1.4;
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 1.5;
      scl[i] = 0.4 + Math.random() * 1.6;
      sd[i] = Math.random();
    }
    return [pos, scl, sd];
  }, [count]);

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) } }),
    [gl]
  );

  useFrame((_, delta) => {
    const dt = Math.min(delta, 1 / 30);
    if (animate) uniforms.uTime.value += dt;
    if (!points.current) return;
    const s = scroll?.get() ?? 0;
    if (animate) points.current.rotation.y += dt * 0.02;
    points.current.rotation.x = THREE.MathUtils.damp(points.current.rotation.x, -pointer.current.y * 0.12 + s * 0.4, 2, dt);
    points.current.position.x = THREE.MathUtils.damp(points.current.position.x, -pointer.current.x * 0.3, 2, dt);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={pointsVertex}
        fragmentShader={pointsFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const HeroScene: React.FC<{ scroll?: MotionValue<number> }> = ({ scroll }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const reducedMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const isSmall = useMemo(() => window.innerWidth < 768, []);

  // Stop rendering entirely once the hero is off-screen so the rest of the page stays smooth
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapper}
      className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
      style={{ opacity: ready ? 1 : 0 }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={visible ? 'always' : 'never'}
        onCreated={() => requestAnimationFrame(() => setReady(true))}
        style={{ pointerEvents: 'none' }}
      >
        <Blob scroll={scroll} animate={!reducedMotion} />
        <Particles count={isSmall ? 500 : 1200} scroll={scroll} animate={!reducedMotion} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
