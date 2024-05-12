import { useEffect, useState } from "react";
import { API_Options } from "../utils/constants"

const VideoBackground = ({ movieId }) => {
    //fetch trailer here
    const [traileId, settrailerId]= useState(null);
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_Options);
        const json = await data.json();
        const trailer = json.results.find((video) => video.type == "Trailer") || json.results[0];
        settrailerId(trailer?.key);
     }
    useEffect(() => {
        getMovieVideos();
    }, []);
    return (
        <div className="w-screen">
            <iframe  className="w-screen aspect-video"  src={`https://www.youtube.com/embed/${traileId}?&autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground