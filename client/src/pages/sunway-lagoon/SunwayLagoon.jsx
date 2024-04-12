import { 
  TourHomeAdditionalInformation,
  TourHomeCardContainer, 
  TourHomeHighlights, 
  TourHomeMap, 
  TourHomeThingToDo, 
  TourHomeTopContainer, 
  TourWhyVisit
} from '../../components';
import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";
import { splashManiaAdditionInfoData, splashManiaTourHomeFAQ,  sunwayLagoonCardData, sunwayLagoonHighlighhtsData, sunwayLagoonThingsToDoData, sunwayLagoonWhyVistData } from './data';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialRender } from '../../redux/features/bookingSlice';

const SunwayLagoon = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialRender())
  },[])
  return (
    <>
    {/*Dynamic Title */}
      <Helmet>
        <title>Book Sunway Lagoon tickets | Malaysia Experience | Best Deals & Discounts</title>
        <meta name="description" content="Sunway Lagoon is a leading theme park in Malaysia, offering a dynamic blendof water and amusement attractions across six themed zones. With a wave pool, wildlife encounters, and cultural shows, Sunway Lagoon provides a memorable experience for all ages. Convenient facilities, events, and eco-friendly initiatives make it a top destination for both locals and tourists.|  ✓Best Prices ✓Online Reservations ✓Ticket Discounts Malaysia Experience" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Sunway Lagoon"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          imgUrl={"https://i.postimg.cc/SQ3jTkPk/1-1.jpg"}
          />
      <TourHomeCardContainer cardData={sunwayLagoonCardData}  />
      <TourWhyVisit 
        whyVisitData={sunwayLagoonWhyVistData}
        serviceName={"Sunway Lagoon"}
      />
      <TourHomeThingToDo thingsToDoData={sunwayLagoonThingsToDoData} serviceName={"Sunway Lagoon"} />

      <TourHomeHighlights 
        serviceName={"Sunway Lagoon"} 
        highlightsData={sunwayLagoonHighlighhtsData}
        title={"Sunway Lagoon"}
      />
      {/*Additional Information */}
      <TourHomeAdditionalInformation title={"Additional Information"} quesData={splashManiaAdditionInfoData} />

      {/*MAP */}
      <TourHomeMap serviceName={"Splash Mania"} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7480956078257!2d101.61384167396514!3d2.8888212970876856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb7057b2f621d%3A0xa82fe8b07ff5bb59!2sSplashMania%20WaterPark!5e0!3m2!1sen!2sin!4v1712253780966!5m2!1sen!2sin"} />

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Splash Mania Waterpark"} quesData={splashManiaTourHomeFAQ} />
     </section>
    </>
  )
}

export default SunwayLagoon