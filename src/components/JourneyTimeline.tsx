'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Lightbulb, Code2, Rocket, RefreshCcw } from 'lucide-react';
import styles from './JourneyTimeline.module.css';

const journeySteps = [
  {
    id: 1,
    title: 'Discovery & System Design',
    description: 'We listen to your vision and meticulously engineer the foundational architecture, ensuring infinite scalability and robust security.',
    icon: Lightbulb,
    color: 'var(--primary)',
    colorGlow: 'rgba(0, 240, 255, 0.3)',
  },
  {
    id: 2,
    title: 'Agile Development',
    description: 'Our elite engineers build in fast-paced iterative sprints, maintaining transparent communication throughout every phase.',
    icon: Code2,
    color: 'var(--secondary)',
    colorGlow: 'rgba(120, 0, 255, 0.3)',
  },
  {
    id: 3,
    title: 'Testing & Refinement',
    description: 'Rigorous peer reviews and automated QA logic guarantee zero-friction performance under the heaviest loads.',
    icon: RefreshCcw,
    color: '#00ffaa',
    colorGlow: 'rgba(0, 255, 170, 0.3)',
  },
  {
    id: 4,
    title: 'Deployment & Scaling',
    description: 'Your product goes live seamlessly, backed by continuous monitoring and proactive, hands-on scaling protocols.',
    icon: Rocket,
    color: '#ff6ef7',
    colorGlow: 'rgba(255, 110, 247, 0.3)',
  },
];

function JourneyCard({
  step,
  index,
}: {
  step: (typeof journeySteps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  // 3D rotation: cards start rotated and fly in flat
  const rotateX = useTransform(springProgress, [0, 1], [55, 0]);
  const rotateY = useTransform(springProgress, [0, 1], [index % 2 === 0 ? -25 : 25, 0]);
  const opacity = useTransform(springProgress, [0, 0.6], [0, 1]);
  const translateZ = useTransform(springProgress, [0, 1], [-200, 0]);
  const scale = useTransform(springProgress, [0, 1], [0.7, 1]);

  return (
    <div ref={ref} className={`${styles.cardRow} ${index % 2 === 0 ? styles.cardLeft : styles.cardRight}`}>
      {/* 3D Card */}
      <motion.div
        className={`${styles.card3D} glass-panel`}
        style={{
          rotateX,
          rotateY,
          opacity,
          translateZ,
          scale,
          borderColor: step.color,
          boxShadow: `0 0 30px ${step.colorGlow}, 0 30px 60px rgba(0,0,0,0.5)`,
        }}
      >
        <div className={styles.cardHeader} style={{ borderBottomColor: step.color }}>
          <motion.div
            className={styles.iconCircle}
            style={{ background: step.color, boxShadow: `0 0 20px ${step.colorGlow}` }}
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <step.icon size={22} color="#000" strokeWidth={2.5} />
          </motion.div>
          <span className={styles.stepBadge} style={{ color: step.color }}>Phase 0{step.id}</span>
        </div>

        <div className={styles.cardBody}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>

        {/* Shimmer reflection */}
        <div className={styles.shimmer} />
      </motion.div>

      {/* Connector line to center */}
      <motion.div
        className={styles.connector}
        style={{
          background: step.color,
          boxShadow: `0 0 10px ${step.colorGlow}`,
          originX: index % 2 === 0 ? 1 : 0,
          scaleX: springProgress,
        }}
      />
    </div>
  );
}

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const springProg = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const lineHeight = useTransform(springProg, [0, 1], ['0%', '100%']);
  const lineGlow = useTransform(springProg, [0, 1], ['0px', '20px']);

  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionHeading}>
        <h2>Our <span className="text-gradient">Process</span></h2>
        <p>Engineering excellence through a proven, battle-tested workflow</p>
      </div>

      <div className={styles.scene} ref={containerRef}>
        {/* Central spine track */}
        <div className={styles.spineTrack} />

        {/* Animated glowing spine fill */}
        <motion.div
          className={styles.spineFill}
          style={{
            height: lineHeight,
            boxShadow: useTransform(lineGlow, (g) => `0 0 ${g} var(--primary)`),
          }}
        />

        {/* Cards */}
        <div className={styles.cards}>
          {journeySteps.map((step, index) => (
            <JourneyCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
