import { apiSlice } from './apiSlice';

const USERS_URL = 'api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        getUser: builder.query({
            query: () => ({
                url: `${USERS_URL}`,
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useGetUserQuery
} = usersApiSlice