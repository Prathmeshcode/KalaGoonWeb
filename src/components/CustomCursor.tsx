'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the hovered element is interactive
      const isInteractive = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
      
      setIsPointer(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto'; // Reset on unmount
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          border: '2px solid var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          boxShadow: '0 0 10px var(--primary-glow)',
          zIndex: 9999,
          mixBlendMode: 'difference' // Added to contrast against backgrounds
        }}
      />
      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  );
}
