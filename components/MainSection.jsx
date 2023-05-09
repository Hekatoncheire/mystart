import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <div id='main-section' className='bg-black flex flex-col justify-center items-center text-white px-10 lg:flex-row max-lg:px-0 lg:pr-0'>
            <div className='basis-1/2 mr-20 flex-col max-lg:mr-0 max-lg:text-center max-lg:px-10'>
                <h1 className='text-5xl font-bold mb-10 sm:text-7xl mt-20'>A művészet a valóság tükre - segítünk neked megtalálni a saját tükörképed!</h1>
                <p className='mb-10 text-justify text-lg max-lg:text-sm'>Ha szereted a művészetet és a kreativitást, akkor nálunk a helyed! Csodálatos aukcióinkon való részvétellel lehetőséged nyílik arra, hogy felejthetetlen műalkotásokkal gazdagodj, és megismerd a legtehetségesebb fiatal művészeket. Fedezd fel velünk az új trendeket, és éld át a művészet varázsát!</p>
                <Link href='/auctions'>
                    <button className='border border-white p-5 max-lg:mb-10 lg:mb-20'>Nézd meg aukcióinkat</button>
                </Link>
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