import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URL;

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
        const response = await axios.post(`${API}/api/orders/placeorder`, {
            token, subtotal, currentUser, cartItems
        });
        dispatch({ type: 'PLACE_ORDER_SUCCESS' });
        console.log(response);
    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAILED' });
        console.log(error);
    }
};

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({ type: 'GET_USER_ORDERS_REQUEST' });
    try {
        const response = await axios.post(`${API}/api/orders/getuserorders`, { userid: currentUser._id });
        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
    }
};

export const getAllOrders = () => async (dispatch) => {
    dispatch({ type: 'GET_ALLORDERS_REQUEST' });
    try {
        const response = await axios.get(`${API}/api/orders/getallorders`);
        dispatch({ type: 'GET_ALLORDERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_ALLORDERS_FAILED', payload: error });
    }
};

export const deliverOrder = (orderid) => async dispatch => {
    try {
        const response = await axios.post(`${API}/api/orders/deliverorder`, { orderid });
        alert('Order Delivered');
        const orders = await axios.get(`${API}/api/orders/getallorders`);
        dispatch({ type: 'GET_ALLORDERS_SUCCESS', payload: orders.data });
    } catch (error) {
        console.log(error);
    }
};
