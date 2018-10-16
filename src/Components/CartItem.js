import React, { Component } from 'react';
import * as  Message from './../Constants/Message';

class CartItem extends Component {
    
  render() {
    var {item}=this.props;
    console.log(item);
      var {quantity}=item;
      
    return (
        <tr>
        <th scope="row">
            <img src={`http://localhost:61366/Image/${item.product.Img}`}
                alt={item.product.Img} className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{item.product.Name}</strong>
            </h5>
        </td>
        <td>{item.product.Price}</td>
        <td className="center-on-small-only">
            <span className="qty">{quantity} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label 
                onClick={()=>this.onUpdateQuantity(item.product,item.quantity-1)}
                className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a>—</a>
                </label>
                <label
                    onClick={()=>this.onUpdateQuantity(item.product,item.quantity+1)}
                 className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{this.showSubTotal(item.product.price,item.quantity)}</td>
        <td>
            <button type="button"
            onClick={()=>this.onDelete(item.product.Id)}
             className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item">
                X
            </button>
        </td>
    </tr>
    );
  }
  onUpdateQuantity=(product,quantity)=>{
      if(quantity > 0){
          
          this.props.OnUpdate(product,quantity);
          this.props.onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
          
      }
  }
  onDelete=(id)=>{
   var {OnDelete}=this.props;
   OnDelete(id);
   this.props.onChangeMessage(Message.MSG_DELETE_TO_CART_SUCCESS);
  }
  showSubTotal=(price,quantity)=>{
      return price*quantity;
  }
}

export default CartItem;
