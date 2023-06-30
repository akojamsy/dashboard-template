import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../slice/apiSlice';
import authReducer from '../slice/user/authSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})