import React from 'react'
import Head from "./Head";

export default function Preview(props) {
    return (
        <div className=''>
            <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{width: '21cm', height: '29.7cm'}}>
                <div className=''>
                    <div className='card-header'>
                        <Head/>
                    </div>
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
        </div>
    )
}
