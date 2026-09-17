import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactCTA.css';

gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Simple reveal animation
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="contact-cta section-padding" ref={sectionRef}>
      <div className="container contact-container">
        <div className="contact-content" ref={textRef}>
          <h2 className="heading-mega">
            LET'S BUILD<br/>
            SOMETHING<br/>
            <span className="text-accent">VISIBLE.</span>
          </h2>
          
          <div className="contact-actions">
            <a href="tel:+919500390998" className="btn btn-primary btn-large">
              <Phone size={24} style={{ marginRight: '10px' }} /> CALL NOW
            </a>
            
            <a 
              href="https://wa.me/919500390998" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-large btn-whatsapp"
            >
              <MessageCircle size={24} style={{ marginRight: '10px' }} /> WHATSAPP
            </a>
            
            <a href="#quote" className="btn btn-outline btn-large">
              GET A QUOTE <ArrowRight size={24} className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
