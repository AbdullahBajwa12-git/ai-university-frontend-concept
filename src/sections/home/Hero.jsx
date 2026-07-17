import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../animations/gsapSetup';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/ui/Button';

export const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate eyebrow
    tl.fromTo('.hero-eyebrow',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Animate heading lines (staggered)
    tl.fromTo('.hero-heading-line',
      { opacity: 0, y: 40, rotateX: -20 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.2, ease: 'power3.out' },
      '-=0.4'
    );

    // Animate paragraph
    tl.fromTo('.hero-paragraph',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );

    // Animate buttons
    tl.fromTo('.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    );

    // Animate visual elements
    tl.fromTo('.hero-visual-el',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, stagger: 0.1, ease: 'elastic.out(1, 0.7)' },
      '-=1'
    );

    // Continuous subtle floating animation for floating elements
    gsap.to('.hero-float', {
      y: '-15px',
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: { amount: 1.5, from: 'random' }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />

      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">

        {/* Content Side */}
        <div className="flex flex-col items-start max-w-2xl pt-12 lg:pt-0">
          <div className="hero-eyebrow inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-border-subtle bg-bg-surface text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span>AI-assisted university discovery</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-editorial font-medium leading-[1.1] tracking-tight mb-6 text-balance perspective-[1000px]">
            <div className="hero-heading-line origin-bottom">Find the right</div>
            <div className="hero-heading-line origin-bottom">university path</div>
            <div className="hero-heading-line origin-bottom text-text-secondary">for your future.</div>
          </h1>

          <p className="hero-paragraph text-lg md:text-xl text-text-secondary mb-10 max-w-xl text-balance leading-relaxed">
            Explore curated study destinations and receive guidance based on your academic profile, goals and preferences.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="hero-cta">
              Start Exploring
            </Button>
            <Button variant="secondary" size="lg" className="hero-cta">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Visual Side: Original Geometric Concept */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end hidden sm:flex" aria-hidden="true">
          {/* Main central element */}
          <div className="hero-visual-el absolute w-64 h-64 border border-border-subtle rounded-full flex items-center justify-center bg-bg-base/50 backdrop-blur-sm z-10">
             <div className="w-48 h-48 border border-border-focus/30 rounded-full flex items-center justify-center">
               <div className="w-32 h-32 bg-accent/10 rounded-full blur-xl" />
             </div>
          </div>

          {/* Orbital path 1 */}
          <div className="hero-visual-el absolute w-[120%] h-[120%] border border-border-subtle/50 rounded-full -rotate-12" />

          {/* Orbital path 2 */}
          <div className="hero-visual-el absolute w-[90%] h-[150%] border border-border-subtle/30 rounded-full rotate-45" />

          {/* Floating Destination Labels */}
          <div className="hero-float absolute top-[15%] left-[10%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-blue-400" />
             <span className="text-sm font-medium">United Kingdom</span>
          </div>

          <div className="hero-float absolute bottom-[25%] left-[0%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-emerald-400" />
             <span className="text-sm font-medium">Canada</span>
          </div>

          <div className="hero-float absolute top-[40%] right-[5%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-accent" />
             <span className="text-sm font-medium">Australia</span>
          </div>

          <div className="hero-float absolute bottom-[10%] right-[20%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-rose-400" />
             <span className="text-sm font-medium">United States</span>
          </div>

          {/* Connection Lines */}
          <svg className="hero-visual-el absolute inset-0 w-full h-full z-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
             <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
             <line x1="80%" y1="45%" x2="50%" y2="50%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
             <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

      </Container>
    </section>
  );
};
