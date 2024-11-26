import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import AdminTitle from "./AdminTitle";
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";

export default function Pizzaslist() {
    const dispatch = useDispatch();
    const pizzasstate = useSelector(state => state.getAllPizzasReducer);
    const { pizzas, error, loading } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    return (
        <div>
            <AdminTitle />
            {loading && <Loading />}
            {error && <Error error='Something went wrong' />}
            <div className="justify-content-center" style={{ display: "flex" }}>
                <table
                    className="table table-bordered"
                    style={{
                        borderColor: "black",
                        width: '83%'
                    }}
                >
                    <thead >
                        <tr className='table-dark'>
                            <th style={{ borderColor: "black"}}>Name</th>
                            <th style={{ borderColor: "black"}}>Prices</th>
                            <th style={{ borderColor: "black"}}>Category</th>
                            <th style={{ borderColor: "black"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzas && pizzas.map((pizza) => (
                            <tr key={pizza._id}>
                                <td style={{ borderColor: "black"}}>{pizza.name}</td>
                                <td style={{ borderColor: "black"}}>
                                    Small: {pizza.prices[0]['small']} <br />
                                    Medium: {pizza.prices[0]['medium']} <br />
                                    Large: {pizza.prices[0]['large']}
                                </td>
                                <td style={{ borderColor: "black"}}>{pizza.category}</td>
                                <td style={{ borderColor: "black"}}>
                                    <i className=' fa fa-trash m-1' onClick={() => {dispatch(deletePizza(pizza._id))}}></i>
                                    <Link to={`/admin/editpizza/${pizza._id}`}><i className=' fa fa-edit m-1'></i></Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
