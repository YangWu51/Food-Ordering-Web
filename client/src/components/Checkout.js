import React from "react";
import {useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from "../actions/orderActions";
export default function Checkout({subtotal}) {
    const dispatch = useDispatch()
    function tokenHander(token){
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
    return (
        <div>
            <StripeCheckout 
            amount={subtotal * 100}
            shippingAddress
            billingAddress
            token={tokenHander}
            stripeKey = 'pk_test_51QKL9mJdfw1AJeVhiMnF7Q0XYn2nwFUtyw3RUunkZNhOgKVcSfpifBjkamIfnn1YUQ426yki1blVluJ7c20ib2W900q7XMDPWk'
            currency="USD"
            > 
                <button className="btn"> Pay Now</button>
            </StripeCheckout>
        </div>
    )
}