import React, { useState } from 'react';

// Define styles in constants
const loggedStyle = {
    color : 'white'
}

const unloggedStyle = {
    color : 'tomato',
    fontWeight : 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged? 
                (<p>Hello, {props.name}</p>) : 
                (<p>Please loggin</p>) 
            }
            <button onClick={() => {
                console.log('Button has been pushed');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
