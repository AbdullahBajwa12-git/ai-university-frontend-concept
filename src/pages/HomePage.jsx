import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../animations/gsapSetup';
import { useRevealAnimation } from '../animations/useGsapAnimation';

const HomePage = () => {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  // Hero entrance animation
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(headingRef.current, 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    ).fromTo('.hero-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
      "-=0.6"
    );
  }, { scope: heroRef });

  // Scroll reveal animation for the second section
  useRevealAnimation(sectionRef);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto z-10">
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white">
            UniFinder Frontend Concept
          </h1>
          <p className="hero-text text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            A modern, performant, and animation-ready foundation for exploring global education opportunities. Built with React, GSAP, and Tailwind CSS.
          </p>
          <div className="hero-text flex gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
              Explore Programs
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-all duration-300 border border-slate-700 hover:border-slate-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Second Section for Scroll Test */}
      <section id="about" ref={sectionRef} className="min-h-[80vh] flex items-center justify-center bg-slate-950/50 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center border border-slate-800 rounded-3xl p-12 bg-slate-900/50 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Smooth Scrolling Enabled</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            This section demonstrates Lenis smooth scrolling combined with GSAP ScrollTrigger. As you scroll down, this box smoothly reveals itself, ensuring an engaging user experience without being overwhelming.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-800/50">
              <div className="text-blue-400 font-bold text-xl mb-2">01</div>
              <h3 className="text-white font-medium mb-2">Performant</h3>
              <p className="text-sm text-slate-400">Optimized animations running on the compositor thread.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50">
              <div className="text-blue-400 font-bold text-xl mb-2">02</div>
              <h3 className="text-white font-medium mb-2">Accessible</h3>
              <p className="text-sm text-slate-400">Respects user preferences for reduced motion automatically.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50">
              <div className="text-blue-400 font-bold text-xl mb-2">03</div>
              <h3 className="text-white font-medium mb-2">Responsive</h3>
              <p className="text-sm text-slate-400">Fluid layouts that adapt gracefully to any screen size.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer to show scrolling continues */}
      <div className="h-[50vh]"></div>
    </div>
  );
};

export default HomePage;
