import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

const imgPath = 'https://image.tmdb.org/t/p/w500/'


const Banner = () => {
    const { selectMovie } = useContext(MovieContext)
  return (
      <div>
          <div className='banner' style={{backgroundImage: `url(${imgPath}${selectMovie.backdrop_path})`}}>
              <nav>
                  <p>{ selectMovie.overview}</p>
                  <p>{selectMovie.title} </p>
              </nav>

            
          </div>
    </div>
  )
}

export default Banner