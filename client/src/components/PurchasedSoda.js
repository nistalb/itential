import React from "react";

const PurchasedSoda = (boughtSoda) => {
    
    let bought = boughtSoda.boughtSoda;

    return (
        <div> 
            { bought ? (
                    <div>
                        <p>{bought.foundSoda[0].name}</p>
                        <p>{bought.foundSoda[0].description}</p>
                    </div>
                
            ):(
                <p>empty</p>
            )
            }
        </div>
    )

}

export default PurchasedSoda