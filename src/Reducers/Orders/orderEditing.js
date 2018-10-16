import * as OTypes from '../../Constants/OrderTypes';
var initialState = {};

const orderEditing = (state = initialState, action) => {

    switch (action.type) {
        case OTypes.EDIT_ORDER:

            
            return action.order;

        default: return state;
    }
}
export default orderEditing;