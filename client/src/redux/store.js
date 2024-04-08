import {configureStore} from '@reduxjs/toolkit'
import bookingReducer from './features/bookingSlice'
import adminReducer from './features/adminSlice'
import { adminAuthApi } from './api/adminAuthApi'

export const store = configureStore({
    reducer:{
        booking: bookingReducer,
        admin: adminReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        adminAuthApi.middleware,
    ])
})