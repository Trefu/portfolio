import catIcon from './catIcon.png'

export const Navbar = () => {

    return (

        <nav className='hidden container mx-auto grid grid-rows-1 grid-cols-1 md:grid-cols-5 items-center py-2 font-bold text-lg text-white fixed t-1 z-10 max-w-screen-xl'>
            <div className='flex justify-start'>
                <span className='hidden md:block'>
                    <a className='bg-gray-200 p-2 rounded-full' href="/">
                        <img src={catIcon} alt="Cat logo" className='inline mb-1 ' style={{ width: '28px' }} />

                    </a>
                </span>
            </div>
            <div className='md:col-span-3 flex flex-col md:flex-row justify-evenly list-none bg-gray-800 min-h-screen md:min-h-full md:bg-transparent text-center text-4xl md:text-lg '>

                <li className=' hover:text-gray-400 md:transform ease-out duration-500 '> <a href='about' className='border-b-2 border-white md:border-none'>Sobre mí</a>

                </li>
                <li className=' hover:text-gray-400 md:transform ease-out duration-500'><a href='tech' className='border-b-2 border-white md:border-none'>Tecnologías</a>
                </li>
                <li className=' hover:text-gray-400 md:transform ease-out duration-500'><a href='projects' className='border-b-2 border-white md:border-none'>Proyectos</a></li>
                <span>

                </span>

            </div>
            <div className='hidden md:flex justify-end'>
                <span className='text-blue-400 mr-4 '>
                    <i className="fab fa-linkedin fa-2x" />
                </span>
                <i className="fab fa-github fa-2x" />

            </div>
        </nav >

    )
}