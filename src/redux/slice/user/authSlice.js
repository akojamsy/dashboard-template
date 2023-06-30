import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
    user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    isLoading: false,
    isSuccess: false,
    createSuccess: false,
    all_users: null
}

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload;
            Cookies.set('jwt', state.user.token, { expires: 1 })
            localStorage.setItem('userInfo', JSON.stringify(state.user.data))
        },
        logout: (state, action) => {
            state.user = null;
            Cookies.remove('jwt')
            localStorage.removeItem('userInfo');
        },
    },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer