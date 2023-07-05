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
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== itemId);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        },
        removeAllItems: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === itemId);
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
    }
});


export const { addItem, removeItem,removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;