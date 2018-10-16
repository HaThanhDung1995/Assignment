import React, { Component } from 'react';
import { actFetchStaffsRequest,actDeleteStaffRequest } from './../../Actions/Staff';
import { connect } from 'react-redux';
import StaffItem from './StaffItem';
import {
    
    Link
  
  } from "react-router-dom";

class StaffList extends Component {
    componentDidMount() {
        this.props.fetchAllStaffs();
    }
    onDelete=(Id)=>{
        this.props.onDelete(Id);
    }
    showStaffs = (staffs) => {
        var result = null;
        if (staffs.length > 0) {
            result = staffs.map((item, index) => {
                return (
                    <StaffItem
                        key={index}
                        staff={item}
                        index={index}
                        onDelete={this.onDelete}
                    ></StaffItem>
                )
            })
        }
        return result;
    }
    render() {
        var { staffs } = this.props;
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><Link to="/staff/add">StaffAdd</Link></h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên người bán</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.showStaffs(staffs)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        staffs: state.staffs
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStaffs: () => {
            dispatch(actFetchStaffsRequest());
        },
        onDelete :(id)=>{
            dispatch(actDeleteStaffRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);
