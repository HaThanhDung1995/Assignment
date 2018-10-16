import * as Types from '../../Constants/StaffTypes';
var initialState = [];
var findIndex = (staffs, id) => {
    var result = -1;
    staffs.forEach((staff, index) => {
        if (staff.Id === id) {
            result = index;
        }
    });
    return result;
}
const staffs = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_Staffs:
            state = action.staffs;
            console.log(state);
            return [...state];
        case Types.ADD_STAFF:
            
            state.push(action.staff);
            return [...state];
        case Types.DELETE_STAFF:
            
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_STAFF:
            
            index=findIndex(state,action.staff.Id);
            state[index]=action.staff;
            return [...state];    
        default: return [...state];
    }
}
export default staffs;