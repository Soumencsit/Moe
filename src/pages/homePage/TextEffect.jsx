import { TypeAnimation } from 'react-type-animation';
import './TextEffect.css';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'SOLAR POWER',
        1000,
        'ENERGY STORAGE',
        1000,
        'SMART MONITORING',
        1000,
        'EASY SETUP',
        1000,
      ]}
      wrapper="span"
      speed={40}
      className="text-animation"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
