export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-200/40 to-amber-200/40 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1498654077810-12f23ee7fb80?q=80&w=1974&auto=format&fit=crop"
                alt="Balinese nature"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900">About Mokshu</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Rooted in the Balinese spirit of harmony with nature, Mokshu is a sanctuary for mindful dining. Our kitchen celebrates the abundance of plants—herbs, fruits, leaves, and grains—transformed into soulful dishes with a tropical twist. We partner with local farms and artisans, minimizing waste and honoring the island’s rhythms.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li className="rounded-2xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">Seasonal, island-sourced produce</li>
              <li className="rounded-2xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">100% vegetarian and vegan dishes</li>
              <li className="rounded-2xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">Eco-conscious operations</li>
              <li className="rounded-2xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">Warm, minimalist atmosphere</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
