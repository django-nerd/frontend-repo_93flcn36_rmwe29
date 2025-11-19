import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { title: 'Cleaning Services', desc: 'Residential, commercial, deep cleaning, and move-in/move-out.' },
  { title: 'Car Detailing', desc: 'Interior and exterior vehicle detailing.' },
  { title: 'Moving Help', desc: 'Packing, loading, unloading, and setup assistance.' },
  { title: 'Lawn & Snow Care', desc: 'Lawn mowing, leaf removal, and snow shoveling year-round.' },
  { title: 'Odd Jobs & Errands', desc: 'Furniture assembly, small repairs, and deliveries.' },
  { title: 'Senior Care Assistance', desc: 'Housekeeping, errands, laundry, and companionship.' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-3 text-gray-700 max-w-2xl">We offer a comprehensive range of services designed to make life easier at home and at work.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
