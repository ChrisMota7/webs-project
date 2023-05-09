import React from 'react';
import "./Card.css"

const Card = (props) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.image} alt={props.alterImg} />
                    <p class="title">{props.teamName}</p>
                </div>
                
                <div class="flip-card-back">
                    <p class="title">BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
    )
}

export default Card;