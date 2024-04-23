"use client";
import { benefits } from "@/constants";
import BenefitsCard from "./BenefitsCard";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Example() {
  const comp = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

      gsap.set(photos, { yPercent: 101 });

      const allPhotos = gsap.utils.toArray(".desktopPhoto");

      let mm = gsap.matchMedia();
      // create

      // add a media query. When it matches, the associated function will run
      mm.add("(min-width: 600px)", () => {
        // this setup code only runs when viewport is at least 600px wide
        // console.log("desktop");

        ScrollTrigger.create({
          trigger: galleryRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
        });

        //create scroll trigger for each details section
        //trigger photo animation when headline of each details section
        //reaches 80% of window height
        details.forEach((detail: any, index: any) => {
          let headline = detail.querySelector("h1");
          let animation = gsap
            .timeline()
            .to(photos[index] as EventTarget, { yPercent: 0 })
            .set(allPhotos[index] as EventTarget, { autoAlpha: 0 });

          ScrollTrigger.create({
            trigger: headline,
            start: "top 90%",
            end: "top 40%",
            animation: animation,
            scrub: true,
            markers: false,
          });
        });
      });

        return () => {
          // optional
          // custom cleanup code here (runs when it STOPS matching)
          // console.log("mobile");
        };
      
    }, comp);

    return () => {
      ctx.revert();
    };

    
  }, []);

  return (
    <div ref={comp} className="max-md:mb-24">
      <div className="items-center justify-center flex max-sm:hidden w-full">
        <h1 className="text-5xl font-semibold text-white">BENEFITS</h1>
      </div>
      <div ref={galleryRef} className="gallery">
        <div className="left">
          <div className="desktopContent">
            {benefits.map((benefit) => (
              <div className="desktopContentSection">
                <h1 className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">{benefit.title}</h1>
                <p className="text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <div className="desktopPhotos">
            {benefits.map((benefit) => (
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={300}
                height={300}
                className="desktopPhoto"
              />
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="mobileContent w-[100vw]">
            <div className="text-white w-full flex flex-col items-center">  
              <h1 className="text-5xl font-semibold mb-4">BENEFITS</h1>
              <div className="rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm ">
                {benefits.map((benefit) => (
                  <BenefitsCard
                    key={benefit.title}
                    title={benefit.title}
                    description={benefit.description}
                    icon={benefit.icon}
                  />
                ))}
              </div>
            </div>
          </div>
    </div>
  );
}

export default Example;
