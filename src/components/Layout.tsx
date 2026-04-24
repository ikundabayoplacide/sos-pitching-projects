import type { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background-primary">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
