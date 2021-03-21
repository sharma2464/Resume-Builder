import React from 'react'
import {useSelector} from "react-redux";
import TempDiv from "../TempDiv";
import _ from 'lodash'
import ExperienceCard from "./ExperienceCard";

export default function Body(props) {
    const {hospitalExperiences, specialAssignments, professionalPositions} = useSelector(state => state.experiences)
    const licences = useSelector(state => state.licences)

    const MedicalLicenses = props => {
        return (
            <ExperienceCard headline="Licences" collections={[{
                title: '', list: licences
            }]}/>
        )
    }

    const ProfessionalExperiences = props => {
        const experienceCollections = [
            {title: "Hospital Experiences", list: hospitalExperiences},
            {title: "Special Assignments Served", list: specialAssignments},
            {title: "Professional Positions", list: professionalPositions}
        ].filter(e => !_.isEmpty(e.list))
        return <ExperienceCard headline='Professional Experiences' collections={experienceCollections}/>

    }

    return (
        <>
            <div style={{width: '100%', height: '100%'}}>
                <div className='row justify-content-between'>
                    <TempDiv {...{
                        width: '80%',
                        height: '40px',
                        children: <h4 className='d-flex align-self-center mt-2'>Clinical Experiences</h4>
                    }} />
                    <TempDiv {...{
                        width: '18%',
                        height: '40px',
                        children: <p className='d-flex align-self-center mt-2'><i className="fas fa-medal"></i></p>
                    }} />
                </div>
                {licences.length > 0 ? <MedicalLicenses/> : null}
                <ProfessionalExperiences/>
            </div>
        </>
    )
}
