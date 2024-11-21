import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTitle from "./AdminTitle";
import { addpizza } from "../actions/pizzaActions";
import Pizza from '../components/Pizza';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from "../components/Success";
export default function Addpizza() {
    const [name, setName] = useState('')
    const [smallprice, setSmallprice] = useState('')
    const [mediumprice, setMediumprice] = useState('')
    const [largeprice, setLargeprice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()
    const addpizzastate = useSelector(state=>state.addPizzaReducer)
    const {success, error, loading} = addpizzastate
    function formHandler(e){
        e.preventDefault();
        const pizza = {
            name, 
            image,
            description,
            category,
            prices:{
                small : smallprice,
                medium : mediumprice,
                large : largeprice
            }
        }
        console.log(pizza);
        dispatch(addpizza(pizza))
    }

    return (
        <div>
            <AdminTitle />
            <div  className="justify-content-center" style={{display: 'flex',flexDirection: "column", alignItems: "center"}}>
            <div className="justify-content-center text-start shadow-lg p-3 mb-5 bg-white rounded" style={{ display: "flex" , width: '45%', flexDirection: "column", alignItems: "center"}}>
            
            <div>
            {loading && (<Loading/>)}
            {success && (<Success success='New Pizza Added Successfully'/>)}
            {error && (<Error error = 'Something went wrong'/>)}
            </div>
            <form onSubmit={formHandler}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="name" 
                    value={name} 
                    style={{width: '450px', border: '1px solid gray'}}
                    onChange={(e) => { setName(e.target.value) }} />
                    <input
                    className="form-control"
                    type="text"
                    placeholder="small size price" 
                    value={smallprice} 
                    style={{width: '450px', border: '1px solid gray'}}
                    onChange={(e) => { setSmallprice(e.target.value) }} />
                    <input
                    className="form-control"
                    type="text"
                    placeholder="medium size price" 
                    style={{width: '450px', border: '1px solid gray'}}
                    value={mediumprice} 
                    onChange={(e) => { setMediumprice(e.target.value) }} />
                    <input
                    className="form-control"
                    type="text"
                    placeholder="large size price" 
                    value={largeprice} 
                    style={{width: '450px', border: '1px solid gray'}}
                    onChange={(e) => { setLargeprice(e.target.value) }} />
                    <input
                    className="form-control"
                    type="text"
                    placeholder="image url" 
                    value={image} 
                    style={{width: '450px', border: '1px solid gray'}}
                    onChange={(e) => { setImage(e.target.value) }} />
                    <input
                    className="form-control"
                    type="text"
                    placeholder="description" 
                    value={description} 
                    style={{width: '450px', border: '1px solid gray'}}
                    onChange={(e) => { setDescription(e.target.value) }} />
                    <input
                    className="form-control"
                    type="text"
                    placeholder="category" 
                    value={category} 
                    style={{width: '450px', border: '1px solid gray'}}
                    onChange={(e) => { setCategory(e.target.value) }} />
                    <button className="btn mt-3" type="submit">Add Pizza</button>
            </form>
            </div>
            </div>
        </div>
    )
}