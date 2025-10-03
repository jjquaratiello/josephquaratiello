# Kardashev Site

Minimal, techy, black-and-white personal website built with React, Vite, Tailwind v4, and Supabase.

## Setup

1) Install deps:

```bash
npm install
```

2) Environment variables: create `.env` in project root with:

```bash
VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

3) Start dev server:

```bash
npm run dev
```

## Supabase schema

Import or run `supabase.sql` in your Supabase SQL editor.

## Notes
- Videos page creates signed URLs from the private `videos` bucket.
- Tailwind v4 is imported via `@import "tailwindcss";` in `src/index.css`.
- Routes: `Home`, `Education`, `Courses`, `Projects`, `Blog`, `Videos`.
