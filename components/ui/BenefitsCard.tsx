import Image from 'next/image';
import React from 'react'

interface Props {
    title: string;
    description: string;
    icon: string;
}

const BenefitsCard = ({ title, description, icon}: Props) => {
  return (
    <div className='flex gap-10 w-full mb-7'>
        <Image 
          src={icon}
          alt={title}
          width={110}
          height={110}
          className='rounded-lg object-cover max-sm:w-[80px] max-sm:h-[80px] '
        />
        <div className='flex flex-col'>
            <h1 className='text-2xl max-sm:text-lg mb-2'> {title} </h1>
            <p className='text-xl max-sm:text-md text-slate-300'> {description} </p>
        </div>
    </div>
  )
}

export default BenefitsCard