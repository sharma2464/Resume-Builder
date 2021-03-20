import React from 'react'
import {useSelector} from "react-redux";

export default function Head(props) {
    const personalState = useSelector(state => state.personal)
    const {firstName, middleName, lastName, dateOfBirth, gender} = personalState
    const fullName = `${firstName}${middleName && " " + middleName}${lastName && " " + lastName}`
    return (
        <div className="card mb-3 border-0"
             style={{margin: 'auto', maxWidth: "540px", backgroundColor: 'rgba(0,0,0,0.0)'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"../../assets/logo192.png" || null} alt={fullName || "Your Name"}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{fullName || "Your Name"}</h3>
                        <p className="card-text">Date of birth: {dateOfBirth || '00-00-00'}</p>
                        <p className="card-text"><small className="text-muted">Gender: {gender || 'gender'}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
