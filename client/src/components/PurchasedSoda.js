import React from "react";

const PurchasedSoda = (boughtSoda) => {
    
    let bought = boughtSoda.boughtSoda;

    return (
        <div> 
            { bought ? (
                    <div>
                        <p>{bought.foundSoda.name}</p>
                        <p>{bought.foundSoda.description}</p>
                    </div>
                
            ):(
                <p>empty</p>
            )
            }
        </div>
    )

}

export default PurchasedSoda