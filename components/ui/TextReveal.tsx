"use client"
import React, { useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const TextReveal = () => {
  const [letterRef, setLetterRef]: any = useArrayRef();

  function useArrayRef() {
    const letterRef: any = useRef([]);
    letterRef.current = [];
    return [letterRef, (ref: any) => ref && letterRef.current.push(ref)];
  }

  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const reveal = gsap.to(
        letterRef.current, 
        {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true,
                start: "top 40%",
                end: "bottom 50%",
            },
            color: "white",
            duration: 5,
            stagger: 1,
        }
    )
    return () => {
        reveal.kill()
    }
  })

  const text = `'A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.`
//   return (
//     <div className='reveal'>
//         <div ref={triggerRef}>
//             {text.split(" ").map((letter, index) => (
//                 <span ref={setLetterRef} className='reveal-text' key={index}> {letter} </span>
//             ))}
//             <br />
//         </div>
//     </div>
//   )
return (
    <div className='reveal w-[100vw]'>
      <div ref={triggerRef}>
        {text.split(/\s+/).map((word, index) => (
          <React.Fragment key={index}>
            {word.split('').map((letter, letterIndex) => (
              <span ref={setLetterRef} className='reveal-text' key={letterIndex}>
                {letter}
              </span>
            ))}
            <br /> {/* Add a line break after each word */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

}

export default TextReveal


