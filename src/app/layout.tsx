import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import MascotCharacter from '@/components/MascotCharacter';

export const metadata: Metadata = {
  title: 'KalaGoon Software Solutions Pvt. Ltd.',
  description: 'Premium software solutions, from system design to development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <MascotCharacter />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
