import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  ArasResturant,
  SplashMania,
 } from './pages'
import { TourLayout } from './components'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route element={<TourLayout />}>
                {
                  window.location.hostname === 'localhost' ? <Route path='/' element={<SplashMania />} /> : <Route path='/' element={<ArasResturant />} />
                }
              </Route>
              <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App