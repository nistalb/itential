import React, {Component} from "react";
import axios from "axios";

// Bootstrap
import Container from "react-bootstrap/Container"

// Components
import ListSoda from "../ListSoda/ListSoda"
import PurchasedSoda from "../PurchasedSoda/PurchasedSoda"
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

    purchaseSoda = (name) => {
        if (this.state.credit >= 1) {
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

    removeCredit = (cost) => {
        if (this.state.credit > 0) {
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
                <div id="machine">
                    <ListSoda sodas={sodas} purchaseSoda={this.purchaseSoda} removeCredit={this.removeCredit}/>
                    <PurchasedSoda boughtSoda={boughtSoda} />
                    <Credit credit={credit} />
                </div>
                <AddMoney addCredit={this.addCredit}/>
            </Container>
        );
    };
};

export default VendMachine;