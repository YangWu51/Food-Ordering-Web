import axios from "axios";
// dispatch function:
// getAllPizzas: action name
export const getAllPizzas=()=>async dispatch=>{
    // perform atcions:
    dispatch({type: 'GET_PIZZAS_REQUEST'})
    try{
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response);
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload : response.data})
    }catch(error){
        dispatch({type: 'GET_PIZZAS_FAILED', payload : error})
    }
}