import Image from 'next/image';
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className='text-slate-300 text-xl flex flex-col items-center'>
        <hr className='border-1 w-[90%] mb-10' />
        <div className='flex justify-between gap-20 w-[80%] max-lg:w-[90%] max-lg:text-md max-md:flex-col items-center mb-20'>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-6 items-center'>
                    <HiOutlineMail size={35} className="max-sm:w-8 max-sm:h-8" />
                    <p>inceptohack@gmail.com</p>
                </div>
                <div className='flex gap-6 items-center'>
                    <TbPhone size={35} className="max-sm:w-8 max-sm:h-8" />
                    <div>
                        <p>Habeeb: &nbsp;+91 9744116364</p>
                        <p>Harikrishnan: &nbsp;+91 7902485392</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <FaInstagram size={35} className="max-sm:w-8 max-sm:h-8" />
                    <p>inceptoCep</p>
                </div>
                
            </div>
            <div className='flex items-center'>
                <Image 
                  src="/assets/advyka.png"
                  width={200}
                  height={200}
                  alt="College of Engineering Perumon"
                  className='rounded-md object-cover max-lg:w-[100px] max-lg:height-[100px]'
                />
            </div>
            <div className='flex items-center'>
                <Image 
                  src="/assets/ceplogo.png"
                  width={250}
                  height={250}
                  alt="College of Engineering Perumon"
                  className='rounded-md object-cover max-lg:w-[150px] max-lg:height-[150px]'
                />
            </div>
        </div>
    </footer>
  )
}

export default Footer
