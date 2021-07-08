import React from 'react'
import Button from 'react-bootstrap/Button'

const ListSoda = ({sodas, purchaseSoda}) => {
    let allSoda = sodas.sodas
    
    return (
        <div>
            {   
                allSoda && allSoda.length > 0 ? (
                    (allSoda.map(soda => {
                     return (
                        <p>
                            <Button key={soda._id} type="button" variant="primary" onClick={() => purchaseSoda(soda.name)}>{soda.name} {soda.cost} {soda.vendQty} </Button>
                        </p>
                         )
                       })
                    )
                ):
                (<li>No Sodas available</li>)
            }             
        </div>
    )
}

export default ListSoda
