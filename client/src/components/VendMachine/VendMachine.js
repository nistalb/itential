import React, {Component} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container"

import ListSoda from "../ListSoda"
import PurchasedSoda from "../PurchasedSoda"
import AddMoney from "../AddMoney"

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

    purchaseSoda = (name) => {
        axios.put(`http://localhost:5000/soda/${name}/remove`)
        .then(res => {
            if(res.data){
                this.setState({
                    boughtSoda: res.data
                });
                this.getSodas();
            };
        })
        .catch(err => console.log(err))
    };

    addCredit = () => {
        this.setState({
            credit: 1
        });
    };

    removeCredit = () => {
        this.setState({
            credit: 0
        })
    };

    render() {
        let {sodas, boughtSoda} = this.state;
        
        return(
            <Container fluid id="home_div">
                <div id="machine">
                    <AddMoney />
                    <ListSoda sodas={sodas} purchaseSoda={this.purchaseSoda} />
                    <PurchasedSoda boughtSoda={boughtSoda} />
                </div>
            </Container>
        )
    }
}

export default VendMachine;