/**
 * Example DidUpdate
 * and use funcional component
 */

import React, { Component , useEffect} from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('When component recibe new props or change your state');
    }

    render() {
        return (
            <div>
                <h1>Did Update</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    /**
     * UseEfect is executed always
     */
    useEffect(() => {
        console.log('When component recibe new props or change your state');
    }, );

    return (
        <div>
            <h1>Did Update</h1>
        </div>
    );
}

