import React, {Component} from "react";

import "./PurchaseChute.css"

import Soda from "../Soda/Soda"

class PurchaseChute extends Component {

    state = {
        showSoda: false,
    };

    
    
    render() {
        let bought = this.props.boughtSoda;
        
        if (bought) {
            return (
                <div class="purchaseChute"> 
                    <Soda boughtSoda={bought.foundSoda.name} />
                </div>
            );
        } else {
            return (
                <div class="purchaseChute"></div>
            );
        };
    };
};

export default PurchaseChute