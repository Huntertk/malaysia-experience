import { FaXmark } from "react-icons/fa6";
const BookingFailed = () => {
  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <FaXmark />
        <h1>Booking Failed</h1>
        <div className='bookingConfirmationDetails'>
          <h3>Payment Failed</h3>
        </div>
      <button className='btn'>Go Home</button>
      </div>
    </section>
  )
}

export default BookingFailed