import { useState } from 'react'

export default function Reservations() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 2 })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservations" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Reservations</h2>
          <p className="mt-3 text-gray-700">We’d love to host you. Reserve your table in moments.</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-lg">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-xl border-gray-200 focus:ring-emerald-400 focus:border-emerald-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-xl border-gray-200 focus:ring-emerald-400 focus:border-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-xl border-gray-200 focus:ring-emerald-400 focus:border-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="mt-1 w-full rounded-xl border-gray-200 focus:ring-emerald-400 focus:border-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange} className="mt-1 w-full rounded-xl border-gray-200 focus:ring-emerald-400 focus:border-emerald-400">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#F17F1F' }}
            >
              Reserve
            </button>
            {submitted && (
              <p className="mt-3 text-sm text-emerald-700">Thank you! We’ll confirm your reservation by email shortly.</p>
            )}
          </form>

          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-amber-50 p-6 ring-1 ring-black/5 shadow-lg">
            <h3 className="text-xl font-bold text-emerald-900">Private Dining & Events</h3>
            <p className="mt-2 text-gray-700">Looking for a special setting for wellness retreats, birthdays, or intimate gatherings? Our garden pavilion offers a serene space with bespoke menus.</p>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
              <li>Seating for up to 24 guests</li>
              <li>Custom plant-based tasting menus</li>
              <li>Live acoustic or ambient music options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
