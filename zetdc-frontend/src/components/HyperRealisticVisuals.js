// src/components/HyperRealisticVisuals.js
import { useEffect } from 'react';
import { gsap } from 'gsap';

const HyperRealisticVisuals = () => {
  useEffect(() => {
    gsap.to('#visual', { rotation: 360, duration: 2, repeat: -1 });
  }, []);

  return <div id="visual" style={{ width: '200px', height: '200px', backgroundColor: 'red' }}></div>;
};

export default HyperRealisticVisuals;
