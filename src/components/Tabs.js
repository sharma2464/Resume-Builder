import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default function Tabs(props) {
    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {props.list && props.list.map((e, i) => (
                    <li key={`${_.snakeCase(e.title)}_${i}`} className="nav-item" role="presentation">
                        <button className={`nav-link ${i === 0 ? "active" : ''}`} id={`${_.snakeCase(e.title)}-tab`}
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
                        <div key={`${_.snakeCase(e.title)}_${i}`} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`${_.snakeCase(e.title)}`}
                             role="tabpanel" aria-labelledby={`${_.snakeCase(e.title)}-tab`}>
                            <div className='py-2'></div>
                            {e.components}
                        </div>
                    ))
                }
            </div>
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
