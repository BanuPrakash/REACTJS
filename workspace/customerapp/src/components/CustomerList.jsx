import React, { Component } from 'react'
import CustomerRow from './CustomerRow';
import Filter from './Filter';

export default class CustomerList extends Component {
    name = "Danny"; // also a state, but not handled by react
    age = 35; // also a state, not handled by react

    //state handled by react - reconcilliation
    state = {
        customers: [
            { "id": 1, "firstName": "Rachel", "lastName": "Green" },
            { "id": 2, "firstName": "Monica", "lastName": "Geller" },
            { "id": 3, "firstName": "Joey", "lastName": "Tribuanni" },
            { "id": 4, "firstName": "Chandler", "lastName": "bing" },
            { "id": 5, "firstName": "Ross", "lastName": "Geller" },
            { "id": 6, "firstName": "Phoebe", "lastName": "Buffay" },
        ]
    }

    // gets called after constructor
    componentDidMount() {
        this.setState({
            orginal: this.state.customers
        })
    }

    filterCustomers(txt) {
        let custs = this.state.orginal.filter(c => (c.firstName.toUpperCase().indexOf(txt.toUpperCase()) >= 0)
            || (c.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0));

        this.setState({
            customers: custs
        });
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // this.state.customers = custs; // no reconcilliation happens
        // always use setState() to make state changes -- triggers reconcilliation
        // actually async function, non blocking code
        this.setState({
            customers: custs,
            orginal: custs
        });

        // console.log(this.state.customers); will not display actual data
    }

    // render() returns JSX
    render() {
        return (
            <div>
                <Filter filterEvent={(txt) => this.filterCustomers(txt)} />
                {
                    this.state.customers.map(cust => <CustomerRow
                        // delEvent={(id) => this.deleteCustomer(id)}
                        // delEvent={this.deleteCustomer} // Context is lost, not understand "this"
                        delEvent={this.deleteCustomer.bind(this)}
                        key={cust.id}
                        customer={cust} />)
                }
            </div>
        )
    }
}
