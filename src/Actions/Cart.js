import * as types from '../Constants/ActionType';
export const AddToCart =(product,quantity)=>{
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage =(message)=>{
    return {
        type:types.CHANGE_MESSAGE,
        message
    }
}
export const removeCart=(id)=>{
    return {
        type:types.DELETE_PRODUCT_IN_CART,
        id
    }
}
export const updateCart=(product,quantity)=>{
    return {
        type:types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}