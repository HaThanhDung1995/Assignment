import * as types from './../Constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data :[];
const Cart = (state=initialState,action)=>{
    var {product,quantity}=action;
    var index =-1;
    switch(action.type){
        case types.ADD_TO_CART:
        index = findProductInCart(state, product);
        
        if (index !== -1) {
            state[index].quantity += quantity;
        } else {
            state.push({
                product,
                quantity
            });
        }
        localStorage.setItem('CART',JSON.stringify(state));
        
        
        return [...state];
        case types.DELETE_PRODUCT_IN_CART:
        
            index = findProductInCart2(state,action.id);
            if(index !==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
        index=findProductInCart(state,product);
        if(index!==-1){
            state[index].quantity=quantity;
        }
        localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}
var findProductInCart = (cart,product)=>{
    var index=-1;
    if(cart.length > 0){
        for(var i = 0;i<cart.length;i++){
            if(cart[i].product.Id === product.Id){
                index=i;
                break;
            }
        }
    }
    return index;
}
var findProductInCart2 = (cart,id)=>{
    var index=-1;
    if(cart.length > 0){
        for(var i = 0;i<cart.length;i++){
            if(cart[i].product.Id === id){
                index=i;
                break;
            }
        }
    }
    return index;
}



export default Cart;