const reducer = "@/hooks/use-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    productsList: [],
    reducers: {},
    extraReducers: (builder) => {

    }
}

export const fetchAllFilteredProducts = createAsyncThunk(
    '/products/fetchAllProducts',
    async () => {
        const result = await axios.get(
            'http://localhost:5000/api/shop/products/get',
        );

        return result?.data;
    }
);


const shopProductSlice = createSlice({
    name: 'shoppingProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllFilteredProducts.pending, (state, action) => {
            state.isLoading = true
        }).addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
            console.log(action.payload);

            state.isLoading = false
            state.productsList = action.payload
        }).addCase(fetchAllFilteredProducts.rejected, (state, action) => {

            state.isLoading = false
            state.productsList = []
        })
    }
})

export default shopProductSlice.reducer;
