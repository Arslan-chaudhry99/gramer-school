import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SchoolDataReducer = createSlice({
    name: "datasets",
    initialState: [],
    reducers: {
        getSchoolRecords(state, action) {

            return action.payload

        }
    }
})
export const { getSchoolRecords } = SchoolDataReducer.actions;
export default SchoolDataReducer.reducer;

export function getDataTriger(qry) {
    console.log(qry.query);
    return async function getSchoolDataThunk(dispatch, getstate) {
        try {

            const res = await axios.get(`/getschool?name=${qry.query}&class=${qry.className}&page=${qry.offSet}`);

            dispatch(getSchoolRecords(res.data))

        } catch (error) {
            console.log(error);
        }
    }
}