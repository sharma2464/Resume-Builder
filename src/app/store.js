import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../screens/counter/counterSlice';
import personalDetailsReducer from "../config/slices/personalDetailsSlice";
// import professionalDetailsReducer from "../config/slices/professionalDetailsSlice";
import professionalExperienceReducer from "../config/slices/professionalExperienceSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        personal: personalDetailsReducer,
        // professional: professionalDetailsReducer,
        experiences: professionalExperienceReducer
    },
});
