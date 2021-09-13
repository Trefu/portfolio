import catIcon from '../assets/catIcon.png'
import { SocialBtn } from './SocialBtn'
import { NavbarBtn } from './NavbarBtn'
import { useState } from 'react'



export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className='container mx-auto flex flex-col md:flex-row  justify-between items-center py-2  text-lg text-white fixed t-1 z-50 max-w-screen-xl'>
            <div className='flex justify-between w-11/12 md:w-auto z-10'>
                <span  >
                    <a className='bg-gray-200 p-2 rounded-full ml-0 md:ml-4 ' href="/">
                        <img src={catIcon} alt="Cat logo" className='inline' style={{ width: '28px' }} />
                    </a>
                </span>

                <NavbarBtn showMenu={setMobileOpen} />
            </div>

            <div className={`${mobileOpen ? 'nav-mobile-svg h-screen' : 'hidden'} md:flex `}>
                <ul className='w-screen md:w-auto flex flex-col justify-center md:bg-transparent text-center text-5xl md:text-lg md:flex-row  list-none absolute md:relative  min-h-screen md:min-h-full '>
                    <li className=' hover:text-gray-400 ease-out duration-500 md:mr-8 mb-28 md:mb-0 '> <a href='#about' className='border-b-2 border-white md:border-none'>Sobre mí</a>
                    </li>
                    <li className=' hover:text-gray-400 ease-out duration-500 md:mr-8 mb-28 md:mb-0'><a rel="noreferrer" target="_blank" href='https://api.whatsapp.com/send?phone=541167550132&text=Hola!!' className='border-b-2 border-white md:border-none'>Contacto</a>
                    </li>
                    <li className=' hover:text-gray-400 ease-out duration-500 '><a href='#projects' className='border-b-2 border-white md:border-none'>Proyectos</a></li>
                </ul>

            </div>
            <div className='hidden md:flex '>
                <SocialBtn icon={'fab fa-linkedin fa-2x'} url={'https://www.linkedin.com/in/trefu/'} styles={'text-blue-400 mr-4'} />
                <SocialBtn icon={'fab fa-github fa-2x'} url={'https://github.com/Trefu'} styles={'mr-4'} />
            </div>
        </nav >

    )
}