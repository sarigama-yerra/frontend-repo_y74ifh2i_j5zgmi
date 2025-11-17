export default function Footer() {
  return (
    <footer className="mt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl bg-white/90 ring-1 ring-black/5 shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mokshu, Bali. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#menu" className="hover:text-emerald-700">Menu</a>
            <span className="text-gray-300">•</span>
            <a href="#reservations" className="hover:text-emerald-700">Reservations</a>
            <span className="text-gray-300">•</span>
            <a href="#location" className="hover:text-emerald-700">Find Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
