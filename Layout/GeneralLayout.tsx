import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
interface Props {
  children?: ReactNode
}

export const GeneralLayout = ({ children, ...props}: Props) => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='children flex flex-col gap-5 px-10 py-3 pt-20 md:pt-2' {...props}>
        {children}
      </div>
      <footer className='px-10 py-3'>Este es el footer</footer>
    </main>
  )
}