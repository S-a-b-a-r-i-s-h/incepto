"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import Link from "next/link";

const About = () => {
  useGSAP (() => {
    gsap.to('.incepto', {
      opacity: 1,
      delay: 3,
      duration: 5
    })
  }) 
  return (
    <div className="w-[100vw]  flex flex-col items-center justify-center ">
      <div className=" max-md:w-[100vw] w-[40vw] flex">
        <video src="/assets/logoanimate.mp4" className="pointer-events-none w-[85%] mr-6 max-lg:w-[90vw]"  autoPlay muted playsInline={true} key="logoanimate">
          {/* <source src="/assets/logoanimate" type="mp4" /> */}
        </video>
        {/* <div className="border-2 border-red-500 w-[50vw]"></div> */}
      </div>
      <h1 className='text-[50px] opacity-0 sm:text-[80px] md:text-[100px] lg:text-[160px] leading-tight h-[20vh] max-sm:h-[10vh] bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 bg-clip-text text-transparent incepto'>INCEPTO</h1>
      <p className="text-slate-300 text-xl font-bold">09 - 10 April, 2024</p>
      <p className="text-slate-300 font-black text-2xl max-md:text-lg mb-4">College of Engineering Perumon</p>
      <Link href='mailto:inceptohack@gmail.com' className="text-2xl gradient2 underline decoration-[#06B6D4]">
        Be a sponser
      </Link>
      <Button />
    </div>
  )
}

export default About