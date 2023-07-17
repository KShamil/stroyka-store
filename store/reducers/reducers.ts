import { combineReducers } from 'redux';
import cartReducer from '../../slice/cartSlice';
import ordersReducer from '../../slice/ordersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    cart: cartReducer,
    orders: ordersReducer,
});

const persistConfig = {
    key: 'root',
    storage,
  }

export const persistedReducer = persistReducer(persistConfig,rootReducer);


