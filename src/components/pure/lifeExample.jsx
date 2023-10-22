/**
 * Example type class 
 * dispose method of life cicle
 */

import React , {Component} from "react";
import PropTypes from 'prop-types'

class LifeCicle extends Component {

    constructor(props) {
        super(props);
        console.log('When component is istanced');
    }

    componentWillMount() {
        console.log('Before mount component');
    }

    componentDidMount() {
        console.log('Just before to pint ');
    }

    componentWillRecibeProps(nextProps) {
        console.log('If recibe new props');
    }

}