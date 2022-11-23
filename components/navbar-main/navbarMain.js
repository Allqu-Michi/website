import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'

function NavbarMain() {
  
    //function to display menu options
    function toggleMenu(){
        document.getElementById('navbar').classList.toggle('navbar');
        document.getElementById('background').classList.toggle('background');
    }

  return (
    <React.Fragment>
        <div id='navbar' onClick={toggleMenu} className='md:navbar-md navbar h-fit md:h-fit z-50 shadow-lg w-custom fixed bg-orange text-white rounded-b-3xl px-5 md:px-20 py-3 flex flex-col md:flex-row md:justify-between gap-4 items-center'>
            <div className='flex flex-row justify-between w-full md:w-fit items-center'>
                <div className='block md:hidden cursor-pointer' onClick={toggleMenu}>
                    <Image src='/static/icons/menu.svg' alt="Allqu & Michi" width={30.86} height={18}/>
                </div>
                <Link href="/">
                    <div className='flex flex-row flex-wrap items-center gap-1.5 cursor-pointer'>
                        <Image src='/static/icons/allqu-michi.svg' alt='Allqu & Michi' width={28.78} height={30}/>
                        <div className='font-bold'>{process.env.NEXT_PUBLIC_NAME_PROJECT}</div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div>
                    <ul className='flex flex-col md:flex-row items-center gap-4 menu'>
                        <li>
                            <a href="#" className='px-4 py-1 text-center'>Perros</a>
                        </li>
                        <li>
                            <a href="#" className='px-4 py-1 text-center'>Gatos</a>
                        </li>
                        <li>
                            <a href="#" className='px-4 py-1 text-center'>Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className='px-4 py-1 text-center'>Contáctanos</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="submit" className='bg-blue rounded-2xl px-4 py-2 flex flex-row items-center gap-1.5'>
                        <span className='font-bold'>Apoya</span>
                        <Image src="/static/icons/heart.svg" alt="Allqu & Michi" width={16.5} height={16.5}/>
                    </button>
                </div>
            </div>
        </div>

        <div className='md:hidden h-fit z-50 w-custom fixed bg-orange text-white rounded-b-3xl px-5 md:px-20 py-3 flex flex-col md:flex-row md:justify-between gap-4 items-center'>
            <div className='flex flex-row justify-between w-full md:w-fit items-center'>
                <div className='block md:hidden cursor-pointer' onClick={toggleMenu}>
                    <Image src='/static/icons/menu.svg' alt="Allqu & Michi" width={30.86} height={18}/>
                </div>
                <Link href="/">
                    <div className='flex flex-row flex-wrap items-center gap-1.5 cursor-pointer'>
                        <Image src='/static/icons/allqu-michi.svg' alt='Allqu & Michi' width={28.78} height={30}/>
                        <div className='font-bold'>{process.env.NEXT_PUBLIC_NAME_PROJECT}</div>
                    </div>
                </Link>
            </div>
        </div>

        <div id='background' onClick={toggleMenu} className='md:hidden background fixed z-40 blur-lg w-full h-screen m-0 p-0 left-0 right-0 '></div>
    </React.Fragment>
  )
}

export default NavbarMain