const images = [
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522184216315-dc2f4d28c66a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487695652027-48e475bfa86b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543332164-6e82f355bad0?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Gallery</h2>
          <p className="mt-3 text-gray-700">A glimpse into our food and tropical atmosphere.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt="Mokshu gallery" className="h-48 w-full object-cover rounded-2xl shadow ring-1 ring-black/5" />
          ))}
        </div>
      </div>
    </section>
  )
}
