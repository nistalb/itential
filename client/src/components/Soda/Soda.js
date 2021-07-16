import React from 'react'

import "./Soda.css"

const Soda = ({boughtSoda, setBoughtSoda}) => {
    
    return (
        <div id="soda" onClick={() => {
            setBoughtSoda(null)}} >
            <p>{boughtSoda}</p>
        </div>
    )
};

export default Soda