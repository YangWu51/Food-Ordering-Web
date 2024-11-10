import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from "../actions/UserActions"
export default function Registerscreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const dispatch = useDispatch()
    function register(){
        if(password != cpassword){
            alert('passwords not matched')
        }else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>

                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                        <input type="text" 
                        placeholder="password" 
                        className="form-control" 
                        value={password}
                        required
                        onChange={(e)=>{setPassword(e.target.value)}}/>

                        <input type="text" placeholder="confirm password" className="form-control" value={cpassword} required onChange={(e)=>{setCPassword(e.target.value)}}/>
                        <button onClick={register} className="btn mt-3">REGISTER</button>
                    </div>

                </div>

            </div>
        </div>
    )
}