import React from 'react'
import {useSelector} from "react-redux";
import _ from 'lodash'
import TempDiv from "../TempDiv";

export default function Head(props) {
    const personalState = useSelector(state => state.personal)
    const {firstName, middleName, lastName, dateOfBirth, gender, image} = personalState
    const fullName = `${firstName}${middleName && " " + middleName}${lastName && " " + lastName}`
    return (
        <div className="card mb-3 border-0"
             style={{ /* margin: "auto", maxWidth: "540px", */ backgroundColor: 'rgba(0,0,0,0.0)'}}>
            <div className='row g-2'>
                <div className='col-8'>
                    <div>
                        {
                            fullName
                                ? <h2 className="card-title">{fullName}</h2>
                                : <TempDiv {...({width: '100%', height: '55px'})} />
                        }
                        {
                            dateOfBirth
                                ? <p className="card-text">Date of birth: {dateOfBirth}</p>
                                : <TempDiv {...({width: '100%', height: '40px', marginTop: '10px'})} />
                        }
                        {
                            gender
                                ? <p className="card-text">Gender:
                                    <small className="text-muted">{" "}
                                        {_.startCase(gender)}
                                    </small>
                                </p>
                                : <TempDiv {...({width: '100%', height: '35px', marginTop: '10px'})} />
                        }
                    </div>
                </div>
                <div className='col-2'>
                    {image
                        ? <img src={image.toString()} alt={""} height='135px' border='1'/>
                        : <TempDiv {...({width: '130px', height: '150px'})} />
                    }
                </div>
                <div className='col-2'>
                    <TempDiv {...({width: '130px', height: '135px', children: <p>QR goes here</p>})} />
                </div>
            </div>
        </div>
    )
}
