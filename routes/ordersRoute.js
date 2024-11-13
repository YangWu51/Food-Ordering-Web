const express = require("express")
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51QKL9mJdfw1AJeVhp9ZH9Q2f3gT5ZItXqsGbg2TdIyrxQ5boYS68SKnrSMJY3piBiKqlo7FKbd5ObQ8gT1N9HDgL00jtjSkxYd")
router.post("/placeorder" , async(req, res) => {
    const {token, subtotal, currentUser, cartItems} = req.body
    try{
        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })
        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency : 'USD',
            customer : customer.id,
            receipt_email : token.email

        }, {
            idempotencyKey : uuidv4()
        })
        if(payment){
            res.send('Payment Done')
        }else{
           res.send('payment failed')
        }
    }catch(error){
        return res.status(400).json({message : 'Something went wrong'})
    }
});

module.exports = router
    