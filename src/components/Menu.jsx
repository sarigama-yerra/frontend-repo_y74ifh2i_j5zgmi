const categories = [
  {
    name: 'Bowls & Salads',
    items: [
      { name: 'Island Buddha Bowl', desc: 'Red rice, coconut tofu, grilled pineapple, sambal vinaigrette', price: '95k' },
      { name: 'Green Goddess Salad', desc: 'Avocado, edamame, cucumber, lime-tahini', price: '85k' },
    ],
  },
  {
    name: 'Plates',
    items: [
      { name: 'Tempeh Rendang', desc: 'Slow-braised tempeh in aromatic coconut and spices', price: '110k' },
      { name: 'Jackfruit Tacos', desc: 'Roasted young jackfruit, tropical slaw, chili-lime', price: '95k' },
    ],
  },
  {
    name: 'Drinks & Tonics',
    items: [
      { name: 'Turmeric Ginger Elixir', desc: 'Anti-inflammatory, uplifting', price: '45k' },
      { name: 'Coconut Kefir', desc: 'Probiotic, tropical and creamy', price: '55k' },
    ],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Menu</h2>
          <p className="mt-3 text-gray-700">Always seasonal, always plant-forward. 100% vegetarian and vegan.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800">{cat.name}</h3>
              <ul className="mt-4 space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#reservations"
            className="inline-block rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#F17F1F' }}
          >
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  )
}
