import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { loginUser} from "../actions/UserActions";
import Error from "../components/Error";
import Loading from "../components/example";

export default function Loginscreen(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginstate = useSelector(state => state.loginUserReducer)
    const {loading , error} = loginstate
    const dispatch = useDispatch()

    useEffect(() => {
        alert("Hi! You can try the following credentials:\n" +
            "Email: test@gmail.com\n" +
            "Password: 123\n" +
            "This account has access to the admin panel.\n" +
            "After logging in with this account, you can copy and visit this link:\n" +
            "'http://yangpizzas.com/admin'.\n" +
            "Please note: Other accounts do not have permission to access the admin panel.");
      
        if(localStorage.getItem(`currentUser`)){
            window.location.href='/'
        }
    }, [])

    function login(){
        const user = {email , password}
        dispatch(loginUser(user))
    }
    return (
        <div>
            <div className="row justify-content-center">
            <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                {loading && (<Loading/>)}
                {error && (<Error error='Invalid Credentials'/>)}

                <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>

                <div>
                <input 
                required 
                type="text" 
                placeholder="email: test@gmail.com" 
                className="form-control w-100" 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>

                <input 
                required 
                type="text" 
                placeholder="password:123" 
                className="form-control" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>

                <button onClick={login} className="btn mt-3 mb-3">LOGIN</button>
                <br/>
                <a style={{textDecoration: 'none', color: 'black'}} className="mt-2" href="/register">Click Here To Register</a>
                </div>
            </div>
            </div>
        </div>
    )
}