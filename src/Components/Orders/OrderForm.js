import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchCustomersRequest } from '../../Actions/Customer';
import { actAddOrderRequest, actEditOrderRequest } from '../../Actions/Order';
import { actFetchStaffsRequest } from './../../Actions/Staff';
class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            od: '',
            oc: 1,
            os:1,
            tprice:0

        }
    }

    componentDidMount() {
        this.props.fetchAllCustomers();
        this.props.fetchAllStaffs();
        var { match } = this.props;

        if (match.params.id) {
            var id = match.params.id;
            this.props.EditOrder(id);
        }




    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.OrderEditing && nextProps.match.params.id) {
            var { OrderEditing } = nextProps;

            this.setState({
                id: OrderEditing.Id,
                od: OrderEditing.DateT,
                oc: OrderEditing.CustomerId,
                os:OrderEditing.StaffId
            });
        }


    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'select-one' ? parseInt(target.value) : target.value;
        this.setState({
            [name]: value
        })

    }
    onSave = (e) => {
        e.preventDefault();
        var { id, od, oc,os,tprice } = this.state;
        var {cart}=this.props;
        var { history } = this.props;
        var total=0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.Price * cart[i].quantity;
                
            }
            
            
            var Order = {
                Id: id,
                DateT: od,
                CustomerId: oc,
                StaffId:os,
                TotalPrice:total
            }
           
            this.props.AddOrder(Order);
            history.goBack();
        
            
        }
        
        



       
        
        
        
        

        








    }




    render() {

        var { customers } = this.props;
        var {staffs} = this.props;
        var { od, oc,os } = this.state;


        const a = customers.map((item, index) => {
            return <option key={index} value={item.Id}>{item.Name}</option>
        });
        const b = staffs.map((item, index) => {
            return <option key={index} value={item.Id}>{item.Name}</option>
        });

        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
                <form onSubmit={this.onSave}>
                    <legend>Order</legend>
                    {/* <div className="form-group">
                        <label >Name: </label>
                        <input type="text" name="pname" value={pname} onChange={this.onChange}></input>
                       
                    </div> */}

                    <div className="form-group">
                        <label >Date: </label>
                        <input type="text" name="od" value={od} onChange={this.onChange}></input>
                    </div>

                    <select name="oc" value={oc} onChange={this.onChange}>
                        {a}
                    </select>
                    <select name="os" value={os} onChange={this.onChange}>
                        {b}
                    </select>


                    {/* <Link to="/Order-list" className="btn btn-danger">
                        Trở lại
                    </Link> */}
                    <button type="submit" className="btn btn-primary">Lưu lại</button>

                </form>

            </div>



        );
    }
}
const mapStateToProps = state => {
    return {

        cart : state.Cart,
        customers: state.customers,
        OrderEditing: state.orderEditing,
        staffs:state.staffs
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        AddOrder: (Order) => {
            dispatch(actAddOrderRequest(Order));
        },
        EditOrder: (Id) => {
            dispatch(actEditOrderRequest(Id));
        },

        fetchAllCustomers: () => {
            dispatch(actFetchCustomersRequest());
        },
        fetchAllStaffs: () => {
            dispatch(actFetchStaffsRequest());
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
