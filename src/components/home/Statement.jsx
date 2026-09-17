import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Statement.css';

gsap.registerPlugin(ScrollTrigger);

const Statement = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const lines = gsap.utils.toArray('.statement-line');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1
      }
    });
    
    tl.fromTo(bgRef.current, 
      { opacity: 0, scale: 1.1 },
      { opacity: 0.3, scale: 1, duration: 2 }
    );
    
    lines.forEach((line, i) => {
      tl.fromTo(line, 
        { y: 50, filter: 'blur(10px)', opacity: 0 },
        { y: 0, filter: 'blur(0px)', opacity: 1, duration: 1 },
        i * 0.2
      );
      
      tl.to(line, 
        { x: i % 2 === 0 ? 30 : -30, duration: 2, ease: "none" },
        0
      );
    });

  }, []);

  return (
    <section className="statement section-padding" ref={containerRef}>
      <div className="statement-bg" ref={bgRef}></div>
      <div className="container" ref={textRef}>
        <div className="statement-content">
          <div className="statement-line">YOUR BRAND</div>
          <div className="statement-line text-accent">DESERVES</div>
          <div className="statement-line">TO BE SEEN.</div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
