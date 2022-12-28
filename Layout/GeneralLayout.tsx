import { ReactNode } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

interface Props {
  children?: ReactNode
}

export const GeneralLayout = ({ children, ...props}: Props) => {

  const [show, setShow] = useState(false)

  const handleShow = (): void => {
    setShow(!show)
  }

  return (
    <main className='min-h-screen'>
      <header className={`w-full mx-auto flex flex-col md:flex-row transition transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); ${show ? 'min-h-screen bg-white' : 'h-20'} md:min-h-fit  items-center px-10 py-3 justify-center gap-y-6  md:justify-between fixed`}>
        <ul className={`md:flex text-2xl md:text-lg flex-col md:flex-row gap-4 gap-y-6 text-center md:text-start ${show ? 'flex' : 'hidden'}`}>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <div onClick={handleShow} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-10'>
          <GiHamburgerMenu name={show ? 'Cerrar menú' : 'Abrir menú'} />
        </div>
        <h2 className='text-2xl font-black pl-6 absolute left-4 md:left-0 right-0 w-full text-start md:text-center top-5'>Vicente Jorquera</h2>
        <div className={`md:flex items-center justify-center gap-4 ${show ? 'flex' : 'hidden'}`}>
          <BiSearchAlt2 className='hidden md:block text-2xl hover:text-blue-500 cursor-pointer' />
          <button className='py-2 px-4 bg-gray-900 text-white text-xl md:text-base font-semibold rounded-lg shadow-md hover:bg-gray-700 transition hover:ease-in-out'>Contact</button>
        </div>
      </header>
      <div className='children px-10 py-3 pt-24' {...props}>
        {children}
      </div>
      <footer className='px-10 py-3'>Este es el footer</footer>
    </main>
  )
}