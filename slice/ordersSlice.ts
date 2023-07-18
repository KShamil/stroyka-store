import { ICardData } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrdersState {
    items: ICardData[];
}

const initialState: OrdersState = {
    items: [],
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrderItems: (state, action: PayloadAction<ICardData[]>) => {
            state.items = action.payload;
        },
        removeAllOrderItems: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === itemId);
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        }
    }
});

export const { addOrderItems,removeAllOrderItems } = ordersSlice.actions;

export default ordersSlice.reducer;