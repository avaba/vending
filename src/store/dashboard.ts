import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import getChange from "../service/getChange";
import {RootState} from "./index";
import {IDisplayItem} from "../service/displayList";

export interface IDashboardData {
    label: string,
    value: number,
    type: string,
    error: boolean,
    disabled: boolean,
    attempt: boolean
}

export interface ICoinsResult {
    count: number,
    value: number
}

export interface IDashboard {
    insert: IDashboardData,
    choose: IDashboardData,
    cash: number,
    banknotes: Array<number>,
    coins: Array<number>,
    coinsResult: Array<ICoinsResult>,
    product: IDisplayItem | null,
    change: number
}

const initialState: IDashboard = {
    insert: {
        label: "Insert money",
        value: 0,
        type: "insert",
        error: false,
        attempt: false,
        disabled: false
    },
    choose: {
        label: "/",
        value: 0,
        type: "choose",
        error: false,
        attempt: false,
        disabled: true
    },
    cash: 0,
    change: 0,
    banknotes: [50, 100, 200, 500],
    coins: [1, 2, 5, 10],
    coinsResult: [],
    product: null
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        onInsert(state, action: PayloadAction<number>) {
            state.insert.attempt = !state.insert.attempt
            state.insert.value = action.payload

            const filter = state.banknotes.filter(item => item === action.payload)

            if (!filter.length) {
                state.insert.label = "Money is not accepted"
                state.insert.error = true
            } else {
                state.cash += action.payload
                state.insert.error = false
                state.insert.label = `Inserted money: ${state.cash}₽`
                state.choose.disabled = false
                state.choose.label = "Choose product"
            }
        },
        insertUpdateLabel(state) {
            if (state.cash === 0) {
                state.insert.label = initialState.insert.label
            } else {
                state.insert.label = `Inserted money: ${state.cash}₽`
            }
        },
        onChoose(state, action: PayloadAction<IDisplayItem>) {
            state.choose.label = "Success"
            state.choose.value = action.payload.id
            state.choose.disabled = true
            state.insert.disabled = true
            const remains = state.cash - action.payload.price
            state.change = remains
            state.coinsResult = getChange(remains, state.coins)
            state.product = action.payload
        },
        chooseError(state) {
            state.choose.attempt = !state.choose.attempt
            state.choose.error = true
            state.choose.label = "Enter correct product number"
        },
        chooseUpdateLabel(state) {
            state.choose.label = "Choose product"
        },
        resetDashboard(state) {
            state.change = initialState.change
            state.insert = initialState.insert
            state.choose = initialState.choose
            state.cash = initialState.cash
            state.banknotes = initialState.banknotes
            state.coins = initialState.coins
            state.coinsResult = initialState.coinsResult
            state.product = initialState.product
        }
    },
});

export const {
    onInsert,
    onChoose,
    insertUpdateLabel,
    chooseError,
    chooseUpdateLabel,
    resetDashboard
} = dashboardSlice.actions;
export default dashboardSlice.reducer