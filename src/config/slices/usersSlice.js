import React from "react";
import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import Swal from "sweetalert2";

const slice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        showProfile: {}
    },
    reducers: {
        setProfiles: (state, action) => {
            console.log({action})
            // return {
            //     ...state, list: action.payload
            // }
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

export const getProfiles = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://reqres.in/api/users`
            })
            if (response.data.data) {
                resolve(response.data.data)
                // setProfiles(response.data.data)
                // console.log(response.data.data)
                // Swal.fire({
                //     text: 'Succesfully fetched Profiles',
                //     toast: true,
                //     position: 'bottom',
                //     icon: "success"
                // })
            }
        } catch (error) {
            if (error.response) {
                reject(error.response)
                // Swal.fire({
                //     text: 'Error Fetching Profiles',
                //     // html: <p></p>,
                //     toast: true,
                //     position: 'bottom',
                //     icon: "error"
                // })
            }
        }
    })
}

export const getProfile = async id => {
    try {
        const response = await axios({
            method: "GET",
            url: `https://reqres.in/api/users/${id}`
        })
        if (response) {
            setShowProfile(response.data)
            Swal.fire({
                text: 'Succesfully fetched Profile',
                toast: true,
                position: 'bottom',
                icon: "success"
            })
        }
    } catch (error) {
        if (error) {
            Swal.fire({
                text: 'Error Fetching Profiles',
                html: <p>{error.toString()}</p>,
                toast: true,
                position: 'bottom',
                icon: "error"
            })
        }
    }
}

