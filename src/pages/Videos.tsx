import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

type VideoRow = {
  id: string
  title: string
  path: string
}

type VideoWithUrl = VideoRow & { url?: string }

export default function Videos() {
  const [videos, setVideos] = useState<VideoWithUrl[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false
    async function load() {
      const { data } = await supabase.from('videos').select('id,title,path')
      const rows = (data || []) as VideoRow[]
      const withUrls = await Promise.all(
        rows.map(async (row) => {
          const { data: signed } = await supabase.storage
            .from('videos')
            .createSignedUrl(row.path, 60 * 60)
          return { ...row, url: signed?.signedUrl }
        })
      )
      if (!ignore) setVideos(withUrls)
      setLoading(false)
    }
    load()
    return () => { ignore = true }
  }, [])

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Videos</h2>
      {loading ? (
        <p className="text-white/60">Loading…</p>
      ) : videos.length === 0 ? (
        <p className="text-white/60">No videos yet.</p>
      ) : (
        <ul className="grid md:grid-cols-2 gap-4">
          {videos.map((v) => (
            <li key={v.id} className="border border-white/10 rounded-lg overflow-hidden">
              {v.url ? (
                <video controls className="w-full h-auto">
                  <source src={v.url} />
                </video>
              ) : (
                <div className="aspect-video bg-white/5 grid place-items-center text-white/40 text-xs">
                  <span>{v.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}


