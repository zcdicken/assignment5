import React from 'react';

function Data(props) {
    return (
        <div>{props.match.params.id}</div>
    )
}

export default Data;