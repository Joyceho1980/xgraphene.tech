import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Products from './pages/Products'
import Applications from './pages/Applications'
import Certification from './pages/Certification'
import About from './pages/About'
import Contact from './pages/Contact'
import Research from './pages/Research'
import FAQ from './pages/FAQ'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import CaseStudyAnta from './pages/CaseStudyAnta'
import ProductHairGrowth from './pages/ProductHairGrowth'
import ProductTherapyHelmet from './pages/ProductTherapyHelmet'

function App() {
  return (
    <div className="min-h-screen bg-graphene-900 text-gray-200">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/hair-growth" element={<ProductHairGrowth />} />
          <Route path="/products/therapy-helmet" element={<ProductTherapyHelmet />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<Research />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/case-studies/anta" element={<CaseStudyAnta />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
