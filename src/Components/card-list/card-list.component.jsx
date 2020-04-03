import React from 'react';
import Card from '../card/card.component';

import './18.3 card-list.styles.css.css';

const CardList = (props)=>{    
    return(
        <div className="card-list">
            {props.monsters.map(monster=> <Card key={monster.id} monster={monster}/> )}
        </div>
    )
};

export default CardList;