import React from 'react';
import './Slider.css';

type SliderProps = {
  value: number;
  handleChange: (value: number) => void;
  isRunning: boolean;
};

const Slider: React.FC<SliderProps> = ({ value, handleChange, isRunning }) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    handleChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="720"
        step="1"
        value={value}
        onChange={handleSliderChange}
        disabled={isRunning}
        className="slider"
      />
    </div>
  );
};

export default Slider;
