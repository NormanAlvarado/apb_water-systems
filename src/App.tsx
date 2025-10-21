import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Temp from './pages/Temp'
import WaterConditioning from './pages/WaterConditioning'
import DrinkingWater from './pages/DrinkingWater'
import ProblemSolvingFilters from './pages/ProblemSolvingFilters'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Temp />} />
      <Route path="/devhome" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/water-conditioning" element={<WaterConditioning />} />
      <Route path="/products/drinking-water" element={<DrinkingWater />} />
      <Route path="/products/problem-solving-filters" element={<ProblemSolvingFilters />} />
    </Routes>
  )
}

export default App
