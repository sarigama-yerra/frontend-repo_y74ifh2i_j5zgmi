export default function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Location & Hours</h2>
            <p className="mt-4 text-gray-700">Find us in the heart of Bali’s lush greenery.</p>
            <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg">
              <p className="font-semibold text-gray-900">Mokshu Restaurant</p>
              <p className="text-gray-700">Jl. Dharma, Ubud, Bali, Indonesia</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p>Mon–Fri: 8:00 – 22:00</p>
                  <p>Sat–Sun: 8:00 – 23:00</p>
                </div>
                <div>
                  <p className="font-semibold">Contact</p>
                  <p>+62 812-3456-7890</p>
                  <p>hello@mokshu.bali</p>
                </div>
              </div>
              <a
                href="#reservations"
                className="mt-6 inline-block rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#F17F1F' }}
              >
                Reserve Now
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl">
            <iframe
              title="Mokshu Location"
              src="https://www.google.com/maps?q=Ubud%20Bali&output=embed"
              className="w-full h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
