'use client';

import { motion } from 'framer-motion';
import styles from './about.module.css';
import { Target, Zap, Users, Shield } from 'lucide-react';
import JourneyTimeline from '@/components/JourneyTimeline';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <h1>Our <span className="text-gradient">Mindset</span></h1>
            <p className={styles.subtitle}>
              We believe in creating digital artifacts that transcend mere functionality. At KalaGoon, every line of code is infused with purpose, every architecture designed with foresight.
            </p>
          </motion.div>
        </div>
      </div>

      <section className={styles.goalsSection}>
        <div className="container">
          <div className={styles.goalsGrid}>
            {[
              { icon: Target, title: 'Visionary Approach', desc: 'Predicting tomorrow’s technical challenges to build highly resilient systems today.' },
              { icon: Shield, title: 'Uncompromising Quality', desc: 'Rigorous testing and peer reviews ensure zero-friction performance under heavy loads.' },
              { icon: Zap, title: 'Agile Execution', desc: 'Iterative, fast-paced development cycles that respect your time-to-market constraints.' },
              { icon: Users, title: 'Client Partnership', desc: 'We don’t just work for you; we build the future alongside you.' },
            ].map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${styles.goalCard} glass-panel`}
              >
                <div className={styles.iconBox}>
                  <goal.icon size={28} color="var(--secondary)" />
                </div>
                <h3>{goal.title}</h3>
                <p>{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>The Brains Behind the <span className="text-gradient">Operation</span></h2>
            <p>A syndicate of elite software engineers and designers.</p>
          </motion.div>

          {/* Active Timeline tracking company process */}
          <JourneyTimeline />
        </div>
      </section>
    </div>
  );
}
