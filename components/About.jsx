import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='flex justify-center items-center mt-20'>
            <div className='basis-1/2 mr-20 flex-col justify-start'>
                <h1 className='text-4xl font-bold mb-20 sm:text-7xl'>A művészet a valóság tükre - segítünk megtalálni a saját tükörképed</h1>
                <button className='border border-black p-5'>Nézd meg aukcióinkat</button>
            </div>
            <div className='items-center justify center'>
                <Image
                    alt="woman in art gallery"
                    src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    width={600}
                    height={600}
                />
            </div>
        </div>
    )
}

export default About