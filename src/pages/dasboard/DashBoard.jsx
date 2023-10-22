import React from 'react';
import { Button } from '@mui/material';
import CopyrigthComponent from '../../components/pure/Copyrigth';
import { useNavigate } from 'react-router-dom';


const DashBoard = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
    }

    return (
        <div>
            <Button variant='contained' onClick={logout}>Logout</Button>
            <CopyrigthComponent></CopyrigthComponent>
        </div>
    );
}

export default DashBoard;
