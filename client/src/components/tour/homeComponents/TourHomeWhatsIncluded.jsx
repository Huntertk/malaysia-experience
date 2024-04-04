import { BiSolidDollarCircle } from 'react-icons/bi';
import '../../../styles/HomeWhatsIncluded.scss'

const TourHomeWhatsIncluded = () => {
  return (
    <section className='whatsincludedContainer'>
         <div className="cancellationSubContainer">
            <h1>Cancellation policy</h1>
            <div className="content">
                <BiSolidDollarCircle  />
                <p>These tickets can't be cancelled or rescheduled</p>
            </div>
        </div>
        <div className="whatsincludedSubContainer">
            <h1>Inclusions</h1>
            <ul className="content">
                <li>Entrance Tickets</li>
            </ul>
        </div>
        <div className="whatsNotincludedSubContainer">
        <h1>Exclusions</h1>
        <div className="contentContainer">
        <ul className="content">
                <li>Parking</li>
            </ul>
            <ul className="content">
                <li>Food and Drink</li>
            </ul>
            <ul className="content">
                <li>Locker</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default TourHomeWhatsIncluded