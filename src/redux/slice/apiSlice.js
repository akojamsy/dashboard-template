import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({ 
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers) => {
    const token = Cookies.get('jwt');

    if (token) {
        headers.set( "authorization", `Bearer ${token}`);
    }

    return headers;
},})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
    }),
})