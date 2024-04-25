import Image from "next/image";
import React from "react";

const Organizers = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-20 max-sm:mb-4">
        <h1 className="text-5xl font-semibold max-sm:text-4xl w-full flex max-md:flex-col justify-center mt-5 mb-16 max-sm:mb-8 text-white">
          <span className={`max-md:mx-auto`}>Organized</span>
          <span className="max-md:mx-auto ml-4">By</span>
        </h1>
        <div className="flex justify-around items-center w-[90vw] rounded-2xl max-lg:flex-col max-w-[599px]:flex-col mb-24">
          <Image
            src="/assets/iedc.png"
            alt="asci"
            width={200}
            height={200}
            className="rounded-md object-cover max-sm:mb-8"
          />
          <Image
            src="/assets/asciblackpng.png"
            alt="mulearn"
            width={250}
            height={250}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mb-6 max-sm:mb-4">
        <h1 className="text-5xl font-semibold max-sm:text-4xl w-full flex max-md:flex-col justify-center mt-5 mb-16 max-sm:mb-8 text-white">
          <span className={`max-md:mx-auto`}>Community</span>
          <span className="max-md:mx-auto ml-4">Partners</span>
        </h1>
        <div className="flex justify-around items-center w-[90vw] rounded-2xl max-lg:flex-col max-w-[599px]:flex-col mb-16">
          <Image
            src="/assets/tinkerhub.png"
            alt="asci"
            width={200}
            height={200}
            className="rounded-md object-cover max-sm:mb-8"
          />
          <Image
            src="/assets/mulearn2.png"
            alt="mulearn"
            width={250}
            height={250}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold max-sm:text-4xl w-full flex max-md:flex-col justify-center mt-5 mb-16 max-sm:mb-8 text-white">
          <span className={`max-md:mx-auto`}>Ticketing</span>
          <span className="max-md:mx-auto ml-4">Partners</span>
        </h1>
        <div className="flex justify-around items-center w-[90vw] rounded-2xl max-lg:flex-col max-w-[599px]:flex-col mb-24">
          <Image
            src="/assets/makemypass.png"
            alt="asci"
            width={200}
            height={200}
            className="rounded-md object-cover max-sm:mb-8"
          />
        </div>
      </div>

    </div>
  );
};

export default Organizers;
