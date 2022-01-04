import React, { useState, useEffect } from 'react'
import './style.scss';

import { useLocation, useNavigate } from 'react-router-dom'

import Button from '../SearchBar/Button/Button';


import NotFound from '../../assets/notfound.jpg'

import Display from '../Display/Display'


const BookDetail = (props) => {
    let state = useLocation()
    let navigate = useNavigate()

    const [data, setData] = useState({
        author: [],
        cover: {},
        title: '',
        publish: ''
    })

    const [container, setContainer] = useState([])

    const [err, setErr] = useState('')

    let isbns = state.state

    const fetchData = (isbn) => {
        fetch('/isbn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isbn: isbn })
        })
        .then(res => res.json())
        .then(result => {
            setData({...data, 
                author: Object.values(result.records)[0].data.authors ? Object.values(result.records)[0].data.authors[0].name : 'No Author',
                cover: Object.values(result.records)[0].data.cover,
                title: Object.values(result.records)[0].data.title,
                publish: Object.values(result.records)[0].data.publish_date
            })

            setContainer(arr => [...arr, {
                author: Object.values(result.records)[0].data.authors ? Object.values(result.records)[0].data.authors[0].name : 'No Author',
                cover: Object.values(result.records)[0].data.cover,
                title: Object.values(result.records)[0].data.title,
                publish: Object.values(result.records)[0].data.publish_date
            }])
        })
    }

    useEffect(() => {

        if (isbns) {
            // isbns.map(isbn => {
            //     fetchData(isbn)
            // })

            Promise.all(isbns.map(isbn => {
                fetchData(isbn)
            }))
        } else {
            setErr('NO ISBN FOUND!')
        }
    }, [])

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='BookDetail'>
            <h1 className='add'>Additional Edition</h1>
            <Button handleClick={handleClick} title="Go back" />
            <div className='container'>
                <span className='error'>{err}</span>
                {container && (container.map((a, i) => {
                    return (
                        <div className='detail'>
                            <Display 
                                key={i}
                                cover={a.cover ? a.cover.large : NotFound}
                                title={a.title}
                                author={a.author ? a.author : 'No Author'}
                                publish={a.publish} />
                            </div>
                    )
                }))}
            </div>
        </div>
    )
}

export default BookDetail