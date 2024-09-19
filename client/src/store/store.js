import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import authReducer from './auth-slice'
import adminProductsSlice from './admin/products-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: adminProductsSlice
    }, 
});

export default store;