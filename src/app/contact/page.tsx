'use client';

import { motion } from 'framer-motion';
import styles from './contact.module.css';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out. Our engineering team will get back to you shortly.',
      icon: 'success',
      confirmButtonText: 'Excellent',
      background: 'rgba(20, 20, 20, 0.95)',
      color: '#fff',
      confirmButtonColor: 'var(--primary)',
      backdrop: 'rgba(0,0,0,0.8)'
    });
  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Let&apos;s <span className="text-gradient">Connect</span></h1>
            <p className={styles.subtitle}>
              Ready to engineer your future? Reach out to us for consulting, system design, or full-scale development.
            </p>
          </motion.div>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={`container ${styles.gridContainer}`}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.infoArea}
          >
            <h2>Contact Information</h2>
            <p className={styles.desc}>
              Our team of elite engineers is ready to analyze your requirements and propose a foolproof architecture.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <MapPin size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4>Global Headquarters</h4>
                  <p>KalaGoon Software Solutions Pvt. Ltd.<br />Cyber Hub, Tech District, 10010</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>prathmeshdhote@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Phone size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>9529169879</p>
                </div>
              </div>
            </div>

            <div className={styles.glowBox}></div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${styles.formArea} glass-panel`}
          >
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@company.com" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Project Inquiry" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about your project or needs..." required></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
