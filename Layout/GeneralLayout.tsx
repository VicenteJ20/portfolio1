import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
interface Props {
  children?: ReactNode
}

export const GeneralLayout = ({ children, ...props}: Props) => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='children flex flex-col gap-5 px-3 mt-14 pt-20 md:mt-5 md:pt-4 md:px-10 py-3 pb-5' {...props}>
        {children}
      </div>
      
      <footer className='text-center px-4 my-3 py-2'>&copy; Copyright 2023, Vicente Jorquera. Todos los derechos reservados.</footer>
    </main>
  )
}