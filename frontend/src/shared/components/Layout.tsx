import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SEO from './SEO';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <SEO
        title="CodeSprout - Master Coding Patterns & Crack DSA Interviews"
        description="Master coding interview patterns with 1000+ curated DSA questions, pattern-based cheat sheets, step-by-step visualizer, and progress tracking."
        keywords={['coding patterns', 'DSA', 'interview prep', 'FAANG', 'system design']}
      />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
