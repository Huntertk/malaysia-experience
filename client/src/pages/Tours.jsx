import '../styles/tours.scss';
import { ToursGrid } from '../components'
import { availableToursData } from '../data'

const Tours = () => {
  return (
    <section className='toursMainSection'>
      <ToursGrid data={availableToursData} title={"Tours Availabe"} />
    </section>
  )
}

export default Tours