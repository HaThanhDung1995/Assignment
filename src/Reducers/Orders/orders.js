import * as OTypes from '../../Constants/OrderTypes';
var initialState = [];
var findIndex = (orders, id) => {
    var result = -1;
    orders.forEach((order, index) => {
        if (order.Id === id) {
            result = index;
        }
    });
    return result;
}
const orders = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case OTypes.FETCH_ORDERS:
            state = action.orders;
           
            return [...state];
        case OTypes.ADD_ORDER:
            
            state.push(action.order);
            return [...state];
        case OTypes.DELETE_ORDER:
            
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case OTypes.UPDATE_ORDER:
            
            index=findIndex(state,action.order.Id);
            state[index]=action.order;
            return [...state];    
        default: return [...state];
    }
}
export default orders;