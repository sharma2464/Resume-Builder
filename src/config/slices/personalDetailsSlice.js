import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    makeProfilePublic: false
}

const slice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        update: (state, action) => {
            return {...state, ...action.payload}
        },
        makePublic: (state, action) => {
            return {...state, ...action.payload.makePublic}
        },
        reset: state => {
            return initialState
        }
    }
})

const {actions, reducer} = slice
export const {update, makePublic, reset} = actions
export default reducer
