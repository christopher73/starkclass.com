import React, { Component } from 'react'
import Preg from '../components/Terminos/preguntas'

export default class Preguntas extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div style={{backgroundColor:'white'}} >
                <Preg/>
            </div>
        )
    }
}
