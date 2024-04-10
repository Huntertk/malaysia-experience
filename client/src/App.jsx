import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  AdminLogin,
  AllBookings,
  ArasResturant,
  ArasResturantBookTypeOneDate,
  ArasResturantDateManage,
  CompanyDetails,
  ConfirmBooking,
  HelpCenter,
  ManageDates,
  NotFound,
  PaymentSucess,
  PrivacyPolicy,
  SplashMainaDateManage,
  SplashMania,
  SplashManiaBookTypeOneDate,
  TermAndConditionPage,
 } from './pages'
import { AdminLayout, DateSelectionContainer, TourLayout } from './components'
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';
import { useSelector } from 'react-redux';

const App = () => {
  const {responseClientUrl} = useSelector(state => state.booking)
  return (
    <>
      <BrowserRouter>
      <Toaster />
          <Routes>
              <Route element={<TourLayout />}>
                {
                  window.location.hostname === 'localhost' ? (
                    <Route path='/' element={<ArasResturant />} />
                  ) : (
                    <Route path='/' element={<SplashMania />} />
                  )
                }
                <Route path='/date-select' element={<DateSelectionContainer />} />
                <Route path='/booking' element={<Booking />} />
                <Route path={`/${responseClientUrl}`} element={<PaymentSucess />} />
                <Route path="/bookingconfirm" element={<ConfirmBooking />} />
                <Route path="/terms" element={<TermAndConditionPage />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/companydetails" element={<CompanyDetails />} />
                <Route path="/helpcenter" element={<HelpCenter />} />
              </Route>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route element={<AdminProtectedRoute />}>
                  <Route element={<AdminLayout />}>
                    <Route path="/admin/all-booking" element={<AllBookings />} />
                    <Route path="/admin/manage-dates" element={<ManageDates />} />
                    <Route path="/admin/manage-dates/splash-mania" element={<SplashMainaDateManage />} />
                    <Route path="/admin/manage-dates/splash-mania/booktype-one" element={<SplashManiaBookTypeOneDate />} />
                    <Route 
                      path="/admin/manage-dates/aras-resturant" 
                      element={<ArasResturantDateManage />} 
                    />
                    <Route 
                      path="/admin/manage-dates/aras-resturant/booktype-one" 
                      element={<ArasResturantBookTypeOneDate />} 
                    />
                  </Route>
                </Route>
                <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App