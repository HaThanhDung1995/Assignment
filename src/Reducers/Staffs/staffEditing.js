import * as Types from '../../Constants/StaffTypes';
var initialState = {};

const staffEditing = (state = initialState, action) => {

    switch (action.type) {
        case Types.EDIT_STAFF:


            return action.staff;

        default: return state;
    }
}
export default staffEditing;