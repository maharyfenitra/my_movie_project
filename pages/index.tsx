import { Inter } from '@next/font/google'

//component
import Header from '../components/Header/Header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='relative h-screen overflow-y-scroll'>
        <Header/>
      </main>
      </>
  )
}
