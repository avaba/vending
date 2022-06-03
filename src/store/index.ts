import { configureStore } from '@reduxjs/toolkit';
import dashboard from "./dashboard";

const store = configureStore({
    reducer: {
        dashboard: dashboard
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;