import React from 'react';
import './Result.css';


const result = (props) => (
    <div className="Result" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">

        </div>
    </div>
);

export default result;
