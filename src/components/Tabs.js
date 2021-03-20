import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default function Tabs(props) {
    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {props.list && props.list.map((e, i) => (
                    <li className="nav-item" role="presentation">
                        <button className={`nav-link ${i === 0 && "active"}`} id={`${_.snakeCase(e.title)}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#${_.snakeCase(e.title)}`}
                                type="button" role="tab" aria-controls={`${_.snakeCase(e.title)}`}
                                aria-selected={i === 0}>{e.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="tab-content" id="myTabContent">
                {
                    props.list && props.list.map((e, i) => (
                        <div className={`tab-pane fade ${i === 0 && 'show active'}`} id={`${_.snakeCase(e.title)}`}
                             role="tabpanel" aria-labelledby={`${_.snakeCase(e.title)}-tab`}>
                            <div className='py-2'></div>
                            {e.components}
                        </div>
                    ))
                }
            </div>
            {/*
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Hospital Experiences
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Special Assignements
                        Served
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">Professional
                        Positions
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
            */}
        </div>
    )
}

Tabs.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        components: PropTypes.node
    }))
}
Tabs.defaultProps = {
    list: [
        {title: 'Tab 1', components: <>Hello</>},
        {title: 'Tab 2', components: <>World</>},
    ]
}
