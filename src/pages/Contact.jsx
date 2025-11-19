import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    // For now, we just simulate submission success
    setTimeout(() => setStatus('Thank you! We will contact you shortly.'), 800)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Contact & Booking</h1>
        <p className="mt-2 text-gray-700">Call +1 (647) 617-8530 or email doneinnotimeinc@gmail.com. You can also use the form below to book a service.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Needed</label>
            <select name="service" value={form.service} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2">
              <option value="">Select a service</option>
              <option>Cleaning Services</option>
              <option>Car Detailing</option>
              <option>Moving Help</option>
              <option>Lawn & Snow Care</option>
              <option>Odd Jobs & Errands</option>
              <option>Senior Care Assistance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <button type="submit" className="rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-yellow-300 transition">
            Book a Service
          </button>
          {status && <p className="text-sm text-green-700">{status}</p>}
        </form>

        <div className="mt-10 text-sm text-gray-700 space-y-1">
          <p><strong>Phone:</strong> +1 (647) 617-8530</p>
          <p><strong>Email:</strong> doneinnotimeinc@gmail.com</p>
          <p><strong>Facebook:</strong> Done In No Time Inc.</p>
          <p><strong>Instagram:</strong> doneinnotime_inc</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
