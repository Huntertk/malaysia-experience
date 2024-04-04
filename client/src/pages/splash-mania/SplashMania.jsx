import { 
  TourHomeAdditionalInformation,
  TourHomeCardContainer, 
  TourHomeHighlights, 
  TourHomeThingToDo, 
  TourHomeTopContainer, 
  TourWhyVisit
} from '../../components';
import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { splashManiaAdditionInfoData, splashManiaCardData, splashManiaHighlighhtsData, splashManiaThingsToDoData, splashmaniaWhyVistData } from './data';

const SplashMania = () => {
  return (
    <>
    {/*Dynamic Title */}
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
      <TourHomeCardContainer cardData={splashManiaCardData}  />
      <TourWhyVisit 
        whyVisitData={splashmaniaWhyVistData}
        serviceName={"Splash Mania"}
      />
      <TourHomeThingToDo thingsToDoData={splashManiaThingsToDoData} serviceName={"Splash Mania"} />

      <TourHomeHighlights 
        serviceName={"Splash Mania"} 
        highlightsData={splashManiaHighlighhtsData}
        title={"Splash Mania"}
      />
      <TourHomeAdditionalInformation quesData={splashManiaAdditionInfoData} />
     </section>
    </>
  )
}

export default SplashMania