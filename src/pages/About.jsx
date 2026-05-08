import './About.css';

const b = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

const About = () => (
  <div className="about">
    <div className="about-image">
      <img src={b('/About/Frame 2.webp')} alt="Brendon Lin" />
    </div>

    <div className="about-body">
      <div className="about-col about-col--left">
        <p className="about-headline">
          <span className="about-dim">I am </span>
          <span className="about-bright about-hl">Brendon Lin</span>
          <span className="about-dim">, passionate about designing </span>
          <span className="about-bright">visual narratives</span>
          <span className="about-dim"> and </span>
          <span className="about-bright">interactive products</span>
          <span className="about-dim"> and </span>
          <span className="about-bright">experiences</span>
          <span className="about-dim"> that expand the human experience.</span>
        </p>
      </div>

      <div className="about-col about-col--right">
        <p className="about-sidebar-label">Outside of work, you can find me:</p>
        <ul className="about-list">
          <li><span className="about-dim">Braving </span>Taiwan's<span className="about-dim"> Earthquakes.</span></li>
          <li><span className="about-dim">Enjoying </span>Shanghai's<span className="about-dim"> Restaurants</span></li>
          <li><span className="about-dim">Exploring </span>Pittsburgh</li>
          <li><span className="about-dim">In the </span>pool<span className="about-dim">, with </span>friends<span className="about-dim">, </span>travelling<span className="about-dim">!</span></li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
