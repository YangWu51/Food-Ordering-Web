import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URL;

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' });
    try {
        const response = await axios.get(`${API}/api/pizzas/getallpizzas`);
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error });
    }
};

export const getPizzaById = (pizzaid) => async dispatch => {
    dispatch({ type: 'GET_PIZZABYID_REQUEST' });
    try {
        const response = await axios.post(`${API}/api/pizzas/getpizzabyid`, { pizzaid });
        dispatch({ type: 'GET_PIZZABYID_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_PIZZABYID_FAILED', payload: error });
    }
};

export const addpizza = (pizza) => async dispatch => {
    dispatch({ type: 'ADD_PIZZA_REQUEST' });
    try {
        await axios.post(`${API}/api/pizzas/addpizza`, { pizza });
        dispatch({ type: 'ADD_PIZZA_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
    }
};

export const editPizza = (editedpizza) => async dispatch => {
    dispatch({ type: 'EDIT_PIZZA_REQUEST' });
    try {
        await axios.post(`${API}/api/pizzas/editpizza`, { editedpizza });
        dispatch({ type: 'EDIT_PIZZA_SUCCESS' });
        window.location.href = '/admin/pizzaslist';
    } catch (error) {
        dispatch({ type: 'EDIT_PIZZA_FAILED', payload: error });
    }
};

export const deletePizza = (pizzaid) => async dispatch => {
    try {
        await axios.post(`${API}/api/pizzas/deletepizza`, { pizzaid });
        alert('Pizza Deleted Successfully');
        window.location.reload();
    } catch (error) {
        alert('Something went wrong');
        console.log(error);
    }
};
