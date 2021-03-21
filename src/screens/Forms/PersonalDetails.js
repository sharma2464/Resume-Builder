import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {update, makePublic, reset} from "../../config/slices/personalDetailsSlice";

export default function PersonalDetails(props) {
    const personalState = useSelector(state => state.personal)
    const _init_state_ = {
        firstName: personalState.firstName,
        middleName: personalState.middleName,
        lastName: personalState.lastName,
        dateOfBirth: personalState.dateOfBirth,
        gender: personalState.gender,
        makePublic: personalState.makePublic,
        image: personalState.image
    }
    const [state, setState] = React.useState(_init_state_)
    const dispatch = useDispatch()

    const handleInputChange = event => {
        setState({...state, [event.target.name]: event.target.value})
    }
    const handleRadioChange = event => {
        setState({...state, gender: event.target.value})
    }

    const handleMakeProfilePublic = event => {
        setState({...state, makePublic: !state.makePublic})
    }
    const handleFormSubmit = event => {
        // console.log("State", state, "\n", 'Personal', personalState)
        dispatch(update(state))
    }

    const handleImageUpload = event => {
        setState({...state, image: URL.createObjectURL(event.target.files[0])})
    }

    return (
        <div className="row g-4">
            <div className="col-md-4">
                <label htmlFor="validationFirstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationFirstName" name='firstName'
                       value={state.firstName} required onChange={handleInputChange} onBlur={handleFormSubmit}/>
                <div className="invalid-feedback">
                    First name is required.
                </div>
            </div>

            <div className="col-md-4">
                <label htmlFor="validationMiddleName" className="form-label">Middle name</label>
                <input type="text" className="form-control" id="validationMiddleName" name='middleName'
                       value={state.middleName} onChange={handleInputChange} onBlur={handleFormSubmit}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="validationLastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationLastName" name='lastName'
                       value={state.lastName} required onChange={handleInputChange} onBlur={handleFormSubmit}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="validationDob" className="form-label">Date of birth</label>
                <input type="date" className="form-control" id="validationDob" required name='dateOfBirth'
                       onChange={handleInputChange} onBlur={handleFormSubmit}/>
                <div className="invalid-feedback">
                    Date of birth is required.
                </div>
            </div>

            <div className="col-md-8">
                <label htmlFor="validationGender" className="form-label">Gender</label>
                <br/>
                {['Male', 'Female', 'Others'].map((e, i) => (
                    <div id='validationGender' className="form-check form-check-inline" key={i}>
                        <input className="form-check-input" type="radio" name={e}
                               id={`${e}_${i}`}
                               value={e.toLowerCase()}
                               checked={state.gender === e.toLowerCase() || null}
                               onChange={handleRadioChange} onBlur={handleFormSubmit}/>
                        <label className="form-check-label" htmlFor={`${e}_${i}`}>
                            {e}
                        </label>
                    </div>
                ))}
                <div className="invalid-feedback">
                    Gender is required.
                </div>
            </div>

            <div className='col-md-4'>
                <label className="form-label" htmlFor="photoUpload">Profile Picture</label>
                <input type='file' onChange={handleImageUpload} id='photoUpload' onBlur={handleFormSubmit}/>
            </div>
            <div className='col-md-4'>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                           checked={state.makePublic} onChange={handleMakeProfilePublic}
                           onBlur={handleFormSubmit}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Make profile
                        public</label>
                </div>
            </div>
            <div className="col-md-4">
                <button className="btn btn-sm btn-primary" style={{float: "right"}}
                        onClick={handleFormSubmit}>Update
                </button>
            </div>
            <div className='col-md-12'>
                <div className='row'>



                </div>
            </div>
        </div>
    )
}
