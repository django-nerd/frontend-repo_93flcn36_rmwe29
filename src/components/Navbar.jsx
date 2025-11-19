import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/why-us', label: 'Why Choose Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-yellow-400 grid place-items-center ring-1 ring-gray-900/5">
              <span className="text-gray-900 font-extrabold">D</span>
            </div>
            <div className="leading-tight">
              <p className="font-bold text-gray-900">Done-In-No-Time Inc.</p>
              <p className="text-xs text-gray-500 hidden sm:block">Small Jobs, Big Jobs, Done In No Time!</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-yellow-300 transition">
              Book a Service
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="list-none cursor-pointer select-none rounded-md border px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Menu
      </summary>
      <div className="absolute right-0 mt-2 w-56 rounded-md border bg-white p-2 shadow-xl">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded px-3 py-2 text-sm ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="mt-2 block rounded bg-yellow-400 px-3 py-2 text-center text-sm font-semibold text-gray-900 hover:bg-yellow-300">
          Book a Service
        </NavLink>
      </div>
    </details>
  )
}
