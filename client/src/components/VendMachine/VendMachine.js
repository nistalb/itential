import React, {Component} from "react";
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

class VendMachine extends Component {

    state = {
        sodas: [],
        boughtSoda: null,
        credit: 0
    };

    componentDidMount(){
        this.getSodas();
    };

    getSodas = () => {
        axios.get('http://localhost:5000/soda')
            .then(res => {
                if(res.data){
                    this.setState({
                        sodas: res.data
                    });
                };
            })
            .catch(err => console.log(err))
    };

    purchaseSoda = (name, qty) => {
        if (this.state.credit >= 1 && qty !== 0) {
            axios.put(`http://localhost:5000/soda/${name}/remove`)
            .then(res => {
                if(res.data){
                    this.setState({
                        boughtSoda: res.data
                    });
                    this.getSodas();
                };
            })
            .catch(err => console.log(err));
        };
    };

    addCredit = () => {
        let credits = this.state.credit + 1
        this.setState({
            credit: credits
        });
    };

    removeCredit = (cost, qty) => {
        if (this.state.credit > 0 && qty !== 0) {
            let credits = this.state.credit - cost
            this.setState({
                credit: credits
            });
        };
    };

    render() {
        let {sodas, boughtSoda, credit} = this.state;
        
        return(
            <Container fluid id="home_div">
                <Row id="homeRow">
                    <Col id="moneyCol">
                        <AddMoney addCredit={this.addCredit}/>
                    </Col>
                    <Col id="machineCol">
                        <div id="machine">
                            <ListSoda sodas={sodas} purchaseSoda={this.purchaseSoda} removeCredit={this.removeCredit}/>
                            <Credit credit={credit} />
                            <PurchaseChute boughtSoda={boughtSoda} />
                        </div>
                    </Col>
                </Row>                               
            </Container>
            
        );
    };
};

export default VendMachine;