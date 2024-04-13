"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { tracks } from "@/constants";

const Track = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=20%",
          toggleActions: "play pause resume reverse",
        },
      });

      tl.from("#track-heading", {
        opacity: 0,
        y: 100,
        duration: 0.5,
      })
        .from("#track-content", {
          opacity: 0,
          y: 100,
          duration: 0.5,
        })
        .to("#track-glow", {
          opacity: 1,
          duration: 1,
        });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="mt-20 w-fullp-10 max-sm:p-5 flex flex-col items-center justify-center mb-[100px]"
    >
      <h1
        id="track-heading"
        className="opacity-1 text-white text-5xl font-semibold"
      >
        TRACKS
      </h1>
      {/* <div id="track-content" className="glass-container">
        <div
          id="track-glow"
          className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter opacity-0"
        ></div>
        <div className="opacity-1 flex flex-col items-center justify-center bg-[#070815] text-white w-[50vh] max-sm:w-full">
          <h1 className="text-3xl max-sm:text-2xl w-full flex justify-center mt-5 mb-8">
            Open &nbsp;
            <span
              id="track-glow"
              className="opacity-0 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              {" "}
              Innovation
            </span>
          </h1>
          <p className="text-xl w-[90%] mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            similique fugit placeat velit perferendis labore ut error incidunt
            voluptatem. Nam.
          </p>
        </div>
      </div> */}

      {tracks.map((track) => (
        <div id="track-content" className="glass-container mt-32">
          <div
            id="track-glow"
            className={`absolute inset-0 -z-10 bg-${track.border}-500/30 blur-2xl filter opacity-0`}
          >
            {/* 
              blue
              green
              violet
              yellow
              red
            */}
          </div>
          
          <div className="opacity-1 flex flex-col items-center justify-center bg-[#070815] text-white w-[50vh] max-sm:w-full">
            <h1 className="text-3xl max-sm:text-2xl w-full flex flex-col justify-center mt-5 mb-8 ">
              <span className={`mx-auto ${track.title1Class}`}>
                {track.title1}
              </span>
              <span
                id="track-glow"
                className={`opacity-0 mx-auto ${track.title2Class}`}
              >
                {track.title2}
                {/* 
                  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent
                  bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent
                  bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent
                  bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent
                  bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent
                */}
              </span>
            </h1>

            <p className="text-lg max-md:text-md w-[90%] mb-4 font-mono text-zinc-500 ">
              {track.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Track;
