import React, { Component } from 'react';
import { actFetchCustomersRequest,actDeleteCustomerRequest } from '../../Actions/Customer';
import { connect } from 'react-redux';
import CustomerItem from '../Customers/CustomerItem';

import {
    
    Link
  
  } from "react-router-dom";

class CustomerList extends Component {
    componentDidMount() {
        this.props.fetchAllCustomers();
    }
    onDelete=(Id)=>{
        this.props.onDelete(Id);
    }
    showCustomers = (customers) => {
        var result = null;
        if (customers.length > 0) {
            result = customers.map((item, index) => {
                return (
                    <CustomerItem
                        key={index}
                        customer={item}
                        index={index}
                        onDelete={this.onDelete}
                    ></CustomerItem>
                )
            })
        }
        return result;
    }
    render() {
        var { customers } = this.props;
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><Link to="/customer/add">CustomerAdd</Link></h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Địa chỉ</th>
                                <th>Điện thoại</th>
                                <td>Hình</td>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.showCustomers(customers)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        customers: state.customers
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCustomers: () => {
            dispatch(actFetchCustomersRequest());
        },
        onDelete :(id)=>{
            dispatch(actDeleteCustomerRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
