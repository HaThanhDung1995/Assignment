import * as Types from './../Constants/CustomerTypes';
import callApi from './../Utils/apiCaller';
export const actFetchCustomersRequest = () => {
    return dispatch => {
        return callApi('Customer', 'GET', null).then(res => {
            
            
            
             dispatch(actFetchCustomers(res.data.dung));
        });
    };
}
export const actFetchCustomers = (customers) => {
    return {
        type : Types.FETCH_CUSTOMERS,
        customers
    }
}
export const actAddCustomer = (customer)=>{
    return {
        type:Types.ADD_CUSTOMER,
        customer
    }
}
export const actAddCustomerRequest = (customer) => {
    return dispatch => {
        return callApi('Customer', 'POST', customer).then(res => {
            dispatch(actAddCustomer(res.data.objective));
        });
    };
}
export const actDeleteCustomer = (id)=>{
    return {
        type:Types.DELETE_CUSTOMER,
        id
    }
}
export const actDeleteCustomerRequest = (Id) => {
    return dispatch => {
        return callApi(`Category/${Id}`, 'GET', null).then(res => {
            dispatch(actDeleteCustomer(Id));
        });
    };
}
export const actEditCustomer = (customer)=>{
    return {
        type:Types.EDIT_CUSTOMER,
        customer
    }
}
export const actEditCustomerRequest = (Id) => {
    return dispatch => {
        return callApi(`GetCustomer?Id=${Id}`, 'GET', null).then(res => {
            
            dispatch(actEditCustomer(res.data.objective));
        });
    };
}
export const actUpdateCustomer = (customer)=>{
    return {
        type:Types.UPDATE_CUSTOMER,
        customer
    }
}
export const actUpdateCustomerRequest = (customer) => {
    return dispatch => {
        return callApi('UpdateCustomer', 'POST', {
            Id:customer.Id,
            Name:customer.Name,
            Addr:customer.Addr,
            Phone:customer.Phone
        }).then(res => {
           
             dispatch(actUpdateCustomer(res.data.objective));
        });
    };
}
