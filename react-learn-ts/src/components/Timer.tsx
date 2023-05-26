import { Button, Typography } from '@mui/material';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';



export function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = useCallback(() => setIsRunning(true), []);
  const handlePause = useCallback(() => setIsRunning(false), []);
  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
  }, []);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  }, [time]);

  return useMemo(() => (
    <Wrapper>
      <Typography variant="h4" color="primary">Таймер</Typography>
      <Typography variant="h1">{formattedTime}</Typography>
      <Button variant="contained" onClick={isRunning ? handlePause : handleStart}>{isRunning ? 'Pause' : 'Start'}</Button>
      <Button onClick={handleReset}>Reset</Button>
     
    </Wrapper>
  ), [formattedTime, isRunning, handlePause, handleStart, handleReset]);
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



