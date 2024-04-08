import {configureStore} from '@reduxjs/toolkit'
import bookingReducer from './features/bookingSlice'

export const store = configureStore({
    reducer:{
        booking: bookingReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    //     adminAuthApi.middleware,
    // ])
})