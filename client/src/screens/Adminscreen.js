import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminTitle from "./AdminTitle";
import Userslist from "./Userslist";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";


export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser?.isAdmin) {
            window.location.href = '/'; 
        }
        if (window.location.pathname === "/admin") {
            navigate("/admin/userslist", { replace: true });
        }
    }, [currentUser, navigate]);
 

    return (
        <div>
            <AdminTitle />

           
            <Routes>

                <Route path="/admin/userslist" element={<Userslist />} />
                <Route path="/admin/orderslist" element={<Orderslist />} />
                <Route path="/admin/pizzaslist" element={<Pizzaslist />} />
                <Route path="/admin/addpizza" element={<Addpizza />} />
                <Route path="/admin/editpizza/:pizzaid" element={<Editpizza />} />
    
            </Routes>
        </div>
    );
}
