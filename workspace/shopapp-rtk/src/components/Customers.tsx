import React from 'react'
import {useGetCustomersQuery, useNewCustomerMutation} from '../redux/api/customerApi';
import  CustomerDetails from './CustomerDetails';

export default function Customers() {
  const {data:customers, error, isLoading, isFetching, isError, isSuccess} = useGetCustomersQuery();
  return (
    <div>
    <h2>Customers</h2>
        <AddCustomer />
        {isLoading && <div>Loading....</div>}
        {isFetching && <div>Updating....</div>}
        {isError && <div>{(error as any).error}</div>}
        {isSuccess && <div>
            <ul>
                {customers?.map(cust => <li key={cust.id}>{cust.name} - {cust.email}</li>)}
            </ul>
            <CustomerDetails id={1}  />
        </div>
        }
    </div>
  )
}

function AddCustomer() {
    let [add] = useNewCustomerMutation();
    // const {refetch} = useGetCustomersQuery();

    const addNewCustomer = async() => {
        await add({id:4,name: "New Customer", email: "newemail@gmail.com"});
        // refetch();
    }
    return (
    <div>
        <button onClick={addNewCustomer}>Add new Customer</button>
    </div>)
}