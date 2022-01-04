import React from 'react'
import './style.scss'

const Button = (props) => {
    return (
        <div className='wrapper'>
            <button type={props.type} onClick={props.handleClick} className='btn'>{props.title}</button>
        </div>
    )
}

export default Button