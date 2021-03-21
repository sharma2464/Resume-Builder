/* eslist-disable react-hooks/exhaustive-deps */
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {getProfile, setShowProfile} from "../../config/slices/usersSlice";
import {Link} from "react-router-dom";

export default function ShowProfile(props) {
    const showProfile = useSelector(state => state.profiles.showProfile)
    const dispatch = useDispatch()
    const profileID = props.match.params.id

    React.useEffect(() => {

        getProfile(profileID).then(data => {
            dispatch(setShowProfile(data))
            Swal.fire({
                text: 'Succesfully fetched Profile',
                toast: true,
                position: 'bottom',
                icon: "success",
                timer: 1500

            })
        }).catch(error => {
            console.log("Error", {...error})
            Swal.fire({
                text: 'Error Fetching Profile',
                toast: true,
                position: 'bottom',
                icon: "error"
            })
        })

    }, [])
    return (
        <>
            <div className='container mt-2'>
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                    <div className='card'>
                        <Link className='card-header' to={{pathname: "/profiles"}}>Back</Link>
                        <h3 className='card-header'>Profile</h3>
                        <div className='card-body fade show'>
                            <div className='row flex'>
                                <div className='col-2'>
                                    <img className='img-thumbnail' src={showProfile.avatar}
                                         alt={showProfile.first_name}/>
                                </div>
                                <div className='col-10'>
                                    <h4 className='card-header'>{showProfile.first_name}{" "}{showProfile.last_name}</h4>
                                    <div className='card-body'>
                                        <p className='card-text'>Email: {showProfile.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
