import * as StoreTypes from '../../Constants/StoreTypes';
var initialState = {};

const storeEditing = (state = initialState, action) => {

    switch (action.type) {
        case StoreTypes.EDIT_STORE:


            return action.store;

        default: return state;
    }
}
export default storeEditing;