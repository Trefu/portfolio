import catIcon from './catIcon.png'

export const Navbar = () => {

    return (

        <nav className='container mx-auto grid grid-rows-1 grid-cols-5 items-center py-2 font-bold text-lg text-white'>
            <div className='flex justify-start'>
                <span>
                    <a href="/">
                        <img src={catIcon} alt="Cat logo" className='inline ' style={{ width: '28px' }} />

                    </a>
                </span>
            </div>
            <div className='col-span-3 flex justify-center list-none'>

                <li className='mr-3 hover:text-gray-400 transform ease-out duration-500 '> <a href='about'>Sobre mí</a>

                </li>
                <li className='mr-3 hover:text-gray-400 transform ease-out duration-500'><a href='tech'>Tecnologías</a>
                </li>
                <li className='mr-3 hover:text-gray-400 transform ease-out duration-500'><a href='projects'>Proyectos</a></li>
                <span>

                </span>

            </div>
            <div className='flex justify-end'>
                <span className='text-blue-400 mr-4 '>
                    <i className="fab fa-linkedin fa-2x" />
                </span>
                <i className="fab fa-github fa-2x" />

            </div>
        </nav >

    )
}