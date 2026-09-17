import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Marquee.css';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      // Slow continuous animation
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });

      // Change speed on scroll
      ScrollTrigger.create({
        trigger: marqueeRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          gsap.to(".marquee-content", {
            duration: 0.5,
            x: () => -self.progress * 200,
            ease: "power1.out",
            overwrite: "auto"
          });
          
          // Resume normal animation after scroll stops
          clearTimeout(window.marqueeTimeout);
          window.marqueeTimeout = setTimeout(() => {
            gsap.to(".marquee-content", {
              xPercent: -50,
              ease: "none",
              duration: 20,
              repeat: -1,
              overwrite: "auto"
            });
          }, 150);
        }
      });
    });
    
    return () => mm.revert();
  }, []);

  return (
    <section className="marquee-section" ref={marqueeRef}>
      <div className="marquee-container">
        <div className="marquee-content">
          <span>FLEX PRINTING • LED SIGNAGE • ACP ELEVATION • UV PRINTING • CUSTOM BRANDING • </span>
          <span>FLEX PRINTING • LED SIGNAGE • ACP ELEVATION • UV PRINTING • CUSTOM BRANDING • </span>
          <span>FLEX PRINTING • LED SIGNAGE • ACP ELEVATION • UV PRINTING • CUSTOM BRANDING • </span>
          <span>FLEX PRINTING • LED SIGNAGE • ACP ELEVATION • UV PRINTING • CUSTOM BRANDING • </span>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
