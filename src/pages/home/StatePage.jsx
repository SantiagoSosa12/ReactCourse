import React from 'react';
import { useLocation } from 'react-router-dom'

const StatePage = () => {

    const location = useLocation();

    console.log(typeof(location.search));
    //Funciona mas o menos


    return (
        <div>
            <h1> State: {location.search} </h1>
        </div>
    );
}

export default StatePage;
