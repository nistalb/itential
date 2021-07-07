import React, {Component} from "react";
import axios from "axios";

import ListSoda from "./ListSoda"

class VendMachine extends Component {

    state = {
        sodas: []
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

    

    render() {
        let {sodas} = this.state;
        return(
            <div>
                <h1>Hello World!</h1>
                <p>pox</p>
                <ListSoda sodas={sodas} />
            </div>
        )
    }
}

export default VendMachine;