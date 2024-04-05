import { 
  TourHomeAdditionalInformation, 
  TourHomeCardContainer, 
  TourHomeHighlights, 
  TourHomeMap, 
  TourHomeThingToDo, 
  TourHomeTopContainer, 
  TourWhyVisit 
} from '../../components';

import {
  berjayaTimeSquareWhyVistData, 
  berjayaTimesSquareAdditionInfoData, 
  berjayaTimesSquareCardData,
  berjayaTimesSquareHighlighhtsData,
  berjayaTimesSquareThingsToDoData,
  berjayaTimesSquareTourHomeFAQ
} from './data';

import '../../styles/tourHome.scss';
import {Helmet} from "react-helmet";

const BerjayaaTimesSquare = () => {
  return (
    <>
    {/*Dynamic Title */}
    <Helmet>
        <title>Book BERJAYA TIMES SQUARE | Malaysia Experience | Best Deals & Discounts</title>
        <meta name="description" content="Berjaya Times Square Theme Park: Indoor amusement in Kuala Lumpur with rides, arcadegames, and family-friendly fun. Located in the Berjaya Times Square complex.|  ✓Best Prices ✓Online Reservations ✓Ticket Discounts" />
      </Helmet>
     <section className='tourHomeMainContainer'>
      <TourHomeTopContainer
          title={"Berjaya Times Square"}
          desc={"Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction."}
          imgUrl={"https://i.postimg.cc/CMbMh0Hb/bts5.jpg"}
          />
       <TourHomeCardContainer cardData={berjayaTimesSquareCardData}  />   

       <TourWhyVisit 
        whyVisitData={berjayaTimeSquareWhyVistData}
        serviceName={"Berjaya Times Square"}
      />

    <TourHomeThingToDo thingsToDoData={berjayaTimesSquareThingsToDoData} serviceName={"Berjaya Times Square"} />

      <TourHomeHighlights 
        serviceName={"Berjaya Times Square"} 
        highlightsData={berjayaTimesSquareHighlighhtsData}
        title={"Berjaya Times Square"}
      />

      <TourHomeAdditionalInformation title={"Additional Information"} quesData={berjayaTimesSquareAdditionInfoData} />
      <TourHomeMap serviceName={"Berjaya Times Square"} mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8199094295405!2d101.70797627396635!3d3.1421983968332285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362890c18e43%3A0xaf957d45b8d91bdc!2sBerjaya%20Times%20Square%2C%20Imbi%2C%2055100%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1712310650094!5m2!1sen!2sin"} />

      {/*FAQ */}
      <TourHomeAdditionalInformation title={"Frequently Asked Questions About Berjaya Times Square"} quesData={berjayaTimesSquareTourHomeFAQ} />
     </section>
    </>
  )
}

export default BerjayaaTimesSquare