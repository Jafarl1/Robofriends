import React from 'react'
import "../style.css";

function Card({ robot: {name, email, id} }) {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${id}`} alt="Robot" />
            <div className='robot-info'>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;