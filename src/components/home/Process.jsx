import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: '01', title: 'IDEA' },
  { id: '02', title: 'DESIGN' },
  { id: '03', title: 'PRINT' },
  { id: '04', title: 'FABRICATE' },
  { id: '05', title: 'INSTALL' }
];

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const processItems = gsap.utils.toArray('.process-step');
    
    gsap.fromTo(processItems, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section className="process section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="heading-section">
          FROM IDEA<br/>
          <span className="text-accent">TO IMPACT.</span>
        </h2>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={step.id}>
              <div className="process-number">{step.id}</div>
              <h3 className="process-title">{step.title}</h3>
              {index !== steps.length - 1 && <div className="process-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
