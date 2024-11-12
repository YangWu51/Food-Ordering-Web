import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
export default function Cartscreen(){
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item)=> x+item.price , 0)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{fontSize: '45px'}}>My Cart</h2>

                    {cartItems.map(item=>{
                        return <div className="flex-container">
                        <div className="text-start m-1 w-100">
                            <h1>{item.name} [{item.size}]</h1>
                            <h1>Price : {item.quantity} * {item.prices[0][item.size]} = {item.price}</h1>
                            <h1 style={{display: 'inline'}}>Quantity : </h1>
                            <i className="fa-solid fa-plus" onClick={()=>{dispatch(addToCart(item, Number(item.quantity)+1, item.size ))}}></i>
                            <b>{item.quantity}</b>
                            <i className="fa-solid fa-minus" onClick={()=>{dispatch(addToCart(item, Number(item.quantity)-1, item.size))}}></i>
                            <hr/>
                        </div>

                        <div className="m-1 w-100">
                            <img src={item.image} style={{height: '80px' , height: '80px'}}/>
                        </div>

                        <div className="m-1 w-100">
                        <i className="fa-solid fa-trash mt-5" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                        </div>
                                 </div>
                    })}

                </div>
                <div className="col-md-4 text-end">
                    <h2 style={{fontSize:'45px'}}>subtotal : {subtotal} /-</h2>
                        <Checkout subtotal = {subtotal}/>
                </div>


            </div>
        </div>
    )

}