'use client';

import { motion } from 'framer-motion';
import styles from './marquee.module.css';

export default function InfiniteMarquee() {
  const clients = [
    "TechNova", "Starlight Systems", "Quantum Logic", 
    "Vertex Solutions", "Nexus Cyber", "Alpha Data", 
    "Omega Dynamics", "Pinnacle IT", "CyberFortress", "LogicWave"
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.fadeLeft}></div>
      <div className={styles.fadeRight}></div>
      
      <motion.div
        className={styles.marqueeTrack}
        animate={{ x: [0, -1000] }} // Arbitrary pixel length to smoothly scroll
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20, 
            ease: "linear"
          } 
        }}
      >
        {/* Double the array for seamless infinite looping */}
        {[...clients, ...clients].map((client, index) => (
          <div key={`${client}-${index}`} className={styles.clientItem}>
            <span>{client}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
