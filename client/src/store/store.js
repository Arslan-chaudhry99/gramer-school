import { configureStore } from "@reduxjs/toolkit";
import SchoolDataReducer from "./SchoolData"
const store = configureStore({
    reducer: {
        datasets: SchoolDataReducer
    }
});
export default store;
