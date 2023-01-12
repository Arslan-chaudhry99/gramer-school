import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "./LodingObject";
import { toast } from 'react-toastify';
const SchoolDataReducer = createSlice({
    name: "datasets",
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        getSchoolRecords(state, action) {
            state.data = action.payload
        },
        setLoding(state, action) {
            state.status = action.payload
        }
    }
})
export const { getSchoolRecords, setLoding } = SchoolDataReducer.actions;
export default SchoolDataReducer.reducer;

export function getDataTriger(qry) {
    return async function getSchoolDataThunk(dispatch, getstate) {
        dispatch(setLoding(STATUSES.LODING))
        const id = toast.loading("Please wait...")
        try {
            const res = await axios.get(`/getschool?name=${qry.query}&className=${qry.className}&page=${qry.offSet}`);
            dispatch(getSchoolRecords(res.data))
            dispatch(setLoding(STATUSES.IDLE))
            toast.update(id, { render: "All is good", type: "success", isLoading: false ,autoClose: 250,});

        } catch (error) {
            dispatch(setLoding(STATUSES.ERROR))
            console.log(error);
            toast.update(id, { render: "All is not good", type: "error", isLoading: false, autoClose: 500,});
        }
    }
}