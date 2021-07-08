import React from 'react'


import "./AddMoney.css"

const AddMoney = ({addCredit}) => {
    
    
    return (
        <div id="money" onClick={() => {addCredit()}}></div>
    )
}

export default AddMoney