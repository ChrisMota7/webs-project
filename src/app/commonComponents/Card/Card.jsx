import React from 'react';
import "./Card.css"

const Card = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.image} alt={props.alterImg} />
                    <p className="title">{props.teamName}</p>
                </div>
                
                <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
    )
}

export default Card;