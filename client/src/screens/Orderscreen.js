import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Orderscreen() {
    const dispatch = useDispatch();
    const orderstate = useSelector((state) => state.getUserOrdersReducer);
    const { orders, error, loading } = orderstate;

    useEffect(() => {
        dispatch(getUserOrders());
    }, []);

    return (
        <div className="row justify-content-center">
            <h2 style={{ fontSize: '45px' }}>My Orders</h2>
            <div className="col-md-10 shadow-lg p-3 mb-5 bg-white rounded">
                {loading && <Loading />}
                {error && <Error error="Something went wrong" />}
                {orders && orders.map((order) => (
                    <div className="row mb-4 d-flex" key={order._id}>
                        {/* Items Column */}
                        <div className="col-md-4 text-start p-2 flex-grow-1" style={{ backgroundColor: "#d9dbda" }}>
                            <h2 style={{ fontSize: '25px' }}>Items</h2>
                            <hr />
                            {order.orderItems.map((item, index) => (
                                <p key={index}>
                                    {item.name} [{item.size}] * {item.quantity} = {item.price}
                                </p>
                            ))}
                        </div>

                        {/* Address Column */}
                        <div className="col-md-4 text-start p-2 flex-grow-1" style={{ backgroundColor: "#daf0e0" }}>
                            <h2 style={{ fontSize: '25px' }}>Address</h2>
                            <hr />
                            <p>Street: {order.shippingAddress.street}</p>
                            <p>City: {order.shippingAddress.city}</p>
                            <p>Country: {order.shippingAddress.country}</p>
                            <p>ZipCode: {order.shippingAddress.pincode}</p>
                        </div>

                        {/* Order Info Column */}
                        <div className="col-md-4 text-start p-2 flex-grow-1" style={{ backgroundColor: "#d9dbda" }}>
                            <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                            <hr />
                            <p>Order Amount: {order.orderAmount}</p>
                            <p>Date: {order.createdAt.substring(0, 10)}</p>
                            <p>Transaction: {order.transactionId}</p>
                            <p>Order Id: {order._id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
