'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { usePathname } from 'next/navigation';
import * as THREE from 'three';

// Free public Soldier model from Three.js examples — fully rigged human character
const MODEL_URL = 'https://threejs.org/examples/models/gltf/Soldier.glb';

// Speech lines matched per page route
const pageSpeech: Record<string, { animation: string; lines: string[] }> = {
  '/': {
    animation: 'Walk',
    lines: [
      'Welcome to KalaGoon! 👋',
      'We build extraordinary software.',
      'Explore our capabilities below!',
    ],
  },
  '/about': {
    animation: 'Run',
    lines: [
      'This is who we are!',
      'Visionary engineers at heart.',
      'We build the future, together.',
    ],
  },
  '/services': {
    animation: 'Walk',
    lines: [
      'Our full suite of services.',
      'From System Design to Deployment.',
      'End-to-end engineering excellence!',
    ],
  },
  '/contact': {
    animation: 'Idle',
    lines: [
      'Let\'s connect!',
      'Reach out anytime.',
      'We respond within 24 hours.',
    ],
  },
};

function HumanCharacter({ animationName }: { animationName: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions, names } = useAnimations(animations, groupRef);

  useEffect(() => {
    // Fade out all playing actions then fade in target
    Object.values(actions).forEach((a) => a?.fadeOut(0.5));
    const target = animationName && names.includes(animationName) ? animationName : names[0];
    if (actions[target]) {
      actions[target]!
        .reset()
        .setEffectiveTimeScale(0.6)
        .fadeIn(0.5)
        .play();
    }
  }, [animationName, actions, names]);

  // Gentle side-to-side sway
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2 - 0.3;
    }
  });

  return (
    // rotation-y of Math.PI flips the character to face the camera
    <group ref={groupRef} scale={1.4} position={[0, -1.8, 0]} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// Cycling speech bubble above the character
function SpeechBubble({ lines }: { lines: string[] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let idx = 0;
    setLineIndex(0);
    setVisible(true);

    const interval = setInterval(() => {
      idx = (idx + 1) % lines.length;
      setLineIndex(idx);
    }, 2800);

    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        background: 'rgba(10, 10, 10, 0.88)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--primary)',
        borderRadius: '12px',
        padding: '0.6rem 0.9rem',
        marginBottom: '8px',
        color: '#fff',
        fontSize: '0.75rem',
        lineHeight: 1.5,
        fontFamily: 'var(--font-body)',
        boxShadow: '0 0 20px rgba(0,240,255,0.25)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
        textAlign: 'center',
      }}
    >
      {lines[lineIndex]}
      {/* Triangle pointer pointing DOWN toward the character */}
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '9px solid var(--primary)',
        }}
      />
    </div>
  );
}

export default function MascotCharacter() {
  const pathname = usePathname();
  const pageData = pageSpeech[pathname] ?? pageSpeech['/'];
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0px',
        right: '10px',
        width: expanded ? '200px' : '150px',
        zIndex: 9000,
        transition: 'width 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={() => setExpanded((e) => !e)}
      title="Click to toggle — KalaBot, your AI Guide"
    >
      {/* Speech bubble sits ABOVE the canvas, inside the same container */}
      <SpeechBubble lines={pageData.lines} />

      {/* 3D Canvas */}
      <div style={{
        width: '100%',
        height: expanded ? '280px' : '200px',
        transition: 'height 0.3s ease',
        filter: 'drop-shadow(0 0 16px rgba(0,240,255,0.25))',
      }}>
        <Canvas
          camera={{ position: [0, 0.8, 4.5], fov: 42 }}
          gl={{ alpha: true, antialias: true }}
          shadows
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 6, 4]} intensity={1.4} castShadow />
          <pointLight position={[-3, 3, 2]} intensity={0.6} color="#7800ff" />
          <pointLight position={[1, 0, 3]} intensity={0.7} color="#00f0ff" />
          <HumanCharacter animationName={pageData.animation} />
        </Canvas>
      </div>

      {/* Name tag */}
      <div
        style={{
          color: 'var(--primary)',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textShadow: '0 0 8px var(--primary-glow)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          paddingBottom: '4px',
        }}
      >
        KalaBot · Guide
      </div>
    </div>
  );
}

// Pre-load the model to avoid layout shifts
useGLTF.preload(MODEL_URL);
