export default function Courses() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Courses</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {["Distributed Systems", "Machine Learning", "Systems Design", "Databases"].map((c) => (
          <div key={c} className="border border-white/10 rounded-lg p-4">
            <p className="font-medium">{c}</p>
            <p className="text-white/60 text-sm">Brief description or notes.</p>
          </div>
        ))}
      </div>
    </section>
  )
}


