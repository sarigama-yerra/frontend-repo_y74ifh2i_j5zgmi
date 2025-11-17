import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Location', href: '#location' },
  { label: 'Reservations', href: '#reservations' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl bg-white/80 backdrop-blur shadow-lg ring-1 ring-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F17F1F' }}>
                <Leaf className="text-white" size={22} />
              </div>
              <div>
                <div className="text-xl font-extrabold tracking-wide" style={{ color: '#F17F1F' }}>
                  Mokshu
                </div>
                <div className="text-xs text-emerald-700/80">Vegetarian • Vegan • Bali</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#reservations"
                className="ml-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#F17F1F' }}
              >
                Book a Table
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-gray-100 px-4 pb-4">
              <nav className="grid gap-2 py-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#reservations"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl px-3 py-2 text-center text-sm font-semibold text-white"
                  style={{ backgroundColor: '#F17F1F' }}
                >
                  Book a Table
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
