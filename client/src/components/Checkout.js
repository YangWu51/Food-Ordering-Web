import React from "react";
import StripeCheckout from 'react-stripe-checkout'
export default function Checkout({subtotal}) {
    function tokenHander(token){
        console.log(token);
    }
    return (
        <div>
            <StripeCheckout 
            amount={subtotal * 100}
            shippingAddress
            token={tokenHander}
            key = 'pk_test_51QKL9mJdfw1AJeVhiMnF7Q0XYn2nwFUtyw3RUunkZNhOgKVcSfpifBjkamIfnn1YUQ426yki1blVluJ7c20ib2W900q7XMDPWk'
            currency="USD"
            >
            
                <button className="btn"> Pay Now</button>
            </StripeCheckout>
        </div>
    )
}