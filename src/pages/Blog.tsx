import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  published_at: string | null
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false
    async function load() {
      const { data } = await supabase
        .from('posts')
        .select('id,title,slug,excerpt,published_at')
        .order('published_at', { ascending: false })
      if (!ignore && data) setPosts(data)
      setLoading(false)
    }
    load()
    return () => { ignore = true }
  }, [])

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Blog</h2>
      {loading ? (
        <p className="text-white/60">Loading…</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.id} className="border border-white/10 rounded-lg p-4">
              <h3 className="font-medium">{p.title}</h3>
              {p.excerpt && <p className="text-white/60 text-sm">{p.excerpt}</p>}
              <div className="text-xs text-white/50">{p.published_at ? new Date(p.published_at).toDateString() : 'Draft'}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}


