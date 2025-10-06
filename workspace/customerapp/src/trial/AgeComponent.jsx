import React, { Component } from 'react'

export default class AgeComponent extends Component {
    // conditionally re-render
    shouldComponentUpdate(newProps, newState) {
        console.log(this.props, newProps);
        if (this.props.age === newProps.age) {
            return false;
        }
        return true;
    }
    render() {
        console.log("<AgeComponent /> renders!!!");
        return (
            <div>
                In AgeComponent age is :{this.props.age}
            </div>
        )
    }
}
