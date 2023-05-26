import React, { useState, useEffect } from 'react';
import InputTime from './InputTime';
import Progress from './Progress';
import Slider from './Slider';
import alarmSound from './alarm.mp3';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledButtonGroup = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& > *': {
    marginRight: theme.spacing(2),
  },
}));

const StyledTitle = styled(Typography)({
  textAlign: 'center',
  marginBottom: '30px',
});

const Countdown = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [sliderValue, setSliderValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  let interval: NodeJS.Timeout;

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    setTime({ minutes: Math.floor(value / 60), seconds: value % 60 });
  };

  const handleInputChange = (minutes: number, seconds: number) => {
    setSliderValue(minutes * 60 + seconds);
    setTime({ minutes, seconds });
  };

  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setSliderValue(0);
    setTime({ minutes: 0, seconds: 0 });
    setProgress(0);
    clearInterval(interval);
  };

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const totalSeconds = prevTime.minutes * 60 + prevTime.seconds - 1;
          const minutes = Math.max(0, Math.floor(totalSeconds / 60));
          const seconds = Math.max(0, totalSeconds % 60);

          if (totalSeconds < 0) {
            clearInterval(interval);
            const audio = new Audio(alarmSound);
            audio.play();
            setTime({ minutes: 0, seconds: 0 });
            setIsRunning(false);
          }

          setProgress((1 - totalSeconds / sliderValue) * 100);

          return { minutes, seconds };
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, sliderValue]);

  return (
    <div>
      <StyledTitle variant="h4" color="primary">Countdown</StyledTitle>
      <InputTime minutes={time.minutes} seconds={time.seconds} onChange={handleInputChange} isRunning={isRunning} />
      <Slider value={sliderValue} handleChange={handleSliderChange} isRunning={isRunning} />
      <Progress percent={progress} />
      <StyledButtonGroup>
        <Button variant="contained" onClick={handleStartStopClick}>
          {isRunning ? 'Пауза' : 'Запуск'}
        </Button>
        <Button variant="contained" onClick={handleResetClick}>
          Сброс
        </Button>
      </StyledButtonGroup>
    </div>
  );
};

export default Countdown;
