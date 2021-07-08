import React from "react";

import "./PurchasedSoda.css"

const PurchasedSoda = (boughtSoda) => {
    
    let bought = boughtSoda.boughtSoda;

    return (
        <div id="purchaseChute"> 
            { bought && (
                <div id="soda">
                    <p>{bought.foundSoda.name}</p>
                </div>
            )}
        </div>
    )

}

export default PurchasedSoda