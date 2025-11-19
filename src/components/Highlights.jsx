export default function Highlights() {
  const items = [
    { title: 'Fast & Reliable', desc: 'On-time arrivals and efficient service from start to finish.' },
    { title: 'Detail-Oriented', desc: 'We take pride in doing it right—every surface and every corner.' },
    { title: 'Flexible Scheduling', desc: 'Evenings and weekends available to fit your schedule.' },
    { title: 'Eco-Friendly Options', desc: 'Green cleaning products available upon request.' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.title} className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">{i.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
