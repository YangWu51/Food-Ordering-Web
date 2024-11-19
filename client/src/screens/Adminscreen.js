import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Link } from "react-router-dom"; 
import Userslist from "./Userslist";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Addpizza from "./Addpizza";
import AdminTitle from "./AdminTitle";

export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate || {};

    useEffect(() => {
        if (!currentUser?.isAdmin) {
            window.location.href = '/'; 
        }
    }, [currentUser]);

    return (
        <div>
            <AdminTitle/>
            {/* <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
                    <ul className="adminfunctions">
                        <li><a href="/admin/userslist">Users List</a></li>
                        <li><Link to="/admin/pizzaslist">Pizzas List</Link></li>
                        <li><Link to="/admin/addpizza">Add New Pizza</Link></li>
                        <li><Link to="/admin/orderslist">Orders List</Link></li>
                    </ul>

                    <Routes>
                        <Route path="/admin/userslist" element={<Userslist />} />
                        <Route path="/admin/orderslist" element={<Orderslist />} />
                        <Route path="/admin/pizzaslist" element={<Pizzaslist />} />
                        <Route path="/admin/addpizza" element={<Addpizza />} />
                    </Routes>
                </div>
            </div> */}
        </div>
    );
}
