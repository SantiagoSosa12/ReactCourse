import React from 'react';
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>404 - Page not Found</h1>
            <h2>Enter a valid route</h2>
            <button onClick={ () => { navigate('/') }}>Go to Home</button>
        </div>
    );
}

export default NotFoundPage;
