import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  ArasResturant,
  SplashMania,
 } from './pages'
import { DateSelectionContainer, TourLayout } from './components'
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster />
          <Routes>
              <Route element={<TourLayout />}>
                {
                  window.location.hostname === 'localhost' ? (
                    <Route path='/' element={<SplashMania />} />
                  ) : (
                    <Route path='/' element={<ArasResturant />} />
                  )
                }

                <Route path='/date-select' element={<DateSelectionContainer />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='*' element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App