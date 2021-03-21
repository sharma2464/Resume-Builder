import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Tabs from "../../components/Tabs";
import Experiences from "./Experiences";
import {
    addExperience,
    removeExperience,
    updateExperience,
} from "../../config/slices/professionalExperienceSlice";
import Swal from 'sweetalert2'
import _ from 'lodash'

export default function ProfessionalDetails(props) {
    const experiences = useSelector(state => state.experiences)
    const dispatch = useDispatch()

    const handleAddExperience = async (event, type) => {
        const {value: text} = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Add new experience',
            inputPlaceholder: 'Type your experience here...',
            inputAttributes: {
                'aria-label': 'Type your experience here'
            },
            showCancelButton: true
        })

        if (text) {
            dispatch(addExperience({type, text}))
            Swal.fire("Added", 'Experience has been added', "success")
        }
    }

    const handleEditExperience = async (event, id, type) => {
        let index = _.findIndex(experiences[type], {id: id})
        let expText = experiences[type][index].text
        if (expText) {
            const {value: text} = await Swal.fire({
                inputValue: expText,
                input: 'textarea',
                inputLabel: 'Update experience',
                inputPlaceholder: 'Type your experience here...',
                inputAttributes: {'aria-label': 'Type your experience here'},
                showCancelButton: true
            })

            if (text) {
                dispatch(updateExperience({type, index, text}))
                Swal.fire("Updated", "Experience has been updated", 'success')
            }
        }
    }

    const handleDeleteExperience = (event, id, type) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeExperience({type, id}))
                Swal.fire(
                    'Deleted!',
                    'Experience has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <Tabs list={[
                {
                    title: 'Hospital Experiences',
                    components: <>
                        <div className='row'>
                            <div className='col-12 mb-2'>
                                <button className='btn btn-sm btn-primary float-end'
                                        onClick={e => handleAddExperience(e, 'hospitalExperiences')}>Add New
                                </button>
                            </div>
                        </div>
                        <Experiences {...({
                            experiences: experiences.hospitalExperiences,
                            type: 'hospitalExperiences',
                            handleEditExperience,
                            handleDeleteExperience
                        })}/>
                    </>
                },
                {
                    title: 'Special Assignements',
                    components: <>
                        <div className='row'>
                            <div className='col-12 mb-2'>
                                <button className='btn btn-sm btn-primary float-end'
                                        onClick={e => handleAddExperience(e, 'specialAssignments')}>Add New
                                </button>
                            </div>
                        </div>
                        <Experiences {...({
                            experiences: experiences.specialAssignments,
                            type: 'specialAssignments',
                            handleEditExperience,
                            handleDeleteExperience
                        })}/>
                    </>
                },
                {
                    title: 'Professional Positions',
                    components: <>
                        <div className='row'>
                            <div className='col-12 mb-2'>
                                <button className='btn btn-sm btn-primary float-end'
                                        onClick={e => handleAddExperience(e, 'professionalPositions')}>Add New
                                </button>
                            </div>
                        </div>
                        <Experiences {...({
                            experiences: experiences.professionalPositions,
                            type: 'professionalPositions',
                            handleEditExperience,
                            handleDeleteExperience
                        })}/>
                    </>
                },
            ]}/>
        </div>
    )
}
