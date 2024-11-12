import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer);
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate || {};

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded" style={{ maxWidth: '100vw' }}>
                <a className="navbar-brand" href="/">YANG PIZZA</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {currentUser ? (
                            <li className="nav-item dropdown mt-2">
                                <a style={{color: 'black'}}
                                    className="btn btn-secondary dropdown-toggle nav-link"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {currentUser.name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="#">Orders</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
