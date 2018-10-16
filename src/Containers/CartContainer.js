import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from './../Components/Cart'
import PropTypes from 'prop-types';
import * as Message from './../Constants/Message';
import CartItem from './../Components/CartItem';
import CartResult from './../Components/CartResult';
import {removeCart} from './../Actions/Cart';
import {updateCart,changeMessage} from './../Actions/Cart';
class CartContainer extends Component {
    
  render() {
    var {cart}=this.props;
    return (
        <Cart>
            {this.showCartItem(cart)}
            {this.showTotalAmount(cart)}
        </Cart>
    );
  }
  showCartItem=(cart)=>{
      var {onChangeMessage,OnDelete}=this.props;
      var result = <tr>
          <td>{Message.MSG_CART_EMPTY}</td>
      </tr>;
      if(cart.length > 0){
          result = cart.map((item,index)=>{
              
              return (
                    <CartItem
                    OnDelete={OnDelete} 
                    key={index}
                    item={item}
                    index={index}
                    onChangeMessage={onChangeMessage}
                    OnUpdate={this.props.OnUpdate}
                    ></CartItem>
              );
          })
      }
      return result;
  }
  showTotalAmount=(cart)=>{
      var result = null;
      if(cart.length > 0){
          result = <CartResult cart={cart}></CartResult>
      }
      return result;
  }
  
}
CartContainer.propTypes={
    cart : PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
   
}
const mapStateToProps = state =>{
    return {
        cart : state.Cart
    }
};
const mapDispatchToPros =(dispatch,action)=>{
    return {
        OnDelete:(id)=>{
            dispatch(removeCart(id));
        },
        OnUpdate:(product,quantity)=>{
            dispatch(updateCart(product,quantity));
        },onChangeMessage:(message)=>{
            dispatch(changeMessage(message));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToPros)(CartContainer);
