import React from 'react'

import "./Soda.css"

const Soda = ({boughtSoda}) => {
    
    return (
        <div id="soda">
            <p>{boughtSoda}</p>
        </div>
    )
}

export default Soda