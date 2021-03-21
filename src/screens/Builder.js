import React from 'react'
import Accordian from "../components/Accordian";
import PersonalDetails from "./Forms/PersonalDetails";
import Preview from "../components/Preview";
import ProfessionalDetails from "./Forms/ProfessionalDetails";
import MedicalLicence from "./Forms/MedicalLicenceDetails";
import handlePDFDownload from "../helpers/downloadPDF";


export default function Builder(props) {
    const formList = [
        {title: 'Personal Details', components: <PersonalDetails/>},
        {title: 'Professional Details', components: <ProfessionalDetails/>},
        {title: 'Medical Licence', components: <MedicalLicence/>},
    ]


    return (
        <div className="">
            <div className='fixed-bottom'>
                <div className=''>
                    <span className='row'>
                        <button className='btn btn-sm btn-success ' onClick={handlePDFDownload}>Download PDF
                        </button>
                    </span>
                </div>
            </div>
            <div className="row">
                {/*<div className="" style={{display: 'flex', marginTop: '1%'}}>*/}
                <div className="col-lg-6">
                    {/*<div className="" style={/!*margin: 'auto', width: '50vw'}}>*/}
                    <div style={{margin: '50px'}}>
                        <Accordian list={formList}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/*<div className="" style={/!*margin: 'auto', width: '50vw'}}>*/}
                    <div style={{margin: '50px'}}>
                        <Preview/>
                    </div>
                </div>

            </div>
        </div>
    )
}

//{
//             name: 'Download as PDF',
//             onClick: handlePDFDownload,
//             className: 'btn btn-sm btn-outline-success text-white align-self-end'
//         }
