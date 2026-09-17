import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const spotlightRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    // High performance cursor tracking for the small dot
    const xSetCursor = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const ySetCursor = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });

    // High performance tracking for spotlight (hardware accelerated translate)
    const xSetSpotlight = gsap.quickTo(spotlightRef.current, "x", { duration: 0.4, ease: "power3" });
    const ySetSpotlight = gsap.quickTo(spotlightRef.current, "y", { duration: 0.4, ease: "power3" });

    // Center the elements around their x/y coordinates
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(spotlightRef.current, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      xSetCursor(clientX);
      ySetCursor(clientY);
      
      xSetSpotlight(clientX);
      ySetSpotlight(clientY);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        gsap.to(cursorRef.current, { scale: 2.5, backgroundColor: 'rgba(255,106,0,0.5)', duration: 0.3 });
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        gsap.to(cursorRef.current, { scale: 1, backgroundColor: 'var(--accent-color)', duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div className="custom-cursor-dot" ref={cursorRef}></div>
      <div 
        className="cursor-spotlight" 
        ref={spotlightRef}
      ></div>
    </>
  );
};

export default Cursor;
