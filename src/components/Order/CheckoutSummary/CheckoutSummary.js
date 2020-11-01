import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
const checkoutSummary = (props)=>{
    return (<div className={classes.CheckoutSummary}>
        <h1>I'm Lovin' it!</h1>
        <div style={{width:'300px',margin:'auto'}}>
            <Burger ingredients ={props.ingredients}>

            </Burger>
            <Button btnType="Danger"clicked={props.chkCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.chkContinue}>Continue</Button>
        </div>
    </div>)
}

export default checkoutSummary;