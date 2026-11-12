# Bitzkrieg 28 Builder — Mortalis + Wrath & Ruin

One set of apps for both games. Every page has a **"Choose your game: Mortalis / Wrath & Ruin"** switch at the top,
and first-time visitors get a full-screen "Choose Mortalis or Wrath & Ruin" screen.

| File | What it is |
|---|---|
| `index.html` | Opens the Team/Warband Builder straight away (keeps `?game=`) |
| `fighter_forge.html` | Fighter Forge (was `mortalis_fighter_builder.html` / `wrath_ruin_fighter_builder.html`) — opened from the Team/Warband Builder |
| `roster.html` | Team Builder / Warband Builder (was `mortalis_team_index.html` / `wrath_ruin_warband_builder.html`) |
| `feat_sheet.html` | Feat Sheet (was `mortalis_featsheet.html` / `wrath_ruin_feat_sheet.html`) |
| `data/bitzkrieg_data.js` | **The shared rules database** — all weapons, abilities, Leader abilities, spells/powers, equipment, feats, and each game's names, wording, images and prebuilt teams |
| `data/b28_ui.js` | The game switch, the welcome screen and wording helpers used by every page |
| `img/mortalis/`, `img/wr/` | Each game's card texture, icons, logo and feat card background |
| `teams/mortalis/`, `teams/wr/` | Prebuilt teams/warbands (listed under `prebuilt` in the data file) |

## Linking from the blogs
Add `?game=mortalis` or `?game=wr` to any link so each site opens in its own game:

- playmortalis.com → `.../fighter_forge.html?game=mortalis`
- playwrathandruin.blogspot.com → `.../fighter_forge.html?game=wr`

Without `?game=`, the page uses the last game the visitor picked, or shows the welcome screen.

## Editing rules (data/bitzkrieg_data.js)
Each item is written once. Its fields apply to **both** games, with two optional extras:

```js
{
  id: "fast",
  name: "Fast",
  points: 3,                         // one price for both games
  effect: "This Fighter may perform a free Dash ...",
  wr: { name: "Fleet of Foot" }      // only what is different in Wrath & Ruin (example)
}
```

- `wr: { ... }` / `mortalis: { ... }` — fields that differ in that game (usually the name or the wording).
- `games: ["wr"]` — the item only exists in that game (most weapons). No `games` = both games.
- Never change an item's `id`: saved fighters find their items by `id`.

Wording such as Psyker/Warlock, Psychic Powers/Spells, MV/CV and Team/Warband lives in `GAMES.<game>.terms` at the top of the file.

## Saved data
- Exported fighters and teams now include `"game": "mortalis"` or `"wr"`. Older files are recognised from their weapons and item names.
- Loading a file made for the other game asks whether to switch game and load it there.
- Each game keeps its own autosave, roster and settings in the browser. (Before, both apps shared the same browser storage, so W&R data could end up in the Mortalis roster and vice versa; anything belonging to W&R is moved to W&R automatically on first visit.)
