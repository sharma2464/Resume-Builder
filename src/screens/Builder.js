import React from 'react'
import Accordian from "../components/Accordian";
import PersonalDetails from "./Forms/PersonalDetails";
import Preview from "../components/Preview";
import ProfessionalDetails from "./Forms/ProfessionalDetails";
import MedicalLicence from "./Forms/MedicalLicenceDetails";


export default function Builder(props) {
    const formList = [
        {title: 'Personal Details', components: <PersonalDetails/>},
        {title: 'Professional Details', components: <ProfessionalDetails/>},
        {title: 'Medical Licence', components: <MedicalLicence/>},
    ]

    return (
        <div className="">
            <div className="" style={{display: 'flex', marginTop: '1%'}}>
                <div className="" style={{/*margin: 'auto', */ width: '50vw'}}>
                    <div style={{margin: '50px'}}>
                        <Accordian list={formList}/>
                    </div>
                </div>
                <div className="" style={{/*margin: 'auto', */ width: '50vw'}}>
                    <div style={{margin: '50px'}}>
                        <Preview/>
                    </div>
                </div>

            </div>
        </div>
    )
}
