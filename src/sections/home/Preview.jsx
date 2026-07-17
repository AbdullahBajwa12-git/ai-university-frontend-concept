import { useRef } from 'react';
import { Container } from '../../components/layout/Container';
import { useRevealAnimation } from '../../animations/useGsapAnimation';

export const Preview = () => {
  const sectionRef = useRef(null);

  // Use the existing reveal hook for scroll-triggered entrance
  useRevealAnimation(sectionRef);

  const steps = [
    {
      number: '01',
      title: 'Share your profile',
      description: 'Enter your academic background, interests, and budget preferences.',
    },
    {
      number: '02',
      title: 'Explore suitable options',
      description: 'Discover universities matched to your unique profile by our AI.',
    },
    {
      number: '03',
      title: 'Review clear guidance',
      description: 'Get actionable insights on entry requirements and application steps.',
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 lg:py-32 bg-bg-surface relative border-t border-border-subtle">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-editorial mb-6">How UniFinder Helps</h2>
          <p className="text-lg text-text-secondary">
            A simplified journey to discovering your ideal international study destination.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Optional connecting line for larger screens */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-border-subtle" aria-hidden="true" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-bg-base border border-border-subtle flex items-center justify-center text-accent font-editorial text-xl mb-6 shadow-lg relative z-10 transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-bg-surface-hover">
                {step.number}
              </div>
              <h3 className="text-xl font-medium mb-3 text-text-primary">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
