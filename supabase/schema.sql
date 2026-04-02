-- ============================================================
--  MINI ARCADE — Supabase Schema
--  Run this in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- 1. Scores table
CREATE TABLE IF NOT EXISTS public.scores (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email      TEXT        NOT NULL,
  game_name  TEXT        NOT NULL,  -- e.g. "dinosaur"
  score      INTEGER     NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. Row-Level Security
ALTER TABLE public.scores ENABLE ROW LEVEL SECURITY;

-- Users can insert their OWN scores only
CREATE POLICY "insert_own_scores"
  ON public.scores
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can read their OWN scores only
CREATE POLICY "select_own_scores"
  ON public.scores
  FOR SELECT
  USING (auth.uid() = user_id);

-- 3. Indexes for query performance
CREATE INDEX IF NOT EXISTS idx_scores_user_game
  ON public.scores (user_id, game_name, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_scores_leaderboard
  ON public.scores (game_name, score DESC);

-- ============================================================
--  LEADERBOARD HELPER VIEW (optional, for future use)
--  Shows the single best score per user per game
-- ============================================================
CREATE OR REPLACE VIEW public.leaderboard AS
  SELECT DISTINCT ON (game_name, user_id)
    user_id,
    email,
    game_name,
    score,
    created_at
  FROM  public.scores
  ORDER BY game_name, user_id, score DESC;

-- Grant read access to authenticated users (leaderboard is public within app)
GRANT SELECT ON public.leaderboard TO authenticated;
