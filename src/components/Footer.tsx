import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '4rem 0 2rem',
      marginTop: 'auto',
      background: 'rgba(5,5,5,0.5)',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* Brand Info */}
        <div>
          <Link href="/" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 800,
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            Kala<span style={{ color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>Goon</span>
          </Link>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Engineering the future through premium software solutions. System design to product release—we do it all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>About Us</Link></li>
            <li><Link href="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Services</Link></li>
            <li><Link href="/careers" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Careers</Link></li>
            <li><Link href="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1.1rem' }}>Connect</h4>
          <address style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'normal', lineHeight: 1.6 }}>
            KalaGoon Software Solutions Pvt. Ltd.<br/>
            Global Headquarters<br/>
            prathmeshdhote@gmail.com<br/>
            9529169879
          </address>
        </div>
      </div>

      <div className="container" style={{
        borderTop: '1px solid var(--glass-border)',
        paddingTop: '2rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.8rem'
      }}>
        &copy; {new Date().getFullYear()} KalaGoon Software Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
