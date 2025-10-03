-- tables
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  published_at timestamptz
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  tags text[] default '{}',
  url text
);

create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  notes text
);

create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  path text not null -- storage path within the 'videos' bucket
);

-- storage bucket
insert into storage.buckets (id, name, public) values ('videos', 'videos', false)
  on conflict (id) do nothing;

-- RLS
alter table posts enable row level security;
alter table projects enable row level security;
alter table courses enable row level security;
alter table videos enable row level security;

create policy "read all" on posts for select using (true);
create policy "read all" on projects for select using (true);
create policy "read all" on courses for select using (true);
create policy "read all" on videos for select using (true);
