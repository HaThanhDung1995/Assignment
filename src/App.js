import React, { Component } from 'react';
import Login from './Components/Login';
import Fuck from './Components/Fuck';
import './App.css';
import Category from './Components/Categories/CategoryList';
import CategoryForm from './Components/Categories/CategoryForm';
import CallApi from './Utils/apiCaller';

import Staff from './Components/Staffs/StaffList';
import StaffForm from './Components/Staffs/StaffForm';
import Store from './Components/Stores/StoreList';
import StoreForm from './Components/Stores/StoreForm';
import ProductForm from './Components/Products/ProductForm';
import CustomerForm from './Components/Customers/CustomerForm';
import CustomerList from './Components/Customers/CustomerList';
import OrderForm from './Components/Orders/OrderForm';
import OrderList from './Components/Orders/OrderList';
import Header from './Components/Header';
import Cart from './Components/Cart/Cart';
import {
  BrowserRouter as Router,
  Route,
  
  Redirect

} from "react-router-dom";
import ProductList from './Components/Products/ProductList';


const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtusername: '',
      txtpass: '',
      isAuthenticated: false,
      FuckAccess: false,
      Toggle: true
    }

  }
  onClick = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    })

  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    var { txtusername, txtpass } = this.state;
    CallApi('Login', 'POST', {
      Username: txtusername,
      Pass: txtpass
    }).then(res => {
      if (res.data.auth === "Admin") {
        this.setState({
          isAuthenticated: true,
          FuckAccess: false,
          Toggle: false
        });

      }
      if (res.data.auth === "User") {
        this.setState({
          FuckAccess: true,
          isAuthenticated: false,
          Toggle: false
        })
      }
    })
  }
  isAuthenticated1 = (props) => {
    if (this.state.isAuthenticated === true && this.state.FuckAccess === false) {
      return <Component  {...props} />
    }
    if (this.state.isAuthenticated === false && this.state.FuckAccess === true) {
      return <Component  {...props} />
    }
    else
      return <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }}
      />
  }
  showToggle = () => {
    if (this.state.Toggle) {
      return (<form onSubmit={this.onSubmit}>
        <div className="form-group">
          
          <input type="text" name="txtusername" onChange={this.onChange} className="form-control" placeholder="Username"></input>
        </div>
        <div className="form-group">
          
          <input type="text" name="txtpass" onChange={this.onChange} className="form-control" placeholder="Password"></input>
        </div>

        <button className="btn btn-primary">Login</button>
      </form>);
    }
  }

  render() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={({match, history})=>
          this.state.FuckAccess ? (
            <Component match={match} history={history}   />
          ) : (
              <Redirect to={{
                pathname: "/login",
                
              }}
              />
            )
        }
      />
    );

    const PrivateRoute2 = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.state.isAuthenticated ? (
            <Component  {...props} />
          ) : (
              <Redirect to={{
                pathname: "/login",
                state: { from: props.location }
              }}
              />
            )
        }
      />
    );
    
    return (
      
      <Router>
        
        <div>
          
          <Header></Header>
          <div className="row">
              {this.showToggle()}
          </div>


          
          <Route path="/" exact={true} component={Public} />
          <Route path="/login" exact={false} component={Login} />
          <Route path="/cart" exact={false} component={Cart} />
          <PrivateRoute path="/fuck" exact={false} component={Fuck} />
          <PrivateRoute2 path="/protected" exact={false} component={Protected} />
          <PrivateRoute path="/categorylist" exact={false} component={Category} />
          <PrivateRoute path="/category/add" exact={false} component={CategoryForm} />
          <PrivateRoute path="/category/:id/edit" exact={false} component={CategoryForm} />

          <PrivateRoute path="/stafflist" exact={false} component={Staff} />
          <PrivateRoute path="/staff/add" exact={false} component={StaffForm} />
          <PrivateRoute path="/staff/:id/edit" exact={false} component={StaffForm} />

          <PrivateRoute path="/storelist" exact={false} component={Store}></PrivateRoute>
          <PrivateRoute path="/store/add" exact={false} component={StoreForm}></PrivateRoute>
          <PrivateRoute path="/store/:id/edit" exact={false} component={StoreForm} />

          <PrivateRoute path="/productlist" exact={false} component={ProductList}></PrivateRoute>
          <PrivateRoute path="/product/add" exact={false} component={ProductForm}></PrivateRoute>
          <PrivateRoute path="/product/:id/edit" exact={false} component={ProductForm}></PrivateRoute>

          <PrivateRoute path="/customerlist" exact={false} component={CustomerList}></PrivateRoute>
          <PrivateRoute path="/customer/add" exact={false} component={CustomerForm}></PrivateRoute>
          <PrivateRoute path="/customer/:id/edit" exact={false} component={CustomerForm}></PrivateRoute>

          <PrivateRoute path="/orderlist" exact={false} component={OrderList}></PrivateRoute>
          <PrivateRoute path="/order/add" exact={false} component={OrderForm}></PrivateRoute>
          <PrivateRoute path="/order/:id/edit" exact={false} component={OrderForm}></PrivateRoute>
          
        </div>
      </Router>
    );
  }
}

export default App;
