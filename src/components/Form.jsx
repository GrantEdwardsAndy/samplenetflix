import React, {useState, useContext} from 'react'
import { MovieContext } from '../MovieContext'
import './Row.css'

const Form = () => {
    const {setSearchKey}=useContext(MovieContext)
    const [watch, setWatch]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchKey(watch)
        setWatch('')
    }
  return (
    <div>
        <form action=""onSubmit = {handleSubmit}>

            <input className='input-text' type="text" placeholder='search...' required value={watch} onChange={(e)=> setWatch(e.target.value)}/>

            <input className='submit_button' type="submit" value='submit' />
        </form>
    </div>
  )
}

export default Form