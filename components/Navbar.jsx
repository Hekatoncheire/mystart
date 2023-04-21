import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 className='font-bold text-4xl'>myst<span className='font-outline-white text-transparent'>art</span></h1>
                </Link>
                <ul className='hidden sm:flex'>
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
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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