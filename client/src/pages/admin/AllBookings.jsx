import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { getBookingStart, getAllBookingSuccess} from '../../redux/features/bookingDetailsSlice';
import {useDispatch, useSelector} from 'react-redux'
import '../../styles/allBookings.scss'

import BookingCard from '../../components/admin/BookingCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useGetBookingDataQuery } from '../../redux/api/bookingDataApi';

const AllBookings = () => {
  const {updateBookingStatus, allBookings} = useSelector(state => state.bookingDetails)
  const dispatch = useDispatch()
  const [option, setOption] = useState("")
  const {data, isLoading, error, isSuccess} = useGetBookingDataQuery({service:option});
  // const getAllBookings = async () => {
  //   try {
  //     dispatch(getBookingStart())
  //     const res = await axios.get("/api/v1/booking")
  //     dispatch(getAllBookingSuccess(res.data.allBookings))
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }

  useEffect(() => {
    if(isSuccess){
      console.log(data);
    }
    if(error){
      console.log(error);
    }

  },[updateBookingStatus, isLoading, error, isSuccess])

  if(isLoading) {
    return <LoadingSpinner />
  }

  if(data?.allBookings.length === 0){
    return <div>
       <h1>No Bookings Now</h1>
    </div>
  }
  return (
    <>
      <div className='allBookingsMainContainer'>
        <h1>Available Services</h1>
          <p>Result : {data?.allBookings?.length}</p>

          <select className='serviceSelect' name="service" id="" onChange={(e) => setOption(e.target.value)}>
                <option value="">All Products</option>
                <option value={"aras-resturant"}>Aras Resturant</option>
                <option value={"splash-mania"}>Splash Mania</option>
          </select>
        </div>
        <div className="allBookingsContainer">
          {data?.allBookings.map((booking,index) => {
            return <BookingCard key={booking._id} booking={booking} index={index} />
          })}
      </div>
        </>
  )
}

export default AllBookings