import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div>
           { movies && <div> 
                <h1 className='text-3xl font-bold p-2 m-3'>{title}</h1>
                <div className='flex  p-5 m=4 overflow-x-scroll bg-black'>
                    {
                        movies?.map((movie) => {
                            return (
                                <div className='p-5 m-3'>
                                    <MovieCard posterPath={movie.poster_path} />
                                </div>
                            )
                        })
                    }
                </div>



            </div>}
        </div>
    )
}

export default MovieList