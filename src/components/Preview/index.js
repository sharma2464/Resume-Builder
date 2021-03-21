import React from 'react'
import ResumeHead from "./Head";
import Body from "./Body";

export default function Preview(props) {
    return (
        <div
            className="shadow-lg p-3 mb-5 bg-body rounded"
            style={{width: '21cm', height: '29.7cm'}}>
            <div id="resumeContainer">
                <div className='card-header'>
                    <ResumeHead/>
                </div>
                <div className="card-body">
                    <Body/>
                    <hr/>
                    This is some text within a card body.
                </div>
            </div>
        </div>
    )
}
