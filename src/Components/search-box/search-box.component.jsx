import React from 'react';
import './26.1 search-box.styles.css.css';

const SearchBox = (props)=>{
    return(
        <input className="search" type="search" placeholder="Search Monsters" onChange={props.handleChange}/>
    )
};

export default SearchBox;