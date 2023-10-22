import React from 'react';
import { useNavigate} from 'react-router-dom'
//@babel/plugin-proposal-private-property-in-object

const HomePage = () => {

    const navigate = useNavigate();

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true',
            state: {
                online: true
            }
        });
    }
    /**
     * Objects are not valid as a React child 
     * (found: object with keys 
     * {pathname, search, hash, state, key}). 
     * If you meant to render a collection of children, use an array instead.
     */

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>
                Go To Profile
            </button>
            <button onClick={() => navigateProps('/online-state')}>
                Go To Page With State / Query Parmas
            </button>
        </div>
    );
}

export default HomePage;
