import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default function ExperienceCard(props) {
    return (
        <div className='card mt-1'>
            {props.headline && <h5 className='card-header'>{props.headline}</h5>}
            <div className='card-body'>
                {!_.isEmpty(props.collections) && props.collections.map((col, index) => (
                    <div className='card-text' key={index}>
                        <h6>{col.title}</h6>
                        <ul>
                            {col.list.map((exp, i) => (
                                <li key={i}>{exp.text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

ExperienceCard.propTypes = {
    headline: PropTypes.string.isRequired,
    collections: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string
        }))
    }))
}

ExperienceCard.defaultProps = {
    headline: "Experience Card",
    collections: [
        {
            title: "Experience Card One",
            list: [
                {id: 1, text: "Exp 1"},
                {id: 2, text: "Exp 2"},
                {id: 3, text: "Exp 3"},
            ]
        },
        {
            title: "Experience Card Two",
            list: [
                {id: 1, text: "Exp 1"},
                {id: 2, text: "Exp 2"},
                {id: 3, text: "Exp 3"},
            ]
        }
    ]
}
