import '../../styles/toursGrid.scss';
import {motion} from 'framer-motion';

const ToursGrid = ({data}) => {
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
      }
  return (
    <section className='toursGridMainSection'>
        <h1>Explore New Destination</h1>
        <div className="toursGridContainer">
            {
                data.map((tour) => (
                    <motion.div 
                        className="gridItem" 
                        key={tour.id}
                        {...easeScaleUp}
                    >
                        <img src={tour.img} alt={tour.title} />
                        <h1>{tour.title}</h1>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default ToursGrid