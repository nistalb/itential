import React, {Component} from "react";
import axios from "axios";

import ListSoda from "./ListSoda"
import PurchasedSoda from "./PurchasedSoda"
import AddMoney from "./AddMoney"

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
            <div>
                <h1>Hello World!</h1>
                <AddMoney />
                <ListSoda sodas={sodas} purchaseSoda={this.purchaseSoda} />
                <PurchasedSoda boughtSoda={boughtSoda} />
            </div>
        )
    }
}

export default VendMachine;