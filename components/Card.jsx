import React from 'react'
import Image from 'next/image'

const Card = ({image, title, content, route}) => {
  return (
    <div className='bg-white shadow mb-20 basis-1/4 flex-col'>
        <div className='relative h-80 hidden'>
            <Image src='' alt="/" className='absolute w-full h-full object-cover transition-transform duration-500' width={100} height={60}/>
        </div>
        <div className='relative px-8 py-12'>
            <h2 className='text-xl font-bold mb-2'>{title}</h2>
            <p>{content}</p>
            <a href={route} className='relative inline-block font-bold mt-8'>Tovább</a>
        </div>
    </div>
  )
}

export default Card