import * as Types from '../Constants/StaffTypes';
import callApi from '../Utils/apiCaller';
export const actFetchStaffsRequest = () => {
    return dispatch => {
        return callApi('Staff', 'GET', null).then(res => {
            
            
            
             dispatch(actFetchStaffs(res.data.dung));
        });
    };
}
export const actFetchStaffs = (staffs) => {
    return {
        type : Types.FETCH_Staffs,
        staffs
    }
}
export const actAddStaff = (staff)=>{
    return {
        type:Types.ADD_STAFF,
        staff
    }
}
export const actAddStaffRequest = (staff) => {
    return dispatch => {
        return callApi('Staff', 'POST', {
            Name:staff.Name,
            Phone:staff.Phone,
            Addr:staff.Addr
        }).then(res => {
            dispatch(actAddStaff(res.data.objective));
        });
    };
}
export const actDeleteStaff = (id)=>{
    return {
        type:Types.DELETE_STAFF,
        id
    }
}
export const actDeleteStaffRequest = (Id) => {
    return dispatch => {
        return callApi(`Staff/${Id}`, 'GET', null).then(res => {
            dispatch(actDeleteStaff(Id));
        });
    };
}
export const actEditStaff = (staff)=>{
    return {
        type:Types.EDIT_STAFF,
        staff
    }
}
export const actEditStaffRequest = (Id) => {
    return dispatch => {
        return callApi(`GetStaff?Id=${Id}`, 'GET', null).then(res => {
            
            dispatch(actEditStaff(res.data.objective));
        });
    };
}
export const actUpdateStaff = (staff)=>{
    return {
        type:Types.UPDATE_STAFF,
        staff
    }
}
export const actUpdateStaffRequest = (staff) => {
    return dispatch => {
        return callApi('UpdateStaff', 'POST', {
            Id:staff.Id,
            Name:staff.Name,
            Phone:staff.Phone,
            Addr:staff.Addr
        }).then(res => {
           
             dispatch(actUpdateStaff(res.data.objective));
        });
    };
}
