import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Palette, Zap, MapPin } from 'lucide-react';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: 'QUALITY',
    desc: 'Professional printing and signage finishes that last.'
  },
  {
    icon: <Palette size={40} />,
    title: 'CUSTOM DESIGN',
    desc: 'Solutions created around each business and brand identity.'
  },
  {
    icon: <Zap size={40} />,
    title: 'MODERN LOOK',
    desc: 'Contemporary signage and cutting-edge branding styles.'
  },
  {
    icon: <MapPin size={40} />,
    title: 'LOCAL SERVICE',
    desc: 'Serving businesses in Tiruppur and surrounding areas.'
  }
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.feature-card');
    
    gsap.fromTo(cards, 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        }
      }
    );
  }, []);

  return (
    <section className="why-us section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="heading-section text-center">
          WHY CHOOSE<br/>
          <span className="text-accent">RS FLEX & SIGNAGE.</span>
        </h2>
        
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card interactive" key={idx}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
