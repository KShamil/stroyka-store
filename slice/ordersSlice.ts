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
    }
});

export const { addOrderItems } = ordersSlice.actions;

export default ordersSlice.reducer;