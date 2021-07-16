import React, {useState, useEffect} from "react";
import axios from "axios";

// Bootstrap
import {Container, Row, Col} from "react-bootstrap"

// Components
import ListSoda from "../ListSoda/ListSoda"
import PurchaseChute from "../PurchaseChute/PurchaseChute"
import AddMoney from "../AddMoney/AddMoney"
import Credit from "../Credit/Credit"

// css
import "./VendMachine.css"

const VendMachine = () => {

    const [sodas, setSodas] = useState([]);
    const [boughtSoda, setBoughtSoda] = useState(null);
    const [credit, setCredit] = useState(0)
    

    useEffect(() => {
        axios.get('http://localhost:5000/soda')
            .then(res => {
                if(res.data){
                    setSodas(res.data)
                    };
            })
            .catch(err => console.log(err))
    });

    const purchaseSoda = (name, qty, cost) => {
        if (credit >= cost && qty !== 0) {
            axios.put(`http://localhost:5000/soda/${name}/remove`)
            .then(res => {
                if(res.data){
                    setBoughtSoda(res.data);
                };
            })
            .catch(err => console.log(err));
        };
    };

    const addCredit = () => {
        setCredit(credit + 1);
    };

    const removeCredit = (cost, qty) => {
        if (credit >= cost && qty !== 0) {
            setCredit(credit - cost);
        };
    };

    return(
        <Container fluid id="home_div">
            <Row id="homeRow">
                <Col id="moneyCol">
                    <AddMoney addCredit={addCredit}/>
                </Col>
                <Col id="machineCol">
                    <div id="machine">
                        <ListSoda sodas={sodas} purchaseSoda={purchaseSoda} removeCredit={removeCredit}/>
                        <Credit credit={credit} />
                        <PurchaseChute boughtSoda={boughtSoda} setBoughtSoda={setBoughtSoda} />
                    </div>
                </Col>
            </Row>                               
        </Container>
        
    );

};

export default VendMachine;