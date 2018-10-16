import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CustomerItem extends Component {
    onDelete=(Id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(Id);
        }
        
    }
    render() {
        var { customer, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{customer.Id}</td>
                <td>{customer.Name}</td>
                <td>{customer.Addr}</td>
                <td>{customer.Phone}</td>
                <td><img alt={customer.Img} src={`http://localhost:61366/Image/${customer.Img}`}></img></td>
                <td>
                    <Link to={`/customer/${customer.Id}/edit`}
                        className="btn btn-primary"

                    >Sửa</Link>
                    <button type="button"
                        className="btn btn-danger"
                        onClick={()=>this.onDelete(customer.Id)}
                    >Xóa</button>
                </td>
            </tr>
        );

    }
}


export default CustomerItem;
