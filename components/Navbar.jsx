import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY>=90) {
                setColor('#ffffff')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);

    return (
        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>mist<span className={textColor === '#ffffff' ? 'font-outline-white text-transparent' : 'font-outline-black text-transparent'}>art</span></h1>
                </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/auctions'>Élő aukciók</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/artists'>Művészek</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/collectors'>Gyűjtők</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/network'>Hálózat</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/gallery'>Virtuális galéria</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/auth'>Csatlakozz hozzánk</Link>
                    </li>
                </ul>

                {/* Mobile button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
                </div>

                {/* Mobile menu */}
                <div className={
                    nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        :
                        'sm:hidden absolute top-0 left-[-150%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul className='flex-col justify-center items-center text-center'>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/auctions'>Élő aukciók</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/artists'>Művészek</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/collectors'>Gyűjtők</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/network'>Hálózat</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/gallery'>Virtuális galéria</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500 flex flex-wrap'>
                            <Link href='/auth'>Csatlakozz hozzánk</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar