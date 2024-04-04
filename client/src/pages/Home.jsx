import { 
  ImageSlider, 
  CountryGrid, 
  ProductContainer,
  Award
} from '../components';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <CountryGrid />
      <ProductContainer />
      <Award />
    </section>
  )
}

export default Home