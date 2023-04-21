import React from 'react'

const Hero = ({heading, buttonText}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]'/>
        <div className='flex flex-col justify-center items-center p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold pt-40 pb-10'>{heading}</h2>
            <button className='px-8 py-2 border w-80 mt-10'>{buttonText}</button>
        </div>
    </div>
  )
}

export default Hero