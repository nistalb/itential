import React, {useState} from "react";

import "./PurchaseChute.css"

import Soda from "../Soda/Soda"

const PurchaseChute = ({boughtSoda, setBoughtSoda}) => {

    if(boughtSoda) {
        return (
            <div className="purchaseChute"> 
                <Soda boughtSoda={boughtSoda.foundSoda.name} removeSoda={setBoughtSoda}/>
            </div>
        );
    } else {
        return (
            <div className="purchaseChute"></div>
        );
    };
};

export default PurchaseChute