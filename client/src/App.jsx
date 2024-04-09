import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  AdminLogin,
  AllBookings,
  ArasResturant,
  CompanyDetails,
  HelpCenter,
  ManageDates,
  NotFound,
  PrivacyPolicy,
  SplashMania,
  TermAndConditionPage,
 } from './pages'
import { AdminLayout, DateSelectionContainer, TourLayout } from './components'
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';

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
                <Route path="/terms" element={<TermAndConditionPage />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/companydetails" element={<CompanyDetails />} />
                <Route path="/helpcenter" element={<HelpCenter />} />
              </Route>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route element={<AdminLayout />}>
                  <Route path="/admin/all-booking" element={<AllBookings />} />
                  <Route path="/admin/manage-dates" element={<ManageDates />} />
                </Route>
                <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App