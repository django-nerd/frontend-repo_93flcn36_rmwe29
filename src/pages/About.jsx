import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-700">Done-In-No-Time Inc. is built on professionalism, reliability, and community support. We proudly serve Edmonton, Sherwood Park, Fort Saskatchewan, and nearby areas with a focus on quality, care, and customer satisfaction.</p>
        <div className="mt-10 grid gap-8">
          <section>
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-2 text-gray-700">To provide reliable, fast, and professional cleaning, car detailing, moving, and maintenance services with a focus on quality, care, and customer satisfaction.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p className="mt-2 text-gray-700">To become Edmonton and area’s most trusted and efficient home and business service company.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Operating Areas</h2>
            <p className="mt-2 text-gray-700">Edmonton, Sherwood Park, Fort Saskatchewan, and surrounding communities.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
