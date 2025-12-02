'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LazyLoad from './components/LazyLoad';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LazyLoad>
          <Features />
        </LazyLoad>
        <LazyLoad>
          <Pricing />
        </LazyLoad>
        <LazyLoad>
          <Testimonials />
        </LazyLoad>
        <LazyLoad>
          <Comparison />
        </LazyLoad>
        <LazyLoad>
          <FAQ />
        </LazyLoad>
        <LazyLoad>
          <Contact />
        </LazyLoad>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
