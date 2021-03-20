import React from 'react'

export default function Experiences(props) {
    return (
        <>
            <div className='card'>
                <table className="table table-sm table-hover table-bordered">
                    <div className='table-responsive'>
                        <table className='table align-middle'>
                            <tbody className='text-start'>
                            {
                                props.experiences && props.experiences.map((e, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td style={{wordBreak: 'break-all'}}>{e.text}</td>
                                        <td style={{float: 'right'}}>
                                            <div className="btn-group btn-group-sm" role="group" aria-label="experience edit delete buttons">
                                                <button type="button" className="btn btn-outline-primary" onClick={event => props.handleEditExperience(event, e.id, props.type)} >Edit</button>
                                                <button type="button" className="btn btn-outline-danger" onClick={event => props.handleDeleteExperience(event, e.id, props.type)} >Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </table>
            </div>
        </>
    )
}
