import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (

            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light"><Link to={'/order/add'}
                        className="btn btn-primary"

                    >Complete Purchase</Link>
                                            <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.Price * cart[i].quantity;
                
            }
            
        }
        return total;
    }
}

export default CartResult;