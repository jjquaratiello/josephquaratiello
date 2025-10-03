export default function Projects() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[1,2,3].map((i) => (
          <article key={i} className="border border-white/10 rounded-lg p-4 space-y-2">
            <h3 className="font-medium">Project {i}</h3>
            <p className="text-white/60 text-sm">Short description of the project's aim and tech stack.</p>
            <div className="text-xs text-white/50">Tags: react, node, supabase</div>
          </article>
        ))}
      </div>
    </section>
  )
}


