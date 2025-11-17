export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Eco-Friendly at Heart</h2>
            <p className="mt-4 text-gray-700">From sourcing to service, we tread lightly. We minimize plastics, compost organic waste, and prioritize local partners to reduce our footprint and support Bali’s ecosystems.</p>
            <ul className="mt-6 space-y-3 text-gray-800">
              <li className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200">Zero refined sugar in the kitchen</li>
              <li className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200">Plant-based milks made in-house</li>
              <li className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200">Compost and recycling programs</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-emerald-200/40 blur-2xl" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1452616031717-f9f8906eb7c7?q=80&w=1974&auto=format&fit=crop"
              alt="Eco friendly"
              className="relative rounded-3xl shadow-xl ring-1 ring-black/5 object-cover h-80 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
