'use client';

import { motion } from 'framer-motion';
import styles from './services.module.css';
import { Database, Code2, LineChart, Cpu, Layout, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'system-design',
      title: 'System Architecture & Design',
      icon: Database,
      desc: 'We architect highly scalable, fault-tolerant infrastructure. From microservices to serverless, we ensure your tech stack is future-proof and cost-effective.',
      perks: ['Scalability Planning', 'Database Modeling', 'Cloud Strategy']
    },
    {
      id: 'development',
      title: 'Full-Stack Development',
      icon: Code2,
      desc: 'Writing clean, testable, and robust code. We bring systems to life using modern frameworks and standard-defining engineering practices.',
      perks: ['Frontend Mastery', 'Secure APIs', 'Performance Opt']
    },
    {
      id: 'consulting',
      title: 'Tech Consulting',
      icon: LineChart,
      desc: 'Strategic guidance to align your technical vision with business goals. We audit, advise, and help you pivot towards digital excellence.',
      perks: ['Tech Audits', 'Architecture Review', 'Team Augmentation']
    },
    {
      id: 'mobile',
      title: 'Mobile Solutions',
      icon: Smartphone,
      desc: 'Native and cross-platform applications that deliver premium experiences in the palms of your users across iOS and Android.',
      perks: ['React Native', 'Swift / Kotlin', 'Responsive UI']
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Cpu,
      desc: 'Integrating advanced predictive models and generative AI to automate workflows and unlock new possibilities within your organization.',
      perks: ['Data Pipelines', 'Model Training', 'LLM Integration']
    },
    {
      id: 'ui-ux',
      title: 'Premium UI/UX Design',
      icon: Layout,
      desc: 'Crafting visually stunning, user-centric interfaces. A seamless blend of aesthetics and usability that guarantees high engagement.',
      perks: ['Wireframing', 'Prototyping', 'Design Systems']
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <header className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.headerContent}
          >
            <h1>Our <span className="text-gradient">Capabilities</span></h1>
            <p>End-to-end software solutions engineered for scale and aesthetic brilliance.</p>
          </motion.div>
        </div>
      </header>

      <section className={styles.servicesList_Section}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.serviceCardWrapper}
              >
                <div className={`${styles.serviceCard} glass-panel`}>
                  <div className={styles.iconArea}>
                     <service.icon size={36} color="var(--primary)" />
                  </div>
                  <h3>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <ul className={styles.perkList}>
                    {service.perks.map((perk, i) => (
                      <li key={i}>
                        <div className={styles.perkDot}></div>{perk}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.hoverGlow}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
