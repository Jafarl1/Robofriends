import React from 'react'
import "../style.css";

function Card({ robot }) {
    return (
        <div className='card'>
            <img src={`https://robohash.org/${robot.id}`} alt="Robot" />
            <div className='robot-info'>
                <h3>{robot.name}</h3>
                <p>{robot.email}</p>
            </div>
        </div>
    )
}

export default Card;