# Spotify Music Embed TODO

- [x] 1. Update backend/app/models/planner.py (add spotify_url to Song)
- [x] 2. Update backend/app/schemas/planner.py (add to SongCreate/SongResponse)
- [x] 3/4. Alembic skipped (not configured, manual SQL optional: ALTER TABLE songs ADD spotify_url VARCHAR(500); new data fine)
- [x] 5. Update planner/pages/music-list.html (UI/JS for URL input + embeds)
 - [x] 5.1 Fix JS linter with DOM creation
- [x] 6. Simplified: URL primary (oEmbed auto-details/embed), manual optional
- [x] 7. Backend ready

