import React, { Component } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'
import {faker} from '@faker-js/faker'

export default class ParentComponent extends Component {
  state = {
    name : 'Yanni',
    age: 24
  }

  changeAge() {
    this.setState({
        age: this.state.age + 1
    })
  }

  changeName() {
    this.setState({
        name: faker.person.firstName()
    })
  }
  render() {
    console.log("<ParentComponent /> renders!!!");
    return (
      <div>
        ParentComponent <br />
        Name : {this.state.name} <br />
        Age : { this.state.age} <br />

        <NameComponent name={this.state.name} /> <br />
        <AgeComponent age={this.state.age} /> <br />

        <button type='button' onClick={this.changeAge.bind(this)}>Change Age</button> 
        <button type='button' onClick={this.changeName.bind(this)}>Change Name</button> 
        
    </div>
    )
  }
}
