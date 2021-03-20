import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {update, makePublic, reset} from "../../config/slices/personalDetailsSlice";
import Tabs from "../../components/Tabs";
import Experiences from "./Experiences";
import {
    addHospitalExperience,
    addProfessionalPositions,
    addSpecialAssignments,
    updateExperience,
    updateHospitalExperience,
    updateProfessionalPositions,
    updateSpecialExperience
} from "../../config/slices/professionalExperienceSlice";
import Swal from 'sweetalert2'
import _ from 'lodash'

export default function ProfessionalDetails(props) {
    const experiences = useSelector(state => state.experiences)
    const _init_state_ = {
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        // makePublic: personalState.makePublic
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

    const addExperience = async (event, name) => {

        const {value: text} = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Add new experience',
            inputPlaceholder: 'Type your experience here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })

        if (text) {
            switch (name) {
                case 'hospital':
                    return dispatch(addHospitalExperience(text))

                case 'special':
                    return dispatch(addSpecialAssignments(text))

                case 'professional':
                    return dispatch(addProfessionalPositions(text))

                default:
                    return
            }
            Swal.fire("Added successfully.")
        }
    }

    const handleEditExperience = async (event, id, type) => {
        // let expText = _.findIndex(experiences[type], {id: id}).text
        // let expIndex = experiences[type].findIndex(exp => exp.id === id)
        let index = _.findIndex(experiences[type], {id: id})
        let expText = experiences[type][index].text
        console.log('ExpText', expText)
        // console.log('expText', expText, '\n', 'expIndex', expIndex)
        if (index && expText) {
            const {value: text} = await Swal.fire({
                inputValue: expText,
                input: 'textarea',
                inputLabel: 'Update experience',
                inputPlaceholder: 'Type your experience here...',
                inputAttributes: {'aria-label': 'Type your experience here'},
                showCancelButton: true
            })

            if (text){
                dispatch(updateExperience({type, index, text}))
                // console.log('Text', text)
            }

            // if (text) {
            //     switch (type) {
            //         case 'hospital':
            //             return dispatch(updateHospitalExperience({id, text}))
            //
            //         case 'special':
            //             return dispatch(updateSpecialExperience({id, text}))
            //
            //         case 'professional':
            //             return dispatch(updateProfessionalPositions({id, text}))
            //
            //         default:
            //             return
            //     }
            //     Swal.fire("Added successfully.")
            // }
        }
    }

    //         hospitalExperiences: [],
    //         specialAssignments: [],
    //         professionalPositions: []

    return (
        <div>
            <Tabs list={[
                {
                    title: 'Hospital Experiences', components: (
                        <>
                            <button onClick={e => addExperience(e, 'hospital')}>Add New</button>
                            <Experiences {...({
                                experiences: experiences.hospitalExperiences,
                                type: 'hospitalExperiences',
                                handleEditExperience,
                            })}/>
                        </>
                    )
                },
                {title: 'Special Assignements', components: <>Special Assignements</>},
                {title: 'Professional Positions', components: <>Professional Positions</>},
            ]}/>

        </div>
    )
}
