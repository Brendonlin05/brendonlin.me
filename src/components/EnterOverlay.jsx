import { useState } from 'react';
import './EnterOverlay.css';

const EnterOverlay = ({ onEnter }) => {
  const [leaving, setLeaving] = useState(false);

  const handleClick = () => {
    setLeaving(true);
  };

  return (
    <div
      className={`enter-overlay${leaving ? ' enter-overlay--out' : ''}`}
      onClick={handleClick}
      onAnimationEnd={() => { if (leaving) onEnter(); }}
    >
      <span className="enter-label">Click to enter</span>
    </div>
  );
};

export default EnterOverlay;
