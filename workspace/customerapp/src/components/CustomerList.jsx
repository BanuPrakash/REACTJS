import React, { Component } from 'react'
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
  name = "Danny" ; // also a state, but not handled by react
  age = 35; // also a state, not handled by react

  //state handled by react - reconcilliation
  state = {
    customers: [
        {"id": 1, "firstName": "Rachel", "lastName": "Green"},
        {"id": 2, "firstName": "Monica", "lastName": "Geller"},
        {"id": 3, "firstName": "Joey", "lastName": "Tribuanni"},
        {"id": 4, "firstName": "Chandler", "lastName": "bing"},
        {"id": 5, "firstName": "Ross", "lastName": "Geller"},
        {"id": 6, "firstName": "Phoebe", "lastName": "Buffay"},
    ]
  }
  // render() returns JSX
  render() {
    return (
      <div>
        {
            this.state.customers.map(cust => <CustomerRow customer={cust} />)
        }
      </div>
    )
  }
}
