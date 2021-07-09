import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import "./ListSoda.css"

const ListSoda = ({sodas, purchaseSoda, removeCredit}) => {
    let allSoda = sodas.sodas
    
    return (
        <div id="sodaButtons">
            {   
                allSoda && allSoda.length > 0 ? (
                    (allSoda.map(soda => {
                     return (
                        <Row key={soda._id} className="sodaRow">
                            <Col xs={8}>
                                <div  className="sodaDescription">
                                    <p>{soda.name}</p>
                                    <p>Qty: {soda.vendQty}</p>
                                </div>
                            </Col>
                            <Col>
                                <Button 
                                    type="button" 
                                    variant="primary" 
                                    onClick={() => {
                                        purchaseSoda(soda.name, soda.vendQty); 
                                        removeCredit(soda.cost, soda.vendQty);}}
                                >${soda.cost}</Button>
                            </Col>
                        </Row>
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
