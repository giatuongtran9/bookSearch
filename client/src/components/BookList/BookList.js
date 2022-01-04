import React from 'react'
import './style.scss'

import { useNavigate } from 'react-router-dom'
import Display from '../Display/Display'

const BookList = ({ isbns, title, author, img, publish_year, contributors, ...props }) => {


    const contributor = contributors.toString()
    let navigate = useNavigate()


    const handleClick = () => {
        navigate('/book', { state: isbns})
    }

    return (
        <div className='BookList'>
            <Display 
                cover={img}
                title={title}
                author={author}
                contributor={contributor}
                publish={publish_year ? publish_year : 'N/A'}
                handleClick={handleClick}
            />
        </div>
    )
}

export default BookList