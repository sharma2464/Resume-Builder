import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    list: [],
    showProfile: {}
}
const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setProfiles: (state, action) => {
            state.list = action.payload
        },
        resetProfiles: (state, action) => {
            state.list = []
        },
        setShowProfile: (state, action) => {
            state.showProfile = action.payload
        }
    }
})

const {actions, reducer} = slice
export const {setProfiles, setShowProfile, resetProfiles} = actions
export default reducer

export const getProfiles = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://reqres.in/api/users`
            })
            if (response.data.data) {
                const data = await response.data.data
                resolve(data)
            }
        } catch (error) {
            if (error.response) {
                reject(error.response)
            }
        }
    })
}

export const getProfile = async id => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://reqres.in/api/users/${id}`
            })
            if (response.data) {
                resolve(response.data.data)
            }
        } catch (error) {
            if (error.response) {
                reject(error.response)
            }
        }
    })
}

