import '../../styles/countryGrid.scss';
import { homeCountryData } from '../../data';
import {motion} from 'framer-motion';

const CountryGrid = () => {
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
    <section className='countryGridMainSection'>
        <h1>Explore New Destination</h1>
        <div className="countryGridContainer">
            {
                homeCountryData.map((country) => (
                    <motion.div 
                        className="gridItem" 
                        key={country.id}
                        {...easeScaleUp}
                    >
                        <img src={country.img} alt={country.title} />
                        <h1>{country.title}</h1>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default CountryGrid