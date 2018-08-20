import React from 'react';
import './Result.css';
import axios from 'axios';


const result = (props) => (
    <div className="Result" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">

        </div>
    </div>
);

export default result;
