import { createClient } from '@supabase/supabase-js'

const url  = import.meta.env.VITE_SUPABASE_URL
const key  = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
  console.error(
    '[Supabase] Missing env vars.\n' +
    'Copy .env.example → .env and fill in your project URL + anon key.'
  )
}

export const supabase = createClient(url ?? '', key ?? '')
