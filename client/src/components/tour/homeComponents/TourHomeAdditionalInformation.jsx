import '../../../styles/tourHomeAdditionalInformation.scss';
import TourHomeQuestionContainer from './TourHomeQuestionContainer';

const TourHomeAdditionalInformation = ({quesData}) => {
  return (
    <section className='homeFAQMainContainer'>
            <h1>Additional Information</h1>
        <div className="questionMainContainer">
            {
                quesData.map((data) => {
                    return(
                        <TourHomeQuestionContainer key={data.id} data={data} />
                    )
                })
                
            }
        </div>
    </section>
  )
}

export default TourHomeAdditionalInformation