import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import WaterConditioning from './pages/WaterConditioning'
import DrinkingWater from './pages/DrinkingWater'
import ProblemSolvingFilters from './pages/ProblemSolvingFilters'
import ConstantPressure from './pages/ConstantPressure'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/water-conditioning" element={<WaterConditioning />} />
        <Route path="/products/drinking-water" element={<DrinkingWater />} />
        <Route path="/products/problem-solving-filters" element={<ProblemSolvingFilters />} />
        <Route path="/products/constant-pressure" element={<ConstantPressure />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
