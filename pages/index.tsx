//component
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'
import Spinner from '../components/Spinner/Spinner'

export default function Home() {
  return (
    <>
      <main className='relative h-screen overflow-y-scroll'>
        <Header/>
        <Hero/>
        <Grid/>
        <Card/>
        <Spinner/>
      </main>
      </>
  )
}
