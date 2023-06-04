import React from 'react';
import InputTime from './InputTime';
import Slider from './Slider';

interface TimerSettingsProps {
  minutes: number;
  seconds: number;
  handleInputChange: (minutes: number, seconds: number) => void;
  handleSliderChange: (value: number) => void;
  isRunning: boolean;
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
      <Slider value={(minutes * 60 + seconds) / 60} handleChange={handleSliderChange} isRunning={isRunning} />
    </div>
  );
};

export default TimerSettings;
