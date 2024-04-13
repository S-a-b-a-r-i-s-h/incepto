import Image from 'next/image'
import React from 'react'

const Organizers = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-semibold text-white mb-24'>Organized by</h1>
        <div className='flex justify-around items-center w-[90vw] rounded-2xl max-lg:flex-col max-w-[599px]:flex-col'>
            <Image 
                src='/assets/asciblackpng.png'
                alt='asci'
                width={200}
                height={200}
                className='rounded-md object-cover'
            />
            <Image 
                src='/assets/mulearn2.png'
                alt='mulearn'
                width={250}
                height={250}
                className='rounded-md object-cover'
            />
        </div>
    </div>
  )
}

export default Organizers