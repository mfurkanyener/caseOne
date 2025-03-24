import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [], // localStorage'dan veriyi alıyoruz
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items)); // Sepeti localStorage'a kaydediyoruz
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(state.items)); // Sepeti tekrar localStorage'a kaydediyoruz
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cartItems'); // localStorage'dan sepeti temizliyoruz
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;