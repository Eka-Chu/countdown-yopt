import React, { useState, useEffect } from 'react';
import Progress from './Progress';
import TimerSettings from './TimerSettings';
import ButtonGroup from './ButtonGroup';
import alarmSound from './alarm.mp3';
import { Typography } from '@mui/material';
import { StyledTitle } from './Countdown.styles';
import { styled, Box } from '@mui/system';

const StyledButtonGroup = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& > *': {
    marginRight: theme.spacing(2),
  },
}));

const Countdown = () => {
  const [time, setTime] = useState({ duration: 0, progress: 0 });
  const [isRunning, setIsRunning] = useState(false);

  let interval: NodeJS.Timeout;

  const handleSliderChange = (value: number) => {
    setTime({ duration: value * 60 * 1000, progress: 0 });
  };

  const handleInputChange = (minutes: number, seconds: number) => {
    const totalMilliseconds = (minutes * 60 + seconds) * 1000;
    setTime({ duration: totalMilliseconds, progress: 0 });
  };

  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setTime({ duration: 0, progress: 0 });
    clearInterval(interval);
  };

  useEffect(() => {
    const tick = () => {
      setTime((prevTime) => {
        const newTime = prevTime.duration - 1000;

        if (newTime < 0) {
          clearInterval(interval);
          const audio = new Audio(alarmSound);
          audio.play();
          setIsRunning(false);
          return { duration: 0, progress: 100 };
        }

        const newProgress = (1 - newTime / prevTime.duration) * 100;

        return { duration: newTime, progress: newProgress };
      });
    };

    if (isRunning && time.duration > 0) {
      interval = setInterval(tick, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time.duration]);

  const minutes = Math.floor(time.duration / 60000);
  const seconds = Math.floor((time.duration % 60000) / 1000);

  return (
    <div>
      <StyledTitle variant="h4" color="primary">Countdown</StyledTitle>
      <TimerSettings minutes={minutes} seconds={seconds} handleInputChange={handleInputChange} handleSliderChange={handleSliderChange} isRunning={isRunning} />
      <Progress percent={time.progress} />
      <ButtonGroup isRunning={isRunning} handleStartStopClick={handleStartStopClick} handleResetClick={handleResetClick} />
    </div>
  );
};

export default Countdown;
