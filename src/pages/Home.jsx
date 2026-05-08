import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';

const b = (path) => path ? import.meta.env.BASE_URL + path.replace(/^\//, '') : path;

const projects = [
  [
    {
      slug: 'tartanhacks', category: 'EVENT IDENTITY, MOTION', title: 'TartanHacks 2026',
      desc: "Crafting the identity of Pittsburgh's Largest Hackathon",
      img: '/home/tartanhacks header.webp',
      hoverImg: '/Tartanhacks/1.webp',
    },
    {
      slug: 'rerender', category: 'INTERACTIVE WEB EXPERIENCE', title: 'Rerender',
      desc: 'Blending interaction with human memory through ASCII experience',
      img: '/home/rerender header.webp',
      hoverImg: '/Rerender/6.webp',
    },
    {
      slug: 'elephant-in-room', category: 'GAME DESIGN', title: 'Elephant in the Room',
      desc: 'Playful interactions: Unity stealth collecting game',
      img: '/home/elephant in room header.webp',
      hoverVideo: '/Elephant/4.mp4',
    },
  ],
  [
    {
      slug: 'kintsugi', category: 'INTERACTIVE JOURNALING APP', title: 'Kintsugi 🔒',
      desc: 'Embracing the fragments of our lives that complete our stories',
      img: '/home/kintsugi header.webp', locked: true,
    },
    {
      slug: 'lunar-gala', category: 'EVENT WEBSITE', title: 'Lunar Gala 2026',
      desc: "Celebrating Pennsylvania's largest fashion show",
      img: '/home/lunar gala header.webp',
      hoverImg: '/Lunar Gala/2.webp',
    },
    {
      slug: 'airport-checkin', category: 'USER EXPERIENCE', title: 'Airport Check-In Redesign',
      desc: 'Reimagining user experience of self check-in kiosks',
      img: '/home/airport header.webp',
      hoverImg: '/Airport/1.webp',
    },
  ],
  [
    {
      slug: 'animation-challenge', category: 'MOTION, 2D ANIMATION, 3D ANIMATION', title: '30-Day Animation Challenge',
      desc: 'Exploring motion, tools, and visual storytelling',
      img: '/home/aimation challenge header.webp',
      hoverVideo: '/Animation challenge/header video.mp4',
    },
    {
      slug: 'tedx-smic', category: 'EVENT IDENTITY, MOTION, 3D ANIMATION', title: 'TEDxSMICSchool',
      desc: 'Brand and identity for 2025 theme: Ignite The Torch',
      img: '/home/TedxSMICSchool header.webp',
      hoverVideo: '/TEDxSMICSchool/6 1.mp4',
    },
    {
      slug: 'tedx-cmu', category: 'INTERACTIVE INSTALLATION, CREATIVE CODE', title: 'TEDxCMU Innovations 🔒',
      desc: 'Gesture-based interactive particle system',
      img: '/home/tedxcmu header.webp', locked: true,
    },
  ],
  [
    {
      slug: 'fish-fish', category: '3D ANIMATION, INTERACTIVE WEARABLE', title: 'Fish Fish',
      desc: 'Investigating interaction through soft robotics wearable',
      img: '/home/Fish header.webp', hoverVideo: '/Fish/9.mp4',
    },
    {
      slug: 'human-ward', category: '3D ANIMATION', title: 'Human-Ward',
      desc: 'Investigating the human experience through storytelling',
      img: '/home/humanward header.webp', hoverVideo: '/humanward/humanward hover.mp4',
    },
    {
      slug: 'wolf-wolf', category: '3D ANIMATION, INTERACTIVE INSTALLATION', title: 'Wolf Wolf',
      desc: 'Investigating tactile interactions through pressure sensors and animated scenes',
      img: '/home/wolf header.webp', hoverVideo: '/Wolf/4.mp4',
    },
  ],
];

const Home = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [loadedImgs, setLoadedImgs] = useState(() => new Set());
  const videoRefs = useRef({});
  const preloadRef = useRef([]);
  const workRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const srcs = projects.flat().map(p => p.hoverImg).filter(Boolean);
    const links = srcs.map(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = b(src);
      document.head.appendChild(link);
      return link;
    });
    return () => links.forEach(l => l.parentNode?.removeChild(l));
  }, []);

  useEffect(() => {
    const section = workRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        Object.values(videoRefs.current).forEach(v => { if (v) v.preload = 'auto'; });
        obs.disconnect();
      }
    }, { rootMargin: '300px' });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === 'work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const startHover = (key, hasVideo) => {
    setActiveKey(key);
    if (hasVideo) videoRefs.current[key]?.play().catch(() => {});
  };

  const stopHover = (key) => {
    setActiveKey(null);
    const video = videoRefs.current[key];
    if (video) { video.pause(); video.currentTime = 0; }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-top">
          <div className="hero-headline">
            <span className="dim">I am </span>
            <span className="bright hl">Brendon Lin</span>
            <span className="dim">, passionate about designing </span>
            <span className="bright">visual narratives</span>
            <span className="dim"> and </span>
            <span className="bright">interactive products</span>
            <span className="dim"> and </span>
            <span className="bright">experiences</span>
            <span className="dim"> that expand the human experience.</span>
          </div>
          <div className="hero-sidebar">
            MOST RECENTLY...<br /><br />
            Design + HCI <a className="hero-sidebar-link" href="https://www.design.cmu.edu/" target="_blank" rel="noopener noreferrer"><span className="hero-sidebar-text">@Carnegie Mellon</span><span className="hero-sidebar-arrow">{'↗︎'}</span></a><br />
            Designing <a className="hero-sidebar-link" href="https://www.nasa.gov/learning-resources/lunabotics-challenge/" target="_blank" rel="noopener noreferrer"><span className="hero-sidebar-text">@CMU Lunabotics</span><span className="hero-sidebar-arrow">{'↗︎'}</span></a>
          </div>
        </div>

        <div className="hero-video-wrapper">
          <div className="hero-video-container">
            <video
              src={b('/home/2025 Show Reel no subtitle.mp4')}
              controls
              loop
              playsInline
              preload="metadata"
            />
          </div>
          <div className="hero-video-caption">
            <span>Showreel 2025</span>
            <span>Please play with sound.</span>
          </div>
        </div>

        <div className="hero-spacer" />
      </section>

      <section className="work" id="work" ref={workRef}>
        {projects.map((row, ri) => (
          <div className="work-row" key={ri}>
            {row.map((p, pi) => {
              const cardKey = `${ri}-${pi}`;
              const isActive = activeKey === cardKey;
              const showVideo = isActive && !!p.hoverVideo;
              const showHoverImg = isActive && !showVideo && !!p.hoverImg && loadedImgs.has(p.hoverImg);

              const media = (
                <div className="work-card-media">
                  <img
                    src={b(p.img)}
                    alt={p.title}
                    decoding="async"
                    style={(showVideo || showHoverImg) ? { opacity: 0 } : undefined}
                  />
                  {p.hoverImg && (
                    <img
                      src={b(p.hoverImg)}
                      alt={p.title}
                      decoding="async"
                      onLoad={() => setLoadedImgs(prev => new Set([...prev, p.hoverImg]))}
                      style={!showHoverImg ? { visibility: 'hidden' } : undefined}
                    />
                  )}
                  {p.hoverVideo && (
                    <video
                      ref={el => { videoRefs.current[cardKey] = el; }}
                      src={b(p.hoverVideo)}
                      muted loop playsInline preload="metadata"
                      style={!showVideo ? { opacity: 0 } : undefined}
                    />
                  )}
                </div>
              );

              return p.locked ? (
                <div className="work-card work-card--locked" key={pi}
                  onMouseEnter={() => startHover(cardKey, !!p.hoverVideo)}
                  onMouseLeave={() => stopHover(cardKey)}
                >
                  {media}
                  <div className="work-card-info">
                    <span className="work-card-category">{p.category}</span>
                    <span className="work-card-title">{p.title}</span>
                    <span className="work-card-desc">{p.desc}</span>
                  </div>
                </div>
              ) : (
                <Link className="work-card" key={pi} to={`/work/${p.slug}`}
                  onMouseEnter={() => startHover(cardKey, !!p.hoverVideo)}
                  onMouseLeave={() => stopHover(cardKey)}
                >
                  {media}
                  <div className="work-card-info">
                    <span className="work-card-category">{p.category}</span>
                    <span className="work-card-title">{p.title}</span>
                    <span className="work-card-desc">{p.desc}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
