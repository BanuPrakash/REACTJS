import React, { Component } from 'react'

export default class CustomerRow extends Component {
 
  deleteRow(id) {
    console.log("<CustomerRow /> delete ", id);
    this.props.delEvent(id);
  }

  render() {
    let {id, firstName, lastName} = this.props.customer;
    return (
      <div className='row'>
        {firstName}  &nbsp;
        {lastName} &nbsp;
        <button type='button' onClick={() => this.deleteRow(id)}>Delete</button>
      </div>
    )
  }
}
