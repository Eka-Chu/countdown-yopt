import React from 'react';
import './Slider.css';

type SliderProps = {
  value: number; // Значение слайдера в минутах
  handleChange: (value: number) => void; // Обработчик изменения значения слайдера
  isRunning: boolean; // Флаг, указывающий, выполняется ли таймер в данный момент
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
        max="60"
        step="0.25"
        value={value}
        onChange={handleSliderChange}
        disabled={isRunning}
        className="slider"
      />
    </div>
  );
};

export default Slider;
