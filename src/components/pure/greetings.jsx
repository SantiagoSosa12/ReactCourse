import React, { Component } from 'react';
import { PropTypes } from "prop-types";

class Greetings extends Component {

    constructor (props) {
        super(props);
        this.state = {
            age : 26

        }
    }

    render() {
        return (
            <div>
                <h1> Hola { this.props.name }</h1>
                <h1> Tu edad es: { this.state.age }</h1>

                <div>
                    <button onClick={this.sumaAge}> Cumplir años </button>
                </div>

            </div>
        );
    }

    sumaAge = () => {
        this.setState( (prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    } 

}


Greetings.propTypes = {
    name: PropTypes.string,
};


export default Greetings;
