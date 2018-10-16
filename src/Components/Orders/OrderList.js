import React, { Component } from 'react';
import { actFetchOrdersRequest,actDeleteOrderRequest } from '../../Actions/Order';
import { connect } from 'react-redux';
import OrderItem from '../Orders/OrderItem';
import {
    
    Link

  
  } from "react-router-dom";

class OrderList extends Component {
    componentDidMount() {
        this.props.fetchAllOrders();
    }
    onDelete=(Id)=>{
        this.props.onDeleteOrder(Id);
    }
    showOrders = (orders) => {
        var result = null;
        if (orders.length > 0) {
            result = orders.map((item, index) => {
                
                return (
                    
                    <OrderItem
                        key={index}
                        order={item}
                        index={index}
                        onDelete={this.onDelete}
                    ></OrderItem>
                )
            })
        }
        return result;
    }
    render() {
        var { orders } = this.props;
        
        return (
            
            <div className="panel panel-primary">
            
                <div className="panel-heading">
                <h3 className="panel-title"><Link to="/order/add">OrderAdd</Link></h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Ngày giao</th>
                                <th>Khách hàng</th>
                                <th>Người Bán</th>
                                <th>Giá trị</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.showOrders(orders)}
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllOrders: () => {
            dispatch(actFetchOrdersRequest());
        },
        onDeleteOrder :(id)=>{
            dispatch(actDeleteOrderRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
