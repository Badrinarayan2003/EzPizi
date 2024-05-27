import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addresses: []
    },
    reducers: {
        addAddress: (state, action) => {
            state.addresses.push(action.payload);
        },
        deleteAddress: (state, action) => {
            const updateAdd = state.addresses.filter((add, index) => index !== action.payload);
            state.addresses = updateAdd;
        },
    },
});

export const { addAddress, deleteAddress } = addressSlice.actions;
export const addReducer = addressSlice.reducer;