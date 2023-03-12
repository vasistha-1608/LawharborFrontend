import React from 'react'

export default function Error(props) {
    return (
        <div>Error
            <h1>{props.error.message}</h1>

        </div>
    )
}
