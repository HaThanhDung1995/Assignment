import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../Components/Products';
import Product from './../Components/Product';
import PropTypes from 'prop-types';
import {AddToCart,changeMessage} from './../Actions/Cart';
import { actFetchProductsRequest } from './../Actions/Product';
class ProductsContainer extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }
    showProducts(products){
        var result =null;
        var {onAddToCart,onChangeMessage} = this.props;
        if(products.length >0){
          result=products.map((product,index)=>{
            return <Product key={index}
             product={product}
             onAddToCart={onAddToCart}
             onChangeMessage={onChangeMessage}
             ></Product>
          })
        }
        return result;
    }
  render() {
    var {products}=this.props;
    return (
        <Products>
            {this.showProducts(products)}
        </Products>
    );
  }
}
ProductsContainer.propTypes={
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired
}
const mapStatetoProps = state =>{
  return{
    products:state.products1
  }
};
const mapDispatchToProps = (dispatch,props)=>{
    return{
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onAddToCart:(product)=>{
            dispatch(AddToCart(product,1));
        },
        onChangeMessage:(message)=>{
            dispatch(changeMessage(message));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(ProductsContainer);
