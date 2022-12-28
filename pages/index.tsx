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
//Config 
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'

export default function Home() {
  const [query, setQuery] = React.useState("");
  const { data, fetchNextPage, isLoading, isFetched, error } = useFetchMovies(query);

  console.log(data)

  return (
    <>
      <main className='relative h-screen overflow-y-scroll'>
        <Header setQuery={setQuery} />
        {!query && data && data.pages ?
          <Hero imgUrl={data?.pages[0]?.results[0]?.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + data?.pages[0]?.results[0]?.backdrop_path : '/no_image.jpg'}
            title={data?.pages[0]?.results[0]?.title}
            text={data?.pages[0]?.results[0]?.overview}
          /> : ''
        }
        <Grid />
        <Card />
        <Spinner />
      </main>
    </>
  )
}
