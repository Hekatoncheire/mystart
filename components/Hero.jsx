import React from 'react'
import Link from 'next/link';


const Hero = ({ heading, buttonText, buttonVisible }) => {
    return (
        <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img w-full'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />
            <div className='flex flex-col justify-center items-center p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold pt-40 pb-10 flex'>{heading}</h2>
                <Link href='/auth'>
                    <button className={buttonVisible=== true ? 'border px-8 py-2 w-80 mt-10 basis-4/5 sm:basis-1/5' : 'hidden'}>{buttonText}</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero