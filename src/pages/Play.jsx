import './Play.css';

// ── Captions ─────────────────────────────────────────────────────────────────
// Key = "{col}/{stem}" matching folder/filename (e.g. '1/1', '2/hawaii')
// left: bottom-left text, right: bottom-right text
const captions = {
  '1/1':  { left: 'Photography', right: '2017' },
  '1/2':  { left: 'Photography', right: '2017' },
  '1/3':  { left: 'Photography', right: '2017' },
  '1/4':  { left: 'Photography', right: '2017' },
  '1/5':  { left: 'Photography', right: '2017' },
  '1/6':  { left: 'Photography', right: '2017' },
  '1/7':  { left: 'ForkForkFork Publication Section Cover', right: '2023' },
  '1/8':  { left: 'Graduation Banner', right: '2025' },
  '1/9':  { left: 'Kerry Hotel Shanghai Campaign', right: '2025' },
  '1/10': { left: 'Scientia Magazine Back Cover', right: '2025' },
  '1/11': { left: 'Fluorescent Paint', right: '2022' },
  '1/12': { left: 'Event Poster/Identity', right: '2024' },
  '1/13': { left: 'Event Banner/Identity', right: '2024' },
  '1/14': { left: 'Event Poster/Identity', right: '2024' },
  '1/15': { left: 'Typography', right: '2017' },
  '1/16': { left: 'Ardent Archives Publication', right: '2023' },
  '1/17': { left: 'Wearable Sensing Project', right: '2025' },
  '1/18': { left: 'Super Salamander Squad Palette', right: '2025' },
  '1/19': { left: 'Typeface', right: '2026' },
  '1/20': { left: 'Typeface', right: '2026' },
  '1/21': { left: 'Cavalry Audioreactive', right: '2026' },
  '1/22': { left: 'Cavalry Audioreactive', right: '2026' },
  '1/23': { left: 'Cavalry Booleans', right: '2026' },
  '1/24': { left: 'Cavalry Wave Deformer', right: '2026' },
  '1/25': { left: 'Soft RObotics', right: '2026' },

  '2/1':   { left: 'Photography', right: '2017' },
  '2/2':   { left: 'Photography', right: '2017' },
  '2/3':   { left: 'Photography', right: '2017' },
  '2/4':   { left: 'Photography', right: '2017' },
  '2/5':   { left: 'Photography', right: '2017' },
  '2/6':   { left: 'AP Art Portfolio Piece', right: '2023' },
  '2/7':   { left: 'TEDxSMICSchool Design Theme Board', right: '2024' },
  '2/8':   { left: 'ForkForkFork Publication Back Cover', right: '2023' },
  '2/9':   { left: 'Scientia Magazine Front Cover', right: '2025' },
  '2/10':  { left: 'Lino Print', right: '2022' },
  '2/11':  { left: 'Ardent Archives Publication Front Cover', right: '2023' },
  '2/12':  { left: 'Woodcut Print', right: '2022' },
  '2/13':  { left: 'Typeface Poster', right: '2024' },
  '2/14':  { left: 'Woodcut Print', right: '2022' },
  '2/15':  { left: 'Silkscreen Print', right: '2022' },
  '2/15b': { left: 'Wearable Sensing Project', right: '2025' },
  '2/16':  { left: 'Salamander Super Squad', right: '2025' },
  '2/17':  { left: 'Salamander Super Squad Shape Library', right: '2025' },
  '2/18':  { left: 'Typeface', right: '2026' },
  '2/19':  { left: 'Cavalry Animation Assets', right: '2026' },
  '2/20':  { left: 'Cavalry Audioreactive', right: '2026' },
  '2/21':  { left: 'Cavalry Arrays', right: '2026' },
  '2/21b': { left: 'Cavalry Connect Shape', right: '2026' },
  '2/22':  { left: 'Cavalry Forge Dynamics', right: '2026' },
  '2/23':  { left: 'Year 1 Showcase', right: '2026' },

  '3/1':   { left: 'Photography', right: '2017' },
  '3/2':   { left: 'Photography', right: '2017' },
  '3/3':   { left: 'Photography', right: '2017' },
  '3/4':   { left: 'Photography', right: '2017' },
  '3/5':   { left: 'Photography', right: '2017' },
  '3/6':   { left: 'Ardent Archives Design Theme Board', right: '2023' },
  '3/7':   { left: 'Ardent Archives Publication', right: '2023' },
  '3/8':   { left: 'Scientia Design Theme Board', right: '2025' },
  '3/9':   { left: 'Scientia Design Theme Board', right: '2025' },
  '3/10':  { left: 'Ap Art Portfolio Piece', right: '2023' },
  '3/11':  { left: 'Ardent Archives Publication Section Cover', right: '2023' },
  '3/12':  { left: 'Sketchbook', right: '2022' },
  '3/13':  { left: 'Silkscreen Print', right: '2022' },
  '3/14':  { left: 'Woodcut Print', right: '2022' },
  '3/15':  { left: 'Physique of a camel sketchbook', right: '2022' },
  '3/15b': { left: 'Lino Print', right: '2025' },
  '3/16':  { left: 'Wearable Sensing Project', right: '2025' },
  '3/16b': { left: 'Typeface Poster', right: '2026' },
  '3/17':  { left: 'Cavalry Animation assets', right: '2026' },
  '3/18':  { left: 'Immersive music experience', right: '2026' },
  '3/20':  { left: 'Cavalry Collisions', right: '2026' },
  '3/21':  { left: 'Cavalry Image Sampler', right: '2026' },
  '3/22':  { left: 'Breathing Surfaces Soft Robotics', right: '2026' },
};

// ── Auto-detect media ─────────────────────────────────────────────────────────
// Drop files into src/assets/play/1/, /2/, /3/ — folder = column.
// Name by position number: 1 = bottom, higher = top. Videos (.mp4) supported.
const col1mods = import.meta.glob('../assets/play/1/*', { eager: true, import: 'default' });
const col2mods = import.meta.glob('../assets/play/2/*', { eager: true, import: 'default' });
const col3mods = import.meta.glob('../assets/play/3/*', { eager: true, import: 'default' });

function parseCol(mods, colNum) {
  return Object.entries(mods)
    .map(([path, src]) => {
      const filename = path.split('/').pop();
      const stem = filename.replace(/\.[^.]+$/, '');
      const ext = filename.split('.').pop().toLowerCase();
      const isVideo = ext === 'mp4' || ext === 'webm' || ext === 'mov';
      return { src, key: `${colNum}/${stem}`, stem, isVideo };
    })
    .sort((a, b) => {
      const na = parseFloat(a.stem);
      const nb = parseFloat(b.stem);
      if (!isNaN(na) && !isNaN(nb) && nb !== na) return nb - na;
      return b.stem.localeCompare(a.stem); // tiebreak: "15b" above "15"
    });
}

const columns = [
  parseCol(col1mods, '1'),
  parseCol(col2mods, '2'),
  parseCol(col3mods, '3'),
];

// ── Component ─────────────────────────────────────────────────────────────────
const Play = () => (
  <div className="play">
    <div className="play-header">
      <h1 className="play-title">Archives/Play</h1>
      <p className="play-subtitle">A collection of projects and creative experiments</p>
    </div>

    <div className="play-grid">
      {columns.map((col, ci) => (
        <div className="play-col" key={ci}>
          {col.map(item => {
            const cap = captions[item.key] || {};
            return (
              <div className="play-item" key={item.key}>
                {item.isVideo ? (
                  <video src={item.src} autoPlay loop muted playsInline />
                ) : (
                  <img src={item.src} alt={cap.left || ''} />
                )}
                <div className="play-item-caption">
                  <span>{cap.left}</span>
                  <span>{cap.right}</span>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);

export default Play;
