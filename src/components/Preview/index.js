import React from 'react'
import ResumeHead from "./Head";
import Body from "./Body";

export default function Preview(props) {
    return (
        <div >
            <div
                id="resumeContainer"
                style={{width: '21cm', height: '29.7cm', padding: '20px', border: '1px solid #dfdfdf'}}>
                <div>
                    <div className='card-header'>
                        <ResumeHead/>
                    </div>
                    <div className="card-body">
                        <Body/>
                    </div>
                </div>
            </div>
        </div>
    )
}
