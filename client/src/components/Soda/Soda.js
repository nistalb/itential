import React from 'react'

import "./Soda.css"

const Soda = ({boughtSoda, removeSoda}) => {
    
    return (
        <div id="soda" onClick={() => {
            removeSoda(null)}} >
            <p>{boughtSoda}</p>
        </div>
    )
};

export default Soda