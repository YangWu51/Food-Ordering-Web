import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTitle from "./AdminTitle";
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deleteUser, getAllUsers } from "../actions/UserActions";
import { getAllOrders } from "../actions/orderActions";
export default function Userslist() {
    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const {error, loading, users} = usersstate
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <div>
            <AdminTitle/>
            <div className="justify-content-center" style={{display: 'flex'}}>
            <div  
            className="justify-content-center" style={{width: '83%', display: "flex", flexDirection: "column"}}>
                <div>
                {loading && (<Loading/>)}
                {error && (<Error error='Something went wrong'/>)}
                </div>
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><i className=" fa fa-trash" onClick={() => {dispatch(deleteUser(user._id))}}></i></td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}