import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux"

const MainContainer = () => {
    const movies= useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies)return;
    const movie = movies[Math.floor(Math.random()*20)];
    console.log(movie);
    const {original_title,overview,id} = movie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer