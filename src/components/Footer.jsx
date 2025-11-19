export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-semibold text-gray-900">Done-In-No-Time Inc.</h4>
          <p className="text-sm text-gray-600 mt-2">Serving Edmonton, Sherwood Park, Fort Saskatchewan, and surrounding areas.</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Contact</h5>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            <li>Phone: +1 (647) 617-8530</li>
            <li>Email: doneinnotimeinc@gmail.com</li>
            <li>Facebook: Done In No Time Inc.</li>
            <li>Instagram: doneinnotime_inc</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Quick Links</h5>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/why-us" className="hover:underline">Why Choose Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Motto</h5>
          <p className="text-sm text-gray-700 mt-2">Small Jobs, Big Jobs, Done In No Time!</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Done-In-No-Time Inc. All rights reserved.
      </div>
    </footer>
  )
}
