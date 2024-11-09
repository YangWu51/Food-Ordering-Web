export const addToCart=(pizza, quantity, size)=>(dispatch, getState)=>{

    var cartItem = {
        name : pizza.name,
        _id : pizza._id,
        image : pizza.image,
        size : size,
        quantity : quantity,
        prices : pizza.prices,
        price : pizza.prices[0][size]*quantity
    }
    dispatch({type: 'ADD_TO_CART', payload : cartItem})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}