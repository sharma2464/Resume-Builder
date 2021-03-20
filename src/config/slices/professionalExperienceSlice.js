import {createSlice} from "@reduxjs/toolkit";
import _ from 'lodash'

let counter = 1
const slice = createSlice({
    name: 'experiences',
    initialState: {
        hospitalExperiences: [],
        specialAssignments: [],
        professionalPositions: []
    },
    reducers: {
        addHospitalExperience: (state, action) => {
            counter++
            return {...state, hospitalExperiences: [...state.hospitalExperiences, {id: counter, text: action.payload}]}
        },
        addSpecialAssignments: (state, action) => {
            counter++
            return {...state, specialAssignments: [...state.specialAssignments, {id: counter, text: action.payload}]}
        },
        addProfessionalPositions: (state, action) => {
            counter++
            return {
                ...state,
                professionalPositions: [...state.professionalPositions, {id: counter, text: action.payload}]
            }
        },
        updateExperience: (state, action) => {
            return state[action.payload.type][action.payload.index].text = action.payload.text
        },
        updateHospitalExperience: (state, action) => {
            console.log('Exp', action.payload)
            const heIndex = state.hospitalExperiences.findIndex(exp => exp.id === action.payload.id)
            return state.hospitalExperiences[heIndex].text = action.payload.text
        },
        updateSpecialExperience: (state, action) => {
            const saIndex = state.specialAssignments.findIndex(exp => exp.id === action.payload.id)
            return state.specialAssignments[saIndex].text = action.payload.text
        },
        updateProfessionalPositions: (state, action) => {
            const ppIndex = state.professionalPositions.findIndex(exp => exp.id === action.payload.id)
            return state.professionalPositions[ppIndex].text = action.payload.text
        },
        removeHospitalExperience: (state, action) => {
            return {...state, hospitalExperiences: state.hospitalExperiences.filter(exp => exp.id !== action.payload)}
        },
        removeSpecialExperience: (state, action) => {
            return {...state, specialAssignments: state.specialAssignments.filter(exp => exp.id !== action.payload)}
        },
        removeProfessionalPositions: (state, action) => {
            return {
                ...state,
                professionalPositions: state.professionalPositions.filter(exp => exp.id !== action.payload)
            }
        }
    }
})

const {actions, reducer} = slice
export const {
    addHospitalExperience, addProfessionalPositions, addSpecialAssignments,
    updateHospitalExperience, updateProfessionalPositions, updateSpecialExperience,
    removeHospitalExperience, removeProfessionalPositions, removeSpecialExperience,
    updateExperience
} = actions
export default reducer
