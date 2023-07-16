import { combineReducers } from 'redux';
import cartReducer from '../../slice/cartSlice';
import ordersReducer from '../../slice/ordersSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    orders: ordersReducer,
});

export default rootReducer;