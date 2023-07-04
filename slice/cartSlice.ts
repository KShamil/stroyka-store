import { ICardData } from '@/interfaces/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    items: ICardData[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICardData>) => {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;