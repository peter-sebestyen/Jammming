import React from "react";
import './playlist.css';

const result = {
    title: 'House of the Rising Sun',
    artist: 'FFDP'
}

function Playlist() {
    return (
        <div className='playlist'>
            <table>
                <tbody>
                    <tr>
                        <td>{result.title}
                            <br/>
                            {result.artist}
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <button>Save to Spotify</button>
    </div>
    )
}

export default Playlist;