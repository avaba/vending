import { configureStore } from '@reduxjs/toolkit';
import display from "./display";
import dashboard from "./dashboard";

const store = configureStore({
    reducer: {
        display: display,
        dashboard: dashboard
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;