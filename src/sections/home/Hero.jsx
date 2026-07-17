import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../animations/gsapSetup';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/ui/Button';

export const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      isMobile: "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
      isReduced: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { isMobile, isReduced } = context.conditions;

      const tl = gsap.timeline({ delay: 0.2 });

      // Animate eyebrow
      tl.fromTo('.hero-eyebrow',
        { opacity: 0, y: isReduced ? 0 : 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // Animate heading lines (staggered)
      tl.fromTo('.hero-heading-line',
        { opacity: 0, y: isReduced ? 0 : (isMobile ? 20 : 30), rotateX: isReduced ? 0 : -10 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.15, ease: 'power3.out' },
        '-=0.4'
      );

      // Animate paragraph
      tl.fromTo('.hero-paragraph',
        { opacity: 0, y: isReduced ? 0 : 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

      // Animate buttons
      tl.fromTo('.hero-cta',
        { opacity: 0, y: isReduced ? 0 : 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      );

      // Animate visual elements
      if (!isReduced) {
        if (isMobile) {
          // Safe JS initialization to hide elements before timeline runs
          gsap.set('.mobile-orbit-ring', { opacity: 0, scale: 0.9 });
          gsap.set('.mobile-label', { opacity: 0, y: 10 });
          gsap.set('.mobile-dest-node', { opacity: 0, y: 16, scale: 0.96 });
          gsap.set('.mobile-path', { opacity: 0 });
          gsap.set('.mobile-profile-node', { opacity: 0, y: 16, scale: 0.94 });
        }

        tl.fromTo('.hero-visual-el',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out' },
          '-=0.6'
        );

        if (isMobile) {
          tl.to('.mobile-orbit-ring',
            { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
            '-=0.4'
          );

          tl.to('.mobile-label',
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            '-=0.4'
          );

          tl.to('.mobile-dest-node',
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
            '-=0.2'
          );

          tl.to('.mobile-path',
            { opacity: 0.45, duration: 0.5, ease: 'power2.out' },
            '-=0.3'
          );

          tl.to('.mobile-profile-node',
            { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power2.out' },
            '-=0.1'
          );
        }

        // Continuous subtle floating animation for floating elements
        gsap.to('.hero-float', {
          y: isMobile ? '-8px' : '-15px',
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          stagger: { amount: 1.5, from: 'random' }
        });
      } else {
        // Just fade in visuals if reduced motion
        tl.fromTo('.hero-visual-el',
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.5'
        );

        // Show the mobile inner nodes immediately without animating
        if (isMobile) {
          gsap.set([
            '.mobile-orbit-ring', '.mobile-label', '.mobile-dest-node', '.mobile-profile-node'
          ], { opacity: 1, y: 0, scale: 1 });
          gsap.set('.mobile-path', { opacity: 0.45 });
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
      {/* Abstract Background Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />

      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center z-10">

        {/* Content Side */}
        <div className="flex flex-col items-start w-full max-w-2xl mx-auto lg:mx-0">
          <div className="hero-eyebrow inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-border-subtle bg-bg-surface text-accent text-sm font-medium mb-5 lg:mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span>AI-assisted university discovery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-editorial font-medium leading-[1.05] tracking-tight mb-5 text-balance perspective-[1000px]">
            <div className="hero-heading-line origin-bottom">Find the right</div>
            <div className="hero-heading-line origin-bottom">university path</div>
            <div className="hero-heading-line origin-bottom text-text-secondary">for your future.</div>
          </h1>

          <p className="hero-paragraph text-base sm:text-lg md:text-xl text-text-secondary mb-8 max-w-xl text-balance leading-relaxed">
            Explore curated study destinations and receive guidance based on your academic profile, goals and preferences.
          </p>

          <div className="flex flex-wrap gap-4 mb-4 lg:mb-0">
            <Button variant="primary" size="lg" className="hero-cta">
              Start Exploring
            </Button>
            <Button variant="secondary" size="lg" className="hero-cta">
              See How It Works
            </Button>
          </div>

          {/* Mobile Visual (visible only on small screens) */}
          <div className="hero-visual-el w-full relative h-[280px] flex lg:hidden items-center justify-center mt-8 border border-border-subtle/30 rounded-2xl bg-bg-surface/30 backdrop-blur-sm overflow-hidden" aria-hidden="true">
            {/* Orbit rings */}
            <div className="mobile-orbit-ring absolute w-[240px] h-[240px] border border-border-subtle/40 rounded-full" />
            <div className="mobile-orbit-ring absolute w-[160px] h-[160px] border border-border-subtle/60 rounded-full" />

            {/* Label */}
            <div className="mobile-label absolute top-[8%] px-3 py-1 bg-bg-surface/80 border border-border-subtle rounded-full z-10 backdrop-blur-sm">
              <span className="text-[10px] text-text-secondary font-medium uppercase tracking-wider">Recommended Paths</span>
            </div>

            {/* Connection Lines */}
            <svg className="mobile-path absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
              <line x1="20%" y1="28%" x2="50%" y2="58%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="80%" y1="32%" x2="50%" y2="58%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="18%" y1="70%" x2="50%" y2="58%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="82%" y1="75%" x2="50%" y2="58%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="3 3" />
            </svg>

            {/* Central Node */}
            <div className="mobile-profile-node absolute top-[58%] -translate-y-1/2 flex flex-col items-center justify-center z-10">
              <div className="w-24 h-24 border border-border-focus/40 rounded-full flex flex-col items-center justify-center relative bg-bg-surface/90 shadow-lg">
                <div className="absolute inset-0 bg-accent/5 rounded-full blur-md" />
                <span className="text-accent text-[8px] font-bold tracking-widest uppercase mb-0.5">Analysis</span>
                <span className="text-xs font-editorial text-text-primary font-medium">Your Profile</span>
              </div>
            </div>

            {/* Destinations */}
            {/* UK: upper left */}
            <div className="hero-float mobile-dest-node absolute top-[25%] left-[6%] sm:left-[12%] px-2 py-1 bg-bg-surface border border-border-subtle rounded-md shadow z-20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-dest-1" />
              <span className="text-[10px] font-medium text-text-primary">United Kingdom</span>
            </div>

            {/* Australia: upper right */}
            <div className="hero-float mobile-dest-node absolute top-[28%] right-[6%] sm:right-[12%] px-2 py-1 bg-bg-surface border border-border-subtle rounded-md shadow z-20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-medium text-text-primary">Australia</span>
            </div>

            {/* Canada: lower left */}
            <div className="hero-float mobile-dest-node absolute top-[66%] left-[4%] sm:left-[10%] px-2 py-1 bg-bg-surface border border-border-subtle rounded-md shadow z-20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-dest-2" />
              <span className="text-[10px] font-medium text-text-primary">Canada</span>
            </div>

            {/* USA: lower right */}
            <div className="hero-float mobile-dest-node absolute top-[72%] right-[4%] sm:right-[10%] px-2 py-1 bg-bg-surface border border-border-subtle rounded-md shadow z-20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-dest-3" />
              <span className="text-[10px] font-medium text-text-primary">United States</span>
            </div>

          </div>
        </div>

        {/* Visual Side: Desktop Geometric Concept */}
        <div className="relative h-[450px] md:h-[500px] lg:h-[550px] max-h-[65vh] w-full flex items-center justify-center lg:justify-end hidden lg:flex" aria-hidden="true">
          {/* Main central element */}
          <div className="hero-visual-el absolute w-64 h-64 border border-border-subtle rounded-full flex flex-col items-center justify-center bg-bg-base/60 backdrop-blur-md z-10 shadow-2xl">
            <div className="w-48 h-48 border border-border-focus/40 rounded-full flex flex-col items-center justify-center relative bg-bg-surface/50">
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase mb-1">Analysis</span>
              <span className="text-lg font-editorial text-text-primary font-medium">Your Profile</span>
            </div>
          </div>

          <div className="hero-visual-el absolute top-[10%] right-[30%] px-3 py-1 bg-bg-surface/80 border border-border-subtle rounded-full z-10 backdrop-blur-sm">
            <span className="text-xs text-text-secondary font-medium uppercase tracking-wider">Recommended Paths</span>
          </div>

          {/* Orbital path 1 */}
          <div className="hero-visual-el absolute w-[120%] h-[120%] border border-border-subtle/50 rounded-full -rotate-12" />

          {/* Orbital path 2 */}
          <div className="hero-visual-el absolute w-[90%] h-[150%] border border-border-subtle/30 rounded-full rotate-45" />

          {/* Floating Destination Labels */}
          <div className="hero-float absolute top-[15%] left-[10%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-dest-1" />
            <span className="text-sm font-medium text-text-primary">United Kingdom</span>
          </div>

          <div className="hero-float absolute bottom-[25%] left-[0%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-dest-2" />
            <span className="text-sm font-medium text-text-primary">Canada</span>
          </div>

          <div className="hero-float absolute top-[35%] right-[0%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-text-primary">Australia</span>
          </div>

          <div className="hero-float absolute bottom-[15%] right-[20%] px-4 py-2 bg-bg-surface border border-border-subtle rounded-lg shadow-xl shadow-black/50 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-dest-3" />
            <span className="text-sm font-medium text-text-primary">United States</span>
          </div>

          {/* Connection Lines */}
          <svg className="hero-visual-el absolute inset-0 w-full h-full z-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="90%" y1="40%" x2="50%" y2="50%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

      </Container>
    </section>
  );
};
