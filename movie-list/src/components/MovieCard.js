import React from 'react'
import { IMAGE_CARD } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44'>
        <img alt="cardpic" src={IMAGE_CARD + posterPath } />
    </div>
  )
}

export default MovieCard