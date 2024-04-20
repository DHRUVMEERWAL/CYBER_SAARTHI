import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Questionnaire } from './pages/Questionnaire'
import { Guide } from './pages/Guide'
import { Helper } from './pages/Helper'
import { Testimonials } from './pages/Testimonials'
import BlogDetails from './pages/BlogDetails'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Questionnaire" element={<Questionnaire />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/Helper" element={<Helper />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path='/BlogDetails/:id_Blogs' element={<BlogDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App