import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export default function Carousel ({ children: slides, autoSlide=false, autoSlideInterval=3000 }) {
    const [curr, setCurr] = useState(0)

    const prev =()=> setCurr((curr)=> (curr=== 0? slides.length - 1 : curr - 1))
    const next =()=> setCurr((curr)=> (curr===  slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
    
      return () => {
        clearInterval(slideInterval)
      }
    }, [])
    

    return (
        <div className='flex overflow-hidden relative w-full'>
            <div className='items-center justify-center w-full flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>{slides}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft size={40}/>
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight size={40}/>
                </button>
            </div>
            <div className='w-full flex absolute bottom-4 right-0 left-0'>
                <div className='w-full flex items-center justify-center gap-2'>
                    {slides.map((_,i) => (
                        <div className={`trsansition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-4" : "bg-opacity"}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}