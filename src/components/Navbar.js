import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={{pathname: props.brandLink}}>{props.brandName}</Link>
                    {/*<a className="navbar-brand" href={props.brandLink}>{props.brandName}</a>*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {props.links && props.links.map((e, i) => (
                                <li className="nav-item" key={e.name+i}>
                                    <Link className={`nav-link active ${e.className}`} to={{pathname: e.link}} onClick={e.onClick} >{e.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    brandName: PropTypes.string.isRequired,
    brandLink: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
        onClick: PropTypes.func,
        className: PropTypes.string
    }))
}

// Navbar.defaultProps = {
//     brandName: '',
//     brandLink: '#',
//     links: []
// }
