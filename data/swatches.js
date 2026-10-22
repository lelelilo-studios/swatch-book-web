window.SWATCHES = {
 "site": "https://lelelilo-studios.github.io/swatch-book-web/",
 "families": [
  {
   "id": "paint",
   "name": "Paint & line",
   "color": "#ee7b5f",
   "blurb": "Brushwork, ink, pencil, gold leaf and pottery: styles you could make with your hands."
  },
  {
   "id": "pixel",
   "name": "Pixel & retro",
   "color": "#4fd8ff",
   "blurb": "Every pixel placed on purpose, from coarse silhouettes to dense 16-bit worlds."
  },
  {
   "id": "render",
   "name": "3D & rendering",
   "color": "#ffc94a",
   "blurb": "Light, depth and material: clay, voxels, cel bands, dither, dioramas and golden hours."
  },
  {
   "id": "shape",
   "name": "Shape & material",
   "color": "#2fd0c4",
   "blurb": "Paper, silhouette, flat colour and neon: styles built from what things are made of."
  }
 ],
 "games": [
  {
   "no": "01",
   "slug": "01-the-tell",
   "title": "The Tell",
   "tagline": "Every face paints its lies. Read the brushwork, doubt the liar, close the case.",
   "style": "Expressionist painting",
   "style_slug": "expressionist-painting",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/expressionist-painting/",
   "traits": [
    "Visible brush marks and broken color edges",
    "Expressive, non-naturalistic color",
    "Painterly portraits and environments"
   ],
   "theme": "#120c0c",
   "summary": "A night inspector in rain-soaked Varnhollow questions suspects whose faces are painted live from thousands of brushstrokes. Each face has its own tell when it lies (green creeping into a cheek, eyes running like wet paint, the room leaning in), learned from two answers you already know, so you read the paint, not the words. Expressionism turns inner states into visible brushwork and non-naturalistic colour, and here that is the whole mechanic.",
   "how_to_play": [
    "Every face has its own tell. It shows only when they lie.",
    "Two answers you already know come first: learn the face at rest.",
    "Swipe right to believe, left to doubt, before the candle dies.",
    "A caught lie pins evidence to the board. The red thread leads to the culprit.",
    "Some faces twitch when honest. Nerves aren't a tell: the baseline shows them."
   ],
   "controls": [
    {
     "action": "Believe",
     "touch": "swipe the card right, or tap Believe",
     "keys": "→ or D (or drag the card)"
    },
    {
     "action": "Doubt",
     "touch": "swipe the card left, or tap Doubt",
     "keys": "← or A (or drag the card)"
    },
    {
     "action": "Hurry the words",
     "touch": "tap the card",
     "keys": "Space or Enter"
    },
    {
     "action": "Accuse",
     "touch": "tap a portrait, then Accuse",
     "keys": "1, 2 or 3, then Enter"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "sound button on the title or pause screen",
     "keys": "M"
    }
   ],
   "fonts": [
    "Fraunces",
    "Alegreya Sans",
    "Alegreya"
   ],
   "palette": [
    "#120c0c",
    "#f1e6cf",
    "#e8a83c",
    "#d4482c",
    "#2f9a78",
    "#16212b",
    "#3b5f9a",
    "#eadcbc"
   ],
   "features": [
    "Procedural portraits: head, hair (six styles), eyes, brows, nose, mouth, beard and collar laid out from a seed, painted as about 2,800 brushstroke instances over a soft underpainting, in ten clashing warm/cool palettes; strokes follow the form and boil at 10 fps.",
    "Six tells and their decoys, each a different way the paint misbehaves: the mouth swirls, viridian creeps into one cheek, the room leans toward the face, the eyes run, the lamp light turns cold for a beat, the head tips and smears. Later nights make them fainter, later and shorter, and add nervous honest faces.",
    "A case generator with twelve crimes, a town's worth of names, trades, lodgings and pubs, 58 claims with what each lie was hiding, seven speaking voices, and the inspector's italic inner voice; the first case of the first night is a guided tutorial.",
    "A night of three cases: case file, two baseline answers and five statements per suspect against a burning candle, a cork board of pinned evidence with a red thread, the accusation, and a verdict stamped onto the portrait.",
    "Streak multiplier, best night, a daily case, nights unlocked by closing two of three, ranks, and a notebook that keeps every face you questioned as a live painting with your verdict.",
    "The whole room in the same stroke vocabulary: a rain window with crawling droplets and lightning, a hanging lamp, the table, a candle that is the clock; painted panels, paper with deckled edges, stamps and a painterly wipe between screens.",
    "Synthesized sound: rain on glass with drips, a distant foghorn, a clock that ticks faster as the candle burns, typewriter keys, a cello-dark chord for doubt and a warm one for belief, pins into cork, thunder, a bell motif when a case closes, and a slow D-minor loop."
   ],
   "rendering": "One custom batch fragment shader (Batch::with_fragment) draws tapered, bristled, slightly bent brushstrokes with dry broken tails and an impasto lip, plus painted panels and paper; the room and the portrait are painted into an Rgba8 target over CPU-built underpainting textures, then a canvas pass adds linen weave, grain, vignette, lightning and the cold-light tell before the interface is drawn on top in the same shader.",
   "brief": "# 01 · The Tell\n\n*Swatch 01 of The Swatch Book. Style: **Expressionist painting** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nVisible brushwork, clashing color masses and imperfect faces turn painting into an emotional language. This selection focuses on painterly surfaces and expressive portraits, rather than treating every painted background as the same style.\n\n**What to look for**\n- Visible brush marks and broken color edges\n- Expressive, non-naturalistic color\n- Painterly portraits and environments\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/expressionist-painting/):\n\n> Use visible, directional brushwork, broken paint edges and interlocking opaque color masses. Let expressive, selectively distorted faces and non-naturalistic warm/cool relationships convey mood. Keep focal faces, hands and interaction silhouettes readable while allowing quieter background forms to dissolve. Give characters, architecture and props the same painted surface vocabulary; do not apply a uniform oil-paint filter over realistic assets. Use restrained, painterly UI borders and confident readable type. Effects should resemble energetic painted strokes, and animation should preserve the authored shape of the brush marks. Avoid glossy plastic, mechanically perfect contours and unrelated clean cel shading.\n\n\n## The game: The Tell\n\n**Hook:** *Every face paints its lies.*\n\nThree in the morning in Varnhollow, a rain-soaked harbour town. You are the night inspector. Across the table sits a\nsuspect, and their face is an oil painting: thousands of thick, directional brushstrokes in colours no skin has.\nWhen they lie, the painting gives them away. But every face lies differently.\n\n**Why this style:** expressionist painting turns inner states into visible brushwork and non-naturalistic colour.\nHere that is the whole mechanic: you read the paint, not the words.\n\n### Core loop\n- A **night** is three cases. A **case** (procedurally made from the seed: a theft at the fish market, a missing\n  customs ledger, a fire at the rope works, a stolen ship's bell…) has a short case file and two or three suspects.\n- **Baseline** (per suspect): two questions whose true answers are in the case file. Watch how this face behaves\n  when it tells the truth: its own idle motion, its own colours.\n- **Statements**: the suspect makes five statements (typewriter text in their voice). While each plays, the portrait\n  reacts. Swipe **right to believe**, **left to doubt**, before the clock runs out (a candle burning down). Desktop:\n  ← / → or A / D.\n- **Tells** are assigned per suspect from a set, and the player must learn which one this face has from the baseline:\n  strokes around the mouth agitate and swirl; a cold viridian creeps into one cheek; the background masses lean\n  toward the face; the strokes of the eyes lengthen and drip; the light flips from warm to cool for a beat; the head\n  tilts and the brushwork smears. Nervous-but-honest suspects show a **decoy** motion on true statements, different\n  from their real tell. Later nights make tells subtler and add decoys.\n- **Evidence**: each correct doubt pins an evidence card to the case board (a painted cork panel). Wrong calls pin a\n  smudged card.\n- **Accuse**: tap the portrait of the culprit. Right: \"case closed\" with a painterly flourish; wrong: the case goes\n  cold. Score from closed cases, correct calls and remaining time; a streak multiplier across a night.\n\n### Hooks to come back\n- Best night, cases closed, accuracy; a **daily case** (the day's seed); a **notebook** of every suspect you have\n  questioned, their portrait kept as a painting with your verdict (a gallery that fills up).\n- First night: a guided first case where the inspector's inner voice (italic, painted text) points out the first\n  tell.\n\n### Look\n- The portrait: a procedural face (head, hair mass, eyes, brows, nose, mouth, collar) laid out from the seed, drawn as\n  **thousands of brushstroke instances** (`Batch::with_fragment`: each stroke a tapered, bristled quad whose colour\n  is sampled from a procedural underpainting with expressive warm/cool relationships; stroke direction follows the\n  form). Strokes boil gently at ~10 fps (paint that breathes). Tells modulate stroke agitation, hue, length and\n  direction locally.\n- The room: broad opaque colour masses (a lamp's warm cone, a cool rain-streaked window with painted droplets\n  running down, the table edge), the same stroke vocabulary, quieter in the background. Lightning flashes now and then\n  (scaled by `cx.flash()`).\n- UI: painted panels with broken edges, a confident display serif for titles and a readable humanist face for the\n  statements, typewriter text. The case board as cork with pinned painted cards.\n\n### Sound\n- Rain on glass (filtered noise with random drips), a ticking clock that speeds as the candle burns, a distant\n  foghorn. A low cello-like synth chord for doubt, a warm one for belief; a piano-like motif when a case closes.\n\n### Test hooks\n- `state()`: \"title\", \"file\" (reading the case), \"baseline\", \"statement\", \"accuse\", \"verdict\", \"over\" (and\n  \"paused\").\n- `snapshot()`: night, case, suspect, statement index, score, streak, and for tests only the truth of the current\n  statement (`lie: true/false`) and the suspect's tell kind.\n- `test_input`: `{\"answer\": \"believe\" | \"doubt\"}`, `{\"accuse\": 0}` (a suspect index), `{\"skip_text\": true}`.",
   "poster": "posters/01-the-tell.jpg",
   "thumb": "thumbs/01-the-tell.jpg",
   "clip": "clips/01-the-tell.mp4",
   "ready": true
  },
  {
   "no": "02",
   "slug": "02-debt-of-thunder",
   "title": "Debt of Thunder",
   "tagline": "You have no sword. You are the strike.",
   "style": "Bold comic illustration",
   "style_slug": "bold-comic-illustration",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/bold-comic-illustration/",
   "traits": [
    "Strong contours and silhouettes",
    "Hard-edged value grouping",
    "Saturated accents against deep shadows"
   ],
   "theme": "#070c18",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 02 · Debt of Thunder\n\n*Swatch 02 of The Swatch Book. Style: **Bold comic illustration** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nAssertive contours, sharply separated values and saturated accents create immediate visual impact. Characters and environments prioritize readability, recalling carefully colored comic panels.\n\n**What to look for**\n- Strong contours and silhouettes\n- Hard-edged value grouping\n- Saturated accents against deep shadows\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/bold-comic-illustration/):\n\n> Build characters and props around assertive silhouettes, deliberate contour weights and hard-edged shadow groups. Use a limited family of saturated accents against deep, chromatically controlled shadows. Compose environments like readable colored comic panels, with detail concentrated near narrative and gameplay focal points. Keep UI panels, item icons and action indicators in the same ink-and-flat-color vocabulary. Use graphic slashes, impact shapes and brief held poses for effects and motion. Whether assets are 2D or 3D, prioritize the final illustrated appearance. Avoid airbrushed shading, muddy midtones, photographic textures and excessive black outlines on every small detail.\n\n\n## The game: Debt of Thunder\n\n**Hook:** *You have no sword. You are the strike.*\n\nKestrel, a courier of the drowned pantheon, owes the Thunder-Mother one hundred storms. To pay, she dives through\nthe sunken halls of an original underwater pantheon (brass gods, coral saints, tide-wardens), fighting with the one\ngift she has: the dash. There is no attack button. **Every attack is a dash**: drag back and release, and Kestrel\nlightning-bolts across the room, cutting through every enemy on her line.\n\n**Why this style:** bold comic illustration lives on strong contours, hard-edged value groups and saturated accents\nagainst deep shadow, and on dramatic poses. A dash-only fighter is a sequence of poses and impacts: wind-up, streak,\nfreeze frame, ink slash, splash of colour.\n\n### Core loop\n- **Aim and dash:** press anywhere and drag back (a slingshot line with a hard ink arrow shows the path, bounces\n  included); release to dash. Short drags are short hops; long drags cover the room. Desktop: hold the mouse and\n  drag, or aim with WASD/arrows and press Space.\n- **Chain:** every enemy cut on one dash adds to the **chain**; chains fill the **ink meter**. Ending a dash next to\n  an enemy (not through it) leaves you open; enemies telegraph attacks with a bold red silhouette and a beat.\n- **Stamina:** three dash pips that refill quickly while you stand still: rhythm, not spam.\n- **Rooms:** a run is ~10 rooms (arena fights, a treasure room, a shrine room) then a boss (a brass colossus whose\n  weak points open only from behind; a coral queen who fills the floor with spikes in patterns).\n- **Blessings:** after each room choose one of three blessings from the patron gods, each a card with a bold\n  illustrated face. They change the dash itself: *Ricochet* (bounce off walls once), *Brand* (leave a burning\n  trail), *Echo* (a ghost repeats your last dash a moment later), *Undertow* (pull enemies toward your path),\n  *Static* (enemies hit arc lightning to neighbours), *Second Wind* (a free dash after a 3-chain). Blessings stack.\n- **Ink meter** full: double-tap for a **Storm Dash** that ricochets automatically through every enemy on screen.\n- A run takes 5–8 minutes. Death returns you to the surface shrine with the storms you earned (meta currency) to\n  buy permanent small upgrades (an extra pip, a starting blessing reroll, more health).\n\n### Hooks to come back\n- Storms paid toward the hundred (a long goal), best depth, fastest boss kill; a daily seed run with fixed\n  blessings.\n\n### Look\n- Top-down three-quarter view of tiled sunken halls, drawn as bold illustrations: heavy black contours (thick on\n  silhouettes, thin inside), flat hard-edged value groups, deep blue-black shadows, saturated accents (Kestrel's\n  electric yellow, enemy reds, blessing colours). Light shafts from above in flat shapes.\n- Comic impact language: freeze frames on hits (scaled by `cx.flash()`), ink splashes, halftone dots in shadows,\n  bold onomatopoeia occasionally (\"KRAK\"). Kestrel's dash leaves a jagged lightning streak with a speed-line smear.\n- Characters are 2D illustrated shapes (SDF and polygons with outlines) with strong poses, animated with snappy\n  key poses.\n\n### Sound\n- Punchy hits (noise burst + tuned thump), the dash as a crackling electric sweep, a drum-heavy loop with a brass-like\n  synth stab, the boss with its own theme. Choir pad on blessings.\n\n### Test hooks\n- `state()`: \"title\", \"surface\", \"aim\", \"dashing\", \"choose\", \"boss\", \"over\" (and \"paused\").\n- `snapshot()`: room, health, pips, chain, ink, enemies left, blessings, position.\n- `test_input`: `{\"dash\": [dx, dy]}` (a dash vector in room units), `{\"room\": 10}`, `{\"godmode\": true}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "03",
   "slug": "03-wet-on-wet",
   "title": "Wet on Wet",
   "tagline": "Wet a shape, drop in colour, let it bloom. Finish each sketch before the paper dries.",
   "style": "Watercolor washes",
   "style_slug": "watercolor-wash",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/watercolor-wash/",
   "traits": [
    "Translucent layers and soft transitions",
    "Pigment blooms, paper grain or uneven washes",
    "Negative space as part of the composition"
   ],
   "theme": "#cfd4d7",
   "summary": "A sketchbook of thirty pencil drawings to finish in watercolour on a live, GPU-simulated sheet of paper. You wet a shape with clean water, drop pigment in and let it bleed, mix and bloom, while the paper dries under you; each shape is then judged against a small painted study. Watercolour's whole character is the fight between control and the water, so that fight is the game: wet only what you mean to, keep wet neighbours apart, and drop clean water into a damp wash when a page asks for a bloom.",
   "how_to_play": [
    "Dip in the jar and tap a shape: clean water fills it up to its pencil line.",
    "Dip in a colour and touch the wet shape: it blooms through the water. Hold to pour, drag to stroke.",
    "Dry paper stops paint dead; two wet neighbours bleed into each other.",
    "Clean water dropped into a damp wash pushes the paint out into a bloom.",
    "Match each shape to the study in the corner, keep white shapes white, then tap Done."
   ],
   "controls": [
    {
     "action": "Pick a colour",
     "touch": "tap a well in the palette",
     "keys": "1 2 3"
    },
    {
     "action": "Pick clean water",
     "touch": "tap the jar",
     "keys": "W or 4"
    },
    {
     "action": "Wet a shape / bloom a damp wash",
     "touch": "tap it with water",
     "keys": "click"
    },
    {
     "action": "Drop, pour or stroke colour",
     "touch": "tap, hold or drag on the page",
     "keys": "click, hold or drag"
    },
    {
     "action": "Tilt the sheet (easel pages)",
     "touch": "drag the page's dog-eared corner, or tilt the phone",
     "keys": "Q / E"
    },
    {
     "action": "Look at the study",
     "touch": "tap the study card",
     "keys": "H"
    },
    {
     "action": "Done (twice to confirm)",
     "touch": "tap Done",
     "keys": "Enter"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Sound",
     "touch": "pause menu",
     "keys": "M"
    }
   ],
   "fonts": [
    "Cormorant Garamond",
    "Alegreya",
    "Kalam"
   ],
   "palette": [
    "#cfd4d7",
    "#f7f3e9",
    "#4c3a2f",
    "#3d3a42",
    "#3b5bb5",
    "#f5bb21",
    "#dd5478",
    "#b55c30"
   ],
   "features": [
    "A two-layer watercolour simulation in WebGPU compute shaders (256 × 384 cells, 5 fixed steps per tick): surface water flows by level across damp fibres only, soaks in and evaporates fastest at the rim, so dried washes keep a darker edge; pigment rides the water, diffuses with its depth, settles into the grain's valleys (granulation) and lifts again under fresh water (blooms)",
    "Thirty hand-authored pencil drawings in five chapters (First Washes, Bleeds, Blooms, Weather, The Easel), each introducing one idea: masking fluid that peels at the end, required blooms, rain that blooms whatever is damp, sun that dries the paper fast, mist that keeps it wet, and a tilted easel you steer by dragging the page's dog-eared corner",
    "Subtractive (Beer-Lambert) mixing of three pigments per page from a box of thirteen: blue and yellow meet on the paper as green; targets are painted studies made with the same maths",
    "Judging reads the dried page back from the GPU (integer atomics, so the same strokes always score the same): colour distance in Lab per shape, evenness, white shapes kept white and blooms where asked; pencil ticks and crosses mark each shape before the stars stamp in",
    "A daily sketch: a landscape composed from the date's seed with a fresh three-pigment palette, its seed code shown and shareable",
    "The sketchbook keeps a small copy of your best painting of every page, drawn under its own pencil lines in the index",
    "A first page that teaches by doing, step by step, with a pencil arrow at whatever comes next",
    "Synthesised sound: a brush on paper that follows your stroke's speed, drops, a glass jar, porcelain wells, pencil ticks, and a slow piano-and-pad loop that opens up when a page earns three stars"
   ],
   "rendering": "The simulation runs as compute passes over ping-pong rgba32float storage textures; one full-screen fragment pass draws the desk, the spiral-bound page, cold-press grain lit from its own slope, transparent pigment, wet sheen and the masking film, and one instanced 2D batch with a custom fragment shader draws graphite strokes, watercolour dabs, deckled cards and the wash that sweeps between screens.",
   "brief": "# 03 · Wet on Wet\n\n*Swatch 03 of The Swatch Book. Style: **Watercolor washes** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nTransparent layers, pooled pigment edges and open paper-like space give environments a fluid, breathable quality. Watercolor can shape flat illustration or be carried into a three-dimensional scene.\n\n**What to look for**\n- Translucent layers and soft transitions\n- Pigment blooms, paper grain or uneven washes\n- Negative space as part of the composition\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/watercolor-wash/):\n\n> Use translucent color layers, softly pooled pigment edges, selective blooms and subtle paper grain. Reserve generous light paper-like negative space; separate depth with overlapping washes and atmospheric softness rather than heavy outlines. Keep playable characters and interactive props more clearly defined than distant scenery, without making them look pasted in. Use light, legible UI cards with minimal watercolor accents, not noisy painted text. Effects should diffuse, bloom or flow, with gentle transitions that preserve action timing. Use watercolor treatment coherently even if the scene is built in 3D. Avoid opaque oil-paint buildup, plastic gloss, uniformly blurred edges and heavy comic inking.\n\n\n## The game: Wet on Wet\n\n**Hook:** *Paint before the paper dries.*\n\nA watercolour sketchbook of thirty unfinished paintings: a heron in reeds, a lighthouse at dusk, a fox under a\nbirch, a harbour in rain. Each page is a pencil line drawing on wet paper. You finish it by dropping pigment and\nletting it **bleed**: colour spreads through the wet paper, pools at edges, mixes where two washes meet, and stops\nwhere the paper is dry. The paper dries as you work.\n\n**Why this style:** watercolour is translucent layers, pigment blooms, paper grain and negative space. Its whole\ncharacter is the fight between control and the water. That fight is the game.\n\n### Core loop\n- **Regions:** each drawing is split into regions (sky, water, the heron's body…) with a **target colour**\n  (a small swatch) and some regions marked **keep white** (masking: the highlight on the water, the moon).\n- **Drop pigment:** pick one of three pigments in the palette (the page gives you a limited set, e.g. ultramarine,\n  gamboge, burnt sienna) and touch the paper: pigment flows from the brush where you touch and drag. It spreads\n  through wet paper by a GPU simulation (diffusion + flow along the paper's wetness gradient + granulation),\n  mixing **subtractively** with what is there (blue + yellow → green).\n- **Water:** a water brush re-wets dry paper (to keep a wash going) or drops into drying pigment to make a\n  **cauliflower bloom** (the backrun watercolourists know), which is required in some pages (the target shows it).\n- **Drying:** wetness evaporates over time (faster in some pages: \"sunny day\"). Dry paper stops pigment dead with a\n  hard edge (the darker rim watercolour leaves when a wash dries).\n- **Score:** when you press \"Done\" (or the page dries completely), each region is scored by how close its average\n  colour is to the target, how evenly it is filled, and whether white areas stayed white. Up to three stars per\n  page. Pages unlock in a sketchbook; later pages add wind (tilt the sheet: drag on the page's corner) and gravity\n  runs (tilted easels where washes run down).\n\n### Hooks to come back\n- Stars per page, a finished-gallery view of your own paintings (each saved as a thumbnail in the sketchbook), a\n  daily \"sketch\" page from the seed with a random palette.\n\n### Look\n- The simulation runs on the GPU in compute shaders over a paper-sized grid (e.g. 512×768 cells on phones):\n  fields for water, three pigment concentrations and deposited pigment; rendered with paper grain (a cold-press\n  texture from noise), pigment granulation in the grain's valleys, edge darkening where washes dried, and the\n  pencil line drawing on top. Keep a fallback lower grid size for slow devices (`cx.view.scale`).\n- UI is the sketchbook itself: a spiral-bound pad, a porcelain palette with three wells, a jar of water, a brush.\n  Calm serif type. No hard UI boxes: everything looks painted or penciled.\n\n### Sound\n- Brush on paper (soft filtered noise following stroke speed), a drop of water, the jar clinking, a soft piano and\n  string pad loop that blooms when a page gets three stars.\n\n### Technical notes\n- wgpu compute pipelines work on WebGPU: run a few sim steps per tick in a compute pass (ping-pong storage textures\n  or buffers, `rgba16float` or `r32float`), then render with a fragment pass. Keep it deterministic (fixed steps per\n  tick) so the test snapshot of region scores is reproducible.\n\n### Test hooks\n- `state()`: \"title\", \"book\", \"painting\", \"scoring\", \"result\" (and \"paused\").\n- `snapshot()`: page, stars, per-region scores, wetness average, time.\n- `test_input`: `{\"auto_paint\": true}` (fills each region with its target, for a 3-star test), `{\"page\": 7}`.",
   "poster": "posters/03-wet-on-wet.jpg",
   "thumb": "thumbs/03-wet-on-wet.jpg",
   "clip": "clips/03-wet-on-wet.mp4",
   "ready": true
  },
  {
   "no": "04",
   "slug": "04-snails-in-the-margin",
   "title": "Snails in the Margin",
   "tagline": "The knights fled the margins. Now it's you, a quill, and the snails.",
   "style": "Illuminated manuscript illustration",
   "style_slug": "illuminated-manuscript",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/illuminated-manuscript/",
   "traits": [
    "Page-like flat compositions",
    "Ink lines, flat colors and ornament",
    "Lettering integrated into the image"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 04 · Snails in the Margin\n\n*Swatch 04 of The Swatch Book. Style: **Illuminated manuscript illustration** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nFlat figures, handwritten text, ornamental borders and paper surfaces create a manuscript-like image. The category describes page construction and illustration, not all games with medieval settings.\n\n**What to look for**\n- Page-like flat compositions\n- Ink lines, flat colors and ornament\n- Lettering integrated into the image\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/illuminated-manuscript/):\n\n> Organize scenes like carefully illustrated pages: flat figures, limited pictorial depth, confident ink contours, opaque color fills and ornamental borders. Develop an original vocabulary of foliage, marginal creatures, patterned fabrics and letterforms; avoid borrowing recognizable historical pages wholesale. Keep important actors larger or clearer through composition rather than realistic depth of field. Integrate UI frames and chapter transitions with page architecture, but keep functional text in highly legible forms. Motion should suggest articulated drawings or lively marginalia without breaking their flat construction. Avoid photorealistic perspective, modern glossy widgets and decoration that competes with interactive objects.\n\n\n## The game: Snails in the Margin\n\n**Hook:** *The knights fled the margins. Now it's you, a quill, and the snails.*\n\nA monastery scriptorium, a great illuminated book open on the desk. Each level is a **folio** with a text block and\na gilded initial letter. From the margins come snails, as they have in real medieval marginalia, but these are\nhungry for gold leaf: they crawl toward the initial to eat it. You defend the page with the scribe's own tools.\n\n**Why this style:** illuminated manuscripts are flat, page-like compositions of ink line, flat colour, ornament and\nlettering in the image. Here the page is the battlefield, the ink you draw becomes walls, and the ornament you earn\nbecomes your army.\n\n### Core loop\n- **Draw ink walls:** drag on the vellum to draw a line with the quill. Ink is limited (a pot that refills slowly);\n  lines become solid walls once dry (a second). Snails path around walls (a flow field over the page grid), so you\n  shape their route into longer paths and traps. Snails can't cross text lines (the text block is a wall).\n- **Blot:** tap a snail to flick an ink blot: stuns small snails, slows big ones. Costs a little ink.\n- **Waves:** each folio has 3–5 waves of snails (garden snails, armoured snails with shells of gold, slugs that eat\n  ink walls, a snail-knight boss riding a bigger snail). A snail reaching the initial eats a piece of gold leaf;\n  lose all the gold and the folio is ruined.\n- **Marginal guardians:** between waves, spend gold on marginal figures painted into the border: a hare with a lance\n  (charges along the margin), a monk with a bell (slows snails nearby), a lion with a lute (stuns in a circle), a\n  dog-headed knight (blocks a gap). They animate stiffly, like marginalia come to life.\n- **Rubrics:** each folio's text block has red rubricated headings: you earn stars by finishing with the gold intact,\n  without a guardian lost, and under an ink budget.\n- Folios are pages of a book (36 folios across three gatherings), each with its own layout (text in two columns,\n  a large miniature in the centre, a page with a hole the scribe sewed shut…).\n\n### Hooks to come back\n- Stars per folio, gold kept, a completed-book view that shows every finished folio as a tiny page. A daily folio.\n\n### Look\n- Flat vellum with subtle texture, ink lines with a quill's thick-and-thin (width from stroke direction), flat\n  pigments (vermilion, azurite, verdigris, gold with a burnished shimmer that catches a slow light sweep), patterned\n  borders (vine scrolls, diapers) drawn procedurally. Text block in a blackletter-flavoured face (an OFL textura or\n  rotunda) with red rubrics; UI in the same calligraphy. Snails drawn as charming flat marginal creatures with a\n  spiral shell.\n- Page turns between folios with a curl and a shadow.\n\n### Sound\n- Quill scratching (filtered noise following the stroke), a bell, monks humming a slow drone (sine chords), snail\n  slurps, a gold \"chink\" when leaf is eaten. Plainchant-like melody on menus.\n\n### Test hooks\n- `state()`: \"title\", \"book\", \"planning\", \"wave\", \"folio_won\", \"folio_lost\" (and \"paused\").\n- `snapshot()`: folio, wave, gold left, ink, snails alive, guardians.\n- `test_input`: `{\"wall\": [[x0,y0],[x1,y1]]}` (draw a wall in page units), `{\"skip_wave\": true}`, `{\"folio\": 12}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "05",
   "slug": "05-rubber-rafters",
   "title": "Rubber Rafters",
   "tagline": "Stretch, grab, fling up a cartoon theatre before the curtain rises on you.",
   "style": "Rubber-hose animation",
   "style_slug": "rubber-hose-animation",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/rubber-hose-animation/",
   "traits": [
    "Rounded heads and flexible tube-like limbs",
    "Exaggerated squash, stretch and flowing curves",
    "Vintage contours with broad flat fills"
   ],
   "theme": "#2e2219",
   "summary": "Opening night at the Grand Palais of Wobbleton: Eddie Elastic, a pie-eyed stagehand with rubber-hose arms, has to climb from the orchestra pit to the gods before the curtain goes up on him. Touch a peg and his arm shoots out like a hose and grabs it; hold to hang, drag back to wind him up like a rubber band, let go to fling, and catch the next thing in mid-air. Rubber-hose animation is squash, stretch and springy tube limbs, so here the limb is the controller: the arm is a real spring, and every motion in the theatre bounces, wobbles and grins.",
   "how_to_play": [
    "Tap a peg: Eddie's arm shoots out and grabs it. A quick tap zips him up past it.",
    "Hold on to hang, let go to fly. Drag back to wind him up: the dots show the fling.",
    "Catch the next peg, rope or trapeze in mid-air. Miss, and he drops to the sandbags below.",
    "The curtain is rising under you. Stay above it, or you're the opening act.",
    "Mind the grumbling sandbags, Cuffs the cat, the spotlights and Splinters the puppet."
   ],
   "controls": [
    {
     "action": "Grab (zip up)",
     "touch": "tap a peg, rope, hook or trapeze",
     "keys": "click it, or Space grabs the lit one (Left/Right choose)"
    },
    {
     "action": "Hang",
     "touch": "keep the finger down",
     "keys": "hold the button or Space"
    },
    {
     "action": "Wind up and fling",
     "touch": "drag back while holding, let go",
     "keys": "drag the mouse, or hold Space and an arrow; let go"
    },
    {
     "action": "Skip a curtain call",
     "touch": "tap",
     "keys": "Space or Enter"
    },
    {
     "action": "Pause",
     "touch": "the round button, top right",
     "keys": "Esc or P"
    },
    {
     "action": "Play / how to play / matinee / dressing room",
     "touch": "tap on the title",
     "keys": "Enter, H, D, C"
    },
    {
     "action": "Sound",
     "touch": "the speaker on the title, settings or pause",
     "keys": "M"
    }
   ],
   "fonts": [
    "Limelight",
    "Rammetto One",
    "Coustard"
   ],
   "palette": [
    "#f2e4c4",
    "#f7eedb",
    "#16110d",
    "#b8322a",
    "#7c1f1b",
    "#d6a548",
    "#f2d488",
    "#8a6340",
    "#b99467",
    "#2e2219"
   ],
   "features": [
    "A real rubber arm: Eddie hangs on a damped spring that only pulls; a drag winds him back along a stiff follow-spring, and letting go switches to a quicker snap spring and releases the hand as he passes the grip, so short tugs zip and long wind-ups sling; a speed band keeps every fling lively but controllable, and the dots trace exactly what the release will do (walls and landings included)",
    "Forgiving on a phone: a 66 CSS px pick radius, a fallback that takes the grip best lined up with the touch, a held finger that catches whatever swings under it, ropes and trapezes on pendulum physics Eddie's arm pushes, a lit target and a nudge glove when standing about",
    "Six themed acts built from seeded pieces around a reachable spine (orchestra pit, fly loft, prop shelves, lighting rig, chandelier, the gods) and endless encores, each faster and sparser, with a curtain call and ticket count between acts and a rising curtain that speeds up if it falls far behind",
    "Hazards with tells: sandbags whose rope wobbles before they drop (only when nothing is between them and Eddie), Cuffs the cat who crouches then swats, sweeping spotlights whose core whites the screen out, and Splinters, a marionette who walks to his peg, tugs it and yanks it away (bonk him in flight for a ticket)",
    "Eddie in ink: pie-cut eyes that follow what he reaches for, eight moods, a hose arm that thins as it stretches and wobbles after a grab, lagging feet and free hand, squash on landing and stretch along the flight, white four-fingered gloves, and six costumes unlocked by tickets in the dressing room",
    "A first run that is a four-step rehearsal (tap, hang, wind up, catch), a daily 'Today's Matinee', best height and lifetime tickets saved, a best-height pennant on the rail, and a caught-on-stage finale: the curtain lifts, a spotlight finds him, the audience laughs and the iris closes",
    "A pit band synthesized live: a swung stride piano (oom-pah bass and chords) through a sixteen-bar ragtime round, brushes from act II, a muted trumpet on the tune from act III, a bass drum from act IV, a woodblock when the curtain is close, tempo rising each act; plus a slide whistle that follows the wind-up, boings, zips, thuds, cymbals, applause and a wah-wah",
    "The period look as a whole frame: line boil at 12 fps while everything moves at 60, gate weave by whole pixels, 24 fps grain, flicker, scratches, dust and hairs, a sepia unify and projector vignette, iris transitions, title cards in a deco frame, and on wide screens the proscenium, side drapes and boxes full of audience"
   ],
   "rendering": "One instanced 2D batch with a custom fragment shader (ink.wgsl) draws everything into an Rgba8 scene target as signed-distance shapes with flat fills and one contour weight whose edge is pushed by noise keyed to the boil frame (12 fps), plus painted gouache backdrops, velvet folds, light cones, sunbursts and irises; one full-screen pass (film.wgsl) then adds gate weave, grain, flicker, scratches, dust, sepia and the vignette.",
   "brief": "# 05 · Rubber Rafters\n\n*Swatch 05 of The Swatch Book. Style: **Rubber-hose animation** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nRounded forms, flexible limbs and exaggerated faces recall early theatrical animation. The palette may be colorful or monochrome: character construction and motion, rather than a period setting, define this look.\n\n**What to look for**\n- Rounded heads and flexible tube-like limbs\n- Exaggerated squash, stretch and flowing curves\n- Vintage contours with broad flat fills\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/rubber-hose-animation/):\n\n> Construct characters from rounded heads, simple expressive faces and flexible tube-like limbs. Establish one consistent contour weight, flat-fill palette and vintage shape vocabulary; choose monochrome or a restrained color scheme and keep that choice stable. Animate with clear anticipation, squash and stretch, elastic arcs and strongly readable poses. Use painted stage-like backgrounds with lower contrast than the action, plus rounded props and cartoon impact effects. UI and icons should echo the period's playful lettering and shapes while remaining easy to read. Avoid rigid realistic anatomy, detailed modern materials, inconsistent frame pacing and grain that obscures gameplay.\n\n\n## The game: Rubber Rafters\n\n**Hook:** *Stretch, grab, fling. The whole theatre is your trapeze.*\n\nOpening night at the Grand Palais of Wobbleton, a 1930s cartoon vaudeville theatre. Eddie Elastic, a pie-eyed\nstagehand with rubber-hose arms, has to climb from the orchestra pit to the gods, up through curtains, sandbags,\nspotlight rigs and swinging trapezes, before the curtain rises on him. Everything in the theatre wobbles,\nbounces and grins.\n\n**Why this style:** rubber-hose animation is round heads, tube limbs, squash and stretch, vintage contours with flat\nfills. A character whose arms stretch like hoses, flinging itself through a bouncing world, is the style's physics.\n\n### Core loop\n- **Grab:** touch a peg, hook, rope or ledge on screen: Eddie's arm stretches to it (a hose that overshoots and\n  wobbles) and grabs. Hold to keep holding.\n- **Fling:** release, and the stored stretch flings Eddie (spring physics: the farther the grab point, the harder the\n  pull). Grab the next thing in mid-air to chain. Missing means falling to the last landing (a sandbag pile).\n- **Swing:** ropes and trapezes swing with real pendulum physics; release at the right moment to launch.\n- **Hazards:** a stage cat that swats, falling sandbags (tell: a wobbling rope), spotlights that blind (a white-out\n  if you pass through their beam's core), a rival puppet pulling pegs out.\n- **Collect:** golden show tickets; each section of the climb is a \"act\" with a curtain call that counts them.\n- The climb is endless-ish: hand-authored chunks of theatre (fly loft, prop shelves, the catwalk, the chandelier)\n  stitched by the seed, faster and sparser as you climb. Height is score.\n\n### Hooks to come back\n- Best height, tickets, a daily climb, costumes for Eddie (a bowtie, a bellhop cap, a bow-legged suit) unlocked by\n  ticket totals.\n\n### Look\n- Black-and-ink contour lines that **boil** (redraw with tiny jitter at 12 fps), flat fills, round shapes,\n  everything with a face (pegs smile, sandbags grumble). A sepia-cream palette with a few period colours (stage red,\n  brass, cream). Film grain, gate weave (the whole frame drifts by a pixel), vignette, scratches and dust specks;\n  an iris-out circle on a fall and an iris-in on start. Title cards in a period display face, inside a deco frame.\n- Every motion has squash and stretch: Eddie squashes on landing, stretches on fling; his arms are drawn as tapered\n  tubes with white gloved hands.\n\n### Sound\n- Stride piano and a muted-trumpet lead, synthesized, tempo rising with height; slide-whistle on stretches, a\n  cartoon boing on bounces, a cymbal on curtain calls, a wah-wah on falls.\n\n### Test hooks\n- `state()`: \"title\", \"climbing\", \"falling\", \"curtain\", \"over\" (and \"paused\").\n- `snapshot()`: height, tickets, act, Eddie's position and velocity, what he holds.\n- `test_input`: `{\"grab\": [x, y]}` (world units), `{\"release\": true}`, `{\"height\": 300}`.",
   "poster": "posters/05-rubber-rafters.jpg",
   "thumb": "thumbs/05-rubber-rafters.jpg",
   "clip": "clips/05-rubber-rafters.mp4",
   "ready": true
  },
  {
   "no": "06",
   "slug": "06-rub-out",
   "title": "Rub Out",
   "tagline": "Scribble out the graphite beasts the night draws, before the village's lamps go dark.",
   "style": "Pencil and hatched drawing",
   "style_slug": "pencil-hatching",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/pencil-hatching/",
   "traits": [
    "Dense hatching builds shadow",
    "Paper grain and irregular marks",
    "Restricted grayscale or sepia values"
   ],
   "theme": "#cfd2da",
   "summary": "An alpine village at night, drawn in graphite on toothy paper. An unseen hand's black pencil sketches beasts of hatching on the ridge, stroke by stroke, and they come down the snow for the six lit windows; you are the eraser, and you scribble them off the page. Pencil art builds darkness out of layers of graphite, so darkness here is literally layers: the more hatching a beast carries the more rubbing it takes, the Crosshatch must be rubbed out one direction at a time, and every rub leaves a smudge the beasts can grow back on.",
   "how_to_play": [
    "Scribble over a beast to rub its graphite off. Faster rubbing lifts more.",
    "Keep your finger down: two beasts in one stroke is a combo.",
    "Your eraser wears down. When the church bell rings, rub the fresh block by the church.",
    "Every rub leaves a smudge, and beasts that cross a smudge grow back.",
    "Keep one lamp lit till dawn."
   ],
   "controls": [
    {
     "action": "Rub out",
     "touch": "scribble over a beast with one finger",
     "keys": "drag the mouse, or move with arrows / WASD while holding Space"
    },
    {
     "action": "Combo",
     "touch": "keep the finger down from one beast to the next",
     "keys": "keep the button (or Space) held"
    },
    {
     "action": "Take a fresh block or a spare pencil",
     "touch": "rub or tap it",
     "keys": "rub or click it"
    },
    {
     "action": "Pause",
     "touch": "the round button, top right",
     "keys": "Esc or P"
    },
    {
     "action": "Play / confirm",
     "touch": "tap",
     "keys": "Enter"
    },
    {
     "action": "How to play, tonight's sketch, sketchbook",
     "touch": "tap on the title page",
     "keys": "H, D, B"
    },
    {
     "action": "Sound",
     "touch": "the bell on the title page, settings or pause",
     "keys": "M"
    }
   ],
   "fonts": [
    "Cabin Sketch",
    "Architects Daughter"
   ],
   "palette": [
    "#efe9dc",
    "#cfd2da",
    "#26262e",
    "#4d4d54",
    "#b5332a",
    "#f4f0ea",
    "#f3dcd2",
    "#343230"
   ],
   "features": [
    "Graphite that behaves like graphite: every pull of the pencil is an instanced, bowed, tapered stroke whose pressure decides how much of a procedural paper tooth it catches (light pulls only touch the peaks), darks are built from crosshatched layers that multiply, and the same tooth function shades the paper, the smudges and the hand-lettered type",
    "Erasing as the mechanic: each beast keeps a 64 × 64, four-layer graphite grid in its rest pose (what the pencil has drawn, what is left); the eraser lifts it pass by pass along every coalesced point the finger passed through, faster strokes lift more, denser hatching takes more passes, and graphite comes off the tooth's peaks first so a half-rubbed beast keeps grey in the valleys; the holes walk with the beast",
    "Every rub writes into a page record (smudge streaked along the stroke, scenery lifted, paper burnished) and a coarse smudge grid the game reads: beasts that cross a smudge grow back, and the hand likes to draw over old smudges",
    "The unseen hand: a black pencil hovers over the ridge and draws each beast stroke by stroke (outline, hatch layers, then two red-pencil eyes); rub a beast out while it is being drawn for a bonus, or shove the pencil away with the eraser",
    "Four beasts built procedurally from silhouettes: scribble wolves, crosshatched bears, loop crows over the roofs, and the Crosshatch, four layers in four directions where only the top layer (tinted with red pencil) comes off, best rubbed along its lines",
    "A ladder of three-minute nights with rising pressure, a first night that teaches one idea at a time, a daily 'Tonight's sketch', bells that drop fresh erasers, spare pencils whose rubber caps refill yours, and a sketchbook of studies of every beast met",
    "Real tools above the drawing: a shaded rubber block that leans with the stroke, grubs up as it lifts graphite and shrinks as it wears, rolled crumbs that flick off and get swept along, and on wide screens a drawing board with tape, a pinned sheet of studies and a loose pencil",
    "Synthesised sound: rubber noise that brightens with stroke speed and squeaks when it turns, pencil scratches, crumbs, a church bell, wind over the snow, and a sparse music box that warms from A minor at midnight to C major at dawn"
   ],
   "rendering": "One full-screen pass (paper.wgsl) composes toothy paper tinted by the hour, the scenery (about 9,000 pencil pulls drawn once into an R8 world-space texture) and the page record (an RGBA8 texture the eraser stamps into each frame); one instanced batch with a custom fragment shader (graphite.wgsl) then multiplies the beasts' pulls, masked per pull from a 512² atlas of erase grids, red pencil and graphite dust over it, and draws the rubber, crumbs, the hand's pencil and the hand-lettered interface.",
   "brief": "# 06 · Rub Out\n\n*Swatch 06 of The Swatch Book. Style: **Pencil and hatched drawing** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nLine density, hatch direction and paper-like gray values build volume without smooth digital gradients. This surface treatment can appear in flat drawings or wrap three-dimensional models.\n\n**What to look for**\n- Dense hatching builds shadow\n- Paper grain and irregular marks\n- Restricted grayscale or sepia values\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/pencil-hatching/):\n\n> Build light and volume from deliberate line density, hatch direction and crosshatching rather than smooth digital gradients. Use restrained graphite grays or a coherent sepia range on lightly textured paper. Allow small irregularities in the marks while maintaining decisive character and object silhouettes. If using 3D, stabilize the drawing texture against distracting shimmer and make the scene feel drawn rather than merely desaturated. Give UI frames and icons the same pencil vocabulary, reserving clean regions for text. Effects may use rubbed marks, dust or brisk sketch lines. Avoid glossy surfaces, indiscriminate scribble noise and a simple grayscale filter standing in for drawing.\n\n\n## The game: Rub Out\n\n**Hook:** *Something is drawing monsters on the mountain. You have an eraser.*\n\nAn alpine village at night, drawn in graphite on toothy paper: chalets, a church spire, pines, a frozen waterfall.\nDown the slope creep shadow-beasts made of hatching: scribbled wolves, a cross-hatched bear, a looming thing of dense\ncrosshatch. An unseen hand keeps drawing more. You are the eraser.\n\n**Why this style:** pencil art builds shadow with dense hatching and lives on paper grain in a restricted greyscale.\nDarkness here is literally layers of graphite, and erasing it is how you fight. The more hatch layers a beast has,\nthe more rubbing it takes.\n\n### Core loop\n- **Scribble to erase:** rub your finger back and forth over a beast. The graphite comes off where you rub (an erase\n  mask on the GPU), revealing the paper; each beast has HP equal to its graphite. Rubbing fast and hard works\n  better; long continuous strokes chain into a **combo** (erase two beasts in one stroke for a multiplier).\n- **The eraser wears down:** a bar that shortens as you rub; it leaves crumbs (little rolled bits of eraser that\n  spill on the page). Pick up **new erasers** dropped by the village (a fresh block when the bell rings) or erase a\n  \"glint\" (a sharpened pencil the hand dropped) for a refill.\n- **Smears:** erasing never fully cleans: grey smudges remain, and the hand can redraw over smudged areas faster.\n  Big beasts leave big smears: strategy about where you fight.\n- **Beasts:** scribble wolves (fast, light), the hatched bear (slow, dense), crows of loose loops that fly over the\n  roofs, the \"Crosshatch\" (a boss of four hatching directions: erase them in order). Each that reaches a chalet\n  darkens it (lights go out). Lose all lights, lose the night.\n- **Survive till dawn:** the night is ~3 minutes; the paper slowly warms from blue-grey to dawn pink.\n\n### Hooks to come back\n- Nights survived, best combo, a \"sketchbook\" of beasts you've erased (each drawn as a study), a daily night.\n\n### Look\n- Real-feeling graphite: hatching drawn as many thin strokes with pressure variation, cross-hatching for darker\n  values, paper grain modulating the graphite (grain shows through light strokes), smudges as soft grey. Restricted\n  palette: paper cream, graphite greys, a single sepia or red-pencil accent for UI and lit windows. UI drawn with\n  pencil lines (wobbly boxes, hand-lettered numbers in a handwriting-like OFL face).\n- The eraser has a physical presence: a white rubber block under your finger (on desktop the cursor), tilting with\n  stroke direction, with crumbs flicking off.\n\n### Sound\n- Pencil scratch (filtered noise bursts) for the unseen hand, eraser squeak and rub (pitch from stroke speed),\n  crumbs pattering, a church bell, wind. A sparse music-box melody that gets warmer toward dawn.\n\n### Test hooks\n- `state()`: \"title\", \"night\", \"dawn\", \"over\" (and \"paused\").\n- `snapshot()`: time of night, lights left, beasts alive with their graphite, eraser left, combo.\n- `test_input`: `{\"rub\": [x, y, ms]}` (rub at a point in world units for ms), `{\"dawn\": true}`, `{\"lights\": 0}`.",
   "poster": "posters/06-rub-out.jpg",
   "thumb": "thumbs/06-rub-out.jpg",
   "clip": "clips/06-rub-out.mp4",
   "ready": true
  },
  {
   "no": "07",
   "slug": "07-belfry-weaver",
   "title": "Belfry Weaver",
   "tagline": "Spin a web in the bell tower. Catch the moths. Survive the bells.",
   "style": "Gothic ornamental linework",
   "style_slug": "gothic-contour",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/gothic-contour/",
   "traits": [
    "Clean silhouettes and simplified faces",
    "Dense organic curves and architectural motifs",
    "Layered depth and soft halos"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 07 · Belfry Weaver\n\n*Swatch 07 of The Swatch Book. Style: **Gothic ornamental linework** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nClear ink contours and simple characters sit within intricate, layered environments. Pointed arches, curling forms, shell-like motifs and misty backgrounds create dark yet delicate spaces.\n\n**What to look for**\n- Clean silhouettes and simplified faces\n- Dense organic curves and architectural motifs\n- Layered depth and soft halos\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/gothic-contour/):\n\n> Pair clean, compact character silhouettes and simple faces with intricate arches, curling vegetation, shell-like forms and layered cavern or architectural motifs. Use controlled ink contours and subdued atmospheric background planes. Reserve bright halos and stronger value contrast for navigation, threats and important characters. Give props, interface borders and icons a shared ornamental rhythm, with enough empty space to remain readable. Animate characters through clear flowing arcs and use fine filaments or soft halos for effects. Darkness should retain visual hierarchy and navigational clarity. Avoid uniformly dense detail, gratuitous gore as a style substitute, noisy crosshatching and photorealistic surfaces.\n\n\n## The game: Belfry Weaver\n\n**Hook:** *Spin a web in the bell tower. Catch the moths. Survive the bells.*\n\nHigh in a ruined cathedral belfry, among tracery, carved rosettes and the great bronze bells, lives Ossa, a small\ngrey spider. Moths drift in through the broken lancet windows toward a lantern someone left. Ossa builds a web\nacross the ornate stonework to catch them, and every hour the bells ring and shake everything.\n\n**Why this style:** gothic ornamental linework is clean silhouettes, dense organic curves and arches, layered depth\nand soft halos. A spider's web is ornamental linework that you draw yourself, inside a frame of gothic tracery.\n\n### Core loop\n- **Anchors:** the belfry's stonework has anchor points (rosettes, crockets, finials). Tap an anchor: Ossa shoots a\n  silk line to it from wherever she is (if in range and line-of-sight) and runs along it. Lines between anchors form\n  the **frame**; tapping a point on an existing line lets Ossa attach a new thread there (radials, spiral).\n- **Web physics:** every thread is a chain of verlet points with tension; webs sag, sway in drafts, and stretch when\n  a moth hits. Good webs (many radials + a spiral) catch well; sloppy ones tear.\n- **Catch:** moths fly in curving paths toward the lantern's glow. A moth that hits the web sticks and struggles: a\n  struggle meter. Tap it to send Ossa to wrap it before it breaks free (a bigger moth tears threads as it struggles).\n- **Silk:** limited, refilled by eating wrapped moths. Each moth adds to the score; big luna moths are worth more.\n- **Threats:** wasps (cut threads and must be avoided; they ignore the web if you don't vibrate it), pigeons\n  (smash through the web), and **the bells**: every in-game hour (~60 s) the bells ring: a visible shockwave of\n  sound that shakes the whole structure; weak attachments snap. A warning: the bell-ringer's rope starts to move.\n- A night has 6 hours; difficulty climbs; dawn ends the night with a tally.\n\n### Hooks to come back\n- Best haul, biggest moth, nights survived, a daily belfry layout. Unlock new belfries (a different tracery and\n  bells) at score milestones.\n\n### Look\n- A layered, deep, cool palette: midnight blue-greys, moonlight through the windows as soft halos, the lantern's warm\n  glow. Stonework drawn as clean silhouettes with dense ornamental curves (procedural tracery: trefoils, quatrefoils,\n  ogee arches) in three depth layers. Silk is a thin glowing line with dew beads that catch light; Ossa is a simple\n  clean silhouette with two bright eyes. Gentle parallax as you drag the view (the belfry is a bit taller than the\n  screen in portrait).\n- Moths leave faint dust trails in the light; wrapped moths are little silk bundles.\n\n### Sound\n- Wind through the tower, the deep bell (stacked inharmonic sines with a long decay), a soft organ-like drone,\n  plucked silk (a short, pitched pluck depending on thread tension: tighter = higher; plucking your web is\n  satisfying), moth flutter.\n\n### Test hooks\n- `state()`: \"title\", \"night\", \"bell\", \"dawn\", \"over\" (and \"paused\").\n- `snapshot()`: hour, silk, moths caught, threads, Ossa's position, moths stuck.\n- `test_input`: `{\"anchor\": i}` (tap anchor index), `{\"wrap\": true}` (wrap the nearest stuck moth), `{\"hour\": 5}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "08",
   "slug": "08-riverwright",
   "title": "Riverwright",
   "tagline": "Raise the hills, carve the valleys, bring the river home.",
   "style": "Lush painted worlds",
   "style_slug": "lush-painted-worlds",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/lush-painted-worlds/",
   "traits": [
    "Opaque layers and selective brushwork",
    "Rich warm–cool contrast and volume",
    "Dense but layered environmental detail"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 08 · Riverwright\n\n*Swatch 08 of The Swatch Book. Style: **Lush painted worlds** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nOpaque color masses, rich values and selective brush texture build substantial environments. Compared with transparent watercolor, these images emphasize weight, material and densely painted environmental detail.\n\n**What to look for**\n- Opaque layers and selective brushwork\n- Rich warm–cool contrast and volume\n- Dense but layered environmental detail\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/lush-painted-worlds/):\n\n> Build scenery from substantial opaque color masses, rich warm/cool relationships and selectively visible brush texture. Model foliage, stone, wood and architecture with purposeful painted shading, keeping foreground, playable plane and distance clearly separated. Characters and props must share the scene's palette and edge treatment even when animated with cleaner shapes. Make UI illustrations and icons feel hand-painted but keep labels crisp. Use localized painted light, controlled particles and animation that preserves the environment's crafted composition. Avoid transparent watercolor everywhere, photographic texture overlays, indiscriminate microdetail and lighting that destroys the painted color design.\n\n\n## The game: Riverwright\n\n**Hook:** *Raise the hills, carve the valleys, bring the river home.*\n\nAn island valley painted in thick, warm brushwork floats in a sea of cloud. A spring at the top of the valley pours\nwater; below, little hamlets wait with dry wells and empty mill wheels. You are the Riverwright: you sculpt the land\nitself so the water finds its way.\n\n**Why this style:** lush painted worlds are opaque layered paint, rich warm-cool volume and dense environmental\ndetail. Water bringing a painted world to life (grass greening, flowers opening, mills turning) is the most\nsatisfying way to show that richness growing under your hand.\n\n### Core loop\n- **Sculpt:** the valley is an isometric height grid (e.g. 24×24 cells). Drag up on the ground to raise it, down to\n  lower it (a brush of a few cells). Earth is a budget: what you dig goes into your \"earth\" store, what you raise\n  spends it. Pinch to zoom, two-finger drag to pan (or the edges of a phone screen).\n- **Water flows** by a shallow-water / virtual-pipes simulation on the grid: it pools in hollows, runs downhill,\n  spreads over flats, evaporates slowly, soaks into soil.\n- **Hamlets** need a steady flow at their well (shown as a little gauge on a painted signpost). Fill them all and\n  keep them filled for the season to win the level.\n- **Hazards:** flooding a field or hamlet ruins it (houses go dark and dripping). Rocks can't be dug. Some levels\n  have seasons: spring melt sends a surge from the top (a countdown), summer dries the river.\n- **Life:** wherever the soil gets wet, grass greens, wildflowers bloom and trees fill out over a few seconds (a\n  painted growth animation); a mill wheel turns when water passes it; birds land in pools.\n- 30 levels across three valleys (meadow, ravine, terraced hills), each with three stars: hamlets watered, earth\n  left unspent, nothing flooded.\n\n### Hooks to come back\n- Stars per level, a \"sandbox\" valley unlocked after the first valley, a daily valley generated from the seed.\n\n### Look\n- True 3D isometric terrain (orthographic camera, slightly tilted), painted with a shader: broad opaque brush\n  strokes in world space (noise-driven stroke directions), warm light from one side and cool violet shadows, soil\n  layers visible on cut cliffs, the cloud sea around the island. Water: a painterly ribbon with flow streaks moving\n  downhill and soft highlight strokes; foam at drops.\n- Props (houses, mills, trees, fences, rocks) built from simple meshes with the same painted shading, with dense\n  little details (laundry lines, smoke, sheep).\n\n### Sound\n- Running water whose volume follows the total flow, birds that arrive as the valley greens, a warm acoustic-like\n  loop (plucked synth guitar, soft flute), a chime when a hamlet is filled.\n\n### Test hooks\n- `state()`: \"title\", \"map\", \"level\", \"won\", \"lost\" (and \"paused\").\n- `snapshot()`: level, earth, water total, each hamlet's flow and filled time, flooded cells, stars so far.\n- `test_input`: `{\"sculpt\": [x, z, amount]}` (grid cell, + raises / − lowers), `{\"solve\": true}`, `{\"level\": 9}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "09",
   "slug": "09-hedge-remedies",
   "title": "Hedge Remedies",
   "tagline": "Brew cures from a hand of herb cards for the folk of the wood: no more marks, no less.",
   "style": "Decorative storybook illustration",
   "style_slug": "decorative-storybook",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/decorative-storybook/",
   "traits": [
    "Gentle contours and patterned details",
    "Decorative plants and objects",
    "Overlapping planes suggest space"
   ],
   "theme": "#efe4c8",
   "summary": "You mind a hedge-witch's shop for a week. The folk of the wood come in with their troubles drawn as marks in a speech bubble (Ember, Frost, Thorn, Moon, Tide, Wing), and you drag illustrated ingredient cards into the cauldron so their marks cover the need exactly: leftover marks play out as comic side effects, missing ones crack a heart. Decorative storybook illustration is gentle contours, patterned plants and overlapping painted planes, so every card is a botanical plate in an embroidered border, every patient a patterned animal in Sunday clothes, and the shop a stack of picture-book layers.",
   "how_to_play": [
    "Each patient's bubble shows the marks they need. Drag cards into the cauldron (or tap them in) until the marks match.",
    "An exact match is a perfect cure; perfect cures in a row multiply your Good Word.",
    "Leftover marks cause side effects (−2 Good Word each, but a coin's tip). Missing marks crack one of three hearts.",
    "Stir (1 coin) for a fresh hand. Evenings, buy new ingredients from the pedlar and compost one you'd rather not draw.",
    "On Sunday a great visitor needs three brews. Your score is your Good Word plus 5 for every heart kept."
   ],
   "controls": [
    {
     "action": "Put a card in the pot",
     "touch": "drag it into the cauldron, or tap it",
     "keys": "1–5 (or drag with the mouse)"
    },
    {
     "action": "Take a card back out",
     "touch": "tap it in the pot",
     "keys": "Backspace"
    },
    {
     "action": "Brew",
     "touch": "Brew button",
     "keys": "Enter or Space"
    },
    {
     "action": "Stir for a fresh hand",
     "touch": "Stir button",
     "keys": "S"
    },
    {
     "action": "Read a card",
     "touch": "hold it",
     "keys": "hold the mouse on it (hover shows its name and power)"
    },
    {
     "action": "Market: buy, compost, close up",
     "touch": "tap a card, Compost, Close up",
     "keys": "1–5, C, Enter (H buys honey, D shows the satchel)"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "sound button on the title or pause page",
     "keys": "M"
    }
   ],
   "fonts": [
    "Cherry Swash",
    "Vollkorn",
    "Vollkorn SC"
   ],
   "palette": [
    "#efe4c8",
    "#f4ead3",
    "#3a2c24",
    "#6b7d3a",
    "#a8344a",
    "#d39b36",
    "#4a4654",
    "#2a8a82"
   ],
   "features": [
    "28 ingredients, each a procedural botanical plate (stems as tapered strokes, toothed and veined leaves, petals, umbels of florets, berries, roots, bulbs, a seed clock, a shrieking mandrake, a bottle of moonwater) painted once into a card atlas at two sizes, framed by embroidered borders whose motif shows the rarity (vine, diamond, rosette)",
    "Cards that feel good in the hand: a fanned hand that lifts under the finger or mouse, follows the drag with a tilt toward its speed, grows a deeper shadow when lifted, squashes and bounces into the brew with a splash of leaves and drops, flips face-up as it is dealt from the satchel, and opens full-size when held",
    "Fifteen folk drawn from simple shapes with fine brown ink: goose, hare, badger, mouse, hedgehog, fox, frog, owl, mole, squirrel, otter and wren in patterned waistcoats, shawls, smocks and scarves (stripes, gingham, sprigs, scales, cross-stitch, plaid), with bonnets, hats, spectacles and flowers; plus three Sunday visitors (the Old Stag with ivied antlers that blossom, the Bear who woke in January, the Heron who forgot the way)",
    "Faces that act: blinking, glancing at the card you hold, worried brows that ease when the brew looks right, talking while the bubble types, and six side effects (steaming ears, an icicle nose and frost, a numb lolling tongue, snoring with Zs and a bubble, happy tears, floating up out of the frame with kicking feet), each with its own caption and sound",
    "A deck-builder week: 2–4 patients a day whose needs are built from the hand (sometimes nudged, later sometimes beyond it so a stir matters), wild, doubling, mending, lucky, warding and drawing cards, a streak multiplier, an evening pedlar's cart (a Saturday market with a guaranteed rare), composting, honey that mends a heart, and a three-brew Sunday visitor",
    "Screens as picture-book pages: the hedge's round door with a swinging sign, a turning page with a cauldron between screens, a first Monday that teaches one idea at a time with a pinned note and a drawn pointing hand, a how-to page with a worked example, the Herbarium of pressed plates (faded sepia until brewed), and a storybook ending that tells the week back (\"someone is still on the ceiling\") under a counting score and a wax-seal new best",
    "Synthesized sound: a 6/8 folk loop (a plucked harp under a breathy recorder every other time round), fire crackle and cauldron blups that rise with the heat, paper swishes, a plop and rising notes for each mark covered, a harp run for a perfect cure, a crack for a heart, coin chimes, the door bell, and a kettle whistle, ice tinkle, numb blblbl, snore, sniffle and slide whistle for the side effects",
    "Phone-first layouts for portrait, a two-column layout for phones on their side, and a centred stage on desktop with the shop's drawers, shelves and herbs running to the edges"
   ],
   "rendering": "Everything is one 2D batch with its own fragment shader (Batch::with_fragment): signed-distance shapes (ellipses, rounded boxes, leaves with midribs, petals, stars, hearts, tapered strokes) filled with gouache colour and paper grain, sixteen procedural folk patterns inside them (in shape or screen space), a fine ink contour, deckled paper, embroidered border bands with six motifs, soft shadows, noise-edged steam and a swirling three-colour brew; the cards are painted once into an Rgba8 atlas with the same shader and drawn as premultiplied sprites with a moving sheen. No post pass.",
   "brief": "# 09 · Hedge Remedies\n\n*Swatch 09 of The Swatch Book. Style: **Decorative storybook illustration** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nDelicate contours, patterned vegetation and gentle color shapes form explorable picture-book worlds. Flat illustration stays readable while overlap and ornamental detail enrich the surroundings.\n\n**What to look for**\n- Gentle contours and patterned details\n- Decorative plants and objects\n- Overlapping planes suggest space\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/decorative-storybook/):\n\n> Use delicate contours, gentle color shapes, patterned plants and charmingly specific everyday objects. Build space by overlapping illustrated planes and selective value contrast rather than heavy realistic shading. Establish recurring ornamental motifs across characters, clothing, props, environments and UI. Keep small interactive objects individually recognizable within dense scenery. Animate with smooth, expressive drawing and modest secondary motion; effects should feel like illustrated ribbons, leaves or small drawn accents. Use quiet page-like UI areas for readable text. Avoid generic plastic toy rendering, heavy black shadow masses and a different illustration style for portraits and environments.\n\n\n## The game: Hedge Remedies\n\n**Hook:** *A week of patients. A basket of herbs. Brew what ails them.*\n\nAt the edge of Brambleholt, inside a hollow hedge, an old hedge-witch has left her shop to you for a week. Her\npatients are the folk of the wood, painted like a picture book: a goose with a toothache, a hare who can't sleep, a\nbadger with a broken heart, a mouse who swallowed a star. Each comes with an ailment. You cure them with cards.\n\n**Why this style:** decorative storybook illustration is gentle contours, patterned details, decorative plants and\noverlapping planes. Cards are perfect canvases for that: botanical illustrations, folk-pattern borders, painted\npatients, all on paper.\n\n### Core loop\n- **Ailments** are shown as symbols in the patient's speech bubble: Ember (fever), Frost (chills), Thorn (pain),\n  Moon (sleep), Tide (sorrow), Wing (lightness). A patient needs, e.g., \"2 Frost, 1 Moon\".\n- **Your hand:** five ingredient cards drawn from your deck: Feverfew (Frost Frost), Lavender (Moon), Honeycomb\n  (Tide Ember), Nettle (Thorn Thorn, a Thorn side effect), Willow bark (Thorn → cancels Thorn)… Play 1–3 cards into\n  the cauldron so their symbols cover the ailment exactly.\n- **Leftover symbols** cause comic **side effects** (too much Wing: the patient floats out of the door; too much\n  Ember: their ears steam) which cost reputation but also give coins sometimes, so near-misses are interesting.\n- **Coins** buy new ingredients at the Saturday market (deck-building: choose 1 of 3 cards; rare ones combine, e.g.\n  Mandrake doubles another card's symbols, Moonwater turns a symbol into any other). Thin the deck by composting.\n- **A week** is seven days of 4–6 patients each, rising difficulty, and a **Sunday visitor** (a boss patient like\n  \"The Old Stag of the Wood\" needing a long complex cure over several turns).\n- End of the week: a storybook ending page, the reputation earned, and the week's score.\n\n### Hooks to come back\n- Best week, patients cured, a **herbarium** that fills with every ingredient you've used (painted plates with\n  folk names), a daily week from the seed.\n\n### Look\n- Cards with patterned borders (folk embroidery-like repeats, generated procedurally), botanical drawings of each\n  ingredient (procedural plant drawings: stems, leaves, flowers from parametric shapes), gentle contours and a soft\n  palette (moss, berry red, cream, ochre). Patients are painted animals built from simple shapes with patterned\n  waistcoats and shawls. The shop interior is layered planes: shelves of jars, hanging herbs, the cauldron's steam.\n- Cards fan in the hand at the bottom of the portrait screen; drag to the cauldron or tap to select and tap the\n  cauldron. Satisfying card motion: lift, tilt toward the drag direction, a little bounce.\n\n### Sound\n- A gentle folk loop (plucked harp-like synth, recorder lead), bubbling cauldron, card swishes, a little jingle for\n  coins, a comedic sound for each side effect.\n\n### Test hooks\n- `state()`: \"title\", \"day\", \"patient\", \"brewing\", \"market\", \"week_end\" (and \"paused\").\n- `snapshot()`: day, patient, ailment, hand (card names), coins, reputation, deck size.\n- `test_input`: `{\"play\": [0, 2]}` (hand indices into the cauldron), `{\"buy\": 1}`, `{\"skip_day\": true}`.",
   "poster": "posters/09-hedge-remedies.jpg",
   "thumb": "thumbs/09-hedge-remedies.jpg",
   "clip": "clips/09-hedge-remedies.mp4",
   "ready": true
  },
  {
   "no": "10",
   "slug": "10-tower-of-babble",
   "title": "Tower of Babble",
   "tagline": "Drop cut-out saints, sinners and cows from a cherub's string; stack them up to heaven.",
   "style": "Old-master painting collage",
   "style_slug": "classical-painting-collage",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/classical-painting-collage/",
   "traits": [
    "Brushwork and texture from classical paintings",
    "Cut-and-paste elements from different paintings",
    "Cutout-style articulated animation"
   ],
   "theme": "#1a120c",
   "summary": "A winged cherub's head swings a figure on a string held in its teeth: a bishop, a cow, a friar, Holbein's stretched skull, Crivelli's cucumber. You let go and the figure falls with rapier2d physics onto a heap growing on an ancient column capital, up through Bruegel's harvest and Babel, Constable's clouds and Botticini's heavenly host to a gilded gate 60 cubits up. It is the old-master collage style made literal: real public-domain paintings cut out with scissors, stiff hinged jaws that drop open when something lands on them, paper shadows, gold leaf and a coat of old varnish, played as deadpan slapstick.",
   "how_to_play": [
    "A cherub swings a figure on a string. Tap anywhere to let go (Space, Enter or a click on a keyboard).",
    "Swipe left or right (arrow keys) to turn it a quarter before you let go. Its shadow shows where it will land.",
    "Anything that falls off the capital costs a halo, one per collapse. Lose all three and the tower is finished.",
    "Land a person upright on another person's head for a miracle: it gives a halo back, and so does each new painting.",
    "Mind puffed cheeks (a gust is coming) and a shadow from above (the Foot). Saints hold what they land on; small devils glue."
   ],
   "controls": [
    {
     "action": "Let go",
     "touch": "tap anywhere",
     "keys": "Space / Enter / Down / click"
    },
    {
     "action": "Turn a quarter",
     "touch": "swipe left or right",
     "keys": "Left / Right (or A D, Q E)"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc / P"
    },
    {
     "action": "Menus",
     "touch": "tap",
     "keys": "arrows + Enter"
    },
    {
     "action": "Mute",
     "touch": "Sound button",
     "keys": "M"
    }
   ],
   "fonts": [
    "UnifrakturMaguntia",
    "IM Fell DW Pica"
   ],
   "palette": [
    "#1a120c",
    "#efe4cc",
    "#ede0bd",
    "#2b1c12",
    "#9e2a1c",
    "#d2a64c",
    "#8a8a85"
   ],
   "features": [
    "29 cut-outs from 18 public-domain paintings (Bruegel, Holbein, Zurbarán, Crivelli, Fra Angelico, Potter, d'Hondecoeter, Asselijn, Bosch, Reynolds, Mantegna, Dürer): each outline traced by hand as a polygon, cut with a rough scissor edge, packed into one 2048×1024 atlas, and simplified and convex-decomposed into the figure's rapier2d colliders",
    "Stiff cut-out animation: hinged jaws on 12 of the 22 figures drop open over a dark mouth when something lands on them (the cow moos, the bishop grunts, the swan hisses); the cherub is a winged head holding the string in its teeth and opens its mouth to let go; its wings flap faster and it sweats as the tower grows",
    "Deterministic physics in the fixed tick: a pendulum the cherub drives, figures that keep 30 % of their swing, paper that falls a little slow, fresh paste that grips, and lower figures that 'dry' into the picture (varnish and craquelure) a few turns after they settle",
    "Specials and weather: a saint freezes what she lands on for 5 s under a golden halo timer; a small Bosch devil glues itself to everything it touches; cloud-faces puff their cheeks in three held steps before a gust; Dürer's giant foot descends on the tower top after its shadow and a rumble, presses, and lifts away",
    "Five paintings as you climb, pasted down over each other as torn sheets (meadow, Babel, clouds, heavenly host) and a gold-leaf heaven with gates that swing open when the tower reaches 60 cubits",
    "A first-run lesson that teaches one idea at a time, first-sighting notes for every figure (with its painting and painter), miracles with a trumpet angel, one halo lost per collapse and halos regained by miracles and new paintings",
    "Daily stack (a seeded order of figures), best height and glory, and the Hall of Miracles: your best six towers kept as small framed paintings with museum titles ('Tower with a Cow and Regret')",
    "Sound all synthesized: an organ drone and a Dorian plainchant that gains parallel organum and an octave voice as the tower rises, wooden knocks, grunts, a moo, a bleat, clucks and hisses, a cherub's snip, sacred slide whistles for the fallen, wind, the Foot's stomp, halo bells and a brass fanfare"
   ],
   "rendering": "One 2D batch with its own fragment shader draws the scene into an offscreen target: the backdrop paintings as torn sheets sampled from a softer mip and hazed back, cut-outs from a premultiplied, mipmapped atlas with paper shadows and hinged flaps, varnish and craquelure on dried figures, a fluted stone shaft, and gold leaf (laid squares, seams, burnish sweep, punchwork) for halos, gates, frames and type; one varnish post pass (warm grade, vignette, canvas weave, parchment fades); then the interface (parchment, wax seals, gilt blackletter) in a second batch on top.",
   "brief": "# 10 · Tower of Babble\n\n*Swatch 10 of The Swatch Book. Style: **Old-master painting collage** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nFigures, landscapes and objects from classical paintings are recomposed into moving scenes. Oil-paint surfaces coexist with collage seams; image sourcing and recombination define the look more than a historical setting.\n\n**What to look for**\n- Brushwork and texture from classical paintings\n- Cut-and-paste elements from different paintings\n- Cutout-style articulated animation\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/classical-painting-collage/):\n\n> Create original or appropriately licensed painterly fragments with classical brush texture, coherent light and period-inspired fabric and landscape treatment. Assemble them as deliberately cut-out figures, props and layered scenery, allowing visible seams to be part of the language. Unify fragments through scale, palette, edge quality and shadow direction rather than a blanket painting filter. Animate articulated cutouts with carefully placed pivots and expressive held compositions. Use collage-like UI framing while keeping functional text clean. Effects should share the painted-fragment vocabulary. Avoid unauthorized reuse of paintings or game art, photographic cutouts, rubbery mesh distortion and mismatched source lighting.\n\n\n## The game: Tower of Babble\n\n**Hook:** *Stack the saints, the sinners and the cows. Heaven is up there somewhere.*\n\nAn old-master painting collage come to life. Cut-out figures from Renaissance and Northern paintings (peasants,\nmonks, merchants, angels, a cow, a goose, a bishop) dangle from a cherub's string at the top of the screen, swaying.\nTap to drop them onto the tower. The tower must rise to the gates of heaven, painted in gold leaf high above. It\nsways. Things fall off. Nobody is dignified about it.\n\n**Why this style:** old-master collage is classical painting texture, cut-and-paste elements and stiff cut-out\nanimation, played for absurd comedy. A physics stacking game made of cut-out paintings is that, literally.\n\n### Art: public-domain paintings\n- This is the **only game in the collection with downloaded art**, and it must be strictly public domain: paintings\n  by artists who died more than 100 years ago, from Wikimedia Commons, in their PD-Art / public-domain category\n  (Bruegel the Elder, Bosch, Dürer, Cranach, van Eyck, Memling, Holbein, Botticelli…). Download a curated set\n  (~20–30 figures and props, a sky and gold background), cut each figure out yourself (an alpha mask: define a\n  polygon outline by looking at the image, then cut with a slightly rough \"scissor\" edge), and save them as small\n  PNG/WebP atlases in `web/assets/`. Record every source (title, artist, date, Commons file page URL, licence) in\n  `web/assets/SOURCES.txt` and in `meta.json`. Keep the total under ~1.5 MB.\n- Figures keep their painterly texture; their outline polygon (simplified, convex-decomposed) is their physics shape.\n\n### Core loop\n- The cherub swings a figure from a string; tap to let go (desktop: Space or click). It falls with rapier2d physics\n  (`rapier2d` is in your Cargo.toml, with enhanced determinism) onto the growing tower.\n- **The tower sways**: wind gusts from puffing cloud-faces at the edges (they inflate before blowing: a tell). If a\n  piece falls off the ground platform, you lose one of three halos; lose all three and it's over.\n- **Height** is score; every 10 m the camera pans up and the painting behind changes (meadow → town → clouds → the\n  heavenly host). Bonus for \"a miracle\" (a figure landing exactly upright on another's head).\n- Special pieces: a cow (heavy, stable), a monk (narrow, wobbly), a saint (glows; freezes the piece below her in\n  place for 5 s), a tree (tall), a little devil (sticky: glues to what it touches), and a **giant foot** that comes\n  down from the sky now and then and has to be survived (it presses the top of the tower: a gag that tests the\n  structure). Original jokes only.\n\n### Hooks to come back\n- Best height, the \"Hall of Miracles\" (a gallery of your best towers, saved as snapshots of their piece layout),\n  a daily stack (the seed fixes the order of pieces).\n\n### Look\n- A painted landscape background (also public domain), cut-outs with a slight paper shadow and rough edges, stiff\n  cut-out animation (pieces rotate around pins, mouths open as hinged flaps when they land), gold-leaf typography\n  (an OFL blackletter or humanist roman), a parchment frame. Absurd little touches: pieces react when stacked (an eye\n  roll flap), the cherub sweats as the tower grows.\n\n### Sound\n- A sacred choir pad and organ drone that swells with height, comic cartoon falls (slide whistles transposed to\n  \"sacred\" timbres), wooden knocks on landing, a cow moo synthesized, a trumpet fanfare on miracles.\n\n### Test hooks\n- `state()`: \"title\", \"swinging\", \"falling\", \"settling\", \"over\" (and \"paused\").\n- `snapshot()`: height, pieces placed, halos, current piece, the tower's top position, number of bodies.\n- `test_input`: `{\"drop_at\": x}` (drop when the swinging piece is at x), `{\"halos\": 0}`.",
   "poster": "posters/10-tower-of-babble.jpg",
   "thumb": "thumbs/10-tower-of-babble.jpg",
   "clip": "clips/10-tower-of-babble.mp4",
   "ready": true
  },
  {
   "no": "11",
   "slug": "11-blink",
   "title": "Blink",
   "tagline": "Close your eyes, something in the little ink town changes, and you have to spot it.",
   "style": "Fine-line doodle worlds",
   "style_slug": "detailed-doodle",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/detailed-doodle/",
   "traits": [
    "Fine, slightly irregular contours",
    "Many miniature scenes placed together",
    "Reduced realistic volume and lighting"
   ],
   "theme": "#f6f0e2",
   "summary": "Inkbridge is a busy little town drawn in fine, slightly irregular ink: a hundred-odd people with hats and bags, cats on fences, laundry, a market, a band on the bandstand, boats on the river. Hold still to blink: two hand-drawn eyelids sweep shut, and while they are shut one thing you can see changes (a hat hops to another head, shutters swing open, a sign is misspelt, a cat wanders off). Let go and tap it. A fine-line doodle world is hundreds of small, individually readable scenes, so it is the perfect board for a game of attention: every line matters because there are so many of them.",
   "how_to_play": [
    "Look around Inkbridge: drag to wander, pinch (or scroll) to look closer.",
    "Hold your finger still on the town (or hold Space) to blink. While your eyes are shut, one thing you can see changes.",
    "Let go and tap what changed. Quick eyes score more, and a streak more still.",
    "Staying awake is your clock: finds wake you up, blinks and wrong guesses make you drowsy.",
    "Ten changes take the day from morning to noon to evening to night. Stuck? The hint circles the right corner, or blink again to give up on one."
   ],
   "controls": [
    {
     "action": "Look around",
     "touch": "drag",
     "keys": "drag with the mouse, or the arrow keys / WASD"
    },
    {
     "action": "Look closer",
     "touch": "pinch",
     "keys": "mouse wheel, or + and -"
    },
    {
     "action": "Blink",
     "touch": "hold a finger still on the town",
     "keys": "hold Space, or hold the mouse button still"
    },
    {
     "action": "Tap what changed",
     "touch": "tap",
     "keys": "click"
    },
    {
     "action": "Hint (once a round)",
     "touch": "magnifier, bottom right",
     "keys": "H"
    },
    {
     "action": "Pause",
     "touch": "the round button, top left",
     "keys": "Esc or P"
    },
    {
     "action": "Play / carry on / again",
     "touch": "tap the button",
     "keys": "Enter or Space"
    },
    {
     "action": "Today's town, how to play (title)",
     "touch": "tap",
     "keys": "D, H"
    },
    {
     "action": "Sound",
     "touch": "the speaker on the title, settings or pause",
     "keys": "M"
    }
   ],
   "fonts": [
    "Mynerve",
    "Playpen Sans"
   ],
   "palette": [
    "#f6f0e2",
    "#2a2520",
    "#b8ae9e",
    "#ebdcc0",
    "#e0472c",
    "#2f63d6",
    "#f0b93a",
    "#f4e0c8",
    "#1e2334",
    "#e6dfcc",
    "#f2bd5a"
   ],
   "features": [
    "A town generated from its seed: rows of houses from a shape grammar (gabled, hipped, flat, stepped and mansard roofs, chimneys with smoke, sash, arched, round and tall windows with shutters, curtains and window boxes, doors, shop fronts with striped awnings and lettered signs, balconies, half-timbering, drainpipes, aerials), a church with a working clock and a weathervane, Inkwell Square's market, fountain, statue, kiosk and bandstand, Margin Park, yards with laundry, sheds, gardens and hens, the Riverwalk, the river Inkwash with its bridge and boats, and three unlockable districts (the Harbour, the Fair, the Rooftops) that wait as pencil sketches until you have spotted enough changes to ink them in",
    "About 150 people and 60 animals living their day: walkers with strides and pauses, chatters, bench-sitters, faces at windows, stallholders, a five-piece band, fishermen, a painter up a ladder, rowers, children with kites and balloons, cats that sit, sleep and stroll, dogs, pigeons, hens, ducks and gulls; who is out depends on the hour",
    "Hold-to-blink eyelids: two hand-drawn lids on a springy hinge with curled lashes, an eyelid crease and a soft shadow, that slap shut with a squash, show drifting phosphene doodles and scrunch lines while held, and spring open with a flutter; the same lids are the transition between every screen",
    "About forty kinds of change in three tiers (whole things, details, tiny details): people leave, arrive or swap places, hats hop between heads, bags, poses, scarves, stripes and hairdos change, shutters, curtains, window boxes, lights, doors, chimneys, smoke, roofs, balconies, signs (re-worded or misspelt), awnings, pots and plants, trees, fruit and nests, market goods, laundry, the church clock and weathervane, boat flags, parasols, fences and birds on a wire; every change is described in a line of copy",
    "Fairness rules: a change only happens to something inside the view you blinked on, clear of the interface, not hidden behind a house or a tree, big enough at your zoom, and with its fine lines drawn at that zoom; walkers involved stop for a chat; a stuck change starts to shiver after a while, the hint circles its corner (and pans back if you wandered off), and blinking again gives it up",
    "A day of four rounds of ten changes, from obvious to subtle, with an 'awake' clock (blinks cost a second, wrong guesses three, finds give some back), speed bonuses and a streak multiplier, a round card listing every change with its time, a wakefulness bonus, a day strip on the end card, a best score, a daily fully inked town, unlockable districts, and a first-run tutorial that teaches by playing",
    "One palette per hour: warm morning paper, bright noon, a peach evening with lamps and lit windows, and a night where the paper turns ink-blue, the lines turn cream and the windows glow",
    "Synthesized sound: a soft shh for the blink, a squishy plip when the lids meet, a rustle while something changes, a pencil scratch and chime for a find, a gentle buzz for a wrong guess, a church bell between hours, a snore when you nod off; the town band plays one jaunty tune, louder near the bandstand, re-arranged for each hour (flute, full band, squeezebox, music box), over a murmur of chatter, birds, dogs and cats"
   ],
   "rendering": "One render pass with the kit's 2D batch and a custom fragment shader (ink.rs): wobbly capsule lines whose width breathes, outlined shapes (ellipses, trapezoids, bumpy crowns) filled with paper so they hide what is behind them, sparse patterns inside them (tiles, siding, bricks, cobbles, grass, water, leaves), world-space paper grain and an analytic pair of eyelids; static things are cached once as palette-indexed marks and recoloured for the hour at draw time, the view is culled per thing, fine details fade in by zoom, lines thin out when zoomed in close, and everything is drawn back to front in one batch (about 2,500 instances on a phone, 5,000 to 9,000 on a desktop).",
   "brief": "# 11 · Blink\n\n*Swatch 11 of The Swatch Book. Style: **Fine-line doodle worlds** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nMany tiny people and objects are built from simple, slightly irregular lines, like an enlarged hand-drawn map. It may be monochrome or lightly colored; fine line, density and adjacent miniature scenes define the style.\n\n**What to look for**\n- Fine, slightly irregular contours\n- Many miniature scenes placed together\n- Reduced realistic volume and lighting\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/detailed-doodle/):\n\n> Draw a dense but organized world from thin, slightly irregular contours and many small, individually readable scenes. Choose monochrome or a restrained light-fill palette, and use line shape and spacing as the primary means of differentiation. Keep realistic volume and directional shading minimal. Establish a consistent line-to-object scale across people, foliage, machinery, props and icons. Group details into navigable clusters with breathing room, and use simple line animations for feedback. UI should resemble the same hand-drawn map while reserving clean text areas. Avoid thick cartoon outlines, dense crosshatching and detail so small that targets become indistinguishable.\n\n\n## The game: Blink\n\n**Hook:** *Close your eyes. Something changes. Find it.*\n\nInkbridge, a bustling little town drawn in fine black lines on white: a hundred tiny people at windows, in gardens,\non rooftops and boats, cats on walls, laundry, market stalls, a band on a bandstand. It's alive: people walk, dogs\nchase, smoke curls. Hold your finger down to **blink**. When you let go, something in town is different. Tap it.\n\n**Why this style:** fine-line doodle worlds are slightly irregular lines, many miniature scenes and almost no\nvolume. Every line matters because there are so many of them: perfect for a game of attention.\n\n### Core loop\n- **Look:** the town is a big panorama (wider and taller than the screen); pan by dragging, pinch to zoom (desktop:\n  drag and wheel).\n- **Blink:** press and hold anywhere for half a second: your eyelids close (two hand-drawn lids sweep in). While\n  closed, one change happens: a hat moves to another head, a window opens, a cat disappears, a flowerpot changes\n  shape, two people swap places, a boat turns around, a sign's word changes, a bird appears.\n- **Find it:** let go: tap where the change is. Right: a little ink circle draws around it, points by speed. Wrong:\n  a scribble and time lost. A round is ~10 changes against a timer; changes get subtler (whole figures → details →\n  tiny details) and the town gets busier.\n- **Memory pressure:** you can blink only when you choose, but each blink costs a bit of time, so you learn to scan\n  the area before blinking. A \"hint\" (once per round) wiggles the right district.\n- Between rounds the town's day moves on (morning market → noon → evening lamps → a night with lit windows).\n\n### Hooks to come back\n- Best score, average find time, a daily town (seeded layout and changes), unlockable districts (the harbour, the\n  fair, the rooftops).\n\n### Look\n- Everything procedural line art: buildings from shape grammar (roofs, windows, chimneys, awnings), people as tiny\n  line figures with hats, bags and poses, trees as scribbled crowns. Slightly irregular lines (noise on width and\n  path), black on warm white, very little fill; a few flat accent colours appear only as UI (the find circle, the\n  timer). Lines drawn with the batch's anti-aliased lines; keep instance counts within budget by drawing at the\n  zoom level's detail (LOD: skip the tiniest details when zoomed out).\n- Eyelids, find circles and the timer are hand-drawn too; the type is a light, friendly handwriting-like face.\n\n### Sound\n- Town murmur (filtered noise + distant chatter-like blips), the band playing a jaunty tune that you hear louder near\n  the bandstand, a soft \"shh\" for the blink, a pencil tick on finds, a gentle wrong buzz.\n\n### Test hooks\n- `state()`: \"title\", \"looking\", \"blinking\", \"finding\", \"round_end\", \"over\" (and \"paused\").\n- `snapshot()`: round, changes found, timer, the current change's position (for tests), camera.\n- `test_input`: `{\"blink\": true}`, `{\"find\": true}` (taps the right place), `{\"round\": 4}`.",
   "poster": "posters/11-blink.jpg",
   "thumb": "thumbs/11-blink.jpg",
   "clip": "clips/11-blink.mp4",
   "ready": true
  },
  {
   "no": "12",
   "slug": "12-round-the-amphora",
   "title": "Round the Amphora",
   "tagline": "The war goes round and round. So does the vase.",
   "style": "Black-figure pottery",
   "style_slug": "black-figure-pottery",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/black-figure-pottery/",
   "traits": [
    "Dark silhouettes with incised-looking details",
    "Restricted ochre-and-black palette",
    "Meanders and horizontal visual bands"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 12 · Round the Amphora\n\n*Swatch 12 of The Swatch Book. Style: **Black-figure pottery** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nFigures become flat silhouettes with fine internal marks, paired with ochre grounds, meanders and banded compositions. Greek mythology is a secondary setting tag; pottery-like silhouettes and restricted colors define the style.\n\n**What to look for**\n- Dark silhouettes with incised-looking details\n- Restricted ochre-and-black palette\n- Meanders and horizontal visual bands\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/black-figure-pottery/):\n\n> Use predominantly dark, flat silhouettes on a restrained ochre or terracotta ground. Describe internal features with fine incised-looking marks rather than modeled shading. Arrange architecture, characters and props into clear horizontal bands with original geometric borders and meander-like ornament. Keep poses distinct and interaction zones unobstructed. Carry the silhouette-and-incision language into icons, UI frames and compact graphic effects; animate through strong readable profiles. Maintain the same limited palette across every asset family. Avoid treating mythology alone as the style, realistic materials, soft gradients and copying identifiable historical compositions without suitable rights.\n\n\n## The game: Round the Amphora\n\n**Hook:** *The war goes round and round. So does the vase.*\n\nA black-figure amphora turns on a potter's wheel. Painted on its band, a lone hoplite (you) defends the vase's story\nfrom everything mythology can throw at it: centaurs galloping round the band, harpies swooping, satyrs, a hydra.\nThey come from both sides of the cylinder. You can only see the front of the vase. So you turn it.\n\n**Why this style:** black-figure pottery is dark silhouettes with incised detail on ochre clay, in horizontal bands\nwith meander borders. The battle literally takes place on the curved band of a vase, and the vase's shape is the\narena.\n\n### Core loop\n- **Turn the vase:** swipe left/right (or drag) to spin the amphora; the hoplite stays at the front, the band moves\n  under him. Enemies approach along the band from both directions, appearing round the curve; a small ring map at\n  the bottom (the vase seen from above) shows where they are.\n- **Fight:** tap to thrust the spear (short reach, fast), hold to raise the shield (blocks arrows and blows; a\n  perfect block at the last moment staggers), swipe up to throw the spear (long reach, then you must pick it up from\n  the band where it lands: run to it by turning the vase).\n- **Bands:** the vase has three bands (neck, shoulder, belly); swipe down/up to leap between them (a dramatic hop).\n  Different enemies come on different bands; some cross bands.\n- **Labours:** a run is a series of labours (waves) with a mythic boss: the Hydra (cut heads regrow unless you hit\n  the stump in time), the Bronze Bull, the Gorgon (look away: hold the shield up while her gaze sweeps).\n- **Cracks:** each hit you take puts a crack in the vase. Five cracks and the vase **shatters**: a dramatic break into\n  shards that fall, and the run ends.\n\n### Hooks to come back\n- Labours completed, best score, a daily labour, unlockable vase shapes (kylix, krater, lekythos) that change the\n  arena (a wide krater has longer bands; a slim lekythos has short, fast ones).\n\n### Look\n- 3D vase (a lathe mesh) rendered with an orange-ochre clay shader, glossy black slip, and the band painted in real\n  time: figures are black silhouettes with **incised** detail lines (thin lines where the slip is scratched away to\n  the clay), red and white added colours sparingly. Meander and palmette borders. The vase sits on a turning wheel\n  in a dark museum-like space, softly lit. Animations are stiff, profile-view, in the manner of the pottery, with\n  big poses.\n- Shatter: the vase breaks into curved shards along a crack pattern.\n\n### Sound\n- Lyre and aulos-like synth (plucked strings, a reedy lead), a drum on each labour, clay clacks for blocks, a\n  ringing \"tink\" for spear hits, a crack sound for damage, an echoing shatter.\n\n### Test hooks\n- `state()`: \"title\", \"labour\", \"boss\", \"between\", \"shattered\" (and \"paused\").\n- `snapshot()`: labour, cracks, band, vase angle, enemies (band, angle), spear in hand.\n- `test_input`: `{\"turn\": angle}`, `{\"thrust\": true}`, `{\"block\": true}`, `{\"labour\": 4}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "13",
   "slug": "13-the-pallbearers",
   "title": "The Pallbearers",
   "tagline": "Four bearers. One coffin. A very long stair down.",
   "style": "Heavy ink and shadow",
   "style_slug": "heavy-ink-shadows",
   "family": "paint",
   "style_page": "https://gameartstyle.loopyhop.com/styles/heavy-ink-shadows/",
   "traits": [
    "Heavy solid black shapes",
    "Rough hatching and irregular contours",
    "Restricted highlights emphasize figures or danger"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 13 · The Pallbearers\n\n*Swatch 13 of The Swatch Book. Style: **Heavy ink and shadow** (Paint & line).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nHeavy black shadows, rough hatching and muted color organize the image, often with distorted proportions. Compared with bright comic illustration, ink marks and dark masses carry more of the mood.\n\n**What to look for**\n- Heavy solid black shapes\n- Rough hatching and irregular contours\n- Restricted highlights emphasize figures or danger\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/heavy-ink-shadows/):\n\n> Design angular or deliberately distorted silhouettes with large solid black shadow shapes, rough hatching and selective irregular contour marks. Use a restrained, muted palette with scarce highlights that reveal faces, interaction targets and danger. Preserve the same ink vocabulary on characters, scenery, props and interfaces, whether the assets are drawn or rendered in 3D. Effects should use sharp ink bursts, scratch marks and brief high-contrast accents rather than colorful particle fog. Keep animation weighty and poses readable. Avoid filling every surface with scratches, losing important shapes in black, polished photorealism and cheerful saturated comic coloring.\n\n\n## The game: The Pallbearers\n\n**Hook:** *Four bearers. One coffin. A very long stair down.*\n\nThe old Count has died, and his will insists on burial in the deepest vault of the family crypt. You command the\nfour pallbearers who must carry the coffin down an endless crumbling stair, through the dark, past things that\nwould rather the Count stayed with them. Keep the coffin level. Keep your bearers sane. Keep going down.\n\n**Why this style:** heavy ink and shadow is solid blacks, rough hatching and sparse highlights on figures and\ndanger. A procession by candlelight into a darkness that wants you is exactly what those blacks are for.\n\n### Core loop\n- **Balance:** the coffin rests on four bearers' shoulders; the stair is uneven (broken steps, slopes, gaps). The\n  coffin tilts with the steps. Drag left/right to shift the weight (the bearers lean); keep the tilt inside the\n  safe band or the coffin slides and falls.\n- **The bearers:** each has a stress meter and a personality: *Grim Halvard* (steady), *Nervous Pim* (stress rises\n  fast; at full he drops his corner and flees, unless calmed), *Old Moll* (tires on long stairs), *Brother Tobiah*\n  (prays: calms the others when tapped, slowly). Tap a bearer to steady them (a word of encouragement, a hand on the\n  shoulder) at the cost of a moment's attention.\n- **The dark:** a lantern at the front lights a small circle. Ghouls reach out of the black at the edges toward the\n  bearers (their hands are the only highlights: pale and long); a ghoul grabbing a bearer raises their stress and\n  tugs the coffin. Swipe the lantern toward a ghoul to drive it back (the lantern oil is limited; refill at wall\n  sconces you pass).\n- **Rooms:** the descent passes through set pieces: a flooded landing (slow), a collapsing stair (hurry), a\n  chamber of the Count's ancestors (portraits whose eyes follow; stress rises), a rope bridge.\n- Score by depth; a narrator delivers dry, gothic lines at milestones and failures (\"The Count arrived, briefly, at\n  the bottom of the stair. Unaccompanied.\").\n\n### Hooks to come back\n- Deepest descent, a roster of bearers to unlock (with different traits), a daily descent, the narrator's epitaphs\n  collected.\n\n### Look\n- Side view, 2D, heavy ink: solid black masses, rough hatching for mid-tones, a sepia-cream paper tone for lit\n  areas, sparse highlights (the lantern, faces, ghoul hands, the coffin's brass). Thick, rough contour lines with\n  ink-pen character. The bearers drawn as hunched, characterful figures with exaggerated faces; animation is\n  deliberate and heavy (each step lands).\n- UI: woodcut-like frames, a gothic serif title face, the narrator's text in italic at the top.\n\n### Sound\n- Slow, heavy footsteps in rhythm (a procession), the coffin creaking with tilt, a low choir drone, ghoul whispers\n  (filtered noise with formants), a funeral-bell motif for milestones, the narrator's lines marked by a muted chord.\n\n### Test hooks\n- `state()`: \"title\", \"descending\", \"event\", \"over\" (and \"paused\").\n- `snapshot()`: depth, tilt, each bearer's stress, oil, ghouls near, the current room.\n- `test_input`: `{\"lean\": -0.5}` (hold a lean), `{\"calm\": 1}` (tap bearer 1), `{\"depth\": 200}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "14",
   "slug": "14-turnstone-company",
   "title": "Turnstone Company",
   "tagline": "Four heroes, one turntable. Turn the right hero to face each blow.",
   "style": "Pixel sprites in 3D worlds",
   "style_slug": "pixel-3d-hybrid",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/pixel-3d-hybrid/",
   "traits": [
    "2D sprites with three-dimensional sets",
    "Depth of field, shadows and reflections",
    "Spatial lighting that preserves pixel contours"
   ],
   "theme": "#15111c",
   "summary": "Four pixel heroes stand back to back on a wooden turntable cart crossing the diorama kingdom of Mossmere. Foes come from every side and wind up typed blows; you never move the heroes, you turn the wheel so the Knight meets the blade, the Archer the wing, the Mage the ward and the Cleric the healing lantern-moth, and a turn that arrives in the very last beat is a Break. Pixel sprites on a rotating 3D stage, lit by lamps and the moon and framed by a tilt-shift lens, are exactly what the hybrid style is for: the turntable is the camera's stage.",
   "how_to_play": [
    "Swipe or drag sideways to turn the wheel (or tap the arrow buttons; arrow keys, Q/E on a keyboard). The near side follows your finger.",
    "A foe's rune names the hero who must answer: red sword the Knight, green feather the Archer, blue rune the Mage, gold moth the Cleric.",
    "Four pips count down each blow. Turn the right hero to it in the last beat for a Break: double damage, a stunned foe.",
    "Breaks fill the Company gauge: tap Company! (Space) and all four strike every side at once.",
    "Between fights choose your road: skirmishes, a champion, the pedlar, an inn, a shrine, and each region's lair."
   ],
   "controls": [
    {
     "action": "Turn the wheel a quarter",
     "touch": "swipe left or right, or tap the curved arrow buttons",
     "keys": "← → (A D, Q E)"
    },
    {
     "action": "Turn freely, snapping to quarters",
     "touch": "drag sideways",
     "keys": "↓ (S) turns half way round"
    },
    {
     "action": "Company strike (gauge full)",
     "touch": "tap Company! or swipe up",
     "keys": "Space, ↑, W or Enter"
    },
    {
     "action": "Choose a stop on the road",
     "touch": "tap a card or the stop on the map",
     "keys": "1 2 3, or ↑ ↓ and Enter"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "speaker button on the title, or Settings",
     "keys": "M"
    }
   ],
   "fonts": [
    "Jacquarda Bastarda 9",
    "Texturina",
    "VT323"
   ],
   "palette": [
    "#15111c",
    "#f4e8cc",
    "#f2c75c",
    "#c9a45a",
    "#e45a4c",
    "#94d25e",
    "#5cc6d6",
    "#f4c95c",
    "#e85a4a",
    "#2a2846"
   ],
   "features": [
    "The turntable battle: four heroes back to back, typed blows (blade, wing, ward, and friendly lantern-moths) from four sides at once, overlapping windups the scheduler keeps answerable, and Breaks for turns that land in the last beat; two fallen heroes and the Company retreats, and a fallen hero's side lets blows through to whoever stands behind.",
    "Readable at a glance: a rune over each foe in the answering hero's colour with a closing arc and four pips, a lane of chevrons on the ground that fills toward the wheel, a mark on the rim that is steady when the right hero stands there and flashes red when not, and a pulsing ring at the answering hero's feet wherever the wheel has turned them.",
    "Hand-drawn pixel art: four heroes in front, back and side views (with a breathing frame and a fallen pose turned from the side view), three foe families recoloured per region, feinting imps and twin strikers, a lantern-moth, the pedlar, the innkeeper, a shrine with its wisp, and three bosses: Gorm the hill giant whose two fists strike from opposite sides, Mother Bramble who vanishes and reappears on another side, and Cindermaw the dragon who circles the wheel so its blow lands where it will be, not where it is.",
    "Three diorama stages built from painted low-poly meshes at the sprites' texel density: Mossmere Green's cobbled square at dusk with lamp posts, bunting and puddles, the Wickwood at night with glowing mushrooms, fireflies, moonbeams and a stream, and the Cinder Chapel with a rose window mirrored in its polished floor, candles and braziers.",
    "A road map per region drawn as a tilt-shift diorama (plinths, mini models, a river, the cart token), branching stops, a pedlar with seven wares, shrines with eight boons (including 'Archer Pierces'), inns, champions and lairs.",
    "A first-run lesson that teaches one idea at a time by playing (the battle waits at the last pip for the right hero), then runs of about ten minutes, renown, a daily road with its own best, regions cleared, and two unlockable companions that change the matchups: the Lancer (blades and wards, never a Break) and the Bard (moths, and wings sung to sleep).",
    "Juice with restraint: hit-stop and a Break sting, slashes, arrows, bolts and sparks, coins bouncing on the cobbles, a Company Strike cut-in with all four heroes, the camera swinging a little as the wheel turns, shakes and flashes scaled by reduce-flashing, and haptics.",
    "Synthesized sound: a ratchet for every quarter turn, clang, thwip, zap and chime, rising pip ticks, a JRPG band (square lead, plucked harp, bass, drums) with a theme per region and heavier boss arrangements, a travelling tune on the road and a lullaby at the inn."
   ],
   "rendering": "A 2048² (1024² on phones) moonlight shadow map takes set meshes and sprite cards turned to the light; a half-size mirror pass renders the scene upside down for puddles, the stream and the chapel floor; the main pass draws into a 4× MSAA Rgba16Float target with texel-quantised procedural materials, eight point lights and up to sixteen blob shadows, pixel sprites as camera-facing cards sampled sharp-bilinear and lit by the same lights, and additive flames, glows, light shafts and telegraph decals, keeping view depth in alpha; then the kit's bloom, a half-size depth-of-field gather that only lets out-of-focus samples spread (no halos round the sharp heroes), and one grade pass (ACES, a gentle S-curve, warm lift, vignette, an iris between screens) before the 2D interface.",
   "brief": "# 14 · Turnstone Company\n\n*Swatch 14 of The Swatch Book. Style: **Pixel sprites in 3D worlds** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nPixel characters occupy three-dimensional sets, unified by modern lighting and depth of field. The three examples here are officially described as HD-2D; that branded term should not replace a general description of all hybrid styles.\n\n**What to look for**\n- 2D sprites with three-dimensional sets\n- Depth of field, shadows and reflections\n- Spatial lighting that preserves pixel contours\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/pixel-3d-hybrid/):\n\n> Place deliberately crafted 2D pixel characters and selected props inside coherent 3D sets. Define sprite pixel density, world scale, camera angle and billboard behavior before producing assets. Use controlled shadows, reflections, local lighting and restrained depth of field to bind both layers without smearing sprite contours. Give UI and effects compatible pixel shapes and selective dimensional depth. Ensure camera movement, animation and occlusion preserve scale and footing. Describe the approach generically rather than claiming a proprietary HD-2D pipeline. Avoid excessively blurred backgrounds, realistic models that clash with sprites, and inconsistent pixel scale across distances.\n\n\n## The game: Turnstone Company\n\n**Hook:** *Four heroes, one turntable. Turn to face the danger.*\n\nThe Turnstone Company is a band of four pixel heroes who travel the tiny diorama kingdom of Mossmere on a wooden\nturntable cart. When monsters attack, they come from all sides, and the heroes stand back to back on the turntable.\nYou don't move them. You **turn** them, so the right hero faces each attack.\n\n**Why this style:** HD-2D puts 2D pixel sprites in 3D sets with depth of field, shadows, reflections and spatial\nlight. A turntable battle is a camera's dream for that look: sprites as billboards on a rotating 3D stage, lit by\ntorches, framed by tilt-shift blur.\n\n### Core loop\n- **The wheel:** four heroes on a square turntable facing N/E/S/W. Swipe left/right to rotate 90° (or drag to turn\n  freely and snap). Desktop: ←/→ (Q/E).\n- **Telegraphed attacks:** enemies stand around the turntable and wind up attacks with clear tells (a glowing\n  rune above them, a countdown of pips). Each attack has a type: **blade** (needs the Knight: blocks), **wing**\n  (needs the Archer: shoots flyers down), **ward** (shielded enemies: needs the Mage to break the shield), and the\n  Cleric heals whoever faces her direction **behind** her. When an attack lands, the hero facing it answers if they\n  match; a mismatch hurts that hero.\n- **Counters:** a matched answer at the perfect moment (just before impact) is a **break**: the enemy is stunned and\n  takes double damage; breaks fill the **Company gauge** for a combined special (all four strike at once).\n- **Pacing:** attacks overlap: two enemies winding up on different sides at once is the puzzle. Later enemies feint,\n  swap types mid-windup, or attack twice.\n- **The road:** between battles, choose a route on a little map of tilt-shift diorama towns (a battle, a shop, an\n  inn to heal, a shrine for a perk like \"Archer pierces\"). A run crosses three regions and their bosses (a giant\n  whose two hands attack from opposite sides; a dragon that circles the turntable).\n\n### Hooks to come back\n- Regions cleared, best run, a daily road, unlockable alternate heroes (a Lancer, a Bard) that change matchups.\n\n### Look\n- 3D diorama sets (low-poly meshes with soft painted textures: a village square, a forest clearing, a ruined\n  chapel) under warm and cool point lights; pixel-art sprites for heroes and monsters drawn on CPU canvases, shown\n  as camera-facing billboards with **hard pixel edges**, casting soft blob shadows; **depth of field** (tilt-shift:\n  sharp in the middle band, blurred foreground and background in a post pass using depth), bloom on torches, a\n  subtle vignette. The camera sits high and close, orbiting a little as the turntable turns.\n- Pixel UI: health pips over heroes, enemy tell runes as pixel icons, a pixel font at native size.\n\n### Sound\n- A JRPG-flavoured battle loop (square leads, a synth harp, punchy drums), a gentle travel theme on the map, block\n  clangs, arrow thwips, mage zaps, cleric chimes; a distinctive \"break!\" sting.\n\n### Test hooks\n- `state()`: \"title\", \"map\", \"battle\", \"shop\", \"inn\", \"boss\", \"over\" (and \"paused\").\n- `snapshot()`: region, node, hero HPs, facing, enemies (side, type, windup), gauge.\n- `test_input`: `{\"turn\": 1}` (or -1), `{\"face\": \"N\"}`, `{\"win_battle\": true}`.",
   "poster": "posters/14-turnstone-company.jpg",
   "thumb": "thumbs/14-turnstone-company.jpg",
   "clip": "clips/14-turnstone-company.mp4",
   "ready": true
  },
  {
   "no": "15",
   "slug": "15-eight-bit-errands",
   "title": "Eight-Bit Errands",
   "tagline": "One word from the Queen, three seconds to do it: sixteen tiny errands at an 8-bit court.",
   "style": "8-bit-inspired pixel art",
   "style_slug": "8bit-pixel",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/8bit-pixel/",
   "traits": [
    "Limited color ramps and hard contours",
    "Small sprites and repeated tiles",
    "Graphic clarity before realistic materials"
   ],
   "theme": "#0f0b16",
   "summary": "Pip, the newest page at Queen Bramblebeard's court, gets one barked word at a time (CATCH! POUR! SWAT! STAMP!) and a burning fuse to do it: sixteen micro-errands of one verb and one input, a boss every tenth, the court speeding up every fourth, four hearts and then the moat. 8-bit pixel art is graphic clarity in a few colours and hard edges, which is exactly what a three-second game needs: each errand is a crisp, colour-coded little room you understand in half a second.",
   "how_to_play": [
    "The Queen barks one word. Do it before the fuse burns down.",
    "Each errand is one move: tap, hold, drag, swipe, rub or draw circles. The little hand under the stage says which.",
    "Four slip-ups and you scrub the moat.",
    "Every 4 errands the court speeds up; every 10th is a boss. Win a boss for a heart back.",
    "Beat your record and new errands (and new courtiers) join mid-shift."
   ],
   "controls": [
    {
     "action": "Errands that move Pip, the flame, the brush or the meat",
     "touch": "drag",
     "keys": "Arrow keys"
    },
    {
     "action": "Hop, stamp, toot, swat, pick a side",
     "touch": "tap",
     "keys": "Space / Left / Right / 1 2 3 (mouse click for SWAT)"
    },
    {
     "action": "Pour",
     "touch": "hold, let go",
     "keys": "hold Space"
    },
    {
     "action": "Pull the chain, duck, slide",
     "touch": "swipe down",
     "keys": "Down"
    },
    {
     "action": "Scrub / wind the music box",
     "touch": "rub / draw circles",
     "keys": "Left-Right / Up Right Down Left"
    },
    {
     "action": "Pause",
     "touch": "the pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "title speaker button",
     "keys": "M"
    }
   ],
   "fonts": [
    "Jacquard 12",
    "Jersey 10",
    "Micro 5"
   ],
   "palette": [
    "#0f0b16",
    "#fff6e4",
    "#3e3554",
    "#9d93b8",
    "#b8263c",
    "#ff7468",
    "#e6a01e",
    "#ffe07a",
    "#f0a676",
    "#3a9a4e",
    "#3a76e0",
    "#9ad6ff",
    "#8c4e22",
    "#7a34ba",
    "#8a93a6"
   ],
   "features": [
    "16 errands, each its own colour-coded room, sprites, verb, input and chiptune motif: CATCH, POUR, SWAT, STAMP, SHIELD, DODGE, PULL, COUNT, LIGHT, FEED, SCRUB, TOOT, SLICE, DUCK, WIND, HUSH; plus two boss errands, JOUST! and PLATTER RUN!",
    "The court between errands: Queen Bramblebeard pleased (hearts, scepter) or furious (red face, steam), the count, FASTER! and BOSS! ribbons, then the word slams in letter by letter over a stepped sunburst",
    "Speed rises every 4 errands (music tempo, fuse and every timing), capped at x1.8 with each errand's human windows widened so top speed stays fair; a bot verified all 18 winnable at speed 1 and at top speed",
    "A royal crowd of maids, cooks and guards cheers and boos below the stage, and the court fills up as your record grows: a jester at 6, the hound at 12, the heckling ghost of the last page at 18",
    "Progression and return: new errands unlock as your record grows and join the deck mid-shift with a NEW ERRAND! fanfare; the Royal Ledger lists every errand's best time; a Daily Decree plays everyone the same order",
    "Pure chiptune: a note bank rendered from 12.5/25/50% pulses and a triangle, NES-style stepped noise drums, a title galliard, an errand groove whose lead is each errand's own motif, a minor boss groove, Moat Blues on the end screen, 40 effects",
    "A first-run tutorial (the Queen's three lines, a fixed opening of four errands, a hint bubble for each errand's first appearance), pause with sound/haptics/flashes/scanlines, and an end screen that ticks off every errand of the shift"
   ],
   "rendering": "Everything is drawn in whole pixels with hard-edged 2D batches: errands into a fixed 144x192 stage target, which is composited into a pixel buffer sized at a whole-number scale of the screen (about 156x337 on a phone, 480x300 on a desktop); sprites are letter grids in a 31-colour palette baked into one atlas, fades and darkness are ordered dither (a custom fragment shader adds silhouette and dither kinds), and one final blit adds the optional scanlines and the solid NES-style failure flash.",
   "brief": "# 15 · Eight-Bit Errands\n\n*Swatch 15 of The Swatch Book. Style: **8-bit-inspired pixel art** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nLimited color ramps, crisp pixel boundaries and small sprites recall early consoles and home computers. This descriptive grouping does not imply strict compliance with any particular 8-bit machine’s palette or hardware.\n\n**What to look for**\n- Limited color ramps and hard contours\n- Small sprites and repeated tiles\n- Graphic clarity before realistic materials\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/8bit-pixel/):\n\n> Choose and document a small logical pixel resolution, tile grid, sprite scale and limited color ramps appropriate to the game. Use deliberate pixel clusters, crisp contours and reusable tile shapes. Keep characters, props, UI icons and effects aligned to the same visual pixel scale, scaling by integer factors wherever practical. Favor clear silhouettes and economical animation frames over fine texture. Use limited stepped shading and a small, controlled accent palette. This is an original visual direction, not a claim to emulate specific hardware exactly. Avoid accidental antialiasing, mixed pixel densities, blurred scaling and modern glossy effects that overwhelm the pixel structure.\n\n\n## The game: Eight-Bit Errands\n\n**Hook:** *The Queen wants it done. You have three seconds.*\n\nYou are Pip, the newest page at the 8-bit court of Queen Bramblebeard. The Queen issues errands, one word each, and\neach errand lasts a few seconds: CATCH the falling crown, POUR the tea without spilling, DODGE the jester's pies,\nSWAT the fly on the Queen's nose, COUNT the knights, PULL the drawbridge chain, STAMP the royal letter, LIGHT the\ncandles, SHIELD the Queen, DUCK the boomerang… Fail too many and you're sent to scrub the moat.\n\n**Why this style:** 8-bit pixel art is limited colour ramps, hard contours, small sprites and graphic clarity. Micro\nerrands need instantly readable screens: a single word and a crisp scene you understand in half a second.\n\n### Core loop\n- **Errands** (aim for 14+): each is a tiny game with one verb and one input: tap, tap-the-thing, swipe, hold,\n  rub, drag, two-tap rhythm. Each lasts 3–5 seconds with a fuse along the bottom.\n- **Pace:** every 4 errands the speed goes up (the tempo of the music and the fuse); every 10 a **boss errand**\n  (longer: \"JOUST!\" or \"PLATTER RUN!\").\n- **Lives:** four hearts; a failed errand costs one. Score is errands completed, with a bonus for speed.\n- Between errands, a quick court interstitial: the Queen's reaction (pleased / furious), a 1-second cutscene in the\n  throne room, the count, then the next word slams in.\n- **Progression:** new errands unlock as your record grows; the Queen's court gets fuller (a jester, a dog, a ghost\n  of the previous page who heckles).\n\n### Hooks to come back\n- Best errand count, the \"Royal Ledger\" listing every errand with your best time, a daily errand order.\n\n### Look\n- A strict NES-like look: a fixed low resolution (e.g. 256×240 equivalent mapped to portrait as `Fit::Width(160)` or\n  similar; choose what reads best), a 52-colour-like palette with 3 colours + transparent per sprite, 8×8/16×16\n  sprites drawn on CPU canvases, tile-built backgrounds, hard edges. Big pixel-font words for each errand, with a\n  classic two-frame bounce-in.\n- Little constraints that sell it: a slight \"sprite flicker\" when many sprites share a row (cosmetic, rare), scanline\n  option in settings, screen-flash on failure (scaled by `cx.flash()`).\n\n### Sound\n- Pure chiptune: two pulse channels, a triangle bass, a noise channel for drums (all with the kit's synth: `Square`\n  duties 12.5/25/50%, `Triangle`, `Steps` noise). A short jingle per errand result, the tempo rising with speed.\n\n### Test hooks\n- `state()`: \"title\", \"court\", \"errand\", \"boss\", \"over\" (and \"paused\").\n- `snapshot()`: errand name, index, speed level, hearts, score, the time left.\n- `test_input`: `{\"win\": true}` (complete the current errand), `{\"fail\": true}`, `{\"errand\": \"POUR\"}`.",
   "poster": "posters/15-eight-bit-errands.jpg",
   "thumb": "thumbs/15-eight-bit-errands.jpg",
   "clip": "clips/15-eight-bit-errands.mp4",
   "ready": true
  },
  {
   "no": "16",
   "slug": "16-ping",
   "title": "Ping",
   "tagline": "Steer a tiny sub down a black trench: ping to see the walls, but every ping is heard.",
   "style": "Monochrome-led pixel art",
   "style_slug": "monochrome-pixel",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/monochrome-pixel/",
   "traits": [
    "Dominant black-and-white values",
    "Negative space and readable silhouettes",
    "Occasional accents carry signals"
   ],
   "theme": "#07080a",
   "summary": "Pilot the research sub Wren down a flooded trench no lamp has reached. A ping sends out a ring that lights every rock face it reaches; the light then decays through a dither ramp and you steer by memory, while anglers hear every ping and, in the dark, only their lures show. Black is the unknown, white is what you paid to learn, and the only colours are signals: a lure, or something alive worth collecting.",
   "how_to_play": [
    "Drag anywhere to steer (WASD or arrows on a keyboard). The Wren drifts.",
    "Tap to ping (Space or click): the walls light up, then fade back into the dark.",
    "Every ping is heard. A lone red light is a lure: keep moving, and ease off near one, a fast propeller is heard too.",
    "Touch what glows to collect it; collecting without being hit builds a streak multiplier.",
    "Past 100 m, hold still and let go (hold E) to throw a decoy that pings for you. Buoys every 100 m mend the hull."
   ],
   "controls": [
    {
     "action": "Steer",
     "touch": "drag anywhere (the thumb's offset from where it landed)",
     "keys": "WASD / arrows"
    },
    {
     "action": "Ping",
     "touch": "tap",
     "keys": "Space (or a mouse click)"
    },
    {
     "action": "Decoy",
     "touch": "hold still, then let go",
     "keys": "hold E (or Shift), let go"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc / P"
    },
    {
     "action": "Menus",
     "touch": "tap",
     "keys": "arrows + Enter"
    },
    {
     "action": "Mute",
     "touch": "sound button",
     "keys": "M"
    }
   ],
   "fonts": [
    "Jersey 10",
    "Tiny5"
   ],
   "palette": [
    "#07080a",
    "#e8ece2",
    "#ff4d3a",
    "#4cf0c4",
    "#ffb444",
    "#8dff9c",
    "#ece6d6",
    "#a9d8ff"
   ],
   "features": [
    "Sonar as sight: a ping casts 1024 exact grid rays at once, then a ring grows at a readable speed and lights each face (and a few cells of rock behind it) as it arrives, shadowed by the rock it cannot pass, with a faint broken edge where it can't see",
    "Light decays through a five-step ordered-dither ramp anchored to the trench, so fading walls never crawl while the camera scrolls; the Wren always feels rock within a few cells",
    "Anglers hear pings, decoys, wall clangs and a fast propeller; they drift, swim to the sound, hunt, bite, back off; in the dark only their one-pixel lure shows, and a ping catches their toothy silhouette for a moment",
    "A trench generated 100 m at a time from the seed: chambers, pillars, side pockets with specimens, chimneys, currents that stream after a ping, rock that turns from speckle to strata to columns, and a sunken station whose sliding shutters leave stale sonar images",
    "Echoes you can hear: after each ping, clicks come back with the delay, pan and pitch of the nearest wall in eight directions; hull groans deepen, and a heartbeat joins the score when something hunts nearby",
    "A first-run tutorial inside the first 100 m (steer, ping, the fade, a lure safely behind a grate, a glowing jelly, the first buoy), then decoys unlocked at the first buoy",
    "Daily trench and random trenches by code, best depth and score, five phosphor palettes unlocked by depth, and an end screen that draws the whole dive as a map with the route, hits, catches and the breach",
    "On wide screens the trench sits between instrument panels: a dive log with a depth gauge and your best, hull/ping/decoy pips, and a LAST ECHO scope plotting the walls around the last ping"
   ],
   "rendering": "Everything is drawn into a pixel buffer about 240 px tall in logical tones (red = tone, green = accent, blue = world or interface): the CPU builds the sonar field each frame from per-cell lit ticks, kit batches add sprites from a text-drawn atlas and pixel text at native sizes, and one post pass dithers every tone to two values with a world- or screen-anchored 4x4 Bayer matrix and paints it in the chosen phosphor at a whole-number scale.",
   "brief": "# 16 · Ping\n\n*Swatch 16 of The Swatch Book. Style: **Monochrome-led pixel art** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nBlack and white or binary values structure the image through lines, blocks and negative space. Some examples add small accent colors, so this collection does not label every game strictly one-bit.\n\n**What to look for**\n- Dominant black-and-white values\n- Negative space and readable silhouettes\n- Occasional accents carry signals\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/monochrome-pixel/):\n\n> Make black and white or a carefully chosen near-binary pair carry most of the image through solid clusters, thin pixel lines and negative space. Set one logical pixel grid and distinguish characters, obstacles and background through shape and spacing before adding color. If accent colors are used, assign them stable gameplay meanings and keep them scarce; do not describe the result as strict one-bit art unless it actually is. Give UI, icons, particles and animation the same crisp pixel construction. Avoid smooth gradients, ambiguous overlapping silhouettes and effects that erase the binary value structure.\n\n\n## The game: Ping\n\n**Hook:** *The dark is a map you can only hear.*\n\nYou pilot a one-person research submersible, the *Wren*, down a flooded trench that no lamp has ever reached. The\nscreen is black water. The walls exist, but you can't see them, until you **ping**: a sonar ring expands from the\nsub and every wall pixel it passes lights up in white, then fades back into the dark over a few seconds through a\ndither ramp. You navigate by memory and by echo.\n\n**Why this style:** 1-bit pixel art is built from negative space and readable silhouettes, with colour kept for\nsignals. Here the black is literally the unknown, the white is knowledge you paid for, and the only colour on\nscreen is what matters: the lure of a predator, or a living specimen worth collecting.\n\n### Core loop\n- **Steer:** drag anywhere (relative thumb: the vector from where the finger landed), the sub has momentum and drifts.\n  Desktop: WASD / arrows.\n- **Ping:** tap (Space). Three charges, one recharges every ~1.5 s, shown as three pips. The ring expands at a\n  readable speed; walls light up as it passes; the light fades out pixel by pixel (ordered dither), so the map you\n  saw decays and you must ping again.\n- **The risk:** every ping is heard. Anglerfish within range turn toward where you pinged. They are invisible except\n  for one thing: **the lure**, a single pixel of the accent colour that drifts toward you in the dark. A ping\n  reveals their silhouettes for a moment. Being touched costs one of three hull pips (a crack across the screen, a\n  hit pause, a buzz). A *decoy* (hold to charge, release: it drops a small beacon that pings once by itself) lures\n  them away (unlocked after the first checkpoint).\n- **Collect:** living specimens glow in the second accent colour (jellies, a lantern shrimp, a glass squid). Each\n  adds to the score; a streak without taking damage multiplies it.\n- **Descend:** depth markers every 100 m are checkpoints (a buoy lights up, the hull repairs one pip). The trench is\n  generated from the seed: tunnels, chambers, narrowing chimneys, currents that push the sub (shown as faint\n  streaming pixels after a ping), and later sections where walls move (closing shutters of a sunken station).\n- **Passive sense:** the walls within a few pixels of the sub show faintly at all times, so you are never helpless.\n- A run ends when the hull breaks. The end screen draws **your whole dive as a map** (every wall you ever pinged,\n  white on black, the route you took as a line, deaths marked), with depth, specimens and the best depth.\n\n### Hooks to come back\n- Best depth and best score; a **daily trench** (the day's seed); unlockable **phosphor palettes** for the 1-bit\n  display (white-on-black, amber terminal, green phosphor, paper-white inverted, a cold blue) at depth milestones,\n  chosen on the title screen.\n- First run: a short interactive tutorial in the first 100 m (steer, ping, see the fade, meet a lure safely behind a\n  grate, collect a specimen).\n\n### Look\n- A `LowRes` buffer about 200 px tall (`Fit::Height(200)`), hard edges, integer scaling. Two tones plus at most two\n  accent colours used only as signals. A pixel font at its native size for the HUD (depth counter, pips) and a\n  bolder pixel or display face for titles.\n- The ring itself is a crisp 1-px circle with a short trailing dither. Revealed walls fade through 4–5 dither steps.\n- Tiny details: bubbles from the propeller when moving (1-px dots), the sub's silhouette tilts with its velocity,\n  a sonar-scope sweep on the title screen, a cracked-glass overlay for hull damage, specimens pulse.\n\n### Sound\n- The ping: a clean sine chirp. **Echoes come back**: after a ping, short quieter clicks return with a delay and\n  pan that depend on the distance and direction of the nearest walls in each direction, so a careful player can\n  hear the shape of the cave. Anglers: a low creak when one turns toward you. Ambient: a slow, filtered drone and\n  hull groans with depth. A sparse two-note motif at each checkpoint.\n\n### Test hooks\n- `state()`: \"title\", \"tutorial\", \"playing\", \"paused\", \"over\".\n- `snapshot()`: depth, score, hull, ping charges, specimens, sub position, the number of anglers hunting.\n- `test_input`: `{\"invincible\": true}`, `{\"depth\": 450}` (teleport to a depth), `{\"hull\": 0}` (end the run).",
   "poster": "posters/16-ping.jpg",
   "thumb": "thumbs/16-ping.jpg",
   "clip": "clips/16-ping.mp4",
   "ready": true
  },
  {
   "no": "17",
   "slug": "17-pangolin-pinball",
   "title": "Pangolin Pinball",
   "tagline": "Flip a curled-up pangolin round a sunny canyon table. It has opinions about your aim.",
   "style": "16-bit-inspired pixel art",
   "style_slug": "16bit-pixel",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/16bit-pixel/",
   "traits": [
    "Stepped shading builds form",
    "Layered foregrounds and backgrounds",
    "Saturated colors and nuanced sprite animation"
   ],
   "theme": "#2a4bc4",
   "summary": "Clover Canyon Zone is a tall pinball table standing in a sunny 16-bit landscape, and the ball is Pango, a curled-up pangolin who uncurls to cheer when you hit a jackpot and comments on everything you do. Light C-L-O-V-E-R for the Canyon Run, ride the glass ramp three times for a three-pangolin multiball, bonk moles in the hollow log, loop the orbit for a Ring Rush, and shoot whatever Pango wishes for to raise the playfield multiplier. Pinball is pure kinetic flow, so the table is a zone you light up: stepped shading on every rock and rail, a checkered loop-track arch, dithered glass, and five parallax planes of canyon behind the open playfield.",
   "how_to_play": [
    "Left half of the screen flips the left flipper, right half the right one; both thumbs at once is fine.",
    "Hold the right half to wind the spring, let go to launch Pango.",
    "Light C-L-O-V-E-R, ride the ramp 3 times for multiball, and visit the hollow log for the Mole Bonus.",
    "Pango has opinions: shoot what it wishes for to raise the playfield multiplier.",
    "Swipe up with two fingers to nudge the table. Too much and it tilts."
   ],
   "controls": [
    {
     "action": "Left flipper",
     "touch": "press the left half",
     "keys": "Z, Left arrow or Left Shift"
    },
    {
     "action": "Right flipper",
     "touch": "press the right half",
     "keys": "/, Right arrow or Right Shift"
    },
    {
     "action": "Wind and launch the spring",
     "touch": "hold the right half, let go",
     "keys": "hold Space, Enter or Down, let go"
    },
    {
     "action": "Nudge",
     "touch": "swipe up with two fingers",
     "keys": "Space (in play)"
    },
    {
     "action": "Mole Bonus",
     "touch": "left, both or right",
     "keys": "Z, Z and /, or /"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Menus",
     "touch": "tap",
     "keys": "arrows and Enter"
    },
    {
     "action": "Mute",
     "touch": "speaker button",
     "keys": "M"
    }
   ],
   "fonts": [
    "Pixelify Sans",
    "Press Start 2P",
    "Silkscreen"
   ],
   "palette": [
    "#251231",
    "#2a4bc4",
    "#7fc0fa",
    "#ffc53a",
    "#ee4d7d",
    "#db8a3a",
    "#3fae4c",
    "#e7865a",
    "#7c9fd8",
    "#231f5e"
   ],
   "features": [
    "A custom fixed-step ball solver: adaptive sub-steps (no ball or flipper tip moves more than a third of a ball radius per sub-step), swept-circle continuous collision against capsule-inflated segments and posts, conservative advancement against the flippers' tapered capsules, and a push-out pass; 300 random 1400 px/s launches into walls and swinging flippers never tunnel",
    "Flippers are solenoid-driven tapered capsules: the ball meets them with the velocity of the point it touches, the rubber 'snaps' a resting ball off faster than the flipper's own surface, so live catches, drop-catches, post passes and tip shots behave like a real table; the shots were tuned with a shot-map harness (ball at each point of the flipper, which switch it reaches)",
    "Two layers: a glass ramp tube rises up the left, arcs over the top lanes and curls through an S-chute into the right orbit, whose one-way gate hands Pango back to the right inlane; one-way gates, a spinner, a kickback spring pad, a ball-saver spring that pops up between the flippers, slingshots, three clover pop bumpers and six C-L-O-V-E-R standups",
    "Missions and modes: Canyon Run (C-L-O-V-E-R), Pango Party (3-pangolin multiball with log jackpots and a super jackpot on the ramp), the Mole Bonus minigame (left, both or right to bonk), Ring Rush (12 rings on the ramp and orbit, an extra ball for all of them), Pango's Wishes (its opinions raise or drop the playfield multiplier), combos, a skill shot, top lanes for the bonus multiplier, nudge and tilt",
    "A first game that teaches by playing: the spring lesson, then slow motion as Pango first reaches each flipper until that thumb flips, then tips the first time each mission comes up",
    "Five mission stars per game, a local top-five table with initials entered pixel-style, a daily table whose seed shuffles Pango's wishes, the lucky letter, bumper values and the skill lane, and the table's code to replay any game",
    "Pango in 16 rolling frames whose tucked-in face tumbles round, peeking out when still; uncurled poses to cheer, wave and sulk; his cousins Pip and Plum join the multiball in their own scale colours",
    "All sound is synthesized: an FM bell for each bumper, springs that boing, a formant-filtered 'JACK-POT!', a sad wah-wah drain, and a bouncy F major loop played on rendered FM bass, e-piano and brass samples that turns up a fever arpeggio during modes"
   ],
   "rendering": "Everything is drawn into one pixel buffer (195x422 on a phone, 720x450 on a desktop) at a whole-number scale: the table, the ramp and the scenery are painted once on the CPU from the table's own geometry (distance-to-edge stepped bevels, checker tiles, strata, ordered dither), sprites come from one CPU-built atlas (letter-grid characters, flipper frames rasterized from the physics capsule, the rolling ball from shading rules), five parallax strips scroll at their own rates, and the kit's LowRes blit puts it on screen with nearest filtering.",
   "brief": "# 17 · Pangolin Pinball\n\n*Swatch 17 of The Swatch Book. Style: **16-bit-inspired pixel art** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nRicher color ramps, layered parallax and fuller sprite volumes evoke the 16-bit era. Modern works can adopt that language without historical resolution or color-count limits.\n\n**What to look for**\n- Stepped shading builds form\n- Layered foregrounds and backgrounds\n- Saturated colors and nuanced sprite animation\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/16bit-pixel/):\n\n> Define a consistent logical resolution, sprite scale and tile system with richer but controlled stepped color ramps. Shape characters and objects with deliberate clusters, readable volumes and expressive frame animation. Use layered foregrounds and backgrounds, decorative tile variation and carefully separated parallax planes. UI and effects must share the world's pixel scale and palette families. Allow modern presentation without claiming exact historical hardware compliance, while preserving visible pixel craftsmanship. Avoid arbitrary high-resolution overlays, blended photographic textures, inconsistent outline density and visual noise that competes with the playable plane.\n\n\n## The game: Pangolin Pinball\n\n**Hook:** *A tall pinball table in a sunny 16-bit zone. The ball is a pangolin. It has opinions.*\n\nClover Canyon Zone: a vertical pinball table (taller than the screen; the camera follows the ball) set in a bright\n16-bit landscape with loops, rails, spring pads and checkerboard hills. The ball is Pango, a curled pangolin who\nuncurls to cheer when you hit a jackpot.\n\n**Why this style:** 16-bit pixel art is stepped shading, layered parallax and saturated colour with lively sprite\nanimation, and the era's speed. Pinball is pure kinetic flow; the table is a zone you light up.\n\n### Core loop\n- **Flippers:** touch the left half of the screen for the left flipper, the right half for the right (each a\n  `kit::ui::Zone`, both at once allowed). Desktop: Z / M or ←/→ or Shift keys. A **nudge**: swipe up with two\n  fingers (or Space) to shake the table (too many → tilt).\n- **Physics:** a custom fixed-step 2D ball physics with continuous collision against line segments and arcs (sub-step\n  the ball: it must never tunnel at high speed), flippers as rotating capsules that impart velocity, bumpers that\n  kick, slingshots, spinners, ramps that lift the ball to an upper layer (a second set of segments), loops.\n- **Missions:** light all five C-L-O-V-E-R targets → \"Canyon Run\" mode; shoot the left ramp 3 times → multiball (3\n  pangolins); hit the hollow log → the **mole bonus** minigame; a ring-collect mode where pickup rings spawn\n  along ramps. Jackpots for combos.\n- **Balls:** three balls; a ball saver for the first 5 seconds; extra balls from missions.\n\n### Hooks to come back\n- High score table (local, initials entered pixel-style), mission completion stars, a daily table (the seed shuffles\n  mission order and target values).\n\n### Look\n- Pixel art at a fixed logical width (e.g. `Fit::Width(200)` so the table is ~200 px wide on any phone, scrolling\n  vertically), stepped shading on every sprite and tile, bright saturated palette, layered parallax background\n  (sky, mountains, checker hills, palms) visible through the table's open areas. Lit inserts on the playfield blink.\n  The DMD-like score display is a strip at the top in a pixel font.\n- Juicy: score pops, flipper flashes, screen shake on bumpers (subtle), the pangolin's roll animation follows its\n  speed, sparkles on rails.\n\n### Sound\n- A bouncy 16-bit FM-ish loop (use the kit's FM layers), distinct sounds for bumpers, slingshots, spinners (pitch\n  rises with spin), ramps, a voice-like \"Jackpot!\" made of formant-filtered synth, a drain sound with a sad wah.\n\n### Test hooks\n- `state()`: \"title\", \"plunger\", \"playing\", \"drain\", \"over\" (and \"paused\").\n- `snapshot()`: score, ball, balls in play, missions lit, mode, ball positions and speeds.\n- `test_input`: `{\"flip\": \"left\"|\"right\"|\"both\"}` (a press for 150 ms), `{\"plunge\": 0.8}`, `{\"drain\": true}`.",
   "poster": "posters/17-pangolin-pinball.jpg",
   "thumb": "thumbs/17-pangolin-pinball.jpg",
   "clip": "clips/17-pangolin-pinball.mp4",
   "ready": true
  },
  {
   "no": "18",
   "slug": "18-cloud-porter",
   "title": "Cloud Porter",
   "tagline": "Fly the parcel there. Don't drop it. Don't swing it into the chimney.",
   "style": "Densely detailed pixel art",
   "style_slug": "detailed-pixel",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/detailed-pixel/",
   "traits": [
    "Dense clusters and material detail",
    "Rich value and hue changes",
    "Detail across scenery and characters"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 18 · Cloud Porter\n\n*Swatch 18 of The Swatch Book. Style: **Densely detailed pixel art** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nDense pixel clusters, complex color ramps and rich environmental detail bring raster imagery close to illustration. Pixel boundaries remain visible, while texture, lighting and layered detail take precedence over simple symbols.\n\n**What to look for**\n- Dense clusters and material detail\n- Rich value and hue changes\n- Detail across scenery and characters\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/detailed-pixel/):\n\n> Use carefully shaped pixel clusters, nuanced hue shifts and richer stepped ramps to describe cloth, foliage, stone and architecture. Keep a consistent pixel scale and concentrate intricate detail around focal assets, allowing quieter surfaces and distance to preserve hierarchy. Give characters expressive but readable frame animation and materials that match the environment's cluster language. Design UI icons at intentional resolutions rather than downscaling painted images. Effects may use controlled soft light, but must preserve the underlying pixel contours. Avoid random pixel noise, inconsistent sprite density and detail that vanishes or flickers at the target display size.\n\n\n## The game: Cloud Porter\n\n**Hook:** *Fly the parcel there. Don't drop it. Don't swing it into the chimney.*\n\nAbove the cloud sea floats the Dandelion Isles, dense little worlds of pixel detail: tiled roofs, washing lines,\nwindmills, market stalls, tiny gardens. Between them flies Tuck, a porter in a pedal-powered propeller craft, with\nwhatever needs delivering hanging below on a rope: a crate of eggs, a wedding cake, a sleepy grandmother in a\nbasket, a grand piano.\n\n**Why this style:** densely detailed pixel art is dense clusters, material detail and rich value/hue shifts\neverywhere. Delivery flight lets the player fly slowly past, around and into that detail, and stop to look at it.\n\n### Core loop\n- **Fly:** tap the left half to thrust up-left, the right half to thrust up-right (each tap a pedal burst; hold for\n  a steady climb). Gravity pulls down; the craft tilts with thrust. Desktop: ←/→ (or A/D), Space for both.\n- **The rope:** the cargo hangs on a rope (verlet chain) and swings like a pendulum, lagging behind. Fly smoothly or\n  it swings into things. Fragile cargo cracks when it hits something too hard (a damage meter per parcel).\n- **Deliver:** pick up at one porch (the parcel hooks on as you fly over), deliver to the target porch (an arrow at\n  the screen edge points the way), lower it gently onto the landing mat. Faster and gentler deliveries earn bigger\n  tips (coins).\n- **Weather and hazards:** gusts (visible as streaming wind lines), chimney smoke that pushes up, flocks of birds,\n  washing lines to avoid, a grumpy airship, nighttime with lanterns.\n- **Shifts:** a shift is ~4 minutes of deliveries with a clock; coins buy craft upgrades (a stronger rope, a\n  steadier propeller, a winch to shorten the rope) and cosmetic paint.\n\n### Hooks to come back\n- Best shift tips, a \"postcard\" album that fills with each island you've delivered to (drawn as a little pixel\n  postcard), a daily shift.\n\n### Look\n- Pixel art at roughly 240 px tall (`Fit::Height(240)`), hard edges, very dense hand-placed-looking detail generated\n  from rules: houses assembled from tile parts, gardens, signs, people who wave, birds on roofs, flowers swaying.\n  Rich value and hue shifts (warm sunlit tops, cool shadows), layered parallax clouds and distant islands, soft\n  pixel lighting at dusk. A small HUD in a pixel font.\n\n### Sound\n- A light, plucky loop (pizzicato-like synth, flute), pedal whirr pitch following thrust, rope creaks with tension,\n  a satisfying \"ding-dong\" on delivery, cargo clunks, the grandmother's tiny \"oh!\".\n\n### Test hooks\n- `state()`: \"title\", \"flying\", \"delivered\", \"shift_end\" (and \"paused\").\n- `snapshot()`: time left, coins, cargo kind and damage, craft position, target island.\n- `test_input`: `{\"thrust\": \"left\"|\"right\"|\"both\", \"ms\": 300}`, `{\"deliver\": true}`, `{\"time\": 5}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "19",
   "slug": "19-glint",
   "title": "Glint",
   "tagline": "Read where a phantom's light gathers, then swipe to meet the blow on the instant it lands.",
   "style": "Luminous high-contrast pixel art",
   "style_slug": "luminous-pixel",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/luminous-pixel/",
   "traits": [
    "Strong bright-dark contrast",
    "Luminous edges and local glow",
    "Color masses guide attention and depth"
   ],
   "theme": "#05040a",
   "summary": "Climb a drowned city's tower of thirty floors and duel the Glintborn, phantoms of old duelists made of neon pink and cyan. You never strike first: light gathers on the side a blow will come from, a diamond closes on its glyph, and you swipe toward pink light to meet it or away from cyan light to step aside, on the instant it lands. Luminous pixel art is light organising a dark picture, so here the light is the whole language of the fight: every tell, feint, hold and colour rule is something you read off a glow.",
   "how_to_play": [
    "Light gathers where a blow will fall, and a diamond closes on its glyph.",
    "Pink: swipe toward the light as the diamond closes. Cyan: swipe away from it.",
    "A glyph that gutters out is a feint: hold your blade. A stalled diamond is a held breath.",
    "Perfect parries ring and fill your focus. Full? Tap to cut through the phantom.",
    "Thirty floors. Each stair gives back a heart; each win, an ember."
   ],
   "controls": [
    {
     "action": "Parry or dodge",
     "touch": "swipe up, down, left or right (anywhere)",
     "keys": "arrow keys or WASD"
    },
    {
     "action": "Finisher (focus full)",
     "touch": "tap",
     "keys": "Space or Enter"
    },
    {
     "action": "Take an ember",
     "touch": "tap a card",
     "keys": "arrows, Enter"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Menus",
     "touch": "tap",
     "keys": "arrows, Enter"
    },
    {
     "action": "Mute",
     "touch": "sound button",
     "keys": "M"
    }
   ],
   "fonts": [
    "Bitcount Prop Single",
    "Bitcount Prop Double",
    "Handjet"
   ],
   "palette": [
    "#05040a",
    "#150e2a",
    "#0c2f37",
    "#ff3d8e",
    "#38eeff",
    "#ffb13b",
    "#fff7fb",
    "#c6a6ff"
   ],
   "features": [
    "A swipe parry duel read entirely from light: glyphs form pixel by pixel on the side of the blow and brighten, a diamond (pink, to meet) or a ring (cyan, to dodge) closes exactly at impact, and every side has its own rising note (up highest, down lowest)",
    "Thirty named Glintborn with their own silhouettes (hoods, brims, crowns, horns, halos, lantern heads, veils, wings, twins), weapons and habits: feints that gutter out, held breaths, tolling combos, mirrored twins, an Echo that answers your last pattern backwards",
    "A perfect parry is a bell in the chest: hit-stop, a burst of bloom, chromatic fringe, a four-point flare, a pitched bell with a low thump and a buzz; full focus lets you dash through the phantom and cut it in two",
    "Teaching by playing: a first-run duel teaches the four sides in slow time, then the glint and the finisher; each later idea (feint, combo, cyan, delay) arrives on its own floor with a slowed, explained first example",
    "A roguelite climb: one heart back per stair, a choice of two embers after every duel (wider glint, an extra heart, a ward, twin-edged finishers and more), best floor, best streak and a codex of every duelist you have bested, with their lore",
    "A daily gauntlet: five duelists from the day's seed, climbing in difficulty, with no embers",
    "The drowned city of Nethra: violet and teal tower masses with lit windows and signs under a low moon, sinking further below as you climb, rain and splashes, a wet balcony that mirrors the phantom, and the tower's stonework streaming past between floors",
    "A slow synth pad over a pulse that tightens with every phase, plus music-box ember chimes; everything synthesized"
   ],
   "rendering": "Everything is drawn into a pixel buffer about 240 px tall at one density: figures go into their own buffer as flat dark silhouettes whose alpha names a material, and a compose pass lights each silhouette's edges with its rim colours (pink from one side, cyan from the other, white on top, a fainter inner rim where an arm or a head crosses its own body), mirrors the phantom in the wet floor, dissolves figures and slides them apart along the finisher's cut; lights also go into a glow buffer that is bloomed, and one final pass scales the pixels up with nearest filtering and lays the glow over them with linear filtering (plus fringe, tint, flash and the diagonal wipe between screens).",
   "brief": "# 19 · Glint\n\n*Swatch 19 of The Swatch Book. Style: **Luminous high-contrast pixel art** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nSaturated bright colors, dark foundations and luminous effects organize the pixel image. This category concerns color and light; science fiction and cities are only possible subjects.\n\n**What to look for**\n- Strong bright-dark contrast\n- Luminous edges and local glow\n- Color masses guide attention and depth\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/luminous-pixel/):\n\n> Build readable pixel silhouettes and broad color masses on dark foundations, using a small family of saturated luminous accents. Give each light color a role in navigation, interaction or atmosphere. Keep pixel edges deliberate and use glow as a controlled secondary layer, not a replacement for form. Match characters, architecture, UI and particles to the same pixel density and chromatic hierarchy. Animate light pulses and impacts with concise timing and preserve hazard readability when effects overlap. The setting need not be futuristic. Avoid unrestricted neon colors, washed-out bloom, blurred base sprites and dark regions with no navigational information.\n\n\n## The game: Glint\n\n**Hook:** *Read the light. Turn the blade.*\n\nIn the drowned city of Nethra, light itself remembers how to fight. You are a wanderer with a blade of light,\nchallenging the Glintborn, phantoms of old duelists made of neon pink and cyan, one by one, up a tower of thirty\nfloors. You never attack first. You parry.\n\n**Why this style:** luminous high-contrast pixel art is strong bright–dark contrast, glowing edges, and colour masses\nthat guide attention. A duel where the only information is light (where it gathers, which way it flares) is that\nstyle turned into a reading test.\n\n### Core loop\n- **Telegraph:** a phantom winds up; its blade glows and a glyph forms at the side it will strike from (up, down,\n  left, right), brightening toward the moment of the strike. Later phantoms add feints (a glyph that fades out),\n  delays (a long hold), combos (three strikes in a rhythm), and colour rules (a pink strike must be parried, a cyan\n  one must be dodged with a swipe the opposite way).\n- **Parry:** swipe in the strike's direction at the moment it lands. Perfect timing (a tight window) makes a\n  **glint** (a white flash, a hit-stop, a bell-like ring) and fills the focus meter; a merely good parry blocks; a\n  miss costs a heart.\n- **Finisher:** when the focus meter is full, tap to strike back: a dashing cut across the screen that ends the duel\n  phase. Each duelist has 2–3 phases.\n- **The tower:** 30 duelists, each with a name, a silhouette and a pattern (the Lamplighter, the Twin Herons, the\n  Saint of Static…). Between floors, a short climb with a little light-puzzle-free breather and a choice of one of\n  two \"embers\" (perks: a wider perfect window, a heart, a double-strike finisher).\n- **Daily gauntlet:** five duelists from the seed in a row, no perks.\n\n### Hooks to come back\n- Highest floor, perfect-parry streaks, a codex of every duelist defeated (their silhouette and a line of lore).\n\n### Look\n- Pixel art at ~200 px tall, deep near-black backgrounds of a ruined city in dark teal and violet masses, with\n  glowing edges: neon pink, cyan, white. A post pass adds glow (bloom on the low-res image, upscaled with nearest\n  for the pixels and linear for the glow) and slight chromatic fringing on hits. Rain or drifting motes. Characters\n  are tall, slim silhouettes with glowing outlines and capes that flow.\n- Parry glints, slashes and sparks as bright pixel shapes; screen tint shifts on hits (scaled by `cx.flash()`).\n\n### Sound\n- A pulsing synthwave-adjacent pad with a slow beat that tightens as the duel goes on; each telegraph has a rising\n  tone whose pitch maps to its direction (learnable!), perfect parries ring like a struck bell, misses thud.\n\n### Test hooks\n- `state()`: \"title\", \"climb\", \"duel\", \"finisher\", \"choose\", \"over\" (and \"paused\").\n- `snapshot()`: floor, phase, hearts, focus, the current telegraph (direction, time to impact).\n- `test_input`: `{\"auto_parry\": \"perfect\"}` (parry the next strikes perfectly), `{\"floor\": 12}`.",
   "poster": "posters/19-glint.jpg",
   "thumb": "thumbs/19-glint.jpg",
   "clip": "clips/19-glint.mp4",
   "ready": true
  },
  {
   "no": "20",
   "slug": "20-lawn-order",
   "title": "Lawn Order",
   "tagline": "One mower, one lawn: swipe it straight and mow every blade, in sixty village gardens.",
   "style": "Top-down tile-based pixel art",
   "style_slug": "topdown-tile-pixel",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/topdown-tile-pixel/",
   "traits": [
    "Top-down floors and upright characters",
    "Occlusion and steps express height",
    "Layered tiles, facades and props"
   ],
   "theme": "#24502b",
   "summary": "Wilf has the oldest mower in the county, and once Bessie starts rolling she doesn't stop until she hits something. Each garden of Pottering Hills is a sliding puzzle on a 16-pixel tile grid: swipe to send her across the lawn, cut every blade of grass in the judge's par, and win the summer fair's rosettes. Top-down tile pixel art is floors seen from above and upright things seen from the front, sorted by where they stand; a slide-until-you-hit-something puzzle on a garden grid uses that grammar directly, and mown stripes are the most satisfying tile change there is.",
   "how_to_play": [
    "Swipe (or press an arrow key) to send Bessie rolling: she won't stop till she hits something.",
    "Every blade she rolls over is mown. Mow the whole lawn, round the beds, ponds and hedges.",
    "Match the judge's par for three stars. Undo and Start Again are one tap and free.",
    "Each street brings one new thing: gnomes that skid, molehills, slick clover, a sleeping dog, sprinklers, gates on a latch.",
    "Stuck? Wilf's hint shows a good next swipe (but caps the stars at two)."
   ],
   "controls": [
    {
     "action": "Roll the mower",
     "touch": "swipe anywhere",
     "keys": "arrow keys or WASD"
    },
    {
     "action": "Undo",
     "touch": "Undo button",
     "keys": "Z or Backspace"
    },
    {
     "action": "Start again",
     "touch": "Again button",
     "keys": "R"
    },
    {
     "action": "Hint",
     "touch": "Hint button",
     "keys": "H"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Menus",
     "touch": "tap",
     "keys": "arrows and Enter"
    },
    {
     "action": "Mute",
     "touch": "sound button",
     "keys": "M"
    }
   ],
   "fonts": [
    "Workbench",
    "a 7-pixel bitmap face drawn for the game (in the sprite atlas)"
   ],
   "palette": [
    "#46843a",
    "#8cc45b",
    "#5c9b40",
    "#c0372e",
    "#f6f0dc",
    "#4596bd",
    "#357540",
    "#f8d76a",
    "#1f1a17",
    "#14201a"
   ],
   "features": [
    "60 gardens on seven village streets, each street introducing one piece with a live demonstration card: gnomes that skid until they hit something, molehills that stop you dead, slick clover that bounces you back, a sleeping terrier who ambles after you, sprinklers that soak their neighbours two swipes in four, and gates swung by a latch stone",
    "Every garden is proven solvable and given its par by an A* solver (an admissible bound from row/column line cover, a maximum bipartite matching); gardens were grown offline from seeds by a generator that lays out beds, ponds, sheds and hedges, then places each stopper where it opens up the most unreachable lawn",
    "A daily garden and shareable garden codes, grown at runtime by the same generator and solver; the Featherstone Manor gardens are mirror-symmetric, like a formal garden",
    "Stars per garden, ribbon ranks across the village, and a scrolling map of Pottering Hills whose plots fill in with mown stripes",
    "Wilf's hint (the solver's next swipe from wherever you are), automatic detection of a wedged garden, free undo and restart",
    "An oblique top-down world on one 16-pixel grid: floors from above, upright things from the front, y-sorted so trees, hedges and the front fence hide what stands behind them; mown stripes revealed in the direction of travel; clippings, exhaust puffs, butterflies, bees, a mole who pops up",
    "Every house in the terrace, roof, back garden and washing line around a garden is painted procedurally per garden; the title is the game's name clipped out of hedge",
    "Synthesized sound: Bessie's two-stroke as scheduled pops whose rate and pitch rise with speed, a musette-accordion village polka, clippings, thuds, a ceramic knock for gnomes, a terrier's woof and grumble"
   ],
   "rendering": "One pixel buffer at a whole-number scale (195x422 on a phone, 480x300 on a desktop): a CPU-painted sprite atlas and a per-garden village backdrop, then the garden drawn as ground tiles plus y-sorted upright sprites with the kit's 2D batch, and the LowRes blit puts it on screen with nearest filtering.",
   "brief": "# 20 · Lawn Order\n\n*Swatch 20 of The Swatch Book. Style: **Top-down tile-based pixel art** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nTop-down floors, visible elevations and upright sprites combine into a 2D space where paths and height remain readable. Spatial organization is the focus; pixel density, lighting and subject matter still vary.\n\n**What to look for**\n- Top-down floors and upright characters\n- Occlusion and steps express height\n- Layered tiles, facades and props\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/topdown-tile-pixel/):\n\n> Establish a consistent oblique top-down spatial grammar: visible floor planes, readable front-facing elevations and upright characters. Lock tile dimensions, character scale, wall thickness, occlusion rules and height cues across every environment and prop. Use steps, shadows and overlap to communicate traversable surfaces and elevation without contradictory perspectives. Keep pixel density and color ramps consistent in the world, UI, icons and effects. Animate characters clearly within the chosen grid while allowing the game's movement rules to remain unchanged. Avoid mixing incompatible viewing angles, ambiguous collision boundaries and using the farming or fantasy setting as a substitute for visual rules.\n\n\n## The game: Lawn Order\n\n**Hook:** *One mower. One lawn. Swipe it straight, mow it all.*\n\nThe Pottering Hills summer fair has a lawn competition, and you have the oldest mower in the county: once it starts\nrolling in a direction, it doesn't stop until it hits something. Each garden is a puzzle: mow every patch of grass\nby sliding across the lawn, around flowerbeds, gnomes, ponds and sleeping dogs.\n\n**Why this style:** top-down tile-based pixel art is top-down floors, upright sprites, occlusion that shows height,\nlayered tiles and facades. A tile-sliding puzzle on a garden grid uses that grammar directly, and mowed stripes\nare the most satisfying top-down tile change there is.\n\n### Core loop\n- **Swipe** up/down/left/right: the mower rolls in that direction until it hits an obstacle (a flowerbed, a gnome, a\n  fence, a tree, the garden edge). Every grass tile it crosses becomes mowed (stripes in the direction travelled).\n- **Mow every tile** to finish the garden. A **par** (the fewest moves, known from the solver) earns three stars;\n  more moves earn fewer. Undo (one tap) and restart are free.\n- **New pieces over the gardens:** sprinklers that turn on every few moves and wet tiles (wet grass can't be mowed\n  until it dries in 2 moves), a sleeping dog that wakes and moves one tile when you pass next to it, gnomes you can\n  push one tile (they slide like the mower), ice-like clover patches that you skid over, molehills that stop you,\n  a garden hose that can be cut, gates that switch.\n- **Gardens:** 60 hand-tuned-feeling gardens generated from seeds with a solver (BFS/IDA*) that guarantees each is\n  solvable and computes its par; difficulty curve across village streets (the vicar's lawn, the twins' garden, the\n  manor maze).\n\n### Hooks to come back\n- Stars per garden, a village map that fills with mowed gardens, a daily garden, the fair's ribbon ranks.\n\n### Look\n- Pixel art top-down at ~16 px tiles, `Fit` chosen so a garden of ~8×10 tiles fills a portrait phone, hard edges.\n  Layered tiles: grass (long, unmown, with flowers) → mowed stripes (light/dark by direction), stone paths, fence\n  facades seen from above with their front face showing height, hedges, ponds with lilies, houses' roofs at the\n  edges. Upright sprites (gnomes, dogs, sprinklers, the mower and its old gardener walking behind it) with y-sorted\n  occlusion. Clippings fly as the mower runs.\n\n### Sound\n- A cheerful village loop (accordion-like synth, light percussion), the mower's two-stroke putter (a voice whose\n  pitch rises with speed), clunks on stops, a happy jingle when the last tile is mowed, a dog's sleepy grumble.\n\n### Test hooks\n- `state()`: \"title\", \"map\", \"garden\", \"solved\" (and \"paused\").\n- `snapshot()`: garden, moves, par, tiles left, mower position, solved.\n- `test_input`: `{\"move\": \"up\"|\"down\"|\"left\"|\"right\"}`, `{\"solve\": true}` (play the solver's solution),\n  `{\"garden\": 12}`.",
   "poster": "posters/20-lawn-order.jpg",
   "thumb": "thumbs/20-lawn-order.jpg",
   "clip": "clips/20-lawn-order.mp4",
   "ready": true
  },
  {
   "no": "21",
   "slug": "21-the-twelfth-door",
   "title": "The Twelfth Door",
   "tagline": "Twelve doors. One candle. Find the way out of the house before it goes out.",
   "style": "Coarse minimal pixel art",
   "style_slug": "coarse-pixel",
   "family": "pixel",
   "style_page": "https://gameartstyle.loopyhop.com/styles/coarse-pixel/",
   "traits": [
    "Few pixels define characters",
    "Deliberately omitted texture and facial detail",
    "Silhouette, empty space and key color masses"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 21 · The Twelfth Door\n\n*Swatch 21 of The Swatch Book. Style: **Coarse minimal pixel art** (Pixel & retro).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nCharacters and objects are reduced to few pixels, omitting faces and fine textures so silhouettes, empty space and key color masses carry expression. It emphasizes deliberate reduction rather than detailed reconstruction of particular hardware.\n\n**What to look for**\n- Few pixels define characters\n- Deliberately omitted texture and facial detail\n- Silhouette, empty space and key color masses\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/coarse-pixel/):\n\n> Reduce characters and objects to a small number of deliberate pixels. Omit fine facial features and surface texture; convey identity through silhouette, pose, spacing and a few meaningful color masses. Lock the logical resolution and shared pixel scale for world assets, icons, UI and effects. Use carefully placed pools of light and simple environmental shapes to carry mood without filling the image with detail. Animate economical, recognizable poses and prioritize legibility at actual size. Avoid noisy dithering, tiny decorative shading, smooth high-resolution overlays and unnecessary detail added merely to make assets look more finished.\n\n\n## The game: The Twelfth Door\n\n**Hook:** *Twelve doors. One candle. Find the way out of the house before it goes out.*\n\nYou wake in the hallway of Hollowmere House with a lit candle and a note: \"Twelve doors between you and the morning.\"\nEach door is locked by a different contraption. Each room hides the clues to the next lock. The house is drawn in\nvery few, very large pixels, so you must look carefully, and the candle is burning down.\n\n**Why this style:** coarse minimal pixel art is few pixels per character, no faces or texture, silhouettes, empty\nspace and key colours. Ambiguity is its power: in a coarse picture, every pixel might be a clue. An escape game asks\nyou to read every pixel.\n\n### Core loop\n- **Rooms:** a run visits 12 rooms in a seeded order (the library, the nursery, the greenhouse, the music room,\n  the kitchen, the study, the chapel, the attic…), each a single screen of coarse pixel art (about 64×96 logical\n  pixels in portrait).\n- **Look and examine:** tap objects to examine them: a close-up view appears, still coarse but bigger (e.g. a clock\n  face at 32×32 pixels), with a line of text from the protagonist's inner voice. Some objects can be taken (a key, a\n  fuse, a lens) into a small inventory.\n- **Locks** (procedurally parameterised from the seed so every run's answers differ): a 4-digit combination whose\n  digits are hidden around the room (the clock's hands, the count of candles, a date on a portrait); a sequence of\n  portraits to press in the order of their ages; a music box where you play notes shown on a sheet; colour tiles\n  matching a stained-glass window; a sliding bookshelf whose books' heights spell a shape; a scale balanced with\n  found weights.\n- **The candle:** a run has 10 minutes of candle. Wrong answers cost time; hints (a candle flicker that highlights\n  the right object) cost more.\n- At the twelfth door: dawn, and the house's little secret revealed (a short pixel cutscene).\n\n### Hooks to come back\n- Best time, doors opened, a daily house (everyone gets the same answers that day), a ledger of every lock solved.\n\n### Look\n- Truly coarse pixels: 1 logical pixel is big; silhouettes and empty space do the work; a dark palette of ~6 colours\n  plus one key colour (candle light amber) that marks warmth and important things. Candle light falls off in\n  dithered rings around the light source and flickers. No faces: characters are silhouettes. Text in a clean pixel\n  font at native size or a small readable serif for the inner voice.\n- Transitions between rooms: a door opening as a few large pixel frames, then the new room fading in in dither\n  steps.\n\n### Sound\n- A creaky, quiet house: ticking clocks, wind under doors, the candle's faint hiss, footsteps on boards between\n  rooms. A sparse music-box melody that slows as the candle shortens; a satisfying mechanical clunk on solving a\n  lock; a low chord on a wrong answer.\n\n### Test hooks\n- `state()`: \"title\", \"room\", \"examine\", \"lock\", \"door\", \"dawn\", \"over\" (and \"paused\").\n- `snapshot()`: room index, doors opened, candle time, inventory, the current lock's answer (for tests).\n- `test_input`: `{\"solve\": true}` (open the current lock), `{\"room\": 6}`, `{\"candle\": 5}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "22",
   "slug": "22-skytether",
   "title": "Skytether",
   "tagline": "Loop the floating islands to tie them to the sky before the storm swallows one.",
   "style": "Faceted low-poly",
   "style_slug": "faceted-low-poly",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/faceted-low-poly/",
   "traits": [
    "Clearly visible geometric facets",
    "Sparse textures and broad color fields",
    "Depth built from silhouettes and layers"
   ],
   "theme": "#2a2340",
   "summary": "You are a faceted bird of light above a pastel sea of cloud. Fly a full loop round a floating island (the game counts the winding angle of your path round its centre) and a folded ribbon of light follows you, seals into a ring as the loop closes and cinches round the island's cliff; its shrine lights, a pillar of light climbs to a star, and when every island of a constellation is tied the stars are joined across the sky. A storm front sweeps the map meanwhile, so the order you tie them in matters. Faceted low-poly is about planes catching the light, broad colour fields and depth built from layered silhouettes, and flight round floating rock is the style at its most graceful.",
   "how_to_play": [
    "Drag anywhere to steer: left and right turn you, up climbs, down sinks.",
    "Hold your finger still to dive (faster, lower); let go or tap to flap and climb.",
    "Fly a full loop round an island to tie it: follow the dashed ring, and close the loop.",
    "Tight, fast loops and loops through a shrine arch score more; tie islands quickly to chain.",
    "Tie every island before the storm front swallows one."
   ],
   "controls": [
    {
     "action": "Steer (turn, climb, sink)",
     "touch": "drag anywhere (a floating stick from where the finger lands)",
     "keys": "A D or ← → to turn, W S or ↑ ↓ to climb and sink, or drag with the mouse"
    },
    {
     "action": "Dive",
     "touch": "hold the finger still",
     "keys": "hold Shift (or X)"
    },
    {
     "action": "Flap and climb",
     "touch": "let go after a dive, or tap",
     "keys": "Space, or let go of Shift"
    },
    {
     "action": "Pick a constellation",
     "touch": "tap it on the sky map, then Fly",
     "keys": "arrow keys, Enter"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "Sound button (title, pause, settings)",
     "keys": "M"
    }
   ],
   "fonts": [
    "Marcellus",
    "Jost"
   ],
   "palette": [
    "#2a2340",
    "#fff6e8",
    "#ffcf7a",
    "#f47a6c",
    "#9fe0c0",
    "#b7ace6",
    "#a597d4",
    "#ffd3b6",
    "#eca88d",
    "#6c64ad",
    "#f8b29a",
    "#1d2350"
   ],
   "features": [
    "Loop detection by winding angle: every island keeps the signed angle your path has swept round its centre while you are near it (with a short grace if you stray), so a loop of any shape counts, a loop round two islands ties both (a double knot) and a flyby that turns back cancels itself.",
    "The ribbon: a folded strip of light in the island's own frame (it moves with drifting islands), its facets alternating in shade; on sealing it relaxes into a ring, cinches round the cliff lip with an overshoot, lights the shrine's lantern, sends a pillar of light up to the island's star and a shockwave across the sea.",
    "Flight made for a thumb: a floating stick from wherever the finger lands, holding still to dive and letting go to flap, a soft auto-level that holds your altitude, rock that you slide round instead of crashing into, a sea you skim and a sky that turns you home at its edge; on desktop, keys or a mouse drag.",
    "A camera that turns toward the island you are looping (a lock-on that frames bird, ribbon and island together), holds the island in view while its ribbon cinches, banks with the bird and widens in a dive.",
    "24 constellations in four sky moods (dawn, day, dusk, night), one new idea every few skies: shrine arches, drifting islands, updrafts, storm cells whose lightning breaks a loop in progress, dancing pairs that orbit each other, wind rivers, crystal birds that join your flight for speed, and turning islands.",
    "The storm is timed against a real flight: at each start the autopilot flies a copy of the sky with the storm parked, and the storm is placed so it reaches each island only after a level's slack times the moment the autopilot tied it (3x on the first sky, 1.65x on the last); the autopilot's time sets the par.",
    "Three stars a sky (all tied, under par, fine loops), a sky map where finished constellations shine in a night chart, a daily sky made from the day's seed with its own best, a first run that teaches by playing in four steps, pause, settings and a shared mute.",
    "Sound synthesized live: airy pads and a soft marimba in D major pentatonic, wind that rushes with speed and dive, a chime that climbs the scale as a loop goes round, a bright arpeggio when it seals, a warm rolled chord when a constellation locks, thunder and a low heartbeat as the storm closes in."
   ],
   "rendering": "One MSAA-4 Rgba16Float pass draws flat-normal faceted meshes (islands, shrines, arches, clouds, far floating mountains, the bird) lit by a warm key and a cool shadow side, a faceted cloud sea displaced in the vertex shader with facet normals from screen derivatives and island shadows, a direction-space sky, alpha-blended ribbons, rain and haze and additive light (ribbon cores, stars, lightning, sparks), all under exponential fog in the sky's own colour and a storm veil computed where each view ray crosses the front; then the kit's bloom chain and one grade pass (soft shoulder, flashes, storm drain, vignette, dither).",
   "brief": "# 22 · Skytether\n\n*Swatch 22 of The Swatch Book. Style: **Faceted low-poly** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nVisible polygonal facets and simplified meshes shape the world, with broad color fields replacing dense textures. The emphasis is on volume, silhouette and color grouping, rather than polygon count alone.\n\n**What to look for**\n- Clearly visible geometric facets\n- Sparse textures and broad color fields\n- Depth built from silhouettes and layers\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/faceted-low-poly/):\n\n> Use simplified meshes with clearly visible, intentionally shaped polygonal planes. Let broad color fields, silhouette and warm/cool plane relationships carry material and volume, with sparse texture detail. Build environment depth through overlapping landforms and value separation. Characters, props and interactive geometry should share the same facet scale and simplification logic. Give UI icons geometric silhouettes and use restrained faceted particles or planar effects. Animate with clean arcs that preserve volume. Avoid arbitrary polygon reduction, indiscriminate triangulation, dense photographic textures and shiny smooth shading that conceals the facets.\n\n\n## The game: Skytether\n\n**Hook:** *Circle the islands. Tie the sky together before the storm.*\n\nAbove an endless pastel sea of cloud drift islands of faceted rock, each with a little shrine. You are a faceted\nbird of light. Fly a loop around an island and you tether it with a ribbon of light; tether all the islands of a\nconstellation and they lock into place, the shrines light up, and the constellation appears in the sky. A storm\nfront is coming from the horizon.\n\n**Why this style:** faceted low-poly is visible facets, sparse textures, broad colour fields and depth through\nsilhouettes and layers. Flight through a sky of faceted islands, with the light catching each facet as you bank, is\nthe style at its most graceful.\n\n### Core loop\n- **Fly:** the bird always moves forward. Drag (anywhere, relative to where the finger landed) to steer left/right\n  and up/down; **hold still to dive** (speed up, lose height), **release to climb** (a flap). Desktop: WASD/arrows to\n  steer, Space to flap. A soft auto-level keeps it calm.\n- **Tether:** fly a full loop around an island (the game tracks the winding angle of your path around its centre):\n  a ribbon of light follows you during the loop and seals when the loop closes. A tighter, faster loop is worth more\n  (style points), and passing through the island's shrine arch while looping is a bonus.\n- **Constellations:** each level is a constellation of 4–7 islands; tether them all before the storm front (a dark\n  wall of cloud with lightning, sweeping across the map) swallows them. Islands drift slowly, some orbit each other,\n  some spin.\n- **Hazards and helpers:** updrafts (columns of rising sparkles: climb for free), storm cells (lightning that breaks\n  an unfinished loop), wind rivers that carry you, crystal birds that fly with you for a speed boost.\n- 24 constellations, with a sky map where finished ones shine.\n\n### Hooks to come back\n- Stars per constellation (time, loop quality), the night sky filling with your constellations, a daily sky.\n\n### Look\n- Flat-shaded faceted meshes (use `MeshData::faceted()` on displaced spheres and extruded shapes), sparse colour\n  fields (peach, mint, lavender, cream) with lighting that varies per facet, atmospheric fog toward the horizon in\n  the sky colour, silhouettes stacked in depth. The bird is a few large facets with a light trail; ribbons are soft\n  glowing strips. The cloud sea below as a big faceted plane slowly undulating.\n- Gentle camera: behind and above the bird, banking with it; FOV widens a touch when diving.\n\n### Sound\n- Airy pads and a soft marimba-like melody, wind rushing with speed, a rising chime as a loop closes (the pitch\n  climbs through the loop), a big warm chord when a constellation locks; thunder from the storm front.\n\n### Test hooks\n- `state()`: \"title\", \"sky_map\", \"flying\", \"constellation_done\", \"storm_caught\" (and \"paused\").\n- `snapshot()`: level, islands tethered / total, storm distance, bird position and speed, the current loop angle.\n- `test_input`: `{\"tether\": i}` (complete island i), `{\"steer\": [x, y], \"ms\": 500}`, `{\"level\": 9}`.",
   "poster": "posters/22-skytether.jpg",
   "thumb": "thumbs/22-skytether.jpg",
   "clip": "clips/22-skytether.mp4",
   "ready": true
  },
  {
   "no": "23",
   "slug": "23-squish-and-co",
   "title": "Squish & Co.",
   "tagline": "Pull, pinch and poke a lump of clay into whatever the strange clay customers ask for.",
   "style": "Sculpted clay & stop-motion",
   "style_slug": "sculpted-clay",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/sculpted-clay/",
   "traits": [
    "Tactile sculpted surfaces",
    "Irregular handmade contours",
    "Stop-motion or frame-by-frame character"
   ],
   "theme": "#2b1b16",
   "summary": "Squish & Co. is a clay shop at the end of a plasticine street. Customers made of clay (a two-headed postman, a melting moon, a man tied in a knot) come in one at a time and hold up a card, and you shape a real deformable lump on a turntable with your fingers: pull, press, poke, pinch, twist, roll and slap it, knead colours into it, and serve it before their patience runs out. The piece is judged fairly: its silhouette is rendered from the card's angle, scaled to the picture and laid over it. Sculpting is the style's own verb: every touch leaves a fingerprint that stretches with the clay, and the shop and its cast move in held stop-motion frames while the lump in your hands answers every frame.",
   "how_to_play": [
    "A customer holds up a card: shape your lump to match its outline (the chalk line drawn on your clay). Size doesn't matter, shape does.",
    "Drag from the clay to pull or push it, hold a finger still to press a thumb in, tap to poke (tap the edge for a bite), flick across it to roll it longer, taller or flatter.",
    "Two fingers pinch, spread and twist a waist (the mouse wheel on a desktop). Drag beside the clay to turn the turntable; the eye button looks from above.",
    "Tap a tub to knead its colour in, or drag a dab onto one spot. Serve before their patience runs out: likeness earns stars, coins and tips.",
    "Six customers make a day. Coins buy a wire cutter, a rolling pin and a star stamp; each day's best piece goes on the shelf."
   ],
   "controls": [
    {
     "action": "Pull or push the clay",
     "touch": "drag from the clay",
     "keys": "drag from the clay with the mouse"
    },
    {
     "action": "Press a thumb in",
     "touch": "hold a finger still on the clay",
     "keys": "hold the button still on the clay"
    },
    {
     "action": "Poke (a bite at the edge)",
     "touch": "tap the clay (or its edge)",
     "keys": "click the clay (or its edge)"
    },
    {
     "action": "Pinch, spread, twist",
     "touch": "two fingers: pinch, spread, turn",
     "keys": "mouse wheel over the spot"
    },
    {
     "action": "Roll longer / taller / flatter",
     "touch": "flick across the clay: sideways / up / down",
     "keys": "R / W or Up / S or Down"
    },
    {
     "action": "Turn the turntable",
     "touch": "drag beside the clay",
     "keys": "A D or Left Right, or drag beside it"
    },
    {
     "action": "Knead a colour in / dab it on",
     "touch": "tap a tub / drag from a tub onto the clay",
     "keys": "1 to 7 / drag from a tub"
    },
    {
     "action": "Look from above",
     "touch": "eye button",
     "keys": "V"
    },
    {
     "action": "Undo / back to a ball",
     "touch": "undo / ball buttons",
     "keys": "Z / X"
    },
    {
     "action": "Tools (once bought)",
     "touch": "tool buttons, left",
     "keys": "Tab"
    },
    {
     "action": "Serve (skip a speech)",
     "touch": "Serve (tap the scene)",
     "keys": "Space or Enter"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "sound button (title, pause, settings)",
     "keys": "M"
    }
   ],
   "fonts": [
    "Gluten",
    "Grandstander",
    "Gochi Hand"
   ],
   "palette": [
    "#2b1b16",
    "#3f7d74",
    "#e7a83a",
    "#d8432f",
    "#f7e8cf",
    "#8a5636",
    "#6e3b4e",
    "#c8693f"
   ],
   "features": [
    "A real lump of clay: a 10,242-vertex icosphere sculpted by brushes in the turntable's frame (a grab that follows the finger with a fingertip's core, a flat-bottomed thumb press whose rim bulges, a fingertip poke or an edge bite, a squeeze or spread and a twist around a band under two fingers, volume-keeping rolls, stretches and slaps, a wire that slices the smaller side flat, a rolling pin), each followed by tangential relaxation so stretched clay keeps an even mesh and blunt, soft edges",
    "Fingerprints that live in the clay: every touch writes whorl coordinates into the vertices it presses, so a print stretches when that clay is pulled; the shader bump-maps the ridges with screen derivatives and fades them below a pixel. Fresh lumps carry faint thumbprints from being rolled",
    "Colour that marbles: tubs knead a colour in as warped swirls over part of the lump, dabs press a blob on one spot, and every gesture smears neighbours in streaks, so colours draw out along a pull and mix as you work",
    "Fair judging: the lump's silhouette (with its front-most colour) is rasterized on the CPU from the card's view (front, a quarter turn for side views, or from above), scaled to the card picture's area and slid onto it with a small search, then scored by intersection over union against how well a fresh ball already matches, plus colour inside the overlap; a live likeness meter and a chalk outline on the clay show where it stands",
    "Nine regulars built from clay balls, sausages, pillowy boxes, pucks and rings (Gran Pebble on her stool, Dobbs & Dobbs, Lofty Knott, Mrs. Moon, Captain Brine, Mr. Drizzle, Vulcan Jr., Dame Clanger, Bun), with replacement mouths, blinks and brows, posed on held frames: walking in through the door with the bell, talking in clay-voiced babble, getting impatient, cheering or wilting, and carrying your piece out",
    "Thirty-seven orders in three tiers (one big move; several moves; two colours, two views or a view from above), a first day that teaches pull, roll, pinch and colour-and-poke one at a time on real orders, patience that shortens day by day, tips for speed, streaks and stamped flourishes, and customers who snatch the piece as it is when their patience runs out",
    "A day of six customers with the sky going from afternoon to night through the window (the sun sets, the melting moon rises, the street's windows light up), the day's takings, a best day, a daily queue with its own best, a supply catalogue (wire cutter, rolling pin, star stamp) and a shelf in the shop where each day's best piece stands as a little clay model",
    "All sound synthesized: wet squish that opens with the finger's speed and a rubbery note that rises as you stretch, a creaky turntable, thumb presses, pokes, rolls, slaps, a wire's zing, the shop bell, footsteps, coins, babble from formant syllables in each regular's voice, and a bassoon-and-pizzicato waltz with a toy celesta"
   ],
   "rendering": "A 2048 shadow map from the key lamp, then one 4x MSAA pass in which the lump (re-uploaded only when touched) and every prop and character (instances of one offset UV sphere that the vertex shader turns into balls, sausages, pillowy boxes and pucks, with per-instance handmade wobble and, for the cast, a held-frame boil) share one clay shader: wrap lighting with a warm, saturated terminator, a low waxy sheen, concavity occlusion computed from the mesh, and fingerprint ridges bump-mapped from per-vertex print coordinates; then a grade pass with a miniature's soft focus at the top, a vignette, a 12 fps exposure flicker and re-shot grain.",
   "brief": "# 23 · Squish & Co.\n\n*Swatch 23 of The Swatch Book. Style: **Sculpted clay & stop-motion** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nTactile sculpting, blunt edges and irregular surfaces retain a handmade character; some games photograph physical models. This grouping describes their visible sculptural and stop-motion qualities, not a shared production pipeline.\n\n**What to look for**\n- Tactile sculpted surfaces\n- Irregular handmade contours\n- Stop-motion or frame-by-frame character\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/sculpted-clay/):\n\n> Give characters, props and environments sculpted volumes, blunt edges and subtle handmade irregularities. Establish a consistent material scale for fingerprints, seams and surface dents; use these selectively so the scene remains readable. Choose lighting that reveals tactile forms and a coherent miniature sense of space. Decide and document an intentional stepped-motion cadence or stop-motion-like pose system, without claiming that assets were physically photographed. Adapt UI and icons through sculpted shapes with crisp labels. Avoid slick plastic surfaces, exaggerated procedural fingerprints on every object, inconsistent model scale and accidental animation judder.\n\n\n## The game: Squish & Co.\n\n**Hook:** *The customers are clay. The orders are strange. Squish fast.*\n\nSquish & Co. is a clay shop at the end of a surreal street where everything is made of plasticine: the walls, the\nsky, the customers (a two-headed postman, a melting moon, a tall knot of a man who wants a hat). Each customer\nholds up a picture of what they want. You have a lump of clay and two thumbs.\n\n**Why this style:** sculpted clay and stop-motion is tactile sculpted surfaces, irregular handmade contours and the\nheld-frame feel of stop-motion. Sculpting the clay yourself, with fingerprints left in it, makes the style the verb.\n\n### Core loop\n- **The lump:** a soft 3D clay blob on a turntable (a deformable mesh). Gestures shape it:\n  - **Pull** (drag outward from the lump): stretches the clay toward your finger;\n  - **Push** (drag inward / press): dents and flattens;\n  - **Pinch** (two fingers): narrows a waist;\n  - **Roll** (a quick horizontal swipe): rolls it longer and thinner;\n  - **Spin** (swipe on the turntable) to work all sides; **poke** (tap): a hole;\n  - colour: a few tubs of clay to blend in (dab a colour, it marbles in as you work).\n- **The order:** a silhouette (and colour) on the customer's card: \"a vase\", \"a fish with two tails\", \"a hat for a\n  very tall head\", \"a moon with a bite out of it\". Press **Serve** when you're happy (or when the customer's patience\n  runs out). The score compares your shape's silhouette (rendered offscreen from the card's angle) with the target\n  (intersection over union) plus colour.\n- **A day** is ~10 customers; speed combos for quick good matches; regulars come back with harder orders. Some\n  orders come with a twist (\"make it smaller than last time\").\n- **The shop grows**: earnings buy new tools (a wire loop cutter, a texture stamp, a little rolling pin) that add\n  gestures.\n\n### Hooks to come back\n- Best day, a **shelf of your best pieces** (kept as snapshots of the mesh), regular customers' stories that unfold\n  across days, a daily customer line-up.\n\n### Look\n- Real 3D clay: a smooth-ish mesh with **fingerprint normals** (a detail normal map of whorls where you touched), a\n  soft subsurface-like warm shading, slight colour marbling, a handmade irregularity (vertex noise). The shop and the\n  customers are clay too: chunky, imperfect, wonky.\n- **Stop-motion**: customers and the world animate at 12 fps with held frames and tiny \"boil\" (every hold, a\n  slightly different pose and lighting flicker, as if re-shot), while the lump you sculpt responds smoothly at full\n  rate (your hands are in the real world). A gentle animator's light flicker and film grain over everything.\n\n### Sound\n- Wet, squishy foley (filtered noise with pitch on pulls), a creaky turntable, a bell over the door, customers'\n  murmurs as clay-voiced babble (formant synth), a whimsical loop (bassoon-like synth, pizzicato).\n\n### Test hooks\n- `state()`: \"title\", \"shop\", \"order\", \"sculpting\", \"judging\", \"day_end\" (and \"paused\").\n- `snapshot()`: day, customer, the order, the last match score, coins, patience.\n- `test_input`: `{\"shape\": \"target\"}` (morph the lump to the target, for a high score), `{\"serve\": true}`,\n  `{\"day\": 3}`.",
   "poster": "posters/23-squish-and-co.jpg",
   "thumb": "thumbs/23-squish-and-co.jpg",
   "clip": "clips/23-squish-and-co.mp4",
   "ready": true
  },
  {
   "no": "24",
   "slug": "24-topple",
   "title": "Topple",
   "tagline": "Stick charges on Blockton's oddest buildings and drop each one exactly where they asked.",
   "style": "Voxel worlds",
   "style_slug": "voxel-worlds",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/voxel-worlds/",
   "traits": [
    "Cubic units and stepped silhouettes",
    "Block structure continues into small details",
    "Volumetric lighting over block surfaces"
   ],
   "theme": "#2a2622",
   "summary": "Blockton's demolition crew takes the jobs nobody else will: lay a crooked clock tower across the canal without touching the bakery, drop only the middle span of a bridge, knock one tower into another, pour out a giant teapot. Every building is made of quarter-metre blocks; you walk round it, stick a few charges on its walls, hit the plunger, and the blast, the storeys that give way, the chunks that tumble and break and the rubble that settles are all blocks, so you read the collapse the same way you planned it. Voxel worlds are blocks down to the smallest detail and coherent block interiors when things break, and a game about exactly where a building of blocks will fall is that idea played straight.",
   "how_to_play": [
    "Drag to walk round the job, pinch to look closer. The yellow tape is where it must land; teal tags are what must not be touched.",
    "Tap a wall to stick a charge on it (pick small or large in the tray). Orange blocks are what it will take. Tap a charge again to take it back.",
    "Blow out most of one side of a storey and the building tips that way; blow every side and it comes straight down.",
    "Hit the plunger. Stars for landing it in the zone, lower than the height line, with no knocks on the neighbours. Spare charges score extra.",
    "Thirty jobs in three districts, a daily order and the Yard, where anything goes."
   ],
   "controls": [
    {
     "action": "Walk round the job",
     "touch": "drag",
     "keys": "arrow keys or W A S D, or drag with the mouse"
    },
    {
     "action": "Look closer",
     "touch": "pinch",
     "keys": "+ and -, or the mouse wheel"
    },
    {
     "action": "Stick a charge (or take one back)",
     "touch": "tap a wall (or the charge)",
     "keys": "click a wall (the hovered face shows what it will take)"
    },
    {
     "action": "Pick small or large",
     "touch": "the tray, bottom left",
     "keys": "1 and 2"
    },
    {
     "action": "Take back the last charge",
     "touch": "undo button",
     "keys": "Z or Backspace"
    },
    {
     "action": "Blow it",
     "touch": "the plunger, bottom right",
     "keys": "Space or Enter"
    },
    {
     "action": "Skip the collapse / retry",
     "touch": "Skip / Retry",
     "keys": "Space / R"
    },
    {
     "action": "Work order",
     "touch": "clipboard button",
     "keys": "C"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Menus",
     "touch": "tap",
     "keys": "arrow keys, Enter"
    },
    {
     "action": "Mute",
     "touch": "Sound button (title, pause, settings)",
     "keys": "M"
    }
   ],
   "fonts": [
    "Big Shoulders Stencil Display",
    "Barlow Semi Condensed",
    "Courier Prime"
   ],
   "palette": [
    "#2a2622",
    "#f2b632",
    "#efe6d2",
    "#221d19",
    "#c8433a",
    "#b4553b",
    "#3f8f8c",
    "#f6c27a"
   ],
   "features": [
    "A voxel demolition simulation: a 72 x 108 x 72 grid of quarter-metre blocks per lot; charges remove a sphere of blocks; a storey or a slender span that loses a third of its cross-section gives way (crushing all but a hinge on the far side, so what stands above tips toward the blast); a centre-of-mass check over the remaining footing of each storey near the blast; a flood fill releases everything no longer joined to the ground as rapier3d rigid bodies with greedy-merged box colliders",
    "Breakage that stays in blocks: chunks split again along their weakest layer when they land hard (deeper the harder they hit; tall pieces coming straight down telescope storey by storey), slender towers struck by falling pieces topple as dominoes, small clusters become loose blocks with their own cheap physics that settle and lie flat, and neighbours lose blocks where they are knocked",
    "Thirty hand-built jobs in three districts (Canal Ward, Mill Row, Fairground Heights): pigeon loft, crooked clock, chimney between two houses, water tank, half a bridge, lock hut, domino towers, church tower, pancake flats, lighthouse, mill stacks, gasholder, tower crane, silos, a long bridge, the tallest stack in town, a giant teapot, helter-skelter, windmill, a boot-shaped house, a coaster loop, rocket ride, top-hat shop, big wheel, clown arch and a stacked folly; every job verified solvable by a scripted bot, and tolerant of being off by a block",
    "Scoring by the block: share of the building inside the zone, the heap's height against the job's line, knocks on protected neighbours (and Marmalade the cat, who bolts if anything lands near her), bonuses for spare charges, a clean fold, a low pile and a splashdown; three stars, best scores, district unlocks at 12 stars, a daily order with its own code and best",
    "Slow-motion blast (the physics never changes step size; slow motion runs fewer steps per frame and interpolates), replays of every take, and the best take of each job kept to watch again from the job board",
    "A first-run lesson taught by playing (drag, pinch, place, the tray, the plunger) with Maud the foreman, her tip after a miss, and a ghost solution after two",
    "Blockton round the lot: terraces with stepped gables and lit windows, mill chimneys and canals drawn as a few thousand triangles of big quads whose blocks the shader paints, dissolving block by block near the camera; a sunset sky with stepped clouds and a block skyline",
    "Sound all synthesized: the crew's swung oom-pah brass loop (tuba, chord stabs, a muted trumpet) that cuts to silence for the blast, a whistle and the plunger, a layered thump and rumble, clatter scaled by each impact's energy and mass, splashes, a crowd cheer or groan, a fanfare, Marmalade's complaint and the pigeons leaving"
   ],
   "rendering": "A 2048 sun shadow map, then one 4x MSAA pass: every visible block (static or in a chunk, faces against a neighbour collapsed away) is one instanced cube per block in one draw, posed by a per-chunk matrix from a uniform array, with per-corner occlusion from its 26 neighbours, crisp block-edge lines and a per-block shade; terrain and town meshes; a stepped canal; the sky (which writes a mask to alpha); blocky lit dust and additive embers and zone curtains; then one post pass that marches light shafts from the sun through the sky mask, grades, flashes and vignettes.",
   "brief": "# 24 · Topple\n\n*Swatch 24 of The Swatch Book. Style: **Voxel worlds** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nCubic units build characters, architecture and terrain, remaining visible in silhouettes and broken edges. Lighting may be realistic or cartoon-like; the shared feature is block structure in 3D space rather than 2D pixel art.\n\n**What to look for**\n- Cubic units and stepped silhouettes\n- Block structure continues into small details\n- Volumetric lighting over block surfaces\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/voxel-worlds/):\n\n> Build characters, props, architecture and terrain from visible cubic units, using a consistent base voxel scale or a clearly documented family of scales. Preserve stepped silhouettes and block structure even in smaller details. Choose a restrained material palette and lighting treatment that clarifies cubic volume without smoothing away the construction. If objects break, expose coherent block interiors and keep destruction readability separate from decorative noise. Design UI icons and effects with compatible cubic or stepped forms. Avoid treating voxels as flat pixel art, arbitrary scale changes, smooth meshes that clash with blocks and excessive microvoxels that obscure silhouettes.\n\n\n## The game: Topple\n\n**Hook:** *Three charges. One building. Put it exactly where they asked.*\n\nBlockton's demolition crew takes the jobs no one else will: a crooked clock tower that must fall into the canal and\nnot on the bakery, a chimney that must collapse straight down between two houses, a bridge that must drop its\nmiddle span only. The city is made of voxels. So is everything that falls.\n\n**Why this style:** voxel worlds are cubic units, stepped silhouettes, blocks down to small details and volumetric\nlight on blocks. Destruction is where voxels shine: every chunk that breaks off is made of the same little cubes.\n\n### Core loop\n- **Survey:** orbit the building (drag), zoom (pinch). The job card shows the target zone (a glowing outline on the\n  ground) and the \"don't touch\" neighbours (the bakery, a parked cart, the cat).\n- **Place charges:** tap a voxel face to place a charge (limited: 2–5 per job) and choose its size (small / large).\n  Charges remove a sphere of voxels and push the debris.\n- **Blow it:** press the plunger. The removed voxels vanish in a flash; the building is split into connected\n  clusters (flood fill on the voxel grid); every cluster not connected to the ground becomes a rigid body\n  (rapier3d is in your Cargo.toml) with a compound collider of its voxels (merge into boxes for speed). They fall,\n  topple and break further on impact (big impacts split a cluster again along weak lines).\n- **Score:** how much of the building ended up inside the zone, minus damage to protected things, plus bonuses for\n  using fewer charges and for style (a clean fold, a \"domino\"). Three stars.\n- 30 jobs in three districts, from tidy towers to absurd ones (a giant teapot, a rollercoaster), and a sandbox.\n\n### Hooks to come back\n- Stars per job, slow-motion replays you can watch again (and the best one is kept), a daily job.\n\n### Look\n- Voxel art at a small scale (blocks ~0.25 m), coloured per material (brick, timber, slate, glass), rendered with\n  instanced cubes (or greedy-meshed chunks for the static parts), soft shadowing via a simple per-voxel ambient\n  occlusion, warm sunset light, and **volumetric dust** (billboard particles lit by the sun, plus light shafts\n  through the dust in a cheap post pass). Debris small voxels scatter and settle.\n- Keep within budget: cap rigid bodies (merge small clusters into dust particles), instance everything.\n\n### Sound\n- The plunger click, a deep thump and rumble (layered noise, low sine), crumbling clatter scaled by impact energy,\n  the crew's cheer or groan, a jaunty brass-like loop in the survey phase that cuts to silence in the slow-motion\n  moment of the blast.\n\n### Test hooks\n- `state()`: \"title\", \"map\", \"survey\", \"armed\", \"collapse\", \"result\" (and \"paused\").\n- `snapshot()`: job, charges left, voxels standing, bodies, in-zone fraction, damage, stars.\n- `test_input`: `{\"charge\": [x, y, z, \"large\"]}`, `{\"detonate\": true}`, `{\"job\": 5}`, `{\"settle\": true}`.",
   "poster": "posters/24-topple.jpg",
   "thumb": "thumbs/24-topple.jpg",
   "clip": "clips/24-topple.mp4",
   "ready": true
  },
  {
   "no": "25",
   "slug": "25-polygon-midnight",
   "title": "Polygon Midnight",
   "tagline": "A late-night drive through roads that shouldn't exist. Drift until the sun comes up.",
   "style": "Low-resolution retro 3D",
   "style_slug": "low-resolution-3d",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/low-resolution-3d/",
   "traits": [
    "Visible simplified geometry",
    "Low-resolution textures or output",
    "Modern lighting alongside retro grain"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 25 · Polygon Midnight\n\n*Swatch 25 of The Swatch Book. Style: **Low-resolution retro 3D** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nSimplified models, low-resolution textures or pixelated output recall early 3D games. These are not purely 2D pixel works and need not reproduce the exact technical artifacts of a single old console.\n\n**What to look for**\n- Visible simplified geometry\n- Low-resolution textures or output\n- Modern lighting alongside retro grain\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/low-resolution-3d/):\n\n> Use intentionally simplified three-dimensional models, clear polygon silhouettes and compact, low-resolution texture sheets. Choose a stable output treatment and texture filtering policy so geometry and grain remain coherent across camera movement. Build color and atmospheric depth with controlled fog and lighting rather than dense physical surface detail. Match props, character proportions, UI and effects to the same retro visual density. Decide explicitly which modern lighting conveniences remain, without claiming exact emulation of an old console. Avoid calling the result pure 2D pixel art, mixing sharp photographic textures with coarse models, or adding unstable distortion that harms readability.\n\n\n## The game: Polygon Midnight\n\n**Hook:** *A late-night drive through roads that shouldn't exist. Drift until the sun comes up.*\n\nA long, empty highway at midnight that loops through misty pine valleys, tunnels lit sodium-orange, a closed-down\nseaside resort and a mountain pass with no guard rails. It is rendered the way an old console would have drawn it:\nlow resolution, wobbling vertices, warped textures, fog that hides the world's edge. You drive a little hatchback\nwith one working headlight and a radio that picks up stations that shouldn't be broadcasting.\n\n**Why this style:** low-resolution retro 3D is simplified geometry, low-res textures and output, modern light\nmixed with retro grain. A night drive is the perfect place for its fog, its jitter and its unease.\n\n### Core loop\n- **One thumb:** touch and hold the left half to steer left, the right half to steer right; release to straighten.\n  Steering hard at speed starts a **drift** (the car slides, a drift meter fills while you hold the angle).\n  Releasing a drift gives a **boost** proportional to its length (a mini-turbo with a flash of tail light).\n  Desktop: ←/→ (or A/D).\n- **The run:** a track is a seeded sequence of road pieces (curves, hairpins, tunnels, bridges); checkpoints add\n  time; the clock is your life. Distance is the score; drifts multiply it.\n- **Strange night:** the further you drive, the stranger: a ghost car of your best run, traffic that only appears in\n  the mirror, a stretch where the road is upside-down in the fog, the radio announcing your distance. Gentle unease,\n  never gore.\n- Laps of a closed course are a separate **time attack** mode with a ghost.\n\n### Hooks to come back\n- Best distance, best lap per course, unlockable cars (a van, a kei truck, a hearse) and radio stations (music\n  styles), a daily night (the day's seed track).\n\n### Look\n- Render the 3D scene into a `LowRes` buffer around 320×240 (or `Fit::Height(240)` in portrait), with **vertex\n  snapping** (snap clip-space positions to the low-res pixel grid), **affine texture mapping** (pass uv × w and\n  divide in the fragment without perspective correction, so textures warp), low-res procedural textures (asphalt,\n  road lines, trees as crossed billboards), per-vertex lighting, and **distance fog** in the night colour. A final\n  pass adds ordered dither to 15-bit colour, slight scanline darkening and a soft CRT bloom on lights.\n- Dashboard HUD in a chunky polygon-era font: speed, distance, drift meter, the radio station name.\n\n### Sound\n- Engine voice (a saw + filtered noise, pitch from RPM), tyre squeal on drifts (band-passed noise), the radio's\n  music as lo-fi synth (filtered, with crackle), tunnel reverb, wind.\n\n### Test hooks\n- `state()`: \"title\", \"garage\", \"driving\", \"crashed\", \"over\" (and \"paused\").\n- `snapshot()`: distance, time left, speed, drift, the car's track position, checkpoint.\n- `test_input`: `{\"steer\": -1|0|1, \"ms\": 800}`, `{\"autopilot\": true}` (follow the track), `{\"time\": 1}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "26",
   "slug": "26-ultra-slugger",
   "title": "Ultra Slugger",
   "tagline": "Every pitch is a special move. Every swing is your answer.",
   "style": "Anime cel-shaded 3D",
   "style_slug": "anime-cel-3d",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/anime-cel-3d/",
   "traits": [
    "Hard-edged shadows in limited tones",
    "Art-directed outlines",
    "Animation-like exaggeration and framing"
   ],
   "theme": "#14101e",
   "summary": "A rooftop home-run derby where every rival pitch is announced like a fighting-anime special move: a cut-in panel with a live portrait, speed lines and a low dutch angle, then a Comet Drop, a Mirage, a Zigzag, a Hang Time or a Ghost Knuckle. You answer with one swipe: its timing decides contact, its angle the launch, its speed the power. Cel-shaded 3D is built for exactly these beats: wind-up holds, impact frames, smears and a ball that becomes a comet over the skyline.",
   "how_to_play": [
    "Swipe across the screen as the ball meets the ring round the plate.",
    "Flick up to lift a fly ball; flat drives a liner, down chops a grounder.",
    "Clear the 120 m wall: home runs in a row multiply the score.",
    "Strikes and outs cost one of ten outs; hits and fouls are free.",
    "Perfect hits charge Ultra: hold a finger down before a pitch to slow time."
   ],
   "controls": [
    {
     "action": "Swing (timing, angle, power)",
     "touch": "swipe across the screen",
     "keys": "Space (hold Up to lift, Down to chop), or flick the mouse"
    },
    {
     "action": "Ultra (when charged)",
     "touch": "hold a finger still before the pitch",
     "keys": "hold Shift before the pitch"
    },
    {
     "action": "Choose a rival",
     "touch": "arrows or swipe the rival card",
     "keys": "Left / Right, Enter to play"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "speaker button",
     "keys": "M"
    }
   ],
   "fonts": [
    "Racing Sans One",
    "Saira Condensed"
   ],
   "palette": [
    "#14101e",
    "#fff4e0",
    "#ffd23f",
    "#ff5a4e",
    "#1fb5a6",
    "#17344f",
    "#ff8f69",
    "#e8323f"
   ],
   "features": [
    "True 3D cel shading: hard key-light bands, flat authored shadow colours per material, a hard sunset rim light, and inverted-hull outlines whose weight falls off with distance.",
    "Characters built from spheres, limbs and rounded boxes with two-bone IK and key poses held on 12 to 24 fps steps (limited animation) under a smooth camera; anime faces, hair spikes, helmets, goggles, a coat and a mask.",
    "Five rivals with their own look, line and special pitch (Comet Drop, Hang Time, Zigzag, Mirage, Ghost Knuckle), each with a readable wind-up tell, plus a daily Mystery Ace whose colours and two specials come from the day's seed.",
    "Special-move cut-ins: a slanted band with a live 3D render of the rival's face, the move's name, a hint, speed lines and a hard cut to a low dutch angle.",
    "Contact feel: hit-stop, two inverted then one black-and-white impact frame with a chromatic split, an ink starburst, a solid bat smear arc, dust and sparks; the batted ball flies with drag and bounces off the wall pads.",
    "Ultra: perfect hits fill the meter; a held finger (or Shift) slows the pitch, turns the world into two flat tones and draws the ball's path.",
    "A banded sunset sky in direction space (posterised bands, sun halos, rimmed clouds, stars), a procedural ballpark floor, a harbour skyline with lit windows, neon, the Lantern Tower, a bridge, cranes, gulls and fireworks on home runs.",
    "A ladder that unlocks rival by rival, best scores per rival and per day, a ten-stamp card, a three-lesson practice on first run, pause, settings and a synth-rock loop that lifts during wind-ups."
   ],
   "rendering": "One MSAA-4 Rgba8 scene pass draws a direction-space sky, the static rooftop and city meshes and instanced character primitives with a cel fragment shader and a front-face-culled inverted-hull outline pass; 2D action accents are drawn into the same target, then one post pass applies impact frames, the Ultra two-tone grade and a vignette before the UI batch; a small second target renders the rival's face for cut-ins.",
   "brief": "# 26 · Ultra Slugger\n\n*Swatch 26 of The Swatch Book. Style: **Anime cel-shaded 3D** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nThree-dimensional models are rendered with the discrete shadow shapes and outlines of 2D animation. Limited shading bands, camera composition and effects reinforce the drawn appearance.\n\n**What to look for**\n- Hard-edged shadows in limited tones\n- Art-directed outlines\n- Animation-like exaggeration and framing\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/anime-cel-3d/):\n\n> Render three-dimensional characters and environments through deliberately designed, limited shadow bands and controlled contour lines. Shape faces, hair and costumes for readable animated silhouettes, and adjust lighting to preserve authored shadow shapes rather than chasing physical realism. Keep props, UI graphics and effects in the same clean color-block vocabulary. Use strong poses, carefully timed holds and graphic action accents appropriate to the game. Maintain readable silhouettes from the actual gameplay camera. Avoid noisy realistic surface maps, uncontrolled gradients, uniformly thick outlines at all distances and visual imitation of a specific franchise's characters.\n\n\n## The game: Ultra Slugger\n\n**Hook:** *Every pitch is a special move. Every swing is your answer.*\n\nA rooftop batting cage above a fictional neon harbour city at sunset. You are the slugger; across the plate stands a\nladder of rival pitchers, each a cel-shaded character with a signature special pitch announced like an attack in a\nfighting anime: a cut-in panel with their portrait and the pitch's name, speed lines, the camera tilting to a low\ndramatic angle, then the ball comes.\n\n**Why this style:** anime cel-shaded 3D is about hard shadow bands, art-directed outlines and exaggerated framing.\nA home-run derby is a sequence of dramatic moments, exactly what that look is for: wind-up poses, impact frames,\nfreeze frames on contact, smear lines, the ball becoming a comet over the city.\n\n### Core loop\n- A round is **10 outs**. Each pitch: wind-up (0.8–1.5 s, the pitcher's tell shows which special is coming), the\n  flight, your swing.\n- **Swing by swiping**: the swipe's *timing* against the ball's arrival decides contact (perfect / good / early /\n  late, pulling the ball left or pushing it right); the swipe's *angle* decides the launch (an upward flick lifts\n  a fly ball, a flat swipe a line drive, a downward one a grounder); its *speed* adds power. Desktop: hold the mouse\n  and flick, or Space to swing with arrow keys for the angle.\n- **Results**: home run (> 120 m: the camera follows the ball over the skyline, distance counts up), hit, foul,\n  strike, out. Strikes and outs both cost an out; home runs score distance × the streak multiplier.\n- **Special pitches** (each pitcher has one, plus straight ones): *Comet Drop* (a fireball that dives late),\n  *Mirage* (splits into three afterimages; one is real, it has a faint rim light), *Zigzag* (a lightning slider),\n  *Hang Time* (stops dead mid-air, then fires), *Ghost Knuckle* (wobbles, flickers). Each has a readable tell.\n- **Ultra meter**: perfect contacts fill it; when full, press and hold before the pitch to enter Ultra (slow\n  motion, the world goes to two flat tones, the ball's path is drawn as a line), one swing.\n- **The ladder**: five rivals with their own look, pitch mix and a home-run target to beat (e.g. 3, 4, 5, 6, 7 of\n  10). Beating one unlocks the next; the last is the city champion. A **daily rival** remixes the pitch mix with the\n  day's seed.\n\n### Hooks to come back\n- Longest home run, best round, rivals beaten; a stamp card of feats (first 150 m shot, a perfect on every special,\n  a 5-streak). First run: a short practice pitch series that teaches timing, then angle.\n\n### Look\n- True 3D (`RenderTarget` with depth and MSAA 4): stylised characters built from capsules, spheres and boxes with\n  expressive key poses (wind-up, release, follow-through) animated with snappy easing and held frames (anime\n  limited animation: hold poses for 2–3 frames at 12 fps on top of the smooth camera).\n- **Cel shading**: 2–3 hard light bands from a key light, a hard rim light, flat shadow colour per material; inverted\n  -hull outlines (back faces pushed out along normals, drawn black) with line weight thicker on silhouettes; a\n  painted gradient sky with layered 2D clouds and a skyline silhouette.\n- **Anime framing**: speed-line overlays, impact frame on contact (two frames of inverted colours / black-and-white,\n  scaled by `cx.flash()`), a cut-in panel for each special, screen-space smear on the bat.\n- Portrait framing: batter at the bottom, pitcher in the upper middle, HUD at the very top (outs, score, streak,\n  Ultra meter). Landscape: the same scene, wider sky.\n\n### Sound\n- A bright synth-rock loop (saw lead, punchy drums from noise and sine kicks) that lifts during wind-ups, a crowd\n  murmur (filtered noise) that roars on home runs, a crisp bat crack (noise click + a tuned sine), whooshes for the\n  pitch and the swing, a sting for each special's cut-in.\n\n### Test hooks\n- `state()`: \"title\", \"practice\", \"windup\", \"pitch\", \"result\", \"over\" (and \"paused\").\n- `snapshot()`: rival, outs, home runs, score, streak, ultra, the pitch type, the ball's position, the last result.\n- `test_input`: `{\"swing\": \"perfect\", \"angle\": 30}` (a scripted swing on the next pitch), `{\"rival\": 3}`.",
   "poster": "posters/26-ultra-slugger.jpg",
   "thumb": "thumbs/26-ultra-slugger.jpg",
   "clip": "clips/26-ultra-slugger.mp4",
   "ready": true
  },
  {
   "no": "27",
   "slug": "27-scrapshot",
   "title": "Scrapshot",
   "tagline": "Bolt together the worst gun in the wasteland. Then use it.",
   "style": "Inked comic-book 3D",
   "style_slug": "inked-comic-3d",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/inked-comic-3d/",
   "traits": [
    "Black contours and internal ink marks",
    "Exaggerated model proportions",
    "Volumetric comic-book surfaces"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 27 · Scrapshot\n\n*Swatch 27 of The Swatch Book. Style: **Inked comic-book 3D** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nVolumetric 3D models retain bold outlines, drawn surface marks and exaggerated color. Compared with cleaner anime cel shading, these images emphasize ink-like texture and graphic surface detail.\n\n**What to look for**\n- Black contours and internal ink marks\n- Exaggerated model proportions\n- Volumetric comic-book surfaces\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/inked-comic-3d/):\n\n> Combine volumetric models with bold silhouettes, controlled black contours and deliberately drawn internal surface marks. Use exaggerated but consistent proportions and group wear, seams and material detail into purposeful ink shapes. Retain enough lighting to express depth while keeping a coherent graphic palette. Carry that same drawing density into weapons, architecture, UI icons and effects. Use comic-like bursts and confident pose changes for feedback. Distinguish this from clean anime cel shading through selective surface inking. Avoid procedural scratches everywhere, photorealistic materials beneath unrelated outlines and small lines that shimmer during motion.\n\n\n## The game: Scrapshot\n\n**Hook:** *Bolt together the worst gun in the wasteland. Then use it.*\n\nRattlecan Gulch, a junktown on a cracked desert, holds a shooting gallery run by a one-eyed robot named Ma Sprocket.\nBefore each round you build your gun at her scrap bench by spinning four reels (BARREL, BODY, GRIP, AMMO). You might\nget a gun that fires boomerangs, or one that fires one enormous slow bullet, or seven tiny bouncing ones. Then the\ntin bandits pop up.\n\n**Why this style:** inked comic-book 3D is black contours, internal ink marks, exaggerated proportions and comic\nsurfaces. A loot slot machine and a shooting gallery full of tin bandits, sound-effect lettering and junk is a comic\nsplash page in motion.\n\n### Core loop\n- **Spin the reels** (tap SPIN): each reel lands on a part with its own effect: barrels (long: accurate; blunder: a\n  spread; coil: bouncing shots; drum: rapid fire), bodies (stabilise, overheat, double-shot), grips (reload speed,\n  recoil), ammo (rivets, sparks that chain, sticky bombs, boomerangs, pigeons). You may **lock** reels you like and\n  re-spin the others for scrap.\n- **The gallery:** a 45-second round in a diorama of junk: tin bandits pop up from barrels, behind fences, on\n  rails, on a little train; civilians (tin chickens, Ma's cardboard grandma) must not be shot. Tap to shoot where you\n  tap (the gun's behaviour shapes how): reticle aim with your finger; the gun model sits in the corner and kicks.\n- **Combos** for consecutive hits; bonus targets (a vulture on a sign, a gold bandit that runs); a boss round every\n  5 (a tin locomotive).\n- **Scrap** from hits buys re-spins and new parts in the reels (the reels grow with rarer parts over time).\n\n### Hooks to come back\n- High score per gallery, a **gun collection** (save favourite builds, name them), a daily build (everyone gets the\n  same reels that day).\n\n### Look\n- 3D scenes rendered with an **inked comic shader**: a post pass draws black outlines from depth and normal\n  discontinuities (thicker on silhouettes), cel-ish two-tone shading with **hatching** in the shadow tone (screen- or\n  world-space hatch lines), hand-drawn-looking textures (procedural grain, scribbles), exaggerated chunky models.\n  Warm desert palette: dusty orange, teal sky, rusty reds. Comic **onomatopoeia** letters pop on hits (BLAM, KLONK,\n  PTANG), bold comic UI panels with halftone fills, Ma Sprocket's speech balloons.\n\n### Sound\n- Twangy western-junk loop (slide-guitar-like synth, a washboard rhythm), each gun part has its own report (pew,\n  boom, ka-chunk), tin targets ding and clatter, reels whirr and clack into place, a jackpot bell.\n\n### Test hooks\n- `state()`: \"title\", \"bench\", \"spinning\", \"gallery\", \"round_end\", \"over\" (and \"paused\").\n- `snapshot()`: round, score, the gun's parts, scrap, targets left, time.\n- `test_input`: `{\"spin\": true}`, `{\"lock\": [0, 2]}`, `{\"shoot\": [x, y]}` (screen fraction), `{\"round\": 5}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "28",
   "slug": "28-little-lockkeeper",
   "title": "Little Lockkeeper",
   "tagline": "Raise the water. Lower the water. Get every boat home.",
   "style": "Miniature dioramas",
   "style_slug": "miniature-diorama",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/miniature-diorama/",
   "traits": [
    "Elevated or isometric framing",
    "Simplified but carefully shaped small details",
    "Soft occlusion and a model-like appearance"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 28 · Little Lockkeeper\n\n*Swatch 28 of The Swatch Book. Style: **Miniature dioramas** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nElevated framing, small rounded architecture and soft shadows make worlds resemble models arranged on a tabletop. This is a visual treatment of scale and material, not a requirement that the game literally depict toys.\n\n**What to look for**\n- Elevated or isometric framing\n- Simplified but carefully shaped small details\n- Soft occlusion and a model-like appearance\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/miniature-diorama/):\n\n> Make the world feel like a carefully arranged tabletop model through elevated or isometric framing, compact architecture, deliberate small details and soft contact shadows. Establish a coherent miniature material scale and gently rounded, simplified shapes. Keep characters and props compatible with the model's proportions, with interaction targets separated by value and placement. Use restrained atmospheric or depth-of-field effects that never blur the playable area. UI icons should feel like small model pieces while labels stay crisp. Animate with controlled, charming secondary motion. Avoid indiscriminate toy gloss, excessive tiny clutter and forcing literal toy subject matter onto the game.\n\n\n## The game: Little Lockkeeper\n\n**Hook:** *Raise the water. Lower the water. Get every boat home.*\n\nPennyweir is a miniature canal village on a tabletop: a flight of locks climbs a gentle hill between cottages, a\nlock-keeper's hut, a pub with tables outside, ducks, and willow trees. Narrowboats arrive at the top and bottom wanting\nto pass. You are the lock-keeper. You work the gates and paddles that fill and empty each lock chamber.\n\n**Why this style:** miniature dioramas are elevated framing, small rounded details, soft occlusion and a model-like\nlook. A canal flight on a tabletop, with tiny boats rising and falling as water pours, is the most toy-like,\nsatisfying machine imaginable.\n\n### Core loop\n- **Locks:** each chamber has upper and lower gates and paddles (sluices). Tap a paddle to open it: water flows and\n  the chamber level moves toward the pound above or below (animated, with foam and a rising water line). Gates can\n  only open when the levels match on both sides. Tap a gate to swing it.\n- **Boats:** narrowboats arrive at either end, queue, and move forward on their own into an open chamber; each has a\n  patience bar (a little skipper whose mood shows) and a colour. Getting a boat through the whole flight scores; a boat\n  running out of patience leaves angry (one strike of three).\n- **Puzzle under pressure:** sharing chambers between up and down traffic efficiently (pairing boats going the same\n  way, alternating), wasting water as little as possible (a reservoir at the top drains if you waste it; let it run\n  dry and the top pound gets too low), and keeping the walkers on the footbridge safe (don't swing a gate while\n  someone crosses).\n- **Days:** a day of traffic (~3 minutes) on a flight of 3–6 locks; later canals add swing bridges for road traffic,\n  a staircase lock (chambers sharing gates), and a fast hotel boat that must not wait.\n\n### Hooks to come back\n- Boats passed per day, stars per canal, a scrapbook of canals and the boats' names, a daily timetable.\n\n### Look\n- A tabletop diorama: rounded, chunky 3D models (cottages, gates with balance beams, boats with painted roses and\n  castles patterns, ducks, people as little rounded figures), soft **ambient occlusion** (a cheap screen-space AO or\n  baked per-vertex AO on the models), warm soft key light, and a strong **tilt-shift** depth of field (sharp middle,\n  blurred near and far, using depth) so it reads as a miniature. The camera is high and angled, orbitable a little.\n- Water: a gently moving surface with a soft reflection of the sky and foam where paddles pour; levels animate\n  smoothly.\n\n### Sound\n- Pouring water whose volume follows open paddles, gate creaks, boat horns (soft two-tone toots), ducks, a pub's\n  distant chatter, a gentle folk loop (concertina-like synth).\n\n### Test hooks\n- `state()`: \"title\", \"map\", \"day\", \"day_end\" (and \"paused\").\n- `snapshot()`: day time, boats passed, strikes, reservoir, each lock's level and gates, boats queued.\n- `test_input`: `{\"paddle\": [lock, \"upper\"|\"lower\"]}`, `{\"gate\": [lock, \"upper\"|\"lower\"]}`, `{\"auto\": true}`\n  (a simple automatic keeper for tests), `{\"day_end\": true}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "29",
   "slug": "29-light-fingers",
   "title": "Light Fingers",
   "tagline": "Lift purses from a painted dusk crowd, and keep your hand out of their eyes.",
   "style": "Painterly 3D",
   "style_slug": "painterly-3d",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/painterly-3d/",
   "traits": [
    "Materials emphasize broad visual structure",
    "Deliberately stylized 3D forms",
    "Cohesive painterly color relationships"
   ],
   "theme": "#1e1814",
   "summary": "A pickpocket's night on Gaslamp Row, a harbour market at dusk painted in broad strokes. Every mark's attention is a fan of golden brushstrokes on the cobbles: slip in behind them, hold to lift, and let go when a glance swings your way, while punchlines, high notes, a rearing horse, a pigeon cloud or a tossed coin turn the crowd's heads. Painterly 3D suits it because the whole game is reading a crowd at a glance: sculpted, simplified figures in warm lamplight and cool dusk keep every silhouette, gaze and lantern beam legible.",
   "how_to_play": [
    "Tap the cobbles to walk, or drag to steer and slip through the crowd.",
    "A gold glint is a purse: tap the mark to get behind them, then hold the hand to lift.",
    "The golden fan is where a mark is looking. If it turns red on your hand, let go.",
    "Shouts raise the heat and bring the watch: stand still in a crowd or duck into an alley to cool off.",
    "Make the night's dues, then get out through a lit gate before the last bell."
   ],
   "controls": [
    {
     "action": "Walk",
     "touch": "tap the cobbles, or drag to steer",
     "keys": "WASD or arrows, or click the cobbles"
    },
    {
     "action": "Run",
     "touch": "drag far",
     "keys": "hold Shift"
    },
    {
     "action": "Slip in behind a mark",
     "touch": "tap the mark",
     "keys": "click the mark"
    },
    {
     "action": "Lift a purse",
     "touch": "hold the hand button",
     "keys": "hold Space"
    },
    {
     "action": "Toss a coin (2s)",
     "touch": "coin button",
     "keys": "Q"
    },
    {
     "action": "Tip a cart, spook the horse, scatter the pigeons",
     "touch": "tap them",
     "keys": "E near them, or click them"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "speaker button on the title",
     "keys": "M"
    }
   ],
   "fonts": [
    "Abril Fatface",
    "Spectral",
    "Spectral SC",
    "Pinyon Script"
   ],
   "palette": [
    "#16110e",
    "#efe3c8",
    "#e2b552",
    "#ffd27a",
    "#e8502e",
    "#8a2e26",
    "#6a7cb4",
    "#1c2046"
   ],
   "features": [
    "A living crowd of about a hundred instanced figures built from sculpted primitives: coats and bell skirts, top hats, bonnets, caps and helmets, baskets on arms and trays on heads, parasols, canes and sacks, children and sailors; each walks its own gait, browses stalls, gossips in groups with talking hands, and gathers to watch the puppets and the singer.",
    "Attention you can read: every mark's gaze is a fan of dry-brushed golden rays clipped by stalls and walls; it follows their head as they browse, glance about (with a tell first), count their change or check a watch, narrows when a show grabs them, and reddens when it lands on your hand. The watch carry real lantern beams.",
    "A lift you hold: sidle in behind the mark, keep the hand button down while a ring fills, and let go in time; a robbed mark finds the purse gone a few seconds later and may point at you.",
    "Distractions that turn heads: the puppets' punchline (cued by a slide whistle), the singer's high note, a rearing cab horse, a pigeon cloud at the pump, a tipped fruit cart and a tossed coin that bystanders scramble for.",
    "Heat as a lantern: shouts and sightings draw watchmen to the last word of you; blend into a crowd or duck into an alley to cool; when it boils over the whistles blow, a reinforcement arrives and the music hurries.",
    "A run of nights: rising dues and more watchmen, Mother Gannet's back room for gloves, coats, boots and smoke pellets, a ledger of twelve notable marks with painted portraits and a line each, best haul, nights survived and a daily night.",
    "A six-lesson practice night teaches walking, slipping in, lifting, reading a glance, cooling off and getting out, one idea at a time.",
    "All sound synthesized: a breathing crowd murmur and babble, a singer with vibrato, a slide whistle, hooves, a purse jingle, a watchman's trill, a bell, a street-organ waltz on the menus and a pizzicato that tightens with the heat."
   ],
   "rendering": "One MSAA scene pass at 55% resolution draws the static street mesh and instanced quaternion-posed primitives with a painterly material shader (soft value grouping, form-following brush patches, warm gas-lamp pools against a cool dusk fill, lantern spotlights, a sky dome and ground decals for gazes, rings and shadows); an eight-sector polynomial Kuwahara pass turns it into dabs of paint, and one full-screen composite adds impasto relief, contour darkening, warm/cool grading, a canvas weave and the menus' dim before the painted 2D interface.",
   "brief": "# 29 · Light Fingers\n\n*Swatch 29 of The Swatch Book. Style: **Painterly 3D** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nWithin three-dimensional spaces, simplified materials, deliberately shaped forms and painterly color weaken the photographic impression. The label describes the final image without claiming that every game uses hand-painted textures or the same renderer.\n\n**What to look for**\n- Materials emphasize broad visual structure\n- Deliberately stylized 3D forms\n- Cohesive painterly color relationships\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/painterly-3d/):\n\n> Shape characters, architecture and props with purposeful simplification and expressive proportions. Use coherent warm/cool color relationships, broad material structures and selectively visible painterly surface variation to reduce photographic appearance. Light the scene to support the designed palette and value groups, preserving depth without overly glossy physical detail. Give portraits, UI illustrations, icons and effects the same edge and color vocabulary. Animation should reinforce sculpted silhouettes and character attitude. Choose an implementation suited to the project rather than asserting a universal hand-painted-texture pipeline. Avoid applying a painting filter to otherwise realistic assets, random brush noise and mixed realism levels.\n\n\n## The game: Light Fingers\n\n**Hook:** *The market is crowded. The purses are heavy. The watch is everywhere.*\n\nGaslamp Row, a painterly Victorian market at dusk in an invented port city: stalls of fish and lanterns, street\nsingers, a puppet show, horses, pickpockets' alleys. You are Wren Allsop, the quickest hands in the Row. Each night\nyou need a haul. The marks are distracted, sometimes. The watchmen are not.\n\n**Why this style:** painterly 3D is materials that show broad structure, stylised forms and cohesive painterly colour.\nA dense crowd scene at dusk, lit by gas lamps and stall lanterns, painted in broad strokes, is that style's ideal set.\n\n### Core loop\n- **Move:** tap to walk to a spot (path through the crowd); drag to steer continuously. The crowd flows around you.\n- **Marks:** people with purses glint (a brass highlight). Each has an **attention cone** (shown faintly) and a mood:\n  they look around, check their purse, chat, watch performers. Stand behind a mark (outside their cone) and **hold**\n  to lift: a progress ring fills; if they turn and see your hand, they shout.\n- **Distractions:** the puppet show's punchline, a street singer's high note, a horse rearing, a pigeon swarm (you can\n  cause some: tip a fruit cart with a tap, throw a coin to start a scramble).\n- **Heat:** being seen raises the heat (a lantern meter); at high heat watchmen hunt you (they move toward the last\n  shout, with their own cones). Escape by breaking line of sight, ducking into an alley or blending into a crowd\n  cluster (standing still among people lowers heat).\n- **The night:** ~3 minutes; reach the haul target and get out through a gate. Caught = the night ends.\n- Between nights: spend on gloves (faster lifting), a coat (blend better), a smoke pellet (one escape).\n\n### Hooks to come back\n- Best haul, nights survived, a ledger of the Row's notable marks (with a painted portrait and a line), a daily\n  night.\n\n### Look\n- 3D crowd (instanced stylised figures built from simple shapes with painted textures, varied by colour and\n  props), stalls and buildings with broad painted materials (triplanar noise brush patterns), warm gas-lamp pools of\n  light and cool blue dusk shadows. A painterly post pass (a Kuwahara-style filter over the frame at reduced\n  resolution, plus a canvas texture) makes it read as paint. The camera is a high three-quarter view following Wren.\n- Wren's cap and scarf are the brightest accent; marks' purses glint gold.\n\n### Sound\n- Crowd murmur (layered filtered noise with chatter-like modulations), a street singer's melody (synth voice with\n  vibrato), horses' hooves, the puppet show's slide whistle, a coin-purse jingle on a lift, a watchman's whistle, a\n  tense pizzicato loop that tightens with heat.\n\n### Test hooks\n- `state()`: \"title\", \"night\", \"caught\", \"escaped\", \"shop\" (and \"paused\").\n- `snapshot()`: haul, target, heat, time, Wren's position, marks lifted, watchmen hunting.\n- `test_input`: `{\"walk\": [x, z]}`, `{\"lift\": true}` (lift from the nearest unaware mark), `{\"heat\": 1.0}`.",
   "poster": "posters/29-light-fingers.jpg",
   "thumb": "thumbs/29-light-fingers.jpg",
   "clip": "clips/29-light-fingers.mp4",
   "ready": true
  },
  {
   "no": "30",
   "slug": "30-still-water",
   "title": "Still Water",
   "tagline": "One river, one evening, one fly. Read the rises, cast like you mean it, let it go.",
   "style": "Cinematic realism",
   "style_slug": "cinematic-realism",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/cinematic-realism/",
   "traits": [
    "Detailed, believable surface materials",
    "Naturalistic lighting and proportions",
    "Cinematic framing and controlled color"
   ],
   "theme": "#0e0d0b",
   "summary": "Fly fishing at golden hour, with the whole craft made gentle: swipe up for the back cast, wait for the tug as the loop straightens behind you, swipe down to shoot. Then mend the drift, strike when a trout sips, and fight it to the net by holding and easing, before letting it go. Cinematic realism belongs to a low sun on moving water: an analytic sky, a true planar reflection, Fresnel, mist and god rays, all graded like film. The fly line itself is simulated physics you have to read.",
   "how_to_play": [
    "Swipe up to lift the line into a back cast. Wait until it straightens behind you (a soft tug), then swipe down where you want the fly.",
    "Good timing earns reach: false-cast (up, down, up) to throw further. Late casts collapse; early ones crack the fly off.",
    "Watch the fly drift. If the current bellies the line and the fly starts to drag, flick sideways to mend upstream.",
    "When a trout sips your fly, tap to strike. Then hold to pull and ease off when it runs or the line sings. Bring it to the net and let it go.",
    "The evening lasts about five minutes. Match the hatch from the fly box as the light goes."
   ],
   "controls": [
    {
     "action": "Back cast",
     "touch": "swipe up",
     "keys": "W"
    },
    {
     "action": "Forward cast (aims where the finger turns)",
     "touch": "swipe down",
     "keys": "S (aim with the mouse or the arrow keys)"
    },
    {
     "action": "Mend",
     "touch": "flick left / right",
     "keys": "A / D"
    },
    {
     "action": "Strike",
     "touch": "tap",
     "keys": "Space / Enter"
    },
    {
     "action": "Fight: pull / give line",
     "touch": "hold / let go (slide to lean the rod)",
     "keys": "hold Space / let go (A / D lean)"
    },
    {
     "action": "Release the fish",
     "touch": "tap",
     "keys": "Space"
    },
    {
     "action": "Fly box",
     "touch": "fly button, bottom left",
     "keys": "F, then 1-4"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc"
    },
    {
     "action": "Mute",
     "touch": "pause or settings",
     "keys": "M"
    }
   ],
   "fonts": [
    "Spectral",
    "Hanken Grotesk"
   ],
   "palette": [
    "#0e0d0b",
    "#f2eadb",
    "#a99f8e",
    "#e8b266",
    "#c9603f",
    "#a8be9c",
    "#2b2a36",
    "#f0c27a"
   ],
   "features": [
    "A fly line you can feel: a hybrid model. A kinematic rolling loop (rod leg, loop, fly leg, leader turnover) drives the aerial strokes, and a position-based verlet chain (anisotropic air and water drag, bending stiffness, line shot and stripped at the tip) takes over on the water, in the fall, in mends and in the fight. The rod is a tip path that accelerates to an abrupt stop, with spring overshoot and a load-bent blank.",
    "Learnable cast rhythm: forward timing is graded (Perfect, Good, Early, Late) against the moment the back loop straightens, and each good false cast adds reach (11.5 m to 29 m). The fly goes where your finger turned, and a short line lands short. Late casts collapse, early ones crack, and slaps spook nearby fish.",
    "Living water: three stretches (Willow Run, Meadow Bend, Canyon Pool) with a thalweg, a riffle, a boulder with potential-flow wake, pools and snags. Current bellies the line and measured drag makes fish refuse or bolt. Fish hold in lies, rise to a four-stage hatch, inspect, take or refuse, and each has its own strike window.",
    "A fight with physics and tells: tension from load and distance, two limits (holding vs giving), stamina, and runs, dogging, jumps and snag dives. The line sings before it breaks and the reel only gains when you ease. You can snap the tippet, throw the hook, or get snagged. Every trout is netted, measured and released.",
    "A tutorial that teaches by doing (Lift, Shoot, Reach, Mend, Strike, Fight, Net, Release), a journal of every fish (species, length, lie, light, fly), personal bests, a seeded daily evening, and stretches that unlock by catches.",
    "Procedural everything: three trout species with painted spots, bands and worm marks on a lofted, bending body; trees with alpha-to-coverage leaf cards; a willow with swaying strands; reeds, rocks, banks, a canyon wall; a woven net. No image assets.",
    "Sound from synthesis: layered river noise louder near the riffle, the swish of the line pitched by speed, the reel's ratchet, sips, splashes, a singing line under strain, dusk birds, and a quiet guitar-and-strings loop that thins as the light goes.",
    "Phone-first: portrait framing that follows rises and the lesson fish, one-thumb gestures, restrained serif UI, deterministic seeded rounds, and an autopilot that can fish a whole evening."
   ],
   "rendering": "HDR (Rgba16Float, MSAA 4×) forward rendering: an analytic single-scattering sky (Rayleigh plus Mie with a Kasten-Young airmass), mirrored on the CPU to light the scene and set exposure; a half-res planar reflection pass (the view-projection mirrored) feeding a water shader with Fresnel, flow-advected normal maps, rise rings, a pebbled bed and depth tint through the surface; alpha-to-coverage foliage, screen-space-width line ribbons and additive particles; then quarter-res god rays (a radial blur from the sun), bloom with exposure-relative thresholds, and one ACES grade pass with a warm split tone, vignette, grain, letterbox and fades.",
   "brief": "# 30 · Still Water\n\n*Swatch 30 of The Swatch Book. Style: **Cinematic realism** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nBelievable materials, human proportions and lighting are organized with cinematic framing, depth and color control. Different periods and settings can share this treatment; science-fiction and western subjects do not automatically become separate styles.\n\n**What to look for**\n- Detailed, believable surface materials\n- Naturalistic lighting and proportions\n- Cinematic framing and controlled color\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/cinematic-realism/):\n\n> Use believable human proportions, coherent object scale and carefully observed material responses across characters, architecture, props and terrain. Build lighting, exposure, atmospheric depth and color grading around purposeful cinematic composition while keeping gameplay targets readable. Establish material reference standards and detail budgets that match the camera and platform. UI should be restrained and functional, and effects should respect scene exposure and physical context without hiding interactions. Animate with convincing weight, contact and transitions. Keep the setting independent of the style. Avoid indiscriminate photogrammetry density, inconsistent weathering, crushed shadows, excessive blur and spectacle that obscures play.\n\n\n## The game: Still Water\n\n**Hook:** *One river, one evening, one fly. Cast like you mean it.*\n\nThe Kettle River runs through a quiet valley at golden hour: low sun through cottonwoods, mayflies hatching over the\nwater, trout rising in rings that spread and fade. You stand knee-deep with a fly rod. The game is the whole craft of\nfly fishing, made gentle: reading the water, casting the line, laying the fly softly, the take, the fight.\n\n**Why this style:** cinematic realism is believable materials, naturalistic light and proportions, cinematic framing\nand graded colour. A river at golden hour (water, sky, light through mist) is where realism is most beautiful and\nmost achievable on a phone.\n\n### Core loop\n- **Read the water:** fish rise in rings at different spots (a riffle, a seam, a pool under a willow); bigger fish\n  rise less often and in harder places.\n- **Cast:** a two-part rhythm. Swipe back (up the screen) for the back-cast: the line unrolls behind; swipe forward at\n  the right moment, when the line straightens (a subtle cue in the line's shape and a soft sound): a well-timed\n  forward cast shoots more line and lands softly; badly timed ones pile up or slap. The direction of the forward swipe\n  aims; its length sets distance. False-cast (repeat) to add distance.\n- **Drift and mend:** the current pulls the line into a belly that drags the fly unnaturally; flick (a small swipe\n  upstream) to **mend** and keep a natural drift. A fly that drags puts fish down.\n- **The take:** a fish rises to your fly: a ring, a sip. Strike (tap) within a short window.\n- **The fight:** hold to keep tension (the rod bends), release to let line run; too much tension snaps the tippet,\n  too little lets the hook fall out. The fish runs, jumps, heads for snags. Land it into the net; then release it\n  (always: a gentle moment as it swims off).\n- **An evening** is ~5 minutes of light: the sun sets, the hatch thickens, then darkness. Different flies for the\n  hatch stages (choose from a small fly box).\n\n### Hooks to come back\n- A **journal** of every fish (species, length, where, the light), personal bests, a daily evening (seeded weather\n  and hatch), new stretches of river unlocked (a meadow bend, a canyon pool).\n\n### Look\n- A physically based sky (single-scattering approximation with a low sun), a sun disk and haze, **water** with\n  reflections of sky and bank (a planar-ish reflection by mirroring the scene's few elements or a screen-space\n  approximation), Fresnel, normal-mapped flow ripples, rise rings, refraction tint over shallows; mist layers; god\n  rays through trees (a radial blur from the sun in a post pass); tree silhouettes with leaf cards. Filmic tone\n  mapping (ACES), a warm grade, subtle grain and lens vignette. The line is a thin bright curve catching the light.\n- Camera: first-person-ish, low over the water, with a gentle handheld sway; framing shifts during the fight.\n\n### Sound\n- The river (layered filtered noise, louder near riffles), birds at dusk, the swish of the line (pitch from speed),\n  the reel's click, a fish splash, a quiet guitar-and-strings ambient loop.\n\n### Test hooks\n- `state()`: \"title\", \"river\", \"casting\", \"drifting\", \"fighting\", \"landed\", \"evening_end\" (and \"paused\").\n- `snapshot()`: time of evening, line out, tension, fish on, fish landed, the fly position.\n- `test_input`: `{\"cast\": [x, z]}` (a perfect cast to a spot), `{\"strike\": true}`, `{\"land\": true}`,\n  `{\"time\": 0.9}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "31",
   "slug": "31-in-step",
   "title": "In Step",
   "tagline": "March with them. Breathe with them. Slip away when the light looks elsewhere.",
   "style": "Muted theatrical lighting",
   "style_slug": "muted-cinematic-3d",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/muted-cinematic-3d/",
   "traits": [
    "Muted palettes with sparse accents",
    "Localized beams and atmospheric depth",
    "Simplified forms retain 3D volume"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 31 · In Step\n\n*Swatch 31 of The Swatch Book. Style: **Muted theatrical lighting** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nSimplified 3D forms, restrained color and localized light create stage-like spaces. Unlike pure silhouettes, objects retain visible volume and material, while tonal layers carry much of the visual storytelling.\n\n**What to look for**\n- Muted palettes with sparse accents\n- Localized beams and atmospheric depth\n- Simplified forms retain 3D volume\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/muted-cinematic-3d/):\n\n> Simplify characters and architecture into strong volumes, using a restrained low-saturation palette and a small number of meaningful color accents. Compose broad spaces with localized beams, soft atmospheric depth and carefully staged light-dark separation. Retain enough material and volume to distinguish this from pure silhouette art. Make the player and important interactions legible through lighting and placement, not constant glowing outlines. Keep UI sparse, icons simple and effects limited to the established light vocabulary. Animate with readable weight and deliberate pacing. Avoid flat black unreadability, uncontrolled bloom, noisy realistic textures and unrelated bright UI colors.\n\n\n## The game: In Step\n\n**Hook:** *March with them. Breathe with them. Slip away when the light looks elsewhere.*\n\nA grey column of workers marches in lockstep through a vast, dim industrial city of pipes and fog, under the sweep of\nsearchlights. One of them, a child in a red scarf, wants out. You are that child. To escape you must move as they do\nwhen you are watched, and step out of line when you are not.\n\n**Why this style:** muted theatrical lighting is a muted palette with sparse accents, local light beams and\natmospheric depth, simple forms that keep volume. A rhythm-stealth game is built on light: where the beam falls, you\nmust be invisible in plain sight; in the dark, you are free.\n\n### Core loop\n- **The beat:** the column moves in a rhythm (a march beat you hear and see in their steps). The crowd performs moves\n  on the beat: step, step, stop, turn, kneel, raise heads.\n- **Under the light:** when a searchlight's beam is on you, you must do exactly what the crowd does on each beat:\n  tap on the step beats, hold to kneel, swipe to turn, with the crowd. Mistakes in the light raise **suspicion**\n  (a gauge); full suspicion and the guards take you.\n- **In the dark:** when the beam passes elsewhere, you can **slip**: swipe left/right to move one place sideways\n  through the column, edging toward its side and toward exits (a gap in a fence, a ladder, a drain). Slipping in\n  the light is the worst mistake.\n- **Stages:** each level is a scene of the escape: the factory yard, the flooded hall where the crowd wades, the\n  rooftop with wind, the train platform. New mechanics: watchers on towers with narrow beams, dogs that hear off-beat\n  steps, crowd patterns that change mid-level, a light that follows a guard's gaze.\n- At the end, the red scarf in daylight (a short, wordless ending).\n\n### Hooks to come back\n- Stars per stage (no suspicion, time), a free \"endless march\" mode with rising tempo, a daily march pattern.\n\n### Look\n- 3D scene in a near-monochrome palette (grey-greens, cold blue-greys), simple volumetric figures, deep fog layers,\n  the searchlights as **volumetric beams** (a cheap raymarch through a beam cone in a post pass, or additive cone\n  meshes with soft falloff), the red scarf as the only saturated colour on screen. Cinematic side-scrolling camera\n  with depth: the crowd recedes into fog behind. A subtle film grain.\n\n### Sound\n- The march itself is the music: synchronized footsteps (low thumps), a droning industrial hum, the searchlight's\n  electrical buzz that rises as the beam nears, a distant siren when suspicion is high. No melody except a soft\n  two-note motif when you slip successfully.\n\n### Test hooks\n- `state()`: \"title\", \"march\", \"caught\", \"escaped\" (and \"paused\").\n- `snapshot()`: stage, beat, suspicion, column position, lit (bool), next crowd move.\n- `test_input`: `{\"auto\": true}` (follow the crowd perfectly and slip when dark), `{\"stage\": 3}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "32",
   "slug": "32-broadside",
   "title": "Broadside",
   "tagline": "Lay your guns on a rolling deck and fire on the up-roll as the privateers pass.",
   "style": "Monochrome dithered 3D",
   "style_slug": "monochrome-dither-3d",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/monochrome-dither-3d/",
   "traits": [
    "Very limited color or near-monochrome images",
    "Dither patterns replace smooth gradients",
    "Recognizable 3D perspective"
   ],
   "theme": "#e9e3d2",
   "summary": "You command the port battery of the merchantman Catherine Lark across the Brine Straits. The deck rolls, so your guns rise and fall with it: lay them, then time each broadside to the swing as the privateers pass, high for range and rigging, low to hull her, while you come about to keep her in your arc and man the pump when her shot comes home. The whole sea is printed in one bit: an engraved sky, a sea of ordered dots, ships cut like woodblocks, and the dither itself making the gunsmoke and spray.",
   "how_to_play": [
    "The deck rolls under you, and your guns rise and fall with it.",
    "Drag up or down (W/S, the wheel) to lay the guns: the dotted arc and the mark on the water show where the next ball falls.",
    "Tap (Space, a click) to fire as the swing carries the mark onto her. On the ladder, the hollow pointer swings across her little ship.",
    "Swipe toward her (A/D) to come about and keep her in your arc. Hold the pump (E) when shot lets the sea in.",
    "Fire high to bring her masts down: a ship taken whole fetches more. Five legs to Halloway."
   ],
   "controls": [
    {
     "action": "Lay the guns",
     "touch": "drag up or down anywhere",
     "keys": "W / S or the up and down arrows (or the mouse wheel)"
    },
    {
     "action": "Fire the broadside",
     "touch": "tap",
     "keys": "Space, Enter or a click"
    },
    {
     "action": "Come about",
     "touch": "swipe left or right",
     "keys": "A / D or the left and right arrows"
    },
    {
     "action": "Pump",
     "touch": "hold the pump",
     "keys": "hold E or Shift"
    },
    {
     "action": "Round or chain shot",
     "touch": "tap the shot (once bought)",
     "keys": "Q"
    },
    {
     "action": "Pause",
     "touch": "the pause button",
     "keys": "Esc / P"
    },
    {
     "action": "Menus",
     "touch": "tap",
     "keys": "arrows or Tab, then Enter"
    },
    {
     "action": "Mute",
     "touch": "the sound button",
     "keys": "M"
    }
   ],
   "fonts": [
    "IM Fell English SC",
    "IM Fell English",
    "IM Fell English Italic"
   ],
   "palette": [
    "#18171c",
    "#e9e3d2",
    "#2e1d10",
    "#e8d3ad",
    "#061409",
    "#8ef59a",
    "#173d78",
    "#e4ecef",
    "#0c1322",
    "#b9c6d6"
   ],
   "features": [
    "A designed roll (two beating swells) carries the guns' aim: the dotted ballistic arc and a mark on the water ride with it, and a range ladder at the side shows her range, where the guns are laid and the live swing.",
    "Ripple broadsides: each gun fires in turn down the side; balls arc, splash or strike by hull and rigging slab tests, splinter the hull, hole sails and bring masts down (a felled mast slows her and raises her prize).",
    "Privateers that pass, overtake and wear on fixed lanes in the world, so coming about (a swipe or A/D) to keep her in your arc matters; their gunnery is spoiled by their own roll.",
    "Leaks from shot between wind and water, a hold-to-pump crewman and a well gauge; lose the hull or let the water win and she goes down.",
    "A five-leg voyage (a sloop, a brig, a fog bank where you fire at her muzzle flashes, a pair, a frigate) with ports to buy patching, guns, canvas, fine powder and chain shot.",
    "A captain's log typed after each fight with an inked portrait of her captain, a gallery of captains, the best voyage's log kept, a daily voyage, seed codes and five palettes to earn.",
    "A taught first fight (watch, lay, fire, the roll, come about, pump), synth sound (booms, splinters, a wash that follows the roll, a fiddle air and a drum on the approach), haptics and keyboard focus everywhere."
   ],
   "rendering": "The 3D scene (Gerstner sea mesh, ships, sails, smoke and spray) renders into a buffer at about 2 CSS px per dot that stores tone, a pattern code, an object id and smoke density; one composite pass outlines from depth and id and dithers each region with anchored thresholds (blue noise, Bayer, engraved hatching for the sky) before a nearest upscale, so the dots stay put as the deck rolls.",
   "brief": "# 32 · Broadside\n\n*Swatch 32 of The Swatch Book. Style: **Monochrome dithered 3D** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nThree-dimensional scenes and models convert continuous tones into limited-color dot patterns. Unlike pixel-drawn 2D characters, perspective and volume come from 3D space while stippled patterns carry tonal transitions.\n\n**What to look for**\n- Very limited color or near-monochrome images\n- Dither patterns replace smooth gradients\n- Recognizable 3D perspective\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/monochrome-dither-3d/):\n\n> Construct coherent three-dimensional scenes, then express tonal transitions through deliberate dot patterns and a very limited palette. Lock the output resolution, dither scale and palette relationships before creating assets. Preserve perspective and volume through composition, silhouette and consistent pattern density. Keep face cues, interactable objects and UI text readable by reducing texture where clarity matters. Stabilize the pattern during camera movement to avoid distracting shimmer, and use effects sparingly within the same tonal system. Avoid confusing this with hand-drawn 2D sprites, smooth gradients mixed arbitrarily with dithering and noisy patterns that hide gameplay information.\n\n\n## The game: Broadside\n\n**Hook:** *The deck rolls. The enemy passes. Fire on the up-roll.*\n\nThe merchantman *Catherine Lark* is crossing the Brine Straits in 1790-something (an invented sea), and privateers\nwant her cargo. You command her guns. The whole world is drawn in one bit: black and pale, the sea a field of dither,\nthe sky dithered clouds, the ships etched like an old computer's woodcut.\n\n**Why this style:** monochrome dithered 3D is near-monochrome images where dither replaces gradients, with clear 3D\nperspective. A broadside battle at sea, all rolling decks, smoke and sails, looks magnificent in 1-bit dither, and the\ndither itself makes smoke and spray.\n\n### Core loop\n- **The roll:** the ship rolls on the swell. Your guns' aim rises and falls with it. Drag up/down to set the guns'\n  elevation; the ballistic arc preview (a dotted line) moves with the roll.\n- **Fire:** tap to fire the broadside: a ripple of guns along the side. Timing it with the roll (fire on the up-roll\n  for range, the down-roll to hit the hull at close range) is the skill. Shots arc, splash or hit: hits splinter the\n  enemy's hull, sails or masts (dismasting slows them).\n- **Reload:** the gun crews reload (a progress bar of little figures). Keep the enemy in your firing arc: swipe\n  left/right to tack (turn), which takes time, and the enemy tacks too.\n- **Damage:** enemy shot holes your hull (pump water: a hold minigame) and sails. Lose the hull, lose the ship.\n- **Encounters:** a voyage is a series of encounters (a single sloop, a pair of brigs, a frigate, a fog bank where\n  you fire at muzzle flashes), with ports between to repair and buy better powder (range) or chain shot (sails).\n- The captain's log narrates each encounter in a few lines at the end.\n\n### Hooks to come back\n- Voyages completed, ships taken, best log, a daily voyage, ship upgrades and a gallery of the enemy captains.\n\n### Look\n- Render the 3D scene (sea mesh with Gerstner waves, ships built from simple hulls, masts and sail meshes, smoke\n  particles, spray) into a target, then a **dither pass**: convert luminance to 1-bit using a blue-noise or Bayer\n  threshold (stable in screen space, no shimmer when the camera moves slowly), with two colours chosen as a palette\n  (paper white and ink black by default; unlock palettes like a sepia print or a green phosphor). Edges reinforced by\n  an outline from depth so ships read clearly. Render at a moderate resolution and upscale crisp (each dither dot is\n  a visible pixel, about 2–3 screen pixels on a phone).\n- UI in the same two colours: a woodcut-style frame, an old typewriter-like or engraved face for the log.\n\n### Sound\n- Creaking timbers, the sea's wash rising and falling with the roll, cannon booms (low sine thump + noise), splashes,\n  wood splintering, a lone fiddle-like synth tune between encounters, a drum on the approach.\n\n### Test hooks\n- `state()`: \"title\", \"voyage\", \"encounter\", \"port\", \"log\", \"sunk\" (and \"paused\").\n- `snapshot()`: encounter, hull, enemy hull, elevation, roll phase, reload, distance.\n- `test_input`: `{\"fire\": true}`, `{\"elevation\": 0.4}`, `{\"win\": true}`, `{\"encounter\": 4}`.",
   "poster": "posters/32-broadside.jpg",
   "thumb": "thumbs/32-broadside.jpg",
   "clip": "clips/32-broadside.mp4",
   "ready": true
  },
  {
   "no": "33",
   "slug": "33-reach",
   "title": "Reach",
   "tagline": "Grow toward the light. Don't let the dark eat your branches.",
   "style": "Luminous layered environments",
   "style_slug": "luminous-layered-painting",
   "family": "render",
   "style_page": "https://gameartstyle.loopyhop.com/styles/luminous-layered-painting/",
   "traits": [
    "Multiple foreground and background layers",
    "Luminous focal points against dark masses",
    "Illustrative detail and atmospheric perspective"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 33 · Reach\n\n*Swatch 33 of The Swatch Book. Style: **Luminous layered environments** (3D & rendering).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nPainterly scenery, rich foreground/background layers and strong luminous effects create deep side-on spaces. Games may mix 2D scenery and 3D models; the shared criterion is their final treatment of light, color and layering.\n\n**What to look for**\n- Multiple foreground and background layers\n- Luminous focal points against dark masses\n- Illustrative detail and atmospheric perspective\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/luminous-layered-painting/):\n\n> Create deep, readable side-on spaces from painterly scenery and multiple foreground, playable and background planes. Use luminous focal points against dark color masses, rich but controlled vegetation detail and atmospheric perspective. Keep characters and interactive objects distinct from decorative layers through value, edge clarity and motion. 2D and 3D assets may coexist if they share palette, light direction and illustrated surface treatment. Give UI and effects restrained organic shapes and light accents; animate particles and scenery without obscuring hazards. Avoid indiscriminate glow, equally sharp details on every plane and foreground decoration that blocks the playable route.\n\n\n## The game: Reach\n\n**Hook:** *Grow toward the light. Don't let the dark eat your branches.*\n\nThe Duskwood at night: a deep forest painted in layers of dark violet and teal, glowing mushrooms, falling motes of\nlight, ancient roots. You are a seedling of light, a single glowing sprout, and you grow upward toward the moon far\nabove. Your stem is your trail; your tip is you.\n\n**Why this style:** luminous layered environments are many foreground and background layers, glowing focal points\nagainst dark masses and illustrative atmospheric depth. A glowing sprout climbing through those layers is the focal\npoint the whole style is built around.\n\n### Core loop\n- **Grow:** the tip grows upward continuously. Drag left/right (anywhere) to steer the tip; the stem curves behind it\n  as a smooth glowing vine. Desktop: ←/→ (or A/D).\n- **Light is life:** growing costs light (a meter). Collect light motes (drifting glowing seeds) to refill; fireflies\n  give more. Run out and the sprout wilts (the end).\n- **The dark:** thorny brambles (touching them breaks the tip back a little and costs light), shadow beetles that crawl\n  up your stem to eat it (shake them off by swerving hard, or let them reach a fork you abandon), owls' shadows that\n  sweep (hide behind leaves), falling dead branches.\n- **Fork:** tap to **fork**: the tip splits, and you choose which branch to keep growing (swipe toward it); the other\n  becomes a small glowing branch that keeps a light (a checkpoint you return to if your main tip is cut).\n- **Biomes** as you climb: the root floor, the mushroom groves, the hollow trunk, the canopy, the moonlit crown.\n  Height is score.\n\n### Hooks to come back\n- Best height, a **luminous herbarium** of the creatures and plants you've seen, a daily forest, unlockable sprout\n  species (a fern that grows in spirals, a vine that can cling to bark, a sapling that grows slower but sturdier).\n\n### Look\n- 2D with many parallax layers (5–7): far silhouettes in deep blue-violet, midground roots and trees in teal, a\n  foreground of dark leaves and branches that pass in front of the camera blurred. Glowing elements (the sprout,\n  motes, mushrooms, fireflies) are bright and warm-cool against dark masses, with **bloom** and light that falls on\n  nearby layers (cheap: additive glow sprites + bloom). Atmospheric depth through fog colour per layer. The stem is\n  drawn as a smooth glowing ribbon with small leaves budding along it.\n\n### Sound\n- A gentle, rising ambient score (pads, soft bells) that adds layers as you climb, mote pickups as notes of a\n  pentatonic scale (pick-ups in quick succession play little melodies), beetles' clicks, owl hoots, wind in the\n  canopy.\n\n### Test hooks\n- `state()`: \"title\", \"growing\", \"wilted\", \"crowned\" (and \"paused\").\n- `snapshot()`: height, light, forks, biome, tip position, beetles on stem.\n- `test_input`: `{\"steer\": -1|0|1, \"ms\": 500}`, `{\"light\": 1.0}`, `{\"height\": 500}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "34",
   "slug": "34-pop-up-river",
   "title": "Pop-Up River",
   "tagline": "Pull the tabs. Turn the wheels. Keep the paper boat afloat.",
   "style": "Folded paper & papercraft",
   "style_slug": "paper-craft",
   "family": "shape",
   "style_page": "https://gameartstyle.loopyhop.com/styles/paper-craft/",
   "traits": [
    "Visible paper planes and folds",
    "Layered sheets create depth",
    "Paper texture or handmade edges"
   ],
   "theme": "#2a1c12",
   "summary": "A pop-up book, The River Goes to Sea, lies open under a desk lamp, and on every spread a folded paper boat drifts down a paper river that never stops. You work the book itself: pull-tabs slide stones out of the channel and hold drawbridges up, riveted volvelles turn the river left or right, gates swing, lids cover the hole the cat's paw comes through, a grassy flap hides a shortcut, a whale spouts the boat across still water. Papercraft is layered sheets, folds and cut edges, and a pop-up book's mechanisms are exactly that made into toys; the signature moment is the page turn, when the boat rides the turning page over and the next spread's pop-ups fold up out of the paper.",
   "how_to_play": [
    "The boat drifts on its own: you can't steer it, only work the paper around it.",
    "Drag the tabs at the page's edges: stones slide away, red tabs hold drawbridges up while you hold them.",
    "Drag round the paper wheels until their channel joins the river; spin whirlpools to let go.",
    "Tap gates, lids, flaps and the whale.",
    "Rough water, bumps, paws and gulls soak the boat; a hook lifts it out. Catch three stars a page."
   ],
   "controls": [
    {
     "action": "Pull or push a tab",
     "touch": "drag the tab along the page edge",
     "keys": "Tab / Q / E to pick it, ← → to pull and push (hold for red tabs), or drag with the mouse"
    },
    {
     "action": "Turn a wheel or spin a whirlpool",
     "touch": "drag round the wheel",
     "keys": "← → turn it a click, or drag round it with the mouse"
    },
    {
     "action": "Swing a gate, flip a lid or flap, wake the whale",
     "touch": "tap it",
     "keys": "Space or Enter on the picked piece, or click"
    },
    {
     "action": "Open the book, choose a chapter",
     "touch": "tap the cards",
     "keys": "Enter, 1–5, ↑ ↓"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc or P"
    },
    {
     "action": "Mute",
     "touch": "speaker button",
     "keys": "M"
    }
   ],
   "fonts": [
    "Caprasimo",
    "Nunito",
    "Libre Caslon Text"
   ],
   "palette": [
    "#2a1c12",
    "#f4ead3",
    "#3d9a97",
    "#93b56b",
    "#bb5a3e",
    "#e3a93b",
    "#2d416e",
    "#27304a",
    "#e9bb4c",
    "#e5735a"
   ],
   "features": [
    "A real 3D pop-up book: cloth-bound boards, page stacks whose heights show how far you have read, pages that curve into the gutter, and leaves that turn about the spine so a lifted page lands exactly on the far stack; the cover opens on the title screen and pages riffle when you jump chapters.",
    "Every spread is one draw: a mesh of die-cut sheets with real thickness (pale cut cores on coloured card), where each vertex picks its part, so tabs slide, wheels turn, gates swing, flaps flip and pop-ups fold flat and rise with a little bounce as the page opens.",
    "Twenty hand-built spreads in four chapters (the brook, the mill town, the night river, the sea), each introducing one mechanism before mixing it with the others, plus today's river: three spreads picked, mirrored and re-timed from the day's seed.",
    "Seven paper mechanisms (pull-tabs on linkages, spring tabs, riveted volvelle junctions, whirlpool wheels, lock gates, lids, shortcut flaps, a spouting whale) and five hazards with readable rhythms (fishermen's hooks, a cat's paw through a die-cut hole, gulls and an owl on wire arms, rapids, still water).",
    "A wetness system: the boat's paper darkens in blotches from the waterline up; when it soaks through it unfolds flat and sinks, and you fold a new one.",
    "Warm desk-lamp light with soft shadows that stay crisp where layers touch, fibrous paper grain, spot-varnished water with drifting ink current lines, gold-foil stars, brass split-pin fasteners, and a night chapter lit by paper lanterns.",
    "Stars per spread, best times per chapter, chapters that unlock in turn, four unlockable boat folds (classic, newspaper hat boat, swan, crane) and a daily remix with its own best.",
    "Paper foley for everything (tab hiss and clicks, wheel ratchets, flaps, gates, page whooshes, pop-up fwumps) over a music-box waltz that changes with each chapter."
   ],
   "rendering": "A lamp-space shadow map (2048², with a blocker search so contact shadows stay sharp and tall pop-ups throw soft ones) feeds one paper shader drawing every model (desk, spreads, boat) into a 4× MSAA target, where per-part transforms from a uniform table animate the paper and mipmapped print textures (drawn with the kit's 2D batch) carry the ink; one post pass adds the lamp's vignette, a soft focus at the frame's far edges and grain, then the paper-card UI batch draws on top.",
   "brief": "# 34 · Pop-Up River\n\n*Swatch 34 of The Swatch Book. Style: **Folded paper & papercraft** (Shape & material).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nPaper planes, folds, thickness and overlapping layers become visible design elements. This includes digital pop-up worlds and environments built from physical paper models; subject matter is not the defining factor.\n\n**What to look for**\n- Visible paper planes and folds\n- Layered sheets create depth\n- Paper texture or handmade edges\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/paper-craft/):\n\n> Construct scenes from visible sheets, folds, cut edges, tabs and layered paper planes with consistent thickness. Use a restrained paper palette, subtle fiber texture and contact shadows that explain how pieces overlap. Characters and props should share a credible folded or cut-paper construction, while important interactions remain obvious. Let animation hinge, unfold or slide along plausible paper joints. Build UI panels and icons from the same layered sheets, keeping text clean. The result may be digital or model-based. Avoid pretending every curved surface can fold without seams, unrelated clay materials, glossy plastic and shadows that contradict the paper layers.\n\n\n## The game: Pop-Up River\n\n**Hook:** *Pull the tabs. Turn the wheels. Keep the paper boat afloat.*\n\nA pop-up book called *The River Goes to Sea*. On each spread a paper river runs from the fold to the edge, and a\nlittle folded paper boat drifts down it, never stopping. The book is full of paper mechanisms: pull-tabs that slide\nbridges, volvelles (rotating wheels) that turn channels, flaps that lift to reveal a path, a fold-up lighthouse. You\nwork them, live, to get the boat safely to the next page.\n\n**Why this style:** papercraft is visible paper planes and folds, layered sheets, paper texture and handmade edges.\nA pop-up book's mechanisms are exactly that, made into interactive toys.\n\n### Core loop\n- **The boat drifts** along the river's current (it follows the water channel; it can't be steered directly).\n- **Mechanisms** (touch and drag):\n  - **pull-tabs** (drag a paper tab along its slot): slide a bridge into place, pull a rock aside, raise a paper\n    wave;\n  - **volvelles** (turn a paper wheel by dragging around it): rotate a junction to send the river left or right, or\n    spin a whirlpool;\n  - **flaps** (tap to lift/drop): open a lock gate, hide the boat from a paper gull, reveal a shortcut;\n  - **pop-ups** that rise as the page opens: a castle, a waterfall, a paper whale that can blow the boat along.\n- **Dangers:** paper rocks, a fishing hook, gulls, the cat's paw coming through a die-cut hole, wet patches where the\n  boat starts to sog (a wetness meter: too long in rough water and it unfolds and sinks).\n- **Collect:** paper stars along the way; three per spread.\n- **The book:** 20 spreads in four chapters (the brook, the mill town, the night river, the sea); each page turn is a\n  real 3D page turn where the next spread's pop-ups fold up out of the page as it opens.\n\n### Hooks to come back\n- Stars per spread, time trials once a chapter is done, a daily spread remix, unlockable boat folds (a crane, a\n  swan, a newspaper hat boat).\n\n### Look\n- True 3D paper: the book lies open on a table; each spread is a set of paper planes (layered sheets) with paper\n  texture (fibres, slight translucency where light passes), visible folds as creases with soft shading, crisp die-cut\n  edges, tiny shadows between layers, mechanisms with visible slots and paper rivets. Warm, gentle light from a desk\n  lamp. A limited palette of coloured papers (river teal, cream, brick, mustard, ink blue). Typography printed on the\n  pages like a children's book.\n\n### Sound\n- Paper foley everything: slides, rustles, flaps, folds (filtered noise shapes), a page-turn whoosh, water as soft\n  brush-noise, a music-box and soft-celeste loop.\n\n### Test hooks\n- `state()`: \"title\", \"book\", \"spread\", \"turning\", \"sunk\", \"end\" (and \"paused\").\n- `snapshot()`: spread, boat progress and wetness, stars, mechanism states.\n- `test_input`: `{\"mech\": [i, value]}` (set mechanism i), `{\"auto\": true}` (solve the spread for tests),\n  `{\"spread\": 8}`.",
   "poster": "posters/34-pop-up-river.jpg",
   "thumb": "thumbs/34-pop-up-river.jpg",
   "clip": "clips/34-pop-up-river.mp4",
   "ready": true
  },
  {
   "no": "35",
   "slug": "35-umbra",
   "title": "Umbra",
   "tagline": "The shadows are the floor. You hold the lamp.",
   "style": "Layered silhouettes",
   "style_slug": "layered-silhouette",
   "family": "shape",
   "style_page": "https://gameartstyle.loopyhop.com/styles/layered-silhouette/",
   "traits": [
    "Solid foreground silhouettes",
    "Separated depth layers",
    "Background value reveals shape"
   ],
   "theme": "#101014",
   "summary": "",
   "how_to_play": [],
   "controls": [],
   "fonts": [],
   "palette": [],
   "features": [],
   "rendering": "",
   "brief": "# 35 · Umbra\n\n*Swatch 35 of The Swatch Book. Style: **Layered silhouettes** (Shape & material).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nCharacters and foregrounds appear primarily as solid contours, while lighter or hazier background layers establish depth. Backgrounds may be monochrome or colored; shape matters more than surface detail.\n\n**What to look for**\n- Solid foreground silhouettes\n- Separated depth layers\n- Background value reveals shape\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/layered-silhouette/):\n\n> Represent characters and foreground obstacles mainly as solid, clearly designed silhouettes. Establish depth with separated background value layers, haze and controlled overlap; choose either monochrome or a coherent colored-background palette. Reserve internal details for essential readable features. Keep props, hazards, icons and effects consistent with the silhouette language, using contrast and motion to distinguish their roles. Document which layer is playable and preserve collision readability. Animate expressive profiles rather than relying on surface detail. Avoid merging active targets into the background, realistic texture overlays and adding outlines or highlights that erase the silhouette hierarchy.\n\n\n## The game: Umbra\n\n**Hook:** *The shadows are the floor. You hold the lamp.*\n\nA wordless shadow theatre in a misty forest. A small cloaked figure walks, always forward, across a stage of layered\npaper cut-outs: trees, ruins, crooked bridges, hanging lanterns. It can only walk on **shadows**: the silhouettes the\ncut-outs throw onto the misty backdrop. You hold the lamp. Move it, and every shadow moves, grows and shrinks.\n\n**Why this style:** layered silhouettes are solid foreground silhouettes, separated depth layers and background\nvalues that reveal shape. Here the silhouettes are the level, the depth of each layer is the puzzle (closer to the\nlamp throws bigger, faster-moving shadows), and the fog is the stage.\n\n### Core loop\n- **The lamp:** drag the lamp anywhere behind the cut-out layers. Its position projects each layer's cut-outs onto\n  the backdrop: shadow position = projection from the lamp through the cut-out onto the backdrop plane. Cut-outs in\n  the near layer move a lot; far ones barely move.\n- **The walker** moves forward at a steady pace on the backdrop plane, walking on any shadow beneath it, falling if\n  there's none (into the fog: the level restarts at the last lantern). Tap to make it wait (it stops for as long as\n  you hold).\n- **Puzzles:** bridge a gap by moving a branch's shadow under the walker; make a shadow staircase by lining up three\n  layers; enlarge a shadow by bringing the lamp close to a cut-out (but its edge moves too fast); avoid **light**\n  hazards (in some scenes, bright patches where the backdrop is lit burn the walker: keep it in shadow); moving\n  cut-outs (a swinging lantern, turning windmill blades) that make shadows move on their own.\n- **Fireflies:** collectible glows that only appear in shadow.\n- 30 scenes in three acts (the wood, the ruined keep, the lake at night) with a final scene where you must keep the\n  walker in shadow while the moon rises.\n\n### Hooks to come back\n- Stars per scene (fireflies, time, no falls), a free \"shadow play\" stage to make your own shadow pictures,\n  a daily scene.\n\n### Look\n- Pure silhouettes: cut-outs are solid black shapes with intricate edges (procedural trees, rope, ruins, ferns), the\n  backdrop is misty layered greys with soft value steps; depth layers separated by fog values; the lamp's warm glow\n  is the only colour (amber), with a halo. The shadows on the backdrop are computed exactly from the lamp (project the\n  2D shapes) and drawn with soft penumbra that widens with distance. The walker is a tiny silhouette with a flowing\n  cloak.\n\n### Sound\n- Hushed forest ambience, a lamp's soft flame flicker, the walker's tiny footsteps on \"shadow\" (soft wooden taps), a\n  slow, sparse piano-like theme, a low gong on a fall.\n\n### Test hooks\n- `state()`: \"title\", \"acts\", \"scene\", \"fallen\", \"cleared\" (and \"paused\").\n- `snapshot()`: scene, walker x and on-shadow, lamp position, fireflies, falls.\n- `test_input`: `{\"lamp\": [x, y]}`, `{\"wait\": true}`, `{\"solve\": true}`, `{\"scene\": 11}`.",
   "poster": null,
   "thumb": null,
   "clip": null,
   "ready": false
  },
  {
   "no": "36",
   "slug": "36-shapeshift",
   "title": "Shapeshift",
   "tagline": "Circle rolls, square holds, triangle leaps: be the right shape at the right moment.",
   "style": "Minimal geometric color",
   "style_slug": "minimal-geometric",
   "family": "shape",
   "style_page": "https://gameartstyle.loopyhop.com/styles/minimal-geometric/",
   "traits": [
    "Basic geometric shapes",
    "Restrained color count",
    "Order through proportion and negative space"
   ],
   "theme": "#f2e8da",
   "summary": "A small shape crosses single-screen compositions of flat colour, always moving, and you choose what it is: the circle rolls and bounces, the square stops dead, grips slopes and smashes cracked tiles, the triangle leaps the moment it forms. Momentum carries through every change, so each level is a short puzzle of timing. In a style built from circles, squares and triangles, the hero is the vocabulary itself, and its only verb is changing shape.",
   "how_to_play": [
    "The shape always moves on its own and turns back at walls. You only choose what it is.",
    "Circle rolls: quick, faster downhill, bounces, floats, and springs throw it high.",
    "Square holds: stops at once, tumbles up any slope, sinks, and smashes cracked tiles it lands on or tumbles into.",
    "Triangle leaps the instant it forms (off the ground, off water, off a spring just fired), and splits cracks above it.",
    "Reach the ringed sign. Take the diamond for a perfect route, and beat par."
   ],
   "controls": [
    {
     "action": "Become a circle",
     "touch": "tap the left pad, or swipe left/right",
     "keys": "1, A/D or Left/Right"
    },
    {
     "action": "Become a square",
     "touch": "tap the middle pad, or swipe down",
     "keys": "2, S or Down"
    },
    {
     "action": "Become a triangle (leap)",
     "touch": "tap the right pad, or swipe up (again to leap again)",
     "keys": "3, W or Up"
    },
    {
     "action": "Cycle the form",
     "touch": "tap the level",
     "keys": "Space"
    },
    {
     "action": "Restart the level",
     "touch": "pause, Restart",
     "keys": "R"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc / P"
    },
    {
     "action": "Mute",
     "touch": "sound button or settings",
     "keys": "M"
    }
   ],
   "fonts": [
    "Urbanist"
   ],
   "palette": [
    "#f2e8da",
    "#c65a3e",
    "#24303f",
    "#eeaa3c",
    "#dcebe6",
    "#1f6c75",
    "#ee6a4f",
    "#f5cd55",
    "#2b4897",
    "#172036",
    "#3a5181",
    "#f3ecdc",
    "#efebe3",
    "#1c1c21",
    "#2c55c4",
    "#e0432f",
    "#f3b822"
   ],
   "features": [
    "Three forms with crisp, predictable physics on a fixed 240 Hz sub-step: the circle drives to a quick cruise and keeps downhill speed, the square tumbles edge over edge at a fixed pace and grips any slope, the triangle hops when it forms and skates on a base wide enough to span one-cell gaps. Velocity carries through every change; a square formed in mid-air slams straight down.",
    "60 hand-made single-screen levels in five sets, each one swatch of colour and one new idea: Form (roll, hold, leap), Crack (smash down, ram through, split up), Spring (springs throw what is light, and the spring-leap), Tide (the square sinks, the rest float), Colour (gates that pass only their own shape, in Kandinsky's primaries).",
    "Every level is proved: a scripted route clears it and takes its gem, and an idle run must fail. The check runs natively while designing and in the browser from the playtest (60 of 60).",
    "Three marks per level (cleared, the gem on the perfect route, under par), best times, a book of levels drawn as tiny compositions, and levels that open as you go (two may be skipped).",
    "Today's shape and Flow: levels joined from hand-made halves (six tops, six bottoms, mirrored), each pair proved solvable with its gem before it is played; Flow strings them endlessly with three lives and rising difficulty.",
    "One signed-distance shader draws the hero as a smooth morph between circle, square and triangle with one corner radius, squash and stretch in world axes, a rolling eye, and a fading trail of outlines; particles are flat squares, circles and triangles that shrink rather than fade.",
    "Generative music: a slow two-chord pad per set and a quiet pulse; every bounce, landing, hop, tumble and morph plays a note of the set's pentatonic scale, higher the higher the shape is on the page, so each run writes its own melody. Each form has a voice: a soft roll and boop, a low thud per tumble, a bright pluck.",
    "A first run that teaches by playing (hints with the form's icon on the first levels, the pad button pulsing), a Bauhaus-poster title with a little stage where the shape plays by itself, a nine-column wipe between screens, and end cards whose time counts up and whose marks pop in."
   ],
   "rendering": "One 2D batch with a custom fragment shader: flat masses merged into runs that bleed off the frame, slopes as triangles, gates, springs, cracks and spikes in the same grammar, water as merged translucent rectangles over the shape with a rippling surface line, and the hero as a signed-distance blend of three forms (kind 16) with a cut-out eye; no post-processing, no textures, no gradients.",
   "brief": "# 36 · Shapeshift\n\n*Swatch 36 of The Swatch Book. Style: **Minimal geometric color** (Shape & material).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nCharacters and environments reduce to rectangles, circles, triangles and a small set of colors. Proportion, negative space, arrangement and movement carry the image while decorative texture recedes.\n\n**What to look for**\n- Basic geometric shapes\n- Restrained color count\n- Order through proportion and negative space\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/minimal-geometric/):\n\n> Reduce characters, props and environments to a disciplined vocabulary of rectangles, circles, triangles and a few related geometric forms. Lock a small palette and give proportion, spacing, orientation and movement clear roles in identity and gameplay. Use negative space as an active compositional element, with little or no decorative texture. UI, icons and effects should use the same shape grammar and controlled color relationships. Animate through precise, expressive timing and transformations that preserve recognizable roles. Do not rely on color alone for critical distinctions. Avoid ornamental clutter, inconsistent corner treatments, arbitrary extra colors and realistic shading that weakens the abstraction.\n\n\n## The game: Shapeshift\n\n**Hook:** *Circle rolls. Square holds. Triangle leaps. Be the right shape at the right time.*\n\nA minimal world of flat colour and negative space. A small shape travels through it, always moving forward, and you\nchoose what it is: a **circle**, a **square** or a **triangle**. Each shape obeys the world differently. Levels are\nshort, precise compositions where the answer is a sequence of transformations at the right moments.\n\n**Why this style:** minimal geometric colour is basic shapes, few colours and order through proportion and negative\nspace. A game whose hero is a basic shape and whose verbs are changes of shape is that style made playable.\n\n### Core loop\n- **Tap** (or Space) cycles circle → square → triangle (with a quick morph animation); **swipe left/right/up** (or\n  1/2/3) to choose a form directly.\n- **The forms:**\n  - **Circle** rolls: fast on flats, accelerates down slopes, bounces off springy surfaces, rolls through tubes.\n  - **Square** is heavy: stops sliding, grips slopes (doesn't slide back), breaks fragile floors when it drops on\n    them, pushes blocks, sinks in water.\n  - **Triangle** points up: hops forward on each change into it, wedges into V-shaped notches (to cross gaps exactly\n    its size), and splits fragile ceilings when it rises.\n- The shape keeps its momentum across transformations: roll fast as a circle, become a triangle at the lip of a ramp\n  to launch, become a square in mid-air to drop through a fragile floor.\n- **Colours** carry rules: walls of a colour only let through the shape of that colour (one rule, introduced late).\n- 60 levels in 5 sets, each a single screen that reads at a glance; a gem in each level for a perfect route.\n\n### Hooks to come back\n- Completion, gems, best time per level, a daily level (a remix generated from parts), a level editor-free \"flow\"\n  mode that strings levels together endlessly.\n\n### Look\n- Flat colour fields with careful proportion: each set has its own palette of three or four colours (a terracotta\n  set, a sea set, a night set…), generous negative space, thin precise lines for paths, no gradients, no texture. The\n  shape squashes slightly on landings, leaves a fading trail of its outline. Typography: a geometric sans with\n  character (not one of the banned faces), numbers large and sparse.\n\n### Sound\n- Each form has a voice: the circle a soft rolling tone, the square a low thud, the triangle a bright pluck. The\n  music is minimal and generative: notes from the shape's events (bounces, landings) quantized to a quiet scale over\n  a soft pad, so every run plays its own melody.\n\n### Test hooks\n- `state()`: \"title\", \"sets\", \"level\", \"cleared\", \"failed\" (and \"paused\").\n- `snapshot()`: level, form, position, velocity, gem, time, deaths.\n- `test_input`: `{\"form\": \"circle\"|\"square\"|\"triangle\"}`, `{\"solve\": true}`, `{\"level\": 23}`.",
   "poster": "posters/36-shapeshift.jpg",
   "thumb": "thumbs/36-shapeshift.jpg",
   "clip": "clips/36-shapeshift.mp4",
   "ready": true
  },
  {
   "no": "37",
   "slug": "37-pulsewave",
   "title": "Pulsewave",
   "tagline": "No gun. Hold to charge a shockwave, let go, and turn the swarm into sparks.",
   "style": "Neon vector-like graphics",
   "style_slug": "neon-vector",
   "family": "shape",
   "style_page": "https://gameartstyle.loopyhop.com/styles/neon-vector/",
   "traits": [
    "Luminous lines on dark fields",
    "Abstract grids and geometric objects",
    "High-contrast particles and bloom"
   ],
   "theme": "#03040a",
   "summary": "A ship with no gun in a neon arena on a spring grid: hold to charge a shockwave (you slow down, and enemies close by feed the charge faster), let go and it rings out to the radius you charged, turning everything it passes into sparks while the lattice bulges like glass around it. Every kill in one pulse is worth more than the last, so the game is a dare: let the swarm close in, then release. Neon vector graphics are luminous lines, grids and particles on black; a wavefront rippling through a bending grid is that style's whole fireworks show.",
   "how_to_play": [
    "Left thumb steers: drag anywhere on the left half (WASD or arrows on a keyboard).",
    "Right thumb: hold to charge, let go to pulse (Space or the mouse button). The dashed ring shows the reach.",
    "Charging slows you; enemies close by charge you faster. Each kill in one pulse is worth more than the last.",
    "Geoms lift the multiplier, which fades if you stop collecting.",
    "Blue shells need a white-hot pulse (past the tick). Pulse a red well until it collapses into a second blast."
   ],
   "controls": [
    {
     "action": "Steer",
     "touch": "drag on the left half (a floating stick)",
     "keys": "WASD / arrow keys"
    },
    {
     "action": "Charge",
     "touch": "hold anywhere on the right half",
     "keys": "hold Space (or K, X, or the mouse button)"
    },
    {
     "action": "Pulse",
     "touch": "lift the right thumb",
     "keys": "let go"
    },
    {
     "action": "One-thumb mode",
     "touch": "settings: stop steering to charge, steer again to pulse",
     "keys": "-"
    },
    {
     "action": "Pause",
     "touch": "pause button",
     "keys": "Esc / P"
    },
    {
     "action": "Mute",
     "touch": "sound button or settings",
     "keys": "M"
    }
   ],
   "fonts": [
    "Chakra Petch"
   ],
   "palette": [
    "#03040a",
    "#2d40ff",
    "#3ef1ff",
    "#e4fdff",
    "#ffad1f",
    "#ff3ad2",
    "#95ff2b",
    "#ff6b3d",
    "#5c84ff",
    "#ff2b57"
   ],
   "features": [
    "Charge-and-release combat: no shooting; the pulse radius grows with the hold (a live dashed preview), charging halves your speed, nearby enemies siphon into the charge (drawn as lines), and big pulses cost a recovery beat.",
    "A mass-spring lattice (825 points, a damped wave equation) that bulges under every wavefront, dents where enemies arrive, gets dragged into wells and brightens where it bends.",
    "Seven enemy kinds, one colour each: amber seeker kites, magenta drifters, lime splitters (their splinters dodge the pulse that made them), coral serpents of triangles, blue shells that only white-hot rings crack, red wells that drink the swarm and the grid (collapse one for a free blast, or let it burst into motes).",
    "Chains and geoms: every kill in one pulse is worth 5 % more than the last; geoms lift a fading multiplier; extra lives at score milestones; a pattern event each minute (ring closing, serpent, swarm, twin wells).",
    "A first run that teaches by playing in six steps (steer, charge, geoms, let them come, shells, go), forgiving contact while training; later runs skip it.",
    "Hooks to return: best score, multiplier and chain, a daily arena with today's best, five unlockable ship outlines and four grid colours.",
    "A 124 BPM A-minor loop whose layers (kick and rolling bass, hats, arpeggio, claps, lead, pad) come in with the multiplier; a filtered saw that rises with the charge; booms and cracks scaled by size; kill blips that climb the pentatonic scale along a chain.",
    "Every word and number in a stroke alphabet drawn with the same neon pen; chamfered vector panels and buttons; title traced on stroke by stroke over an attract-mode arena flown by an autopilot."
   ],
   "rendering": "Everything luminous is a batch instance with a custom fragment shader (capsules, rings, dashed rings, arcs and sparks with a crisp core, a white-hot centre and an exponential halo) drawn additively into an Rgba16Float buffer; a five-level bloom chain adapted from the kit's is fused with one grade pass (glow, chromatic aberration only around big blasts, white flash, vignette, soft shoulder, dither), and solid type is set on top afterwards so it stays crisp.",
   "brief": "# 37 · Pulsewave\n\n*Swatch 37 of The Swatch Book. Style: **Neon vector-like graphics** (Shape & material).*\n\n## The request this collection answers\n\n> \"for each of the art styles in here, create a unique game suited for that art style and with a game mechanic, can be in 2d, 3d, isometric, anything you thing about... should look final product (not prototype), for mobile (using rust + webgpu) ... dont take a reference any past game or project created on this machine, as you have to plan a cool mechanic, engaging, adictive and unique for each of the games... be creative and pay attention to small details\"\n\n## The style\n\nGlowing fine lines, geometric grids and bright particles form images against dark backgrounds, echoing vector displays. “Vector-like” describes the appearance rather than claiming a particular underlying display technology.\n\n**What to look for**\n- Luminous lines on dark fields\n- Abstract grids and geometric objects\n- High-contrast particles and bloom\n\n**Art direction** (quoted from the style's page, https://gameartstyle.loopyhop.com/styles/neon-vector/):\n\n> Use luminous fine lines, clean geometric outlines, abstract grids and concise particle trails against dark fields. Set a clear hierarchy of line brightness, thickness and accent colors for players, enemies, hazards and backgrounds. Keep glow controlled so the underlying geometry remains readable during dense action. Build UI and icons from the same luminous stroke vocabulary with solid, legible text where needed. Animate through crisp trajectories and brief impact flashes while offering reduced-flash treatment. This describes a vector-like appearance, not a required display technology. Avoid full-screen bloom, indistinguishable trails, random color cycling and conventional textured realism.\n\n\n## The game: Pulsewave\n\n**Hook:** *You don't shoot. You charge, and you release.*\n\nA neon arena on a dark grid. Swarms of geometric enemies pour in from the edges: diamonds that chase, pinwheels that\ndrift, squares that split, snakes of triangles. Your ship has no guns. It has a **pulse**: hold to charge a\nshockwave, release to blast it outward. The longer you charge, the bigger the ring, but while charging you are slow\nand exposed. The grid bends under every wave.\n\n**Why this style:** neon vector graphics are glowing lines on dark fields, grids and geometric objects, high-contrast\nparticles and bloom. A shockwave that ripples through a warping grid and turns a swarm into sparks is the style's\nwhole fireworks show.\n\n### Core loop\n- **Two thumbs:** left thumb moves the ship (a floating `kit::ui::Stick` on the left half); right thumb **holds to\n  charge** (a ring grows around the ship), **releases to pulse**. Desktop: WASD/arrows to move, Space or mouse button\n  to charge. One-thumb option in settings: charge while not moving.\n- **Pulse:** the shockwave expands to the charged radius; enemies inside are destroyed in a burst of sparks; the grid\n  under it dents and springs back (a mass-spring grid). A tiny pulse is nearly free; a full pulse clears the screen\n  but takes 2 s to charge, during which you move at half speed.\n- **Multiplier:** destroyed enemies drop **geoms** (small glowing pickups) that raise the multiplier when collected;\n  the multiplier decays slowly.\n- **Enemies** with clear behaviours: chasers, wanderers, splitters, shielded ones (only big pulses break shields),\n  black holes that suck the grid and enemies in (pulse them to collapse them into a huge burst).\n- **Waves** escalate; every 60 s a pattern event (a ring of enemies closing in, a snake that circles).\n- Three lives; extra lives at score milestones.\n\n### Hooks to come back\n- High score, best multiplier, a daily arena (seeded spawns), unlockable ship skins (outline shapes) and grid colours.\n\n### Look\n- Pure neon: glowing lines and shapes (draw with the batch: thin lines and rings with `Blend::Add`), a deformable\n  grid (a mass-spring lattice of points drawn as lines whose brightness rises with displacement), thousands of spark\n  particles, and a strong **bloom** (`kit::post::Bloom`, threshold low, on an Rgba16Float buffer) plus a faint\n  chromatic aberration on big pulses (scaled by `cx.flash()`). Background near-black with a faint vignette.\n  Palette: cyan, magenta, lime, amber, each enemy type a colour.\n\n### Sound\n- A driving synth loop (arpeggiated saws, four-on-the-floor kick from sine sweeps) that layers up with the\n  multiplier; the charge as a rising filtered sweep (pitch = charge); the pulse as a deep boom with a bright crack\n  scaled by size; enemy deaths as short pitched blips that harmonize with the music's key.\n\n### Test hooks\n- `state()`: \"title\", \"playing\", \"dying\", \"over\" (and \"paused\").\n- `snapshot()`: score, multiplier, lives, wave, charge, ship position, enemy count.\n- `test_input`: `{\"move\": [x, y], \"ms\": 500}`, `{\"pulse\": 1.0}` (charge then release), `{\"godmode\": true}`,\n  `{\"wave\": 6}`.",
   "poster": "posters/37-pulsewave.jpg",
   "thumb": "thumbs/37-pulsewave.jpg",
   "clip": "clips/37-pulsewave.mp4",
   "ready": true
  }
 ]
};
