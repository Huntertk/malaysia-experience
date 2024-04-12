import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { FaCheckCircle } from "react-icons/fa";
import { bookingConfirm } from '../redux/features/bookingSlice';
import { format } from 'date-fns';

const ConfirmBooking = () => {
    const { 
        bookingDate,
        totalAmount,
        name,
        bookingId,
        bookingTitle,
      } = useSelector(store => store.booking)

      const dispatch = useDispatch()
      if(!bookingId){
        return <Navigate to="/" />
      }

  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <FaCheckCircle />
        <h1>Booking Successfully</h1>
        <div className='bookingConfirmationDetails'>
          
          <h3><span>Name : </span> <span>{name}</span></h3>
          <h3><span>Order ID : </span> <span>#{bookingId}</span></h3>
          <h3><span>Total Amount: </span> <span>MYR {totalAmount}</span></h3>
          <h3><span>Date: </span> <span> {format(bookingDate, 'PPP')}</span></h3>
          <h3>More Details Check Your Email</h3>
        </div>
      <button className='btn' onClick={() => dispatch(bookingConfirm())}>Go Home</button>
      </div>
    </section>
  )
}

export default ConfirmBooking