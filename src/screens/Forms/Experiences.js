import React from 'react'

export default function Experiences(props) {
    return (
        <>
            <div className='card'>
                <table className="table table-sm table-hover table-responsive align-middle">
                    <tbody className='text-start'>
                    {
                        props.experiences && props.experiences.map((e, i) => (
                            <tr key={i}>
                                <th scope="row" className='border-end'>{i + 1}</th>
                                <td style={{wordBreak: 'break-all', width: '100%'}}>{e.text}</td>
                                <td className="btn-group btn-group-sm" role="group"
                                    aria-label="experience edit delete buttons">
                                    <button type="button" className="btn btn-outline-primary"
                                            onClick={event => props.handleEditExperience(event, e.id, props.type)}>Edit
                                    </button>
                                    <button type="button" className="btn btn-outline-danger"
                                            onClick={event => props.handleDeleteExperience(event, e.id, props.type)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
