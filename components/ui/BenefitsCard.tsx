import Image from 'next/image';
import React from 'react'

interface Props {
    title: string;
    description: string;
    icon: string;
}

const BenefitsCard = ({ title, description, icon}: Props) => {
  return (
    <div className='flex gap-10 items-center w-full mb-14'>
        <Image 
          src={icon}
          alt={title}
          width={110}
          height={110}
          className='rounded-lg object-cover max-sm:w-[80px] max-sm:h-[80px] '
        />
        <div className='flex flex-col'>
            <h1 className='text-2xl max-sm:text-xl mb-1 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent'> {title} </h1>
            <p className='text-xl max-sm:text-md text-white'> {description} </p>
        </div>
    </div>
  )
}

export default BenefitsCard