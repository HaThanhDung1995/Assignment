import * as Types from '../Constants/OrderTypes';
import callApi from '../Utils/apiCaller';
export const actFetchOrdersRequest = () => {
    return dispatch => {
        return callApi('Order', 'GET', null).then(res => {
            
            dispatch(actFetchOrders(res.data.dung));
        });
    };
}
export const actFetchOrders = (orders) => {
    return {
        type : Types.FETCH_ORDERS,
        orders
    }
}
export const actAddOrder = (order)=>{
    return {
        type:Types.ADD_ORDER,
        order
    }
}
export const actAddOrderRequest = (order) => {
    return dispatch => {
        return callApi('Order', 'POST',{
            CustomerId:order.CustomerId,
            DateT:order.DateT,
            StaffId:order.StaffId,
            TotalPrice:order.TotalPrice
        }).then(res => {
           
            dispatch(actAddOrder(res.data.obj));
        });
    };
}
export const actDeleteOrder = (id)=>{
    return {
        type:Types.DELETE_ORDER,
        id
    }
}
export const actDeleteOrderRequest = (Id) => {
    return dispatch => {
        return callApi(`Order/${Id}`, 'GET', null).then(res => {
            dispatch(actDeleteOrder(Id));
        });
    };
}
export const actEditOrder = (order)=>{
    return {
        type:Types.EDIT_ORDER,
        order
    }
}
export const actEditOrderRequest = (Id) => {
    return dispatch => {
        return callApi(`GetOrder?Id=${Id}`, 'GET', null).then(res => {
             
            dispatch(actEditOrder(res.data.objective));
        });
    };
}
export const actUpdateOrder = (order)=>{
    return {
        type:Types.UPDATE_ORDER,
        order
    }
}
export const actUpdateOrderRequest = (order) => {
    return dispatch => {
        return callApi('UpdateOrder', 'POST', {
            Id:order.Id,
            CustomerId:order.CustomerId,
            DateT:order.DateT
        }).then(res => {
           
             dispatch(actUpdateOrder(res.data.objective));
        });
    };
}
