/**
 * Example for learn of use props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>** Example of Children Props **</h1>
            <h2>
                Nombre:  {props.name}
            </h2>
            <h3>{props.children}</h3>
        </div>
    );
}

export default Ejemplo4;
