import React, { Component } from 'react';

import MessageContainer from './../../Containers/MessageContainer';

import ProductsContainer from './../../Containers/ProductsContainer';
import CartContainer from './../../Containers/CartContainer';

class Cart extends Component {
  render() {
    return (
      <div className="App">
            <div>
        
        <main id="mainContainer">
            <div className="container">
                
                <ProductsContainer></ProductsContainer>
               
                <MessageContainer></MessageContainer>
               
                <CartContainer></CartContainer>
            </div>
        </main>
        
        
    </div>
      </div>
    );
  }
}

export default Cart;
