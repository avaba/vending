import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {onChoose} from "./dashboard";

export interface IDisplayItem {
    id: number,
    name: string,
    category: string,
    price: number,
    active: boolean
}

interface IDisplay {
    list: Array<IDisplayItem>
}

const initialState: IDisplay = {
    list: [
        {id: 1, name: "Lay’s", category: "Chips", price: 75, active: false},
        {id: 2, name: "Coca-Cola", category: "Drink", price: 180, active: false},
        {id: 3, name: "Light", category: "Rusks", price: 220, active: false},
        {id: 4, name: "Chaka", category: "Peanut", price: 600, active: false},
        {id: 5, name: "Water", category: "Drink", price: 40, active: false},
        {id: 6, name: "Fanta", category: "Cold drink", price: 400, active: false},
        {id: 7, name: "Nutella", category: "Chocolate paste", price: 550, active: false},
    ],
}

const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        filterDisplay(state, action: PayloadAction<number>) {
            for (let i = 0; i < state.list.length; i++) {
                (state.list[i].price <= action.payload) ? state.list[i].active = true : state.list[i].active = false
            }
        },
    },
});

export const {filterDisplay} = displaySlice.actions;
export default displaySlice.reducer