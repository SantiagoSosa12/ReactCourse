import React, {useState} from 'react';


let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para usuario loggeado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

const unloggedStyle = {
    backgroundColor : 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

// Login LoGouth Buttons
const LoginButton = ({loginAction , propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}> Login </button>
    );
}

const LogoutButton = ({logOutAction , propStyle}) => {
    return (
        <button style={propStyle} onClick={logOutAction}> Logout </button>
    );
}

// ? (Expresion true) && expresion => espresion is render
// ? (Expresion false) && expresion => espresion is not render



const OptionalRender = () => {

    const [ownAccess, setOwnAccess] = useState(false);
    const [nMessage, setNmessage] = useState(0);


    let optionalButton;

    const loginAction = () => {
        setOwnAccess(true);
    }

    const logoutAction = () => {
        setOwnAccess(false);
    }

    if ( ownAccess ) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logOutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    // Unread messages
    const addMessages = () => {
        setNmessage(nMessage + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            
            {/* Ternary operator */}
            {ownAccess ? 
            <div>
            { nMessage > 1 && <p>You have {nMessage} new messages</p> }
            { nMessage === 0 && <p>No messages :(</p> }
            { nMessage > 0 ?
                <p>You have {nMessage} new message{nMessage > 1 ? 's' : ''}</p> :
                <p>No messages :(</p>
            }
            <button onClick={addMessages} >
            {nMessage === 0 ? 'Add your first message' : 'Add new message'}
            </button>
            </div>
            : <div> </div>}
        </div>
    );
}

export default OptionalRender;
