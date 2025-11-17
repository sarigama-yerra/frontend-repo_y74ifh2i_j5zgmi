export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-amber-50 ring-1 ring-black/5 shadow-xl">
          {/* Background image placeholder using gradient and pattern */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 p-10 md:grid-cols-2 md:p-16">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-black/5">
                100% Vegetarian • Vegan Friendly
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Fresh, Tropical, and Soulful Dining in Bali
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Welcome to Mokshu — a calm oasis where seasonal plants, island spices, and mindful cooking come together.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#menu"
                  className="rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  style={{ backgroundColor: '#F17F1F' }}
                >
                  Explore Menu
                </a>
                <a
                  href="#reservations"
                  className="rounded-full px-6 py-3 text-emerald-800 font-semibold bg-white/90 ring-1 ring-black/5 hover:bg-white"
                >
                  Book a Table
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1505575972945-341a5cfac1f8?q=80&w=1887&auto=format&fit=crop"
                  alt="Vibrant plant-based dish"
                  className="h-48 w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-sm text-gray-700">Vibrant bowls inspired by island harvests</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1522184216315-dc2f4d28c66a?q=80&w=1974&auto=format&fit=crop"
                  alt="Tropical ambiance"
                  className="h-48 w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-sm text-gray-700">A tropical, calming ambiance with natural materials</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1487695652027-48e475bfa86b?q=80&w=1974&auto=format&fit=crop"
                  alt="Fresh greens"
                  className="h-48 w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-sm text-gray-700">Organic produce from local Balinese farms</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1543332164-6e82f355bad0?q=80&w=1974&auto=format&fit=crop"
                  alt="Artful plating"
                  className="h-48 w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-sm text-gray-700">Artful plating with a premium, minimal aesthetic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
