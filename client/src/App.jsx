import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {
  ArasResturant, 
  BerjayaaTimesSquare, 
  Home, 
  SplashMania,
  Tours
 } from './pages'
import { HomeLayout, TourLayout } from './components'

const App = () => {
  return (
    <>
    <Helmet>
      <title>Malaysia Experience</title>
      <meta name="description" content="At Malaysia Experience, we curate unforgettable journeys that go beyond the ordinary.Our mission is to immerse you in the vibrant tapestry of Malaysia's diverse culture, breathtaking landscapes, and rich heritage.! ✓Best Prices ✓Online Reservations ✓Advance Booking ✓Ticket Discounts ✓Group Bookings. Malaysia Experience." />
    </Helmet>
      <BrowserRouter>
          <Routes>
              <Route element={<HomeLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/tours' element={<Tours />} />
              </Route>
              <Route element={<TourLayout />}>
                <Route path='/splash-mania' element={<SplashMania />} />
                <Route path='/aras-resturant' element={<ArasResturant />} />
                <Route path='/berjaya-times-square' element={<BerjayaaTimesSquare />} />
              </Route>
              <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App