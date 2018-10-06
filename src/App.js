import React, { Component } from 'react';
import Login from './Components/Login';
import Fuck from './Components/Fuck';
import Category from './Components/Categories/CategoryList';
import './App.css';
import CallApi from './Utils/apiCaller';
import CategoryForm from './Components/Categories/CategoryForm';
import Store from './Components/Stores/StoreList';
import StoreForm from './Components/Stores/StoreForm';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect

} from "react-router-dom";


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
          <label>Username</label>
          <input type="text" name="txtusername" onChange={this.onChange} className="form-control" placeholder="Username"></input>
        </div>
        <div className="form-group">
          <label>Username</label>
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
          <div className="navbar navbar-default">

            <ul className="nav navbar-nav">
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
              <li>
                <Link to="/fuck">Fuck</Link>
              </li>
              <li>
                <Link to="/categorylist">Category</Link>
              </li>
              <li>
                <Link to="/category/add">CategoryAdd</Link>
              </li>
              <li>
                <Link to="/storelist">Store</Link>
              </li>
              <li>
                <Link to="/store/add">StoreAdd</Link>
              </li>
            </ul>
          </div>

          <div className="row">
              {this.showToggle()}
          </div>


          <ul>

          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/fuck" component={Fuck} />
          <PrivateRoute2 path="/protected" component={Protected} />
          <PrivateRoute path="/categorylist" component={Category} />
          <PrivateRoute path="/category/add" component={CategoryForm} />
          <PrivateRoute path="/category/:id/edit" component={CategoryForm} />
          <PrivateRoute path="/storelist" component={Store}></PrivateRoute>
          <PrivateRoute path="/store/add" component={StoreForm}></PrivateRoute>
          <PrivateRoute path="/store/:id/edit" component={StoreForm} />
        </div>
      </Router>
    );
  }
}

export default App;
