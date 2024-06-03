import React from 'react';
import './searchResults.css';

const result = {
    title: 'Highway to Hell',
    artist: 'AC/DC',
    
}

function SearchResults() {
    return (
        <div className='searchResults'>
            <table>
                <thead>
                    <td>Results</td>
                </thead>
                <tbody>
                    <tr>
                        <td>{result.title}
                            <br/>
                            {result.artist}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults;