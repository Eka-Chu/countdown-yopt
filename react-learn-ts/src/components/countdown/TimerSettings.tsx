import React from 'react';
import InputTime from './InputTime';
import Slider from './Slider';

interface TimerSettingsProps {
  minutes: number; // Продолжительность в минутах
  seconds: number; // Продолжительность в секундах
  handleInputChange: (minutes: number, seconds: number) => void; // Обработчик изменения ввода времени
  handleSliderChange: (value: number) => void; // Обработчик изменения положения слайдера
  isRunning: boolean; // Флаг, указывающий, выполняется ли таймер в данный момент
}

const TimerSettings: React.FC<TimerSettingsProps> = ({
  minutes,
  seconds,
  handleInputChange,
  handleSliderChange,
  isRunning,
}) => {
  return (
    <div>
      <InputTime minutes={minutes} seconds={seconds} onChange={handleInputChange} isRunning={isRunning} />
      {/* Компонент InputTime для ввода времени */}
      <Slider value={(minutes * 60 + seconds) / 60} handleChange={handleSliderChange} isRunning={isRunning} />
      {/* Компонент Slider для выбора продолжительности времени с помощью слайдера */}
    </div>
  );
};

export default TimerSettings;
