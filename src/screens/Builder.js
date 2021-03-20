import React from 'react'
import Accordian from "../components/Accordian";
import Navbar from "../components/Navbar";
import PersonalDetails from "./Forms/PersonalDetails";
import Preview from "../components/Preview";
import ProfessionalDetails from "./Forms/ProfessionalDetails";

export default function Builder(props) {
    const formList = [
        {title: 'Personal Details', components: <PersonalDetails/>},
        {title: 'Professional Details', components: <ProfessionalDetails/>},
    ]
    return (
        <div className="">
            <Navbar brandName='Resume Builder' brandLink="/"
                    links={[{name: 'Home', link: '/'}, {name: 'Preview', link: '/preview'},]}/>
            <div className="row m-4">
                <div className="col-sm">
                    <Accordian list={formList}/>
                </div>
                <div className="col-sm" style={{margin: 'auto'}}>
                    <Preview/>
                </div>

            </div>
        </div>
    )
}
