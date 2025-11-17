export default function Wellness() {
  const items = [
    { title: 'Mindful Eating', desc: 'Slow, intentional dining that honors ingredients and body wisdom.' },
    { title: 'Herbal Tonics', desc: 'Balinese botanicals blended for vitality and balance.' },
    { title: 'Breath & Calm', desc: 'A tranquil setting designed to relax the senses.' },
  ]
  return (
    <section id="wellness" className="py-20 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Wellness Philosophy</h2>
          <p className="mt-3 text-gray-700">Inspired by Bali’s healing traditions and the nourishment of plants.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800">{it.title}</h3>
              <p className="mt-2 text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
