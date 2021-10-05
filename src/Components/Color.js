import React from 'react';

function Color(props) {
    let style = {
        display:"flex",
        backgroundColor:props.match.params.id,
        height:"100vh",
        width:"100%",

    };

    return(
        <div style={style}></div>
    )
}

export default Color;