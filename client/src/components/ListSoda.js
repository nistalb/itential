import React from 'react'

const ListSoda = ({sodas, purchaseSoda}) => {
    let allSoda = sodas.sodas
    
    return (
        <ul>
            {   
                allSoda && allSoda.length > 0 ? (
                    (allSoda.map(soda => {
                     return (
                        <li key={soda._id} onClick={() => purchaseSoda(soda.name)}>{soda.name} {soda.cost} {soda.vendQty}</li>
                         )
                       })
                    )
                ):
                (<li>No Sodas available</li>)
            }             
        </ul>
    )
}

export default ListSoda
