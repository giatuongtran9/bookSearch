import React from 'react'
import './style.scss'
import Button from './Button/Button'

const SearchBar = ({ handleSubmit, handleChange, title }) => {
    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit}>
                <input className='search' type="text" onChange={handleChange} value={title} placeholder='Search' required/>
                <Button type="submit" title='Search'/>
            </form>
        </div>
    )
}

export default SearchBar