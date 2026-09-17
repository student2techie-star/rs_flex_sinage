import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const subtextRef = useRef(null);
  const btnsRef = useRef(null);
  const animContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(containerRef.current, { opacity: 1, duration: 0.1 })
      .fromTo([textRef1.current, textRef2.current, textRef3.current], 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
      )
      .fromTo(subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(btnsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo('.panel-layer', 
        { z: -500, opacity: 0, rotationY: 45, rotationX: 20 },
        { z: (i) => i * 80, opacity: 1, rotationY: -15, rotationX: 10, duration: 1.5, stagger: 0.2, ease: "power3.out" },
        "-=1"
      );

    // Particles/Sparks animation
    gsap.utils.toArray('.spark').forEach((spark) => {
      gsap.fromTo(spark, 
        { 
          y: 'random(-50, 150)', 
          x: 'random(-100, 100)', 
          opacity: 0,
          scale: 'random(0.2, 1)' 
        },
        { 
          y: '-=150', 
          x: 'random(-150, 150)',
          opacity: 'random(0.3, 1)',
          duration: 'random(2, 4)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 'random(0, 2)'
        }
      );
    });

    // Continuous floating animation
    gsap.to('.panel-container', {
      y: -20,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Parallax effect on scroll
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const handleMouseMove = (e) => {
    if (!animContainerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize coordinates from -1 to 1
    const xPos = (clientX / innerWidth - 0.5) * 2;
    const yPos = (clientY / innerHeight - 0.5) * 2;
    
    // Animate the container holding the panels
    gsap.to('.panel-container', {
      rotationY: xPos * 25 - 15,
      rotationX: -yPos * 25 + 10,
      duration: 1.5,
      ease: 'power2.out'
    });
  };

  return (
    <section className="hero" ref={containerRef} style={{ opacity: 0 }} onMouseMove={handleMouseMove}>
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-left">
          
          {/* SEO Optimized H1 - Visually Hidden */}
          <h1 className="sr-only">Best Flex Printing & Custom LED Sign Boards in Tiruppur - RS Flex & Signage</h1>

          <div className="hero-text-wrapper" aria-hidden="true">
            <div className="overflow-hidden">
              <div className="heading-mega" ref={textRef1}>WE MAKE</div>
            </div>
            <div className="overflow-hidden">
              <div className="heading-mega" ref={textRef2}>YOUR BRAND</div>
            </div>
            <div className="overflow-hidden">
              <div className="heading-mega text-accent" ref={textRef3}>VISIBLE.</div>
            </div>
          </div>
          
          <p className="hero-subtext" ref={subtextRef}>
            Premium flex printing, LED signage, ACP elevations, UV printing and custom branding solutions in Tiruppur.
          </p>
          
          <div className="hero-btns" ref={btnsRef}>
            <a href="#work" className="btn btn-primary">
              VIEW OUR WORK <ArrowRight size={20} className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-outline">
              GET A QUOTE
            </a>
          </div>
        </div>

        <div className="hero-right" ref={animContainerRef}>
          <div className="composition-3d">
            {/* Spark particles */}
            {[...Array(15)].map((_, i) => (
              <div key={`spark-${i}`} className="spark"></div>
            ))}
            
            <div className="panel-container">
              {/* Laser beam effect behind panels */}
              <div className="laser-beam laser-1"></div>
              <div className="laser-beam laser-2"></div>

              {/* Layer 1: ACP Base Board */}
              <div className="panel-layer layer-base"></div>
              
              {/* Layer 2: Glowing LED Core */}
              <div className="panel-layer layer-led"></div>
              
              {/* Layer 3: Acrylic Face with engraved branding */}
              <div className="panel-layer layer-acrylic">
                <div className="acrylic-text-wrapper">
                  <span className="rs-text">RS</span>
                  <span className="flex-text">FLEX</span>
                </div>
              </div>
            </div>
            <div className="ambient-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
