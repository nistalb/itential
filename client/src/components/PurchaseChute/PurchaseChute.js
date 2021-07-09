import React, {Component} from "react";

import "./PurchaseChute.css"

import Soda from "../Soda/Soda"

class PurchaseChute extends Component {

    render() {
        let bought = this.props.boughtSoda;
        
        if (bought) {
            return (
                <div id="purchaseChute"> 
                    <Soda boughtSoda={bought.foundSoda.name} />
                </div>
            );
        } else {
            return (
                <div id="purchaseChute"></div>
            );
        };
    };
};

export default PurchaseChute