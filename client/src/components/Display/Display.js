import React from 'react'
import './style.scss'

import NotFound from '../../assets/notfound.jpg'

const Display = ({ cover, title, author, contributor, publish, ...props}) => {

    const errorImg = (e) => {
        e.target.src = NotFound
    }

    return (
        <div className='display'>
            <img className='cover' onClick={props.handleClick} onError={errorImg} src={cover} alt="Cover"/>

            <div className='info'>
                <span className='card-author'>{author}</span>
                {contributor ? (<span className='card-contributor'>Contributors: {contributor}</span>) : null}
                <h2 className='card-title'>{title}</h2>
                <span className='card-date'>Published on: {publish}</span>
            </div>
        </div>
    )
}

export default Display