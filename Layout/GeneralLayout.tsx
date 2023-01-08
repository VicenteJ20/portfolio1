import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
interface Props {
  children?: ReactNode
}

export const GeneralLayout = ({ children, ...props}: Props) => {
  return (
    <>
      <main className='min-h-screen mb-6'>
        <Navbar />
        <div className='children flex flex-col gap-5 px-3 md:px-10 py-3 pt-5 pb-5 md:pt-2' {...props}>
          {children}
        </div>
      </main>
      <div className='h-20 mt-4 mb-4 flex items-center px-20'>
        <footer className='text-center'>&copy; Copyright 2023, Vicente Jorquera. Todos los derechos reservados.</footer>
      </div>
    </>
  )
}