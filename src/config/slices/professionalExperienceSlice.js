import {createSlice} from "@reduxjs/toolkit";

let counter = 0
const slice = createSlice({
    name: 'experiences',
    initialState: {
        hospitalExperiences: [],
        specialAssignments: [],
        professionalPositions: []
    },
    reducers: {
        addExperience: (state, action) => {
            state[action.payload.type].push({id: ++counter, text: action.payload.text})
        },
        addHospitalExperience: (state, action) => {
            return {
                ...state,
                hospitalExperiences: [...state.hospitalExperiences, {id: ++counter, text: action.payload}]
            }
        },
        addSpecialAssignments: (state, action) => {
            return {...state, specialAssignments: [...state.specialAssignments, {id: ++counter, text: action.payload}]}
        },
        addProfessionalPositions: (state, action) => {
            return {
                ...state,
                professionalPositions: [...state.professionalPositions, {id: ++counter, text: action.payload}]
            }
        },

        // One for All action
        updateExperience: (state, action) => {
            state[action.payload.type][action.payload.index].text = action.payload.text
        },

        // Specific Actions
        updateHospitalExperience: (state, action) => {
            console.log('Exp', action.payload)
            const heIndex = state.hospitalExperiences.findIndex(exp => exp.id === action.payload.id)
            state.hospitalExperiences[heIndex].text = action.payload.text
        },
        updateSpecialExperience: (state, action) => {
            const saIndex = state.specialAssignments.findIndex(exp => exp.id === action.payload.id)
            return state.specialAssignments[saIndex].text = action.payload.text
        },
        updateProfessionalPositions: (state, action) => {
            const ppIndex = state.professionalPositions.findIndex(exp => exp.id === action.payload.id)
            return state.professionalPositions[ppIndex].text = action.payload.text
        },

        // One for All Action
        removeExperience: (state, action) => {
            return {
                ...state,
                [action.payload.type]: state[action.payload.type].filter(exp => exp.id !== action.payload.id)
            }
        },

        // Specific Actions
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
    addExperience, updateExperience, removeExperience
} = actions
export default reducer
