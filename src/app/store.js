import {applyMiddleware, combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import counterReducer from '../screens/counter/counterSlice';
import personalDetailsReducer from "../config/slices/personalDetailsSlice";
import professionalExperienceReducer from "../config/slices/professionalExperienceSlice";
import medicalLicenceReducer from "../config/slices/medicalLicenceSlice";
import usersReducer from "../config/slices/usersSlice";

const rootReducer = combineReducers({
    // counter: counterReducer,
    personal: personalDetailsReducer,
    experiences: professionalExperienceReducer,
    licences: medicalLicenceReducer,
    profiles: usersReducer
})

const persistConfig = {key: 'root', storage}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({reducer: persistedReducer, middleware: applyMiddleware()})

const persistor = persistStore(store)

export {store, persistor}
