export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Building toward Kardashev I
        </h1>
        <p className="text-white/70 max-w-prose">
          I work on futuristic, scalable systems with a focus on human-tool co-evolution.
          This is a minimal space for my schooling, courses, projects, writing, and media.
        </p>
      </div>
      <div className="aspect-square border border-white/10 rounded-xl grid place-items-center">
        <div className="size-40 md:size-56 rounded-full border border-white/20 animate-pulse" />
      </div>
    </section>
  )
}


