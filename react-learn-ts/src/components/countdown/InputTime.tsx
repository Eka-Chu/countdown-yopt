import React from 'react';
import { StyledInputContainer, StyledLabel, StyledTextField } from './InputTime.styles';

interface InputTimeProps {
  minutes: number;
  seconds: number;
  onChange: (minutes: number, seconds: number) => void;
  isRunning: boolean;
}

const InputTime: React.FC<InputTimeProps> = ({ minutes, seconds, onChange, isRunning }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const timeValue = parseInt(value);

    if (name === 'minutes') {
      onChange(timeValue, seconds);
    } else if (name === 'seconds') {
      onChange(minutes, timeValue);
    }
  };

  return (
    <StyledInputContainer>
      <StyledLabel>
        Минуты:
      </StyledLabel>
      <StyledTextField
        type="number"
        name="minutes"
        value={minutes}
        onChange={handleInputChange}
        disabled={isRunning}
        inputProps={{
          min: 0,
          max: 59,
        }}
      />
      <StyledLabel>
        Секунды:
      </StyledLabel>
      <StyledTextField
        type="number"
        name="seconds"
        value={seconds}
        onChange={handleInputChange}
        disabled={isRunning}
        inputProps={{
          min: 0,
          max: 59,
        }}
      />
    </StyledInputContainer>
  );
};

export default InputTime;
