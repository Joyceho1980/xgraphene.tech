import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Systems from './pages/Systems'
import Authority from './pages/Authority'
import Intelligence from './pages/Intelligence'
import Partnership from './pages/Partnership'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/authority" element={<Authority />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App