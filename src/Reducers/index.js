import {combineReducers} from 'redux';
import categories from './Categories/categories';
import categoryEditing from './Categories/categoryEditing';
import stores from './Stores/stores';
import storeEditing from './Stores/storeEditing'
const appReducers = combineReducers({
    categories,
    categoryEditing,
    stores,
    storeEditing
});
export default appReducers;