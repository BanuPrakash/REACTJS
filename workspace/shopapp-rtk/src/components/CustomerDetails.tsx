import React from 'react'
import { useGetCustomerQuery } from '../redux/api/customerApi'

type Props = {
    id: number
}
export default function CustomerDetails({id}: Props) {
    const {data} = useGetCustomerQuery(id, {
        pollingInterval: 10000
    });
  return (
    <div>
        CustomerDetails  <br />
        {data && <div>{data.id} - {data.name} - {data.email}</div>}
    </div>
  )
}
