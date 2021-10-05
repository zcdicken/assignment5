import React from 'react';
import {Link} from 'react-router-dom';
import Block from './Block.js';

function Home() {
        return(
            <div>
                <Link to={"/red"}><Block data={{backColor:"red"}}></Block></Link>
                <Link to={"/blue"}><Block data={{backColor:"blue"}}></Block></Link>
                <Link to={"/green"}><Block data={{backColor:"green"}}></Block></Link>
            </div>
        )
}

export default Home;