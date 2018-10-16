import React, { Component } from 'react';

class OrderItem extends Component {
    onDelete=(Id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(Id);
        }
        
    }
    render() {
        var { order, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{order.Id}</td>
                <td>{order.DateT}</td>
                <td>{order.CustomerId}</td>
                <td>{order.StaffId}</td>
                <td>{order.TotalPrice}</td>
                <td>
                    
                    <button type="button"
                        className="btn btn-danger"
                        onClick={()=>this.onDelete(order.Id)}
                    >Xóa</button>
                </td>
            </tr>
        );

    }
}


export default OrderItem;
