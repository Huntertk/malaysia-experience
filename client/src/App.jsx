import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import { About, Home } from './pages'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App