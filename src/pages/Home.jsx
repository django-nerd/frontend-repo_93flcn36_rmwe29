import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Highlights />
      <Footer />
    </div>
  )
}
