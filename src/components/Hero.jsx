import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-gray-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gray-300/40 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Done-In-No-Time Inc.
          </h1>
          <p className="mt-3 text-lg text-gray-700">Small Jobs, Big Jobs, Done In No Time!</p>
          <p className="mt-6 text-gray-600 max-w-prose">
            Reliable, fast, and professional services for homes and businesses across Edmonton and surrounding areas. From cleaning and car detailing to moving help and year-round property care, we deliver quality and satisfaction—every time.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/contact" className="rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-yellow-300 transition">
              Book a Service
            </Link>
            <Link to="/services" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
              Explore Services →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white p-6 shadow border">
            <h3 className="font-semibold text-gray-900">Cleaning</h3>
            <p className="mt-2 text-sm text-gray-600">Residential, commercial, deep clean, and move-in/move-out.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow border">
            <h3 className="font-semibold text-gray-900">Car Detailing</h3>
            <p className="mt-2 text-sm text-gray-600">Interior and exterior for a showroom shine.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow border">
            <h3 className="font-semibold text-gray-900">Moving Help</h3>
            <p className="mt-2 text-sm text-gray-600">Packing, loading, unloading, and setup assistance.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow border">
            <h3 className="font-semibold text-gray-900">Lawn & Snow</h3>
            <p className="mt-2 text-sm text-gray-600">Lawn mowing, leaf removal, and snow shoveling.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
