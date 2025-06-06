import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URL || "";

export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    try {
        await axios.post(`${API}/api/users/register`, user);
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED' });
    }
};

export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    try {
        const response = await axios.post(`${API}/api/users/login`, user);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
    }
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
};

export const getAllUsers = () => async dispatch => {
    dispatch({ type: 'GET_USERS_REQUEST' });
    try {
        const response = await axios.get(`${API}/api/users/getallusers`);
        dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_USERS_FAILED', payload: error });
    }
};

export const deleteUser = (userid) => async dispatch => {
    try {
        await axios.post(`${API}/api/users/deleteuser`, { userid });
        alert('User deleted successfully');
        window.location.reload();
    } catch (error) {
        alert('Something went wrong');
        console.log(error);
    }
};
