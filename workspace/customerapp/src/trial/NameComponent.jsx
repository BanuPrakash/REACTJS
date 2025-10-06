import React, { Component } from 'react'

export default class NameComponent extends Component {
    // conditionally re-render
    shouldComponentUpdate(newProps, newState) {
        console.log(this.props, newProps);
        if (this.props.name === newProps.name) {
            return false;
        }
        return true;
    }
    render() {
        console.log("<NameComponent /> renders!!!");
        return (
            <div>
                In NameComponent Name: {this.props.name}
            </div>
        )
    }
}
