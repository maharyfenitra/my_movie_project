import { movieUrl, creditsUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'

//BasicFetch
import { basicFetch } from '../api/fetchFunctions'
//Components
import Header from '../components/Header/Header'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import MovieInfo from '../components/MovieInfo/MovieInfo'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'
//types
import type { GetStaticPaths, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { Movie, Credits, Crew, Cast } from '../api/types'

const Movie: NextPage<Props> = ({ movie, cast, directors }) => {
    return <main>
        <Header />
        <Breadcrumb title={movie.original_title}/>
        <MovieInfo />
        <Grid>
            <Card />
        </Grid>
    </main>
}

export default Movie;
export const getStaticProps: GetStaticProps = async context => {
    const id = context.params?.id as string
    const movieEndPoint: string = movieUrl(id);
    const creditsEndPoint: string = creditsUrl(id);
    const movie = await basicFetch<Movie>(movieEndPoint)
    const credits = await basicFetch<Credits>(creditsEndPoint)

    //Get the directors only
    const directors = credits.crew.filter(member => member.job === "Director");
    return {
        props: {
            movie,
            directors,
            cast: credits.cast
        },
        revalidate: 60 * 60 * 24//Rebuild page each day
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}
type Props = {
    movie: Movie;
    directors: Crew[];
    cast: Cast[];
}