import { TourHomeTopContainer } from '../../components';
import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";

const SplashMania = () => {
  return (
    <>
      <Helmet>
        <title>Book Splash Mania Waterpark Tickets | Malaysia Experience | Best Deals & Discounts</title>
        <meta name="description" content="Learn about all your Splash Mania ticket options and book now to spend a day of family fun at one of Malaysia's most popular waterparks! ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Malaysia Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Splash Mania"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          imgUrl={"https://i.postimg.cc/BnSswGw4/splashmania-newtagline-2022-2.png"}
          />
     </section>
    </>
  )
}

export default SplashMania