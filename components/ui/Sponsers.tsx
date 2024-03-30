"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./sponsers.css";


function Sponsers() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("heads", {
        
    })
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "bottom bottom",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <div>
        <h1 className="heads text-white text-5xl text-bold">Our Sponsers</h1>
        <section className="scroll-section-outer">
        {/* The section up act just as a wrapper. If the trigger (below) is the
        first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
        the animation should alway be two separated refs */}
        <div ref={triggerRef} className="text-white">
            <div ref={sectionRef} className="scroll-section-inner text-5xl font-bold">
            <div className="scroll-section ">
                <h1>Section 1</h1>
            </div>
            <div className="scroll-section">
                <h1>Section 2</h1>
            </div>
            <div className="scroll-section">
                <h1>Section 3</h1>
            </div>
            <div className="scroll-section">
                <h1>Section 4</h1>
            </div>
            </div>
        </div>
        </section>
    </div>
  );
}

export default Sponsers;
