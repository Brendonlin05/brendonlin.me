import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">

      <div className="footer-left">
        <div className="footer-brand">
          <span className="footer-name">Brendon Lin</span>
          <span className="footer-updated">Last updated {__LAST_UPDATED__}</span>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/brendon-lin-bb0b36376/?skipRedirect=true" target="_blank" rel="noreferrer">
            LinkedIn <span className="arrow">↗</span>
          </a>
          <a href="https://www.instagram.com/brendonbrendon_05" target="_blank" rel="noreferrer">
            Instagram <span className="arrow">↗</span>
          </a>
          <a href="https://github.com/Brendonlin05" target="_blank" rel="noreferrer">
            Github <span className="arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <span className="footer-cta">Get in touch! Let's build something together.</span>
        <a href="mailto:brendonlin17@gmail.com">
          brendonlin17@gmail.com <span className="arrow">↗</span>
        </a>
      </div>

    </div>
  </footer>
);

export default Footer;
