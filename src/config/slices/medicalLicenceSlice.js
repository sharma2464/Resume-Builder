import {createSlice} from "@reduxjs/toolkit";

const initialState = []
let counter = 0;
const slice = createSlice({
    name: 'licences',
    initialState,
    reducers: {
        addLicence: (state, action) => {
            state.push({id: ++counter, text: action.payload})
        },
        updateLicence: (state, action) => {
            const licIndex = state.findIndex(lic => lic.id === action.payload.id)
            state[licIndex].text = action.payload.text
        },
        removeLicence: (state, action) => {
            return state.filter(lic => lic.id !== action.payload)

        },
        removeExperience: (state, action) => {
            return {
                ...state,
                [action.payload.type]: state[action.payload.type].filter(exp => exp.id !== action.payload.id)
            }
        },
    }
})

const {actions, reducer} = slice
export const {addLicence, removeLicence, updateLicence} = actions
export default reducer
