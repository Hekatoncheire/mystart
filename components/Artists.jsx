import React, { useState, useEffect } from 'react';
import { items } from "../public/Items.json";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from './Carousel';

const Artists = () => {
    const { responsive } = items;

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-7xl font-bold mt-20 mb-20 max-lg:text-5xl'>Alkoss te is!</h1>
            <Carousel autoSlide={false}>
                {[
                    ...responsive.map((item) => (
                        <div className='flex w-full items-center justify-center'>
                            <h3 className='flex w-full'>{item.title}</h3>
                            <p>{item.review}</p>
                        </div>
                    ))
                ]}
            </Carousel>
        </div>
    )
}

export default Artists