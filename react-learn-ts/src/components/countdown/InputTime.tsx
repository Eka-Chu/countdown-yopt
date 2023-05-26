import React from 'react';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/system';

interface InputTimeProps {
  minutes: number;
  seconds: number;
  onChange: (minutes: number, seconds: number) => void;
  isRunning: boolean;
}

const StyledInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledLabel = styled('label')(({ theme }) => ({
  marginRight: theme.spacing(1),
  fontSize: '1rem',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: 50,
  '& .MuiInputBase-input': {
    padding: '8px 6px',
    backgroundColor: '#fff', // Добавлен фоновый цвет
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

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
