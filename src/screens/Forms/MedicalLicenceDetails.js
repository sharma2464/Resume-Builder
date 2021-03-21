import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Tabs from "../../components/Tabs";
import Experiences from "./Experiences";
import Swal from 'sweetalert2'
import _ from 'lodash'
import {addLicence, removeLicence, updateLicence} from "../../config/slices/medicalLicenceSlice";

export default function MedicalLicence(props) {

    const licences = useSelector(state => state.licences)
    const dispatch = useDispatch()

    const handleAddLicence = async event => {
        const {value: text} = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Add new licence',
            inputPlaceholder: 'Type your licence here...',
            inputAttributes: {
                'aria-label': 'Type your licence here'
            },
            showCancelButton: true
        })

        if (text) {
            dispatch(addLicence(text))
            Swal.fire("Added", 'Licence has been added', "success")
        }
    }
    const handleEditLicence = async (event, id, _type_) => {
        let index = _.findIndex(licences, {id: id})
        let licText = licences[index].text
        if (licText) {
            const {value: text} = await Swal.fire({
                inputValue: licText,
                input: 'textarea',
                inputLabel: 'Update licence',
                inputPlaceholder: 'Type your licence here...',
                inputAttributes: {'aria-label': 'Type your licence here'},
                showCancelButton: true
            })

            if (text) {
                dispatch(updateLicence({id, text}))
                Swal.fire("Updated", "Licence has been updated", 'success')
            }
        }
    }
    const handleDeleteLicence = (event, id, _type_) => {
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
                dispatch(removeLicence(id))
                Swal.fire(
                    'Deleted!',
                    'Licence has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <Tabs list={[
            {
                title: 'Licences',
                components: <>
                    <div className='row'>
                        <div className='col-12 mb-2'>
                            <button className='btn btn-sm btn-primary float-end'
                                    onClick={handleAddLicence}>Add New
                            </button>
                        </div>
                    </div>
                    <Experiences {...({
                        experiences: licences,
                        type: 'licences',
                        handleEditExperience: handleEditLicence,
                        handleDeleteExperience: handleDeleteLicence
                    })}/>
                </>
            }
        ]}/>
    )
}
