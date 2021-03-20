import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default function Accordian(props) {
    return (
        <div className="accordion" id="accordionExample">
            {props.list && props.list.map((e, i) => (
                <div className="accordion-item" key={_.snakeCase(e.title) + "_" + i}>
                    <h2 className="accordion-header" id={`${_.snakeCase(e.title)}_${i}`}>
                        <button className={`accordion-button ${i === 0 ? '' : 'collapsed'}`} type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`${'#collapse' + i}`} aria-expanded={i === 0}
                                aria-controls={`${'#collapse' + i}`}>
                            {e.title}
                        </button>
                    </h2>
                    <div id={`${'collapse' + i}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ''}`}
                         aria-labelledby={`${_.snakeCase(e.title)}_${i}`}
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {e.components}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

Accordian.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        components: PropTypes.node
    }))
}
Accordian.defaultProps = {
    list: [
        {title: 'Sample Accordian 1', components: <>Hello</>},
        {title: 'Sample Accordian 1', components: <>World</>},
    ]
}
