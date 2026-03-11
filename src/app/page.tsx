'use client';

import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, MonitorSmartphone, Server } from 'lucide-react';
import InfiniteMarquee from '@/components/InfiniteMarquee';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.glowBg}></div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={styles.heroTextSection}
          >
            <h1 className={styles.title}>
              Engineering the <span className="text-gradient">Future</span> of Business.
            </h1>
            <p className={styles.subtitle}>
              KalaGoon Software Solutions provides end-to-end software alchemy—from visionary system design to flawless product development. Elevating industry standards.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className="btn-primary">
                Partner With Us <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className={styles.heroVisualSection}
          >
            <div className={styles.abstractVisual}>
              <div className={styles.orb1}></div>
              <div className={styles.orb2}></div>
              <div className={`${styles.glassPanel} glass-panel`}>
                 <div className={styles.mockCode}>
                   <div className={styles.dotGroup}>
                     <div className={styles.dot} style={{ background: '#ff5f56' }}></div>
                     <div className={styles.dot} style={{ background: '#ffbd2e' }}></div>
                     <div className={styles.dot} style={{ background: '#27c93f' }}></div>
                   </div>
                   <pre>
                     <code>
                       <span style={{ color: '#c678dd' }}>const</span> kalaGoon = {'{'} <br/>
                       &nbsp;&nbsp;vision: <span style={{ color: '#98c379' }}>&quot;Extraordinary&quot;</span>,<br/>
                       &nbsp;&nbsp;quality: <span style={{ color: '#d19a66' }}>100</span>%,<br/>
                       &nbsp;&nbsp;designSystem: () =&gt; <span style={{ color: '#61afef' }}>execute</span>()<br/>
                       {'}'};<br/>
                       <span style={{ color: '#c678dd' }}>export</span> <span style={{ color: '#e5c07b' }}>default</span> kalaGoon;
                     </code>
                   </pre>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <InfiniteMarquee />

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Mastering The Digital Space</h2>
            <p className={styles.sectionDesc}>Our expertise spans across the entire product lifecycle.</p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {[
              { icon: Server, title: 'System Design', desc: 'Scalable, fault-tolerant architectures designed to future-proof your business.' },
              { icon: Code, title: 'Development', desc: 'Robust full-stack engineering ensuring pixel-perfect functionality and performance.' },
              { icon: MonitorSmartphone, title: 'UX/UI Excellence', desc: 'Aesthetic, responsive interfaces that captivate users across all devices.' }
            ].map((srv, idx) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={styles.serviceCard}
              >
                <div className={styles.iconWrapper}>
                  <srv.icon size={32} color="var(--primary)" />
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
