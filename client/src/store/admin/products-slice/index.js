import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    productList: [],
};

export const addNewProduct = createAsyncThunk(
    '/products/addNewProduct',
    async (formaData) => {
        const result = await axios.post(
            'http://localhost:5000/api/admin/products/add',
            formaData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        return result?.data;
    }
);

export const fetchAllProducts = createAsyncThunk(
    '/products/fetchAllProducts',
    async () => {
        const result = await axios.get(
            'http://localhost:5000/api/admin/products/get',
        );

        return result?.data;
    }
);

export const editNewProduct = createAsyncThunk(
    '/products/editNewProduct',
    async (id, formaData) => {
        const result = await axios.put(
            `http://localhost:5000/api/admin/products/edit/${id}`,
            formaData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        return result?.data;
    }
);

export const deleteNewProduct = createAsyncThunk(
    '/products/deleteNewProduct',
    async (id) => {
        const result = await axios.delete(
            `http://localhost:5000/api/admin/products/delete/${id}`,
        );

        return result?.data;
    }
);


const adminProductsSlice = createSlice({
    name: 'adminProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchAllProducts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false
            state.productList = action.payload.data;
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            // console.log(action.payload);
            state.isLoading = false
            state.productList = []
        })
    }

});

export default adminProductsSlice.reducer