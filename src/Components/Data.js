import React from 'react';
import {Link} from 'react-router-dom';

function Data() {
    const [data] = React.useState([{name:"Bob", age:"19", color:"Teal", id:"1"}, {name:"Hammy", age:"67", color:"Orange", id:"2"}, {name:"Bigface", age:"26", color:"Red", id:"3"}]);

    return (
        <div>
            <p>Name:Bob | age: 19 | color: Teal | id: 1</p>
            <p>Name:Hammy | age: 67 | color: Orange | id: 2</p>
            <p>Name:Bigface | age: 26 | Color: Red | Id: 3</p>
        </div>
    )
}

export default Data;