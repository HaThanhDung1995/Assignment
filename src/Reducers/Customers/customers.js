import * as CusTypes from '../../Constants/CustomerTypes';

var initialState = [];
var findIndex = (customers, id) => {
    var result = -1;
    customers.forEach((customer, index) => {
        if (customer.Id === id) {
            result = index;
        }
    });
    return result;
}
const customers = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case CusTypes.FETCH_CUSTOMERS:
            state = action.customers;

            return [...state];
        case CusTypes.ADD_CUSTOMER:
            state.push(action.customer);
            return [...state];
        case CusTypes.DELETE_CUSTOMER:
            
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case CusTypes.UPDATE_CUSTOMER:
            console.log(action.customer);
            index=findIndex(state,action.customer.Id);
            state[index]=action.customer;
            return [...state];    
        default: return [...state];
    }
}
export default customers;