import { configureStore } from "@reduxjs/toolkit";
import popupSettingsReducer from "./slice/popupSettingsSlice";

export const store = configureStore({
    reducer: {
        popupSettings: popupSettingsReducer,
    },
});

export default store;
