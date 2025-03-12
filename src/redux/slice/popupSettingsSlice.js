import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     activeComponent: "container",
//     settings: {
//         container: {
//             animation: "fade",
//             color: { background: "#ffffff", border: "#202223" },
//             borderWidth: { top: 1, right: 1, bottom: 1, left: 1 },
//             borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
//             borderType: "solid",
//             padding: { top: 1, right: 1, bottom: 1, left: 1 },
//             position: 4,
//             scale: 1,
//         },
//         header: {
//             color: { text: "#202223", background: "#ffffff", border: "#202223" },
//             borderWidth: { top: 1, right: 1, bottom: 1, left: 1 },
//             borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
//             borderType: "solid",
//             typography: { fontFamily: "arial", customFontFamily: "", fontStyle: "normal", fontSize: "14" },
//         },
//         body: {
//             color: { text: "#202223", background: "#ffffff", border: "#202223" },
//             borderWidth: { top: 1, right: 1, bottom: 1, left: 1 },
//             borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
//             borderType: "solid",
//             typography: { fontFamily: "arial", customFontFamily: "", fontStyle: "normal", fontSize: "14" },
//         },
//         footer: {
//             color: { text: "#202223", background: "#ffffff", border: "#202223" },
//             borderWidth: { top: 1, right: 1, bottom: 1, left: 1 },
//             borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
//             borderType: "solid",
//             typography: { fontFamily: "arial", customFontFamily: "", fontStyle: "normal", fontSize: "14" },
//         },
//         redirectButton: {
//             color: { text: "#202223", background: "#ffffff", border: "#202223" },
//             borderWidth: { top: 1, right: 1, bottom: 1, left: 1 },
//             borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
//             borderType: "solid",
//             typography: { fontFamily: "arial", customFontFamily: "", fontStyle: "normal", fontSize: "14" },
//         },
//         cancelButton: {
//             color: { text: "#202223", background: "#ffffff", border: "#202223" },
//             borderWidth: { top: 1, right: 1, bottom: 1, left: 1 },
//             borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
//             borderType: "solid",
//             typography: { fontFamily: "arial", customFontFamily: "", fontStyle: "normal", fontSize: "14" },
//         },
//     },
// };

const initialState = {
    activeComponent: "container",
    settings: {
        container: {
            animation: "fade",
            color: { background: "#f8f9fa", border: "#dee2e6" },
            borderWidth: { top: 0, right: 0, bottom: 0, left: 0 },
            borderRadius: { topLeft: 8, topRight: 8, bottomLeft: 8, bottomRight: 8 },
            borderType: "solid",
            padding: { top: 16, right: 24, bottom: 16, left: 24 },
            position: 4,
            scale: 20,
        },
        header: {
            color: { text: "#212529", background: "#ffffff", border: "#dee2e6" },
            borderWidth: { top: 0, right: 0, bottom: 0, left: 0 },
            borderRadius: { topLeft: 6, topRight: 6, bottomLeft: 0, bottomRight: 0 },
            borderType: "solid",
            typography: {
                fontFamily: "arial",
                customFontFamily: "",
                fontStyle: "normal",
                fontSize: "20",
            },
        },
        body: {
            color: { text: "#495057", background: "#ffffff", border: "transparent" },
            borderWidth: { top: 0, right: 0, bottom: 0, left: 0 },
            borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 },
            borderType: "solid",
            typography: {
                fontFamily: "arial",
                customFontFamily: "",
                fontStyle: "normal",
                fontSize: "16",
            },
        },
        footer: {
            color: { text: "#212529", background: "#f8f9fa", border: "#dee2e6" },
            borderWidth: { top: 0, right: 0, bottom: 0, left: 0 },
            borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 6, bottomRight: 6 },
            borderType: "solid",
            typography: {
                fontFamily: "arial",
                customFontFamily: "",
                fontStyle: "normal",
                fontSize: "14",
            },
        },
        redirectButton: {
            color: { text: "#ffffff", background: "#0d6efd", border: "#0a58ca" },
            borderWidth: { top: 0, right: 0, bottom: 0, left: 0 },
            borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 },
            borderType: "solid",
            typography: {
                fontFamily: "arial",
                customFontFamily: "",
                fontStyle: "normal",
                fontSize: "14",
            },
        },
        cancelButton: {
            color: { text: "#212529", background: "#e9ecef", border: "#dee2e6" },
            borderWidth: { top: 0, right: 0, bottom: 0, left: 0 },
            borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 },
            borderType: "solid",
            typography: {
                fontFamily: "arial",
                customFontFamily: "",
                fontStyle: "normal",
                fontSize: "14",
            },
        },
    },
};

const popupSettingsSlice = createSlice({
    name: "popupSettings",
    initialState,
    reducers: {
        setActiveComponent: (state, action) => {
            state.activeComponent = action.payload;
        },
        updateComponentSettings: (state, action) => {
            const { component, newSettings } = action.payload;
            if (state.settings[component]) {
                Object.entries(newSettings).forEach(([key, value]) => {
                    if (typeof value === "object" && value !== null) {
                        state.settings[component][key] = { ...state.settings[component][key], ...value };
                    } else {
                        state.settings[component][key] = value;
                    }
                });
            }
        },
        resetSettings: (state) => {
            return initialState;
        },
    },
});

export const { setActiveComponent, updateComponentSettings, resetSettings } = popupSettingsSlice.actions;
export default popupSettingsSlice.reducer;
