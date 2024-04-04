import { TourHomeTopContainer } from '../../components';
import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";

const ArasResturant = () => {
  return (
    <>
    <Helmet>
        <title>Book Aras Resturant Tickets | Malaysia Experience | Best Deals & Discounts</title>
        <meta name="description" content="ARAS Restaurant KL Tower Buffet ... Experience great food while enjoying the gorgeous view of the whole Kuala Lumpur on top of KL Tower.! ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Malaysia Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Aras Resturant"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          imgUrl={"https://i.postimg.cc/gcVBqRKf/17.jpg"}
          />
     </section>
    </>
  )
}

export default ArasResturant