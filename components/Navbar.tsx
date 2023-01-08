
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

export const Navbar = () => {
  const [show, setShow] = useState(false)

  const handleShow = (): void => {
    setShow(!show)
  }

  return (
    <header className={`top-0 z-20 w-full py-4 mx-auto md:pt-3 flex flex-col md:flex-row transition transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); justify-start ${show ? 'h-full pt-20' : ' h-16'} md:h-fit  items-center px-3 md:px-10 gap-y-6 md:gap-y-1  md:justify-between bg-blend-darken fixed md:relative bg-white`}>
      <ul className={`md:flex z-30 bg-white text-2xl md:text-lg flex-col w-full md:flex-row gap-4 gap-y-6 text-end md:text-start ${show ? 'flex' : 'hidden'}`}>
        <li><Link href={'/about'} onClick={handleShow}>Acerca de</Link></li>
        <li><Link href={'/blog'} onClick={handleShow}>Blog</Link></li>
      </ul>
      <div onClick={handleShow} className='text-3xl absolute right-3 top-4 cursor-pointer md:hidden z-30'>
        <GiHamburgerMenu name={show ? 'Cerrar menú' : 'Abrir menú'} />
      </div>
      <Link href={'/'} className='text-2xl z-30 font-black p-1 absolute w-fit mx-auto left-0 md:left-0 right-0 w-100 flex items-center justify-start md:justify-center top-3 '>Vicente Jorquera</Link>
      <div className={`md:flex items-center justify-end w-full md:w-fit gap-4 ${show ? 'flex' : 'hidden'}`}>
        <BiSearchAlt2 className='hidden md:block text-2xl hover:text-blue-500 cursor-pointer' />
        <Link href={'/contact'} className='py-2 px-4 bg-gray-900 text-white text-xl md:text-base font-semibold rounded-lg shadow-md block hover:bg-gray-700 transiton hover:ease-in-out'>Contacto</Link>
      </div>
    </header>
  )
}