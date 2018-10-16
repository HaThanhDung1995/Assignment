import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddCustomerRequest, actEditCustomerRequest, actUpdateCustomerRequest } from '../../Actions/Customer';
class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            cusname: '',
            cusphone: '',
            cusaddress:'',
            cusimage:null
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'file' ? target.files[0] : target.value;
        this.setState({
            [name]: value
        })

    }
    componentDidMount() {
        var { match } = this.props;

        if (match.params.id) {
            var id = match.params.id;
            this.props.EditCustomer(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.customerEditing) {
            var { customerEditing } = nextProps;
            this.setState({
                id:customerEditing.Id,
                cusname: customerEditing.Name,
                cusphone: customerEditing.Phone,
                cusaddress:customerEditing.Addr,
            });
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, cusname, cusphone,cusimage,cusaddress } = this.state;
        var { history } = this.props;
        const customer = new FormData();
        customer.append('Name',cusname);
        customer.append('Phone',cusphone);
        customer.append('Addr',cusaddress);
        customer.append('image',cusimage);
        var customer2 ={
            Name:cusname,
            Phone:cusphone,
            Addr:cusaddress,
            Id: id
        };
        if (id) {
            this.props.UpdateCustomer(customer2);
        }
        else {
            this.props.AddCustomer(customer);
        }
        history.goBack();




    }




    render() {
        var { cusname, cusphone,cusaddress } = this.state;

        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label >Name: </label>
                        <input type="text"
                            className="form-control"
                            name="cusname"
                            value={cusname}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Phone: </label>
                        <input type="text"
                            className="form-control"
                            name="cusphone"
                            value={cusphone}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Address: </label>
                        <input type="text"
                            className="form-control"
                            name="cusaddress"
                            value={cusaddress}
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Image: </label>
                        <input type="file"
                            className="form-control"
                            name="cusimage"
                            
                            onChange={this.onChange}
                            placeholder="Input field" />
                    </div>



                    {/* <Link to="/product-list" className="btn btn-danger">
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
        customerEditing: state.customerEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        AddCustomer: (customer) => {
            dispatch(actAddCustomerRequest(customer));
        },
        EditCustomer: (Id) => {
            dispatch(actEditCustomerRequest(Id));
        },
        UpdateCustomer: (customer) => {
            dispatch(actUpdateCustomerRequest(customer));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
