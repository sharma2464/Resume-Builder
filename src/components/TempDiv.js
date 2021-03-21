import React from 'react'

export default function TempDiv(props) {
    return <div style={{...props, backgroundColor: props.color || 'rgba(0,0,0,0.0)'}}>{props.children}</div>
}
