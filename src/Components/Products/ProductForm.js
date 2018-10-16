import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchCategoriesRequest } from './../../Actions/index';
import { actFetchStoresRequest } from './../../Actions/Store';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from './../../Actions/Product';
class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pname : '',
            price : 0,
            Category: 2,
            Store: 3,
            pimage:null
        }
    }
    
    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.fetchAllStores();
        var { match } = this.props;
        
        if (match.params.id) {
            var id = match.params.id;
            this.props.EditProduct(id);
        }
        
        
        
       
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.productEditing &&nextProps.match.params.id) {
            var { productEditing } = nextProps;
            
            this.setState({
                id: productEditing.Id,
                pname: productEditing.Name,
                price: productEditing.Price,
                Category: productEditing.CategoryId,
                Store: productEditing.StoreId
            });
        }
        
        
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'select-one' ? parseInt(target.value) : target.value;
        value = target.type === 'file' ? target.files[0] : target.value;
        this.setState({
            [name]: value
        })
        
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, pname, price, Category, Store,pimage } = this.state;
        const product = new FormData();
        product.append('Name',pname);
        product.append('Price',price);
        product.append('Category',Category);
        product.append('Store',Store);
        product.append('image',pimage);
        
        
        var { history } = this.props;
        var product2 = {
            Id: id,
            Name: pname,
            Price: price,
            CategoryId: Category,
            StoreId: Store
        };
       
        if (id) {
            this.props.UpdateProduct(product2);
            history.goBack();
        }
        else {
            this.props.AddProduct(product);
            history.goBack();
        }
        
       
        
        




    }




    render() {
        
        var { category } = this.props;
        var { store } = this.props;
        var {price,pname,Category,Store}=this.state;
        
    
        const a = category.map((item, index) => {
            return <option key={index} value={item.Id}>{item.Name}</option>
        });
        const b = store.map((item, index) => {
            return <option key={index} value={item.Id}>{item.Name}</option>
        });
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label >Name: </label>
                        <input type="text" name="pname" value={pname} onChange={this.onChange}></input>
                        {/* <input type="text"
                            className="form-control"
                            name="pname"
                            value={pname}
                            onChange={this.onChange}
                            placeholder="Input field"></input> */}
                    </div>

                    <div className="form-group">
                        <label >Price: </label>
                        <input type="text" name="price" value={price} onChange={this.onChange}></input>
                    </div>

                    <select name="Category" value={Category} onChange={this.onChange}>
                        {a}
                    </select>
                    <select name="Store" value={Store} onChange={this.onChange}>
                        {b}
                    </select>
                    <div className="form-group">
                        <label >Image: </label>
                        <input type="file"
                            className="form-control"
                            name="pimage"
                            
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
        categoryEditing: state.categoryEditing,
        category: state.categories,
        store: state.stores,
        productEditing: state.productEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        AddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        EditProduct: (Id) => {
            dispatch(actEditProductRequest(Id));
        },
        UpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
        fetchAllStores: () => {
            dispatch(actFetchStoresRequest());
        },
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest());
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
