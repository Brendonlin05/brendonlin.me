import { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isProject = location.pathname.startsWith('/work/');
  const close = () => setMenuOpen(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    close();
    if (location.pathname !== '/') navigate('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    close();
    if (location.pathname === '/') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'work' } });
    }
  };

  return (
    <nav className={`nav${isProject ? ' nav--project' : ''}`}>
      <a href="/" className="nav-logo" onClick={handleLogoClick}>Brendon Lin</a>
      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span />
      </button>
      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        <a
          href="#work"
          onClick={handleWorkClick}
          className={location.pathname === '/' || isProject ? 'active' : ''}
        >Work</a>
        <NavLink to="/play" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Play</NavLink>
        <NavLink to="/about" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      </div>
      <button
        className="nav-close"
        onClick={() => { window.scrollTo({ top: 0, behavior: 'instant' }); navigate('/'); }}
        aria-label="Close"
      >✕</button>
    </nav>
  );
};

export default Nav;
