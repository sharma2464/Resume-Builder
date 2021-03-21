import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from '../screens/counter/counterSlice';
import personalDetailsReducer from "../config/slices/personalDetailsSlice";
import professionalExperienceReducer from "../config/slices/professionalExperienceSlice";
import medicalLicenceReducer from "../config/slices/medicalLicenceSlice";
import usersReducer from "../config/slices/usersSlice";

export default configureStore({
    reducer: {
        // counter: counterReducer,
        personal: personalDetailsReducer,
        experiences: professionalExperienceReducer,
        licences: medicalLicenceReducer,
        profiles: usersReducer
    },
});
