import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/query/react';

export const bookingDataApi = createApi({
    reducerPath:"bookingDataApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/api/v1"
    }),
    endpoints: (builder) => ({
        getBookingData: builder.query({
            query:(params) => {
                return{
                    url: '/booking',
                    params:{
                        "service":params.service
                    }
                }
            },
        }),
    })
})


export const {useGetBookingDataQuery} = bookingDataApi
