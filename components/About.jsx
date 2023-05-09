import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='main-section' className='bg-black flex flex-col justify-center items-center text-white px-10 lg:flex-row max-lg:px-0 lg:pr-0'>
            <div className='basis-1/2 mr-20 flex-col max-lg:mr-0 max-lg:text-center max-lg:px-10'>
                <h1 className='text-4xl font-bold mb-20 sm:text-7xl mt-20'>A művészet a valóság tükre - segítünk neked megtalálni a saját tükörképed!</h1>
                <button className='border border-white p-5 max-lg:mb-10'>Nézd meg aukcióinkat</button>
            </div>
            <div className='items-center justify center'>
                <Image
                    alt="woman in art gallery"
                    src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    width={912}
                    height={912}
                />
            </div>
        </div>
    )
}

export default About