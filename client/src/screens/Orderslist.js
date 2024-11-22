import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deliverOrder, getAllOrders} from '../actions/orderActions'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from "../components/Success";
import AdminTitle from "./AdminTitle";
import loading from "../components/example";

export default function Orderslist() {
    const dispatch = useDispatch()
    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const {loading, error, orders} = getordersstate
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
    return (
        <div>
            <AdminTitle />
            <h1>Orders list</h1>
            <div className="justify-content-center" style={{display: "flex"}}>
            <div className="justify-content-center" style={{width: '83%', display: "flex", flexDirection: "column"}}>
            <div>
                {loading && (<Loading/>)}
                {error && (<Error error='Something went wrong'/>)}

            </div>
            <table className=" table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>
                                {order.isDelivered ? (
                                    <h1> Delivered</h1>
                                ) : (
                                    <button className="btn" onClick={()=>{
                                        dispatch(deliverOrder(order._id))}}>Delivered</button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        </div>
        </div>
    )
}