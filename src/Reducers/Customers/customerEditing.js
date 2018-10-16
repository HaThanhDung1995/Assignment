import * as CusTypes from '../../Constants/CustomerTypes';
var initialState = {};

const customerEditing = (state = initialState, action) => {

    switch (action.type) {
        case CusTypes.EDIT_CUSTOMER:


            return action.customer;

        default: return state;
    }
}
export default customerEditing;