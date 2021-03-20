import {combineReducers} from "@reduxjs/toolkit";
import personalDetailsReducer from "../slices/personalDetailsSlice";

export const rootReducer = combineReducers([
    {personal: personalDetailsReducer},
    // {professional: professionalDetailsReducer}
])

