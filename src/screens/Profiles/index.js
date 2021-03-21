/* eslist-disable react-hooks/exhaustive-deps */
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash'
import Swal from "sweetalert2";
import {getProfiles, setProfiles} from "../../config/slices/usersSlice";
import {Link} from "react-router-dom";

export default function Profiles(props) {
    const profiles = useSelector(state => state.profiles.list)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (!profiles.list || profiles.list.length === 0) {
            getProfiles().then(data => {
                dispatch(setProfiles(data))
                Swal.fire({
                    text: 'Succesfully fetched Profiles',
                    toast: true,
                    position: 'bottom',
                    icon: "success",
                    timer: 1500
                })
            }).catch(error => {
                console.log("Error", {...error})
                Swal.fire({
                    text: 'Error Fetching Profiles',
                    toast: true,
                    position: 'bottom',
                    icon: "error"
                })
            })
        }
    }, [])
    return (
        <>
            <div className='container mt-2'>
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                    <div className='card'>
                        <h3 className='card-header'>Doctors Profiles (Public)</h3>
                        <div className='card-body'>
                            {!_.isEmpty(profiles)
                                ? (
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Profile</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {profiles.map((p, i) => (
                                            <tr key={i}>
                                                <th scope="row">{p.id}</th>
                                                <td>
                                                    <Link to={{pathname: `/profiles/${p.id}`}}>
                                                        <img className='img-thumbnail' width='50' src={p.avatar}
                                                             alt={p.first_name}/>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={{pathname: `/profiles/${p.id}`}}>
                                                        {p.first_name}
                                                    </Link>
                                                </td>
                                                <td>{p.last_name}</td>
                                                <td>{p.email}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                ) : <p>Nothing to show here</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
