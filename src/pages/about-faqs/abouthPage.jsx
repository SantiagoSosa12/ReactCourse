import React from 'react';
import {useNavigate} from 'react-router-dom'


const AbouthPage = () => {

    const navigate = useNavigate();

    const navigateToSpecificRoute = (path) => {
        navigate(path);
    }

    const goBack = () => {
        navigate(-1);
    } 

    const goForward = () => {
        navigate(+1);
    }

    return (
        <div>
            <h1>Abouth Page | Faqs Page</h1>
            <div>
                <button onClick={ () => navigateToSpecificRoute('/')}>
                    Go To Home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
                <button onClick={goForward}>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AbouthPage;
