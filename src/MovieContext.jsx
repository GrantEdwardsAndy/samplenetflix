import React, {createContext, useState} from 'react'

export const MovieContext = createContext()

const MovieProvider = ({children}) => {
    const[movie, setMovie] = useState('')
    const[searchKey, setSearchKey] = useState('')
    const[selectMovie, setSelectMovie] = useState('')
  return (
    <MovieContext.Provider value = {{movie, setMovie, searchKey, setSearchKey, selectMovie, setSelectMovie}}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
