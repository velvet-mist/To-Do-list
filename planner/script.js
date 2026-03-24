// Final theme system - added Maroon/Burgundy, thematic names, bulletproof button
const presets = {
  cozy: {
    "--cream": "#f5ead8",
    "--cream-dark": "#edd9b8",
    "--cream-light": "#fdf6ec",
    "--brown": "#5c3317",
    "--brown-mid": "#8b5e3c",
    "--brown-light": "#c49a6c",
    "--tan": "#e8c99a",
    "--tan-light": "#f0dfc0",
    "--warm-white": "#fefaf4",
    "--accent": "#d4874a",
    "--muted": "#b89070",
    "wheel-colors": ["#ebc57a","#b95a49"]
  },
  latte: {
    "--cream": "#d2b48c",
    "--cream-dark": "#deb887",
    "--cream-light": "#f5deb3",
    "--brown": "#8b4513",
    "--brown-mid": "#a0522d",
    "--brown-light": "#cd853f",
    "--tan": "#daa520",
    "--tan-light": "#f4a460",
    "--warm-white": "#fff8dc",
    "--accent": "#a56040",
    "--muted": "#000000",
    "wheel-colors": ["#ff8c42","#ff6b35"]
  },
  mint: {
    "--cream": "#98fb98",
    "--cream-dark": "#90ee90",
    "--cream-light": "#f0fff0",
    "--brown": "#228b22",
    "--brown-mid": "#32cd32",
    "--brown-light": "#adff2f",
    "--tan": "#f0f8f0",
    "--tan-light": "#f5fffa",
    "--warm-white": "#f5fffa",
    "--accent": "#32cd32",
    "--muted": "#000008",
    "wheel-colors": ["#4a90e2","#357abd"]
  },
  moss: {
    "--cream": "#d4edda",
    "--cream-dark": "#c3e6cb",
    "--cream-light": "#e8f5e8",
    "--brown": "#155724",
    "--brown-mid": "#28a745",
    "--brown-light": "#90ee90",
    "--tan": "#d1ecf1",
    "--tan-light": "#e3f2fd",
    "--warm-white": "#f8f9fa",
    "--accent": "#28a745",
    "--muted": "#4a8c5e",
    "wheel-colors": ["#5fa377","#4a8c5e"]
  },
  lavender: {
    "--cream": "#e6e6fa",
    "--cream-dark": "#d8bfd8",
    "--cream-light": "#f3e5f5",
    "--brown": "#6a1b9a",
    "--brown-mid": "#ab47bc",
    "--brown-light": "#ce93d8",
    "--tan": "#f3e5f5",
    "--tan-light": "#faf5ff",
    "--warm-white": "#faf5ff",
    "--accent": "#9c27b0",
    "--muted": "#6a1b9a",
    "wheel-colors": ["#9b59b6","#8e44ad"]
  },
  burgundy: {
    "--cream": "#dcae96",
    "--cream-dark": "#bc8f8f",
    "--cream-light": "#e8d0c8",
    "--brown": "#800000",
    "--brown-mid": "#8b0000",
    "--brown-light": "#a52a2a",
    "--tan": "#cd853f",
    "--tan-light": "#deb887",
    "--warm-white": "#f5f5dc",
    "--accent": "#b22222",
    "--muted": "#000000",
    "wheel-colors": ["#c71585","#b22222"]
  }
};

let currentTheme = 'cozy';
const themeOrder = ['cozy', 'latte', 'mint', 'moss', 'lavender', 'burgundy'];

function applyTheme(name) {
  console.log('🎨 Theme:', name);
  const theme = presets[name];
  Object.entries(theme).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
  currentTheme = name;
  localStorage.plannerTheme = name;
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = `🎨 ${name.replace(/^\w/, c => c.toUpperCase())}`;
}

function toggleTheme() {
  const idx = themeOrder.indexOf(currentTheme);
  applyTheme(themeOrder[(idx + 1) % themeOrder.length]);
}

function initTheme() {
  console.log('🖌️ Themes ready!');
  const saved = localStorage.plannerTheme;
  applyTheme(saved && presets[saved] ? saved : 'cozy');
  if (!document.getElementById('theme-toggle')) {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;background:rgba(255,255,255,.98);border:2px solid #eee;border-radius:30px;padding:12px 20px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 6px 25px rgba(0,0,0,.2);backdrop-filter:blur(15px);transition:all .3s;min-width:130px;font-family:sans-serif;text-align:center;letter-spacing:.3px;';
    btn.onclick = toggleTheme;
    btn.title = 'Cycle themes (6 total: Cozy, Latte, Mint, Moss, Lavender, Burgundy)';
    document.body.appendChild(btn);
  }
}

document.addEventListener('DOMContentLoaded', initTheme);

console.log('script.js complete - themes functional!');

