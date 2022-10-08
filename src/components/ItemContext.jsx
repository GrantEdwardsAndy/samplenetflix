import React from 'react'
import'./Row.css'
const imgPath = 'https://image.tmdb.org/t/p/w500/'
const unavailable = 'https://cdn1.vectorstock.com/i/1000x1000/00/60/unavailable-sign-or-stamp-vector-29250060.jpg'


const ItemContext = ({film}) => {
  return (
    <div className='main-row'>
        <img className='row-image' src ={film.poster_path? `${imgPath}${film.poster_path}` : unavailable} alt="" />
        <main>
            <nav className='nav-row'>
          <p className='title'>{film.original_title}</p>
          <div className="rating_en">
            <p>{film.vote_average}</p>
            <p>{film.original_language} </p>
          </div>
                <p>Release date: {film.release_date} </p>

            </nav>
        </main>
    </div>

  )
}

export default ItemContext