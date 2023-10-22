/**
 * Example proprs without class
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Before component is add to DOM');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>  
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Before component is add to DOM');
    }, []);

    return (
        <div>
            <h1>DidMount</h1>     
        </div>
    );
}


