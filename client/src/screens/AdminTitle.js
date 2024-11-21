import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Link, useLocation } from "react-router-dom"; 
import Userslist from "./Userslist";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";

export default function AdminTitle() {
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate || {};

    const location = useLocation(); 

    useEffect(() => {
        if (!currentUser?.isAdmin) {
            window.location.href = '/'; 
        }
    }, [currentUser]);

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
                    <ul className="adminfunctions">
                        <li>
                            <Link 
                                to="/admin/userslist"
                                style={{
                                    fontWeight: location.pathname === "/admin/userslist" ? "bold" : "normal"
                                }}
                            >
                                Users List
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/admin/pizzaslist"
                                style={{
                                    fontWeight: location.pathname === "/admin/pizzaslist" ? "bold" : "normal"
                                }}
                            >
                                Pizzas List
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/admin/addpizza"
                                style={{
                                    fontWeight: location.pathname === "/admin/addpizza" ? "bold" : "normal"
                                }}
                            >
                                Add New Pizza
                            </a>
                        </li>
                        <li>
                            <Link 
                                to="/admin/orderslist"
                                style={{
                                    fontWeight: location.pathname === "/admin/orderslist" ? "bold" : "normal"
                                }}
                            >
                                Orders List
                            </Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route path="/admin/userslist" element={<Userslist />} />
                        <Route path="/admin/orderslist" element={<Orderslist />} />
                        <Route path="/admin/pizzaslist" element={<Pizzaslist />} />
                        <Route path="/admin/addpizza" element={<Addpizza />} />
                        <Route path="/admin/editpizza/:pizzaid" element={<Editpizza />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
}
