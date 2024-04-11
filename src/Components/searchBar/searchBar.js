import React from 'react';
import './searchBar.css';

function SearchBar() {



    return (
        <div className='searchBar'>
            <input placeholder='Enter a Song or Artist'/>
            <button>Search</button>
        </div>
    )
};

export default SearchBar;