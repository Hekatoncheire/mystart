import React from 'react'
import Card from './Card'

const ServiceCardContainer = () => {
    return (
        <div className='flex-col justify-center items-center flex-wrap mt-20 p-10'>
            <h1 className='text-center font-bold text-4xl mb-20 sm:text-5xl'>Szolgáltatásaink</h1>
            <div className='flex justify-around items-center flex-wrap'>
                <Card title='Élő aukciók' content='Kattints, és nézd meg élő aukcióinkat!' route='/auctions'/>
                <Card title='Művészi közösség' content='Csatlakozz a többi fiatal művészhez!' route='/network'/>
                <Card title='Gyűjtőknek' content='Gyűjtő vagy? Tárgyaljátok meg a legújabb fogásokat!' route='/collectors'/>
            </div>
        </div>
    )
}

export default ServiceCardContainer