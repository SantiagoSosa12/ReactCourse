import React, { useState } from 'react';
import PropTypes from 'prop-types';



const GreetingF = (props) => {

    //Variable , Method To update  InitialState
    const [age, setage] = useState(29);
    
    const sumAge = () => {
        setage( age + 1);
    }

    return (
        <div>
            <div>
                <h1> Hola {props.name} desde componente funcional</h1>
                <h1> Tu edad es: {age}</h1>

                <div>
                    <button onClick={sumAge}> Cumplir años </button>
                </div>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
