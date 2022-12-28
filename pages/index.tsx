import type { NextPage } from 'next'
import React from 'react'
//Fetch hook
import { useFetchMovies } from '../api/fetchHooks'
//component
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'
import Spinner from '../components/Spinner/Spinner'

export default function Home() {
  const [query, setQuery] = React.useState("");
  const {data,fetchNextPage,isLoading, isFetched,error} = useFetchMovies(query);
  
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
