import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Santiago');

    const showMessage = (text) => {
        alert(`Message recibed: ${text} `);
    }

    const updateName = (newName) => {
        setName(newName);
    }

    return (
        <div style={{backgroundColor: 'tomato' , padding: '30px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
