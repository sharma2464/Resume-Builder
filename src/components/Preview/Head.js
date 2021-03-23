import React from 'react'
import {useSelector} from "react-redux";
import _ from 'lodash'
import TempDiv from "../TempDiv";

export default function Head(props) {
    const personalState = useSelector(state => state.personal)
    const {firstName, middleName, lastName, dateOfBirth, gender, bio, image} = personalState
    const fullName = `${firstName}${middleName && " " + middleName}${lastName && " " + lastName}`

    return (
        <div className="mb-3 border-0"
             style={{ /* margin: "auto", maxWidth: "540px", */ backgroundColor: 'rgba(0,0,0,0.0)'}}>
            <div className='row g-2'>
                <div className='col-8'>
                    <div>
                        {
                            fullName
                                ? <h2 className="card-title">{fullName}</h2>
                                : <TempDiv {...({width: '100%', height: '55px'})} />
                        }
                        <div className='row'>
                            <div className='col'>

                                {
                                    dateOfBirth
                                        ? <p className="card-text">Date of birth:{" "}
                                            <span className='text-muted'>{dateOfBirth}</span>
                                        </p>
                                        : <TempDiv {...({width: '100%', height: '40px', marginTop: '10px'})} />
                                }
                            </div>
                            <div className='col'>
                                {
                                    gender
                                        ? <p className="card-text">Gender:
                                            <span className="text-muted">{" "}
                                                {_.startCase(gender)}
                                            </span>
                                        </p>
                                        : <TempDiv {...({width: '100%', height: '35px', marginTop: '10px'})} />
                                }
                            </div>
                        </div>
                        <div className='text-muted mt-1'>
                            {bio
                                ? <> Bio:{" "}<small className="fw-normal">{bio}</small></>
                                : <TempDiv {...({width: '100%', height: '35px', marginTop: '10px'})} />}

                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    {image
                        ? <img src={image} alt={""} height='150px' width='115px' border='1'/>
                        : <TempDiv {...({width: '130px', height: '150px'})} />
                    }
                </div>
                <div className='col-2'>
                    <TempDiv {...({
                        marginTop: '10px',
                        width: '130px',
                        height: '130px',
                        border: '1px solid grey',
                        children: <code>QR goes here</code>
                    })} />
                </div>
            </div>
        </div>
    )
}
