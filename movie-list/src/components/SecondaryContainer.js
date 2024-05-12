import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
  return (
    <div>
        <MovieList  title='NowPlaying' movies={movies} />
    </div>
  )
}

export default SecondaryContainer