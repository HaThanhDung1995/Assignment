import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StaffItem extends Component {
    onDelete=(Id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(Id);
        }
        
    }
    render() {
        var { staff, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{staff.Id}</td>
                <td>{staff.Name}</td>
                <td>{staff.Phone}</td>
                <td>{staff.Addr}</td>
                <td>
                    <Link to={`/staff/${staff.Id}/edit`}
                        className="btn btn-primary"

                    >Sửa</Link>
                    <button type="button"
                        className="btn btn-danger"
                        onClick={()=>this.onDelete(staff.Id)}
                    >Xóa</button>
                </td>
            </tr>
        );

    }
}


export default StaffItem;
