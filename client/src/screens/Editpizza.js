import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../components/Loading';
import Error from '../components/Error';
import AdminTitle from "./AdminTitle";
import { editPizza, getPizzaById } from "../actions/pizzaActions";
import Success from "../components/Success";

export default function Editpizza() {
    const { pizzaid } = useParams();

    const [name, setName] = useState('')
    const [smallprice, setSmallprice] = useState('')
    const [mediumprice, setMediumprice] = useState('')
    const [largeprice, setLargeprice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizza, error, loading } = getpizzabyidstate
    const editpizzastate = useSelector((state) => state.editPizzaReducer)
    const {editloading, editerror, editsuccess} = editpizzastate
    const dispatch = useDispatch()

    useEffect(() => {
        if(pizza){
            if(pizza._id == pizzaid){
                setName(pizza.name)
                setDescription(pizza.description)
                setCategory(pizza.category)
                setSmallprice(pizza.prices[0]['small'])
                setMediumprice(pizza.prices[0]['medium'])
                setLargeprice(pizza.prices[0]['large'])
                setImage(pizza.image)
            }else{
                dispatch(getPizzaById( pizzaid ))

            }
        }else{
            dispatch(getPizzaById( pizzaid ))
        }

    }, [pizza, dispatch])


    function formHandler(e) {
        e.preventDefault();
        const editedpizza = {
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
        dispatch(editPizza(editedpizza))
    }

    return (
        <div>
            <AdminTitle />
            <h1>Edit Pizza</h1>

            <div className="justify-content-center" style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                <div className="justify-content-center text-start shadow-lg p-3 mb-5 bg-white rounded" style={{ display: "flex", width: '45%', flexDirection: "column", alignItems: "center" }}>

                    <div>
                        {loading && (<Loading/>)}
                        {error && (<Error error='Something went wrong'/>)}
                        {editsuccess && (<Success success= 'Pizza details edited successfully'/>)}
                    </div>
                    <form onSubmit={formHandler}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="name"
                            value={name}
                            style={{ width: '450px', border: '1px solid gray' }}
                            onChange={(e) => { setName(e.target.value) }} />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="small size price"
                            value={smallprice}
                            style={{ width: '450px', border: '1px solid gray' }}
                            onChange={(e) => { setSmallprice(e.target.value) }} />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="medium size price"
                            style={{ width: '450px', border: '1px solid gray' }}
                            value={mediumprice}
                            onChange={(e) => { setMediumprice(e.target.value) }} />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="large size price"
                            value={largeprice}
                            style={{ width: '450px', border: '1px solid gray' }}
                            onChange={(e) => { setLargeprice(e.target.value) }} />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="image url"
                            value={image}
                            style={{ width: '450px', border: '1px solid gray' }}
                            onChange={(e) => { setImage(e.target.value) }} />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="description"
                            value={description}
                            style={{ width: '450px', border: '1px solid gray' }}
                            onChange={(e) => { setDescription(e.target.value) }} />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="category"
                            value={category}
                            style={{ width: '450px', border: '1px solid gray' }}
                            onChange={(e) => { setCategory(e.target.value) }} />
                        <button className="btn mt-3" type="submit">Edit Pizza</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
