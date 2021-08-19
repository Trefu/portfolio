import catIcon from '../assets/catIcon.png'
import { SocialBtn } from './SocialBtn'
import { NavbarBtn } from './NavbarBtn'
import { useState } from 'react'
export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <nav className='container mx-auto flex flex-col md:flex-row  justify-between items-center py-2 font-bold text-lg text-white fixed t-1 z-10 max-w-screen-xl'>
            <div className='flex justify-between w-11/12 md:w-auto'>
                <span >
                    <a className='bg-gray-200 p-2 rounded-full ' href="/">
                        <img src={catIcon} alt="Cat logo" className='inline mb-1 ' style={{ width: '28px' }} />
                    </a>
                </span>
                <NavbarBtn showMenu={setMobileOpen} />
            </div>

            <div className={`${mobileOpen ? '' : 'hidden'} md:flex `}>
                <ul className='w-screen md:w-auto flex flex-col justify-center md:bg-transparent text-center text-4xl md:text-lg md:flex-row  list-none bg-gray-800 min-h-screen md:min-h-full '>
                    <li className=' hover:text-gray-400 md:transform ease-out duration-500 md:mr-8 mb-12 md:mb-0 '> <a href='about' className='border-b-2 border-white md:border-none'>Sobre mí</a>
                    </li>
                    <li className=' hover:text-gray-400 md:transform ease-out duration-500 md:mr-8 mb-12 md:mb-0'><a href='tech' className='border-b-2 border-white md:border-none'>Tecnologías</a>
                    </li>
                    <li className=' hover:text-gray-400 md:transform ease-out duration-500 '><a href='projects' className='border-b-2 border-white md:border-none'>Proyectos</a></li>
                </ul>

            </div>
            <div className='hidden md:flex '>
                <SocialBtn icon={'fab fa-linkedin fa-2x'} url={'https://www.linkedin.com/in/trefu/'} styles={'text-blue-400 mr-4'} />
                <SocialBtn icon={'fab fa-github fa-2x'} url={'https://github.com/Trefu'} styles={'mr-4'} />
            </div>
        </nav >

    )
}