"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP (() => {
    gsap.to('.incepto', {
      opacity: 1,
      delay: 3,
      duration: 5
    })
  }) 
  return (
    <div className="w-[100vw] flex flex-col items-center justify-center mt-24">
      <h1 className='text-[50px] opacity-0 sm:text-[80px] md:text-[100px] lg:text-[160px] leading-tight h-[20vh] max-sm:h-[10vh] text-slate-300 incepto'>INCEPTO</h1>
      <div className="max:md:w-[100]">
        <video src="/assets/logoanimate.mp4" className="pointer-events-none w-full" autoPlay muted playsInline={true} key="logoanimate">
          {/* <source src="/assets/logoanimate" type="mp4" /> */}
        </video>
      </div>
    </div>
  )
}

export default About