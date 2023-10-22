/**
 * Example Component will Unmount
 * Example hooks for funcional component
 */

import React, { Component , useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Behabior before its disappear ');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        //Noithing
        return () => {
            console.log('Behabior before its disappear ');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>  
        </div>
    );
}

