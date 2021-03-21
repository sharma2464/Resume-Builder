import React from 'react'

export default function TempDiv(props) {
    return <div style={{...props, backgroundColor: props.color || '#dedede'}}>{props.children}</div>
}
