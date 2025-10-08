import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type Customer from '../../models/Customer'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
  tagTypes: ['customers'],
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], void>({
      query: () => `customers`,
      providesTags: ['customers']
    }),
     getCustomer: builder.query<Customer, number>({
      query: (id:number) => `customers/${id}`,
    }),
    newCustomer: builder.mutation<void,Customer>({
        query: (customer) => ({
            url: 'customers',
            method: 'POST',
            body: customer
        }),
        invalidatesTags:
    })
  }),
});

export const { useGetCustomersQuery, useGetCustomerQuery, useNewCustomerMutation } = customerApi;   