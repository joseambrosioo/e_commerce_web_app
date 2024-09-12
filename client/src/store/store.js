import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import authReducer from './auth-slice'


const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;