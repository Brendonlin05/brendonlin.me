import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import Home from './pages/Home';
import Play from './pages/Play';
import About from './pages/About';
import ProjectPage from './pages/projects/ProjectPage';

import lunarGala        from './pages/projects/content/LunarGala';
import tartanHacks      from './pages/projects/content/TartanHacks';
import rerender         from './pages/projects/content/Rerender';
import elephantInRoom   from './pages/projects/content/ElephantInRoom';
import kintsugi         from './pages/projects/content/Kintsugi';
import airportCheckin   from './pages/projects/content/AirportCheckin';
import animationChallenge from './pages/projects/content/AnimationChallenge';
import tedxSMIC         from './pages/projects/content/TEDxSMIC';
import tedxCMU          from './pages/projects/content/TEDxCMU';
import fishFish         from './pages/projects/content/FishFish';
import humanWard        from './pages/projects/content/HumanWard';
import wolfWolf         from './pages/projects/content/WolfWolf';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <ScrollProgressBar thickness={2} color="#989898" />
      <Nav />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, minHeight: '100vh', background: '#000' }}>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/play"        element={<Play />} />
          <Route path="/about"       element={<About />} />

          <Route path="/work/lunar-gala"          element={<ProjectPage project={lunarGala} />} />
          <Route path="/work/tartanhacks"         element={<ProjectPage project={tartanHacks} />} />
          <Route path="/work/rerender"            element={<ProjectPage project={rerender} />} />
          <Route path="/work/elephant-in-room"    element={<ProjectPage project={elephantInRoom} />} />
          <Route path="/work/kintsugi"            element={<ProjectPage project={kintsugi} />} />
          <Route path="/work/airport-checkin"     element={<ProjectPage project={airportCheckin} />} />
          <Route path="/work/animation-challenge" element={<ProjectPage project={animationChallenge} />} />
          <Route path="/work/tedx-smic"           element={<ProjectPage project={tedxSMIC} />} />
          <Route path="/work/tedx-cmu"            element={<ProjectPage project={tedxCMU} />} />
          <Route path="/work/fish-fish"           element={<ProjectPage project={fishFish} />} />
          <Route path="/work/human-ward"          element={<ProjectPage project={humanWard} />} />
          <Route path="/work/wolf-wolf"           element={<ProjectPage project={wolfWolf} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
