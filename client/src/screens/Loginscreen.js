import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { loginUser} from "../actions/UserActions"
export default function Loginscreen(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    function login(){
        const user = {email , password}
        dispatch(loginUser(user))
    }
    return (
        <div>
            <div className="row justify-content-center mt-5 w-300">
                <h2>Login</h2>
                <div className="col-md-5 mt-5">
                <input 
                required 
                type="text" 
                placeholder="email" 
                className="form-control w-100" 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>

                <input 
                required 
                type="text" 
                placeholder="password" 
                className="form-control" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>

                <button onClick={login} className="btn mt-3">LOGIN</button>
                <br/>
                <a style={{textDecoration: 'none', color: 'black'}} href="/register">Click Here To Register</a>
                </div>
            </div>
        </div>
    )
}