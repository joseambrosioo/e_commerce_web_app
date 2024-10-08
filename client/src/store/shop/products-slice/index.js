const reducer = "@/hooks/use-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    productList: [],
    // reducers: {},
    // extraReducers: (builder) => {

    // }
}

export const fetchAllFilteredProducts = createAsyncThunk(
    '/products/fetchAllProducts',
    async ({ filterParams, sortParams }) => {
        console.log(fetchAllFilteredProducts, "fetchAllFilteredProducts");

        const query = new URLSearchParams({
            ...filterParams,
            sortBy: sortParams
        })

        const result = await axios.get(
            // 'http://localhost:5000/api/shop/products/get',
            `http://localhost:5000/api/shop/products/get?${query}`
        );

        console.log(result.data);


        return result?.data;
    }
);


const shopProductSlice = createSlice({
    name: 'shopProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFilteredProducts.pending, (state, action) => {
                state.isLoading = true;
            }).addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
                console.log(action.payload, 'action.payload');

                state.isLoading = false;
                state.productList = action.payload.data;
            }).addCase(fetchAllFilteredProducts.rejected, (state, action) => {

                state.isLoading = false;
                state.productList = [];
            })
    }
})

export default shopProductSlice.reducer;

