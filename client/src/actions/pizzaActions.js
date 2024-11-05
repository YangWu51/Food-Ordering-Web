import axios from "axios";
// dispatch function:
// getAllPizzas: action name
export const getAllPizzas=()=>dispatch=>{
    // perform atcions:
    dispatch({type: 'GET_PIZZAS_REQUEST'})
    try{
        const response = axios.get('./api/pizzas/getpizzas')
        console.log(``);
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload : response.data})
    }catch(error){
        dispatch({type: 'GET_PIZZAS_FAILED', payload : error})
    }
}