import React from 'react'
import Card from "./Card";
import "../style.css"

function CardList({ robots }) {
    return (
        <div className="cardlist">
            {
                robots.length > 0 ?
                    robots.map((robot, i) => (
                        <Card robot={robot} key={i} />
                    ))
                    : <div className="no-data">
                        <h2>
                            Unfortunately, there were no robots with suitable data.
                        </h2>
                    </div>
            }
        </div>
    )
}

export default CardList;