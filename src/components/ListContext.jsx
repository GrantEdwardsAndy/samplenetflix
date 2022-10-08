import React, {useEffect, useContext} from 'react'
import {MovieContext} from '../MovieContext'
import ItemContext from './ItemContext'
import '../App.css'

const ListContext = () => {
    const url = 'https://api.themoviedb.org/3/'
    const join = '/movie?api_key=691cf67c79f836aa587213c1fae4c37e&query='
    const {movie, setMovie,searchKey, setSearchKey, selectMovie, setSelectMovie} = useContext(MovieContext)

    useEffect(() => {
       const movieReview = async() => {
        const type = searchKey ? 'search':'discover'
        const response = await fetch (`${url}${type}${join}${searchKey}`)
        const movie = await response.json()
        setMovie(movie.results)
        console.log(movie.results)
        setSelectMovie(movie.results[0])
       } 

    movieReview()
    }, [setSelectMovie, setMovie, searchKey]);

    if (!movie || movie.length === 0)
    return 'loading'
  return ( 
    <div className="main">
        {movie.map((film)=>(
            <ItemContext key= {film.id} film={film} />
        ))}

    </div>
  )
}

export default ListContext