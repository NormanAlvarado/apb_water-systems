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
        {/* English Routes */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/about" element={<About />} />
        <Route path="/en/contact" element={<Contact />} />
        <Route path="/en/products/water-conditioning" element={<WaterConditioning />} />
        <Route path="/en/products/drinking-water" element={<DrinkingWater />} />
        <Route path="/en/products/problem-solving-filters" element={<ProblemSolvingFilters />} />
        <Route path="/en/products/constant-pressure" element={<ConstantPressure />} />
        
        {/* Spanish Routes */}
        <Route path="/es" element={<Home />} />
        <Route path="/es/about" element={<About />} />
        <Route path="/es/contact" element={<Contact />} />
        <Route path="/es/products/water-conditioning" element={<WaterConditioning />} />
        <Route path="/es/products/drinking-water" element={<DrinkingWater />} />
        <Route path="/es/products/problem-solving-filters" element={<ProblemSolvingFilters />} />
        <Route path="/es/products/constant-pressure" element={<ConstantPressure />} />
        
        {/* Default Routes (will redirect based on browser language) */}
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
