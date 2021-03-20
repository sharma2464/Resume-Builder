import {createSlice} from "@reduxjs/toolkit";

const initialState = {}
const slice = createSlice({
    name: 'professional',
    initialState,
    reducers: {
        update: state => state
    }
})

const {actions, reducer} = slice
export const {update} = actions
export default reducer
