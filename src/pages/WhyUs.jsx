import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const reasons = [
  'Fast, reliable, and detail-oriented service',
  'Eco-friendly cleaning products available',
  'Flexible scheduling and availability',
  'Affordable, transparent pricing',
  'Locally owned and insured',
  '100% satisfaction guarantee',
]

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <ul className="mt-8 space-y-3">
          {reasons.map((r) => (
            <li key={r} className="rounded-lg border bg-white p-4 shadow-sm text-gray-800">{r}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
