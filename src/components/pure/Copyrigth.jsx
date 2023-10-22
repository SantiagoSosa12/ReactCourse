import React from 'react';
//Material Ui Components
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';

const CopyrigthComponent = () => {
    return (
        <Typography variant='body2' color="GrayText" aling="center">
            { 'Cpoyrigth (C) ' }
            <Link color='inherit' href='https://fb.com'>
                Facebook
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    );
}

export default CopyrigthComponent;
