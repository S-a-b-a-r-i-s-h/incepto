"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const Timer = () => {
  const container = useRef(null);
  const exclamationRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom-=20%",
        toggleActions: "play pause resume reverse",
      },
    });

    tl.from("#hack-text", {
      opacity: 0,
      y: -100,
      duration: 0.5,
    })
      .to("#timer", {
        opacity: 1,
        duration: 4,
        delay: 0.5,
      })
      .to("#dot", {
        opacity: 1,
        duration: 0.5,
        repeat: -1,
        stagger: 0.5,
      });
    // .to("#free-reg", {
    //   rotation: 720,
    //   duration: 4,
    //   repeat: -1,
    //   ease: "none",
    // });
  }, []);

  const target = new Date("05/09/2024 09:29:59");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diffrence = target.getTime() - now.getTime();

      const days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
      setDays(days);

      const hours = Math.floor(
        (diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);

      const minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((diffrence % (1000 * 60)) / 1000);
      setSeconds(seconds);

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        setTimeUp(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // text-[76px] sm:text-[128px] md:text-[176px] lg:text-[256px] leading-tight
  return (
    <div
      ref={container}
      className="text-white w-full h-[100vh] relative flex justify-center items-center max-md:items-start  overflow-hidden"
    >
      <Image 
        src="/assets/advykabg.png"
        alt="Advyka Logo"
        width={700}
        height={700}
        className="absolute -z-10 opacity-[0.1] max-md:bottom-[30%] "
      />
      <div className="relative text-white w-full h-[100vh] flex flex-col items-center pt-[15vh]">
        <h1 className="text-4xl mb-[5vh] opacity-1" id="hack-text">
          Hacking starts in{" "}
          <span id="dot" className="opacity-0">
            .
          </span>
          <span id="dot" className="opacity-0">
            .
          </span>
          <span id="dot" className="opacity-0">
            .
          </span>
        </h1>

        {/* <div className="glow absolute -z-10 aspect-square bg-blue-400/20 blur-3xl filter w-full max-w-xl rounded-full"></div> */}
        <h1
          id="timer"
          className="text-[50px] opacity-0 sm:text-[80px] md:text-[100px] lg:text-[160px] leading-tight h-[20vh] max-sm:h-[10vh] text-slate-300"
        >
          {days} : {hours} : {minutes} : {seconds}
        </h1>

        <div className="flex w-full justify-around text-[50px] max-sm:text-[30px] max-sm:flex-col items-center md:m-10">
          <p className="m-6">May 09</p>
          <p className="m-6 gradient2">
            @CEP
          </p>
        </div>
        <div className="flex justify-around mt-[5vh] w-full max-sm:flex-col items-center">
          <p
            id="free-reg"
            className="inline m-6 mr-0 text-2xl font-bold gradient2"
          >
            Free Registration !
          </p>
          {/* <Button /> */}
        </div>
        
      </div>
    </div>
  );
};

export default Timer;
