import React from 'react';
import './19.1 card.styles.css.css'


const Card = (props)=>{
    return(
        <div className="card-container">
            <img src={`https://robohash.org/OOC.png?set=set2&size=150x150`} alt="monster"/>
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}

export default Card;