import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Wellness from './components/Wellness'
import Sustainability from './components/Sustainability'
import Location from './components/Location'
import Reservations from './components/Reservations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white">
      <Navbar />
      <main className="space-y-4">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Wellness />
        <Sustainability />
        <Location />
        <Reservations />
      </main>
      <Footer />
    </div>
  )
}

export default App
