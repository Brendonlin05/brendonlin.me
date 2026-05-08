import { useEffect, useRef } from 'react';
import './ProjectPage.css';

const b = (path) => path ? import.meta.env.BASE_URL + path.replace(/^\//, '') : path;

function isVideo(src) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

function VideoBlock({ src, className, sound }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      src={b(src)}
      loop
      playsInline
      preload="metadata"
      {...(!sound && { muted: true })}
    />
  );
}

function renderMediaItem(src, j, alt = '') {
  if (isVideo(src)) {
    return <VideoBlock key={j} src={b(src)} />;
  }
  return <img key={j} src={b(src)} alt={alt} loading="lazy" decoding="async" />;
}

function renderBlock(block, i) {
  switch (block.type) {
    case 'image':
      return (
        <img key={i} className="pp-img" src={b(block.src)} alt={block.alt ?? ''} loading="lazy" decoding="async" />
      );
    case 'video':
      return <VideoBlock key={i} src={b(block.src)} className="pp-img" sound={!!block.sound} />;
    case 'label':
      return block.right
        ? <div key={i} className="pp-label-row"><p className="pp-label">{block.text}</p><p className="pp-label">{block.right}</p></div>
        : <p key={i} className="pp-label">{block.text}</p>;
    case 'text':
      return (
        <div key={i} className="pp-text">
          {block.columns.map((col, j) => <p key={j}>{col}</p>)}
        </div>
      );
    case 'images':
      return (
        <div key={i} className="pp-row">
          {block.images.map((img, j) => (
            <img key={j} src={b(img.src)} alt={img.alt ?? ''} loading="lazy" decoding="async" />
          ))}
        </div>
      );
    case 'richtext':
      return (
        <div key={i} className="pp-text">
          {block.columns.map((col, j) => (
            <p key={j}>
              {typeof col === 'string'
                ? col
                : col.map((seg, k) => seg.href
                  ? <a key={k} href={seg.href} target="_blank" rel="noreferrer" className={seg.green ? 'pp-link-green' : 'pp-link'}>{seg.text}</a>
                  : seg.text
                )
              }
            </p>
          ))}
        </div>
      );
    case 'row':
      return (
        <div key={i} className="pp-row">
          {block.items.map((item, j) => renderMediaItem(item.src, j, item.alt))}
        </div>
      );
    default:
      return null;
  }
}

const ProjectPage = ({ project }) => {
  const heroRef = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    heroRef.current?.scrollIntoView({ behavior: 'instant', block: 'center' });
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    const obs = new IntersectionObserver(([entry]) => {
      video.muted = !entry.isIntersecting;
    }, { threshold: 0.1 });
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
  <div className="pp">
    <div className={`pp-hero${project.heroNatural ? ' pp-hero--natural' : ''}`} ref={heroRef}>
      {project.heroVideo ? (
        <video
          ref={heroVideoRef}
          src={b(project.heroVideo)}
          autoPlay
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <img src={b(project.heroImage)} alt={project.title} fetchpriority="high" decoding="async" />
      )}
    </div>

    <div className="pp-content">
      <aside className="pp-sidebar">
        <span className="pp-category">{project.category}</span>
        <h1 className="pp-title">
          {project.url
            ? <a href={project.url} target="_blank" rel="noreferrer"><span className="pp-title-text">{project.title}</span> <span className="pp-arrow">{'↗︎'}</span></a>
            : project.title
          }
        </h1>
      </aside>

      <div className="pp-body">
        <div className="pp-intro">
          {project.intro.map((col, i) => <p key={i}>{col}</p>)}
        </div>

        <div className="pp-meta">
          {[
            ['ROLE',     project.meta.role],
            ['TIMELINE', project.meta.timeline],
            ['TEAM',     project.meta.team],
            ['TOOLS',    project.meta.tools],
          ].map(([label, value]) => (
            <div key={label} className="pp-meta-item">
              <span className="pp-meta-label">{label}</span>
              <span className="pp-meta-value">{value}</span>
            </div>
          ))}
        </div>

        {project.body.map((block, i) => renderBlock(block, i))}
      </div>
    </div>
  </div>
  );
};

export default ProjectPage;
