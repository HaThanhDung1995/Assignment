import {combineReducers} from 'redux';
import categories from './Categories/categories';
import categoryEditing from './Categories/categoryEditing';
import staffs from './Staffs/staffs';
import staffEditing from './Staffs/staffEditing';
import stores from './Stores/stores';
import products from './Products/products';
import productEditing from './Products/productEditing';
import storeEditing from './Stores/storeEditing';
import customers from './Customers/customers';
import customerEditing from './Customers/customerEditing';
import orders from './Orders/orders';
import orderEditing from './Orders/orderEditing';
import products1 from './Products';
import Cart from './Cart';
import Message from './Message';
const appReducers = combineReducers({
    categories,
    categoryEditing,
    stores,
    storeEditing,
    products,
    productEditing,
    customers,
    customerEditing,
    orders,
    orderEditing,
    products1,
    Cart,
    Message,
    staffEditing,
    staffs
    
});
export default appReducers;