import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { 
  About, 
  Home, 
  SplashMania
 } from './pages'
import { HomeLayout, TourLayout } from './components'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route element={<TourLayout />}>
              <Route path='/:tourname' element={<SplashMania />} />
            </Route>
            <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App