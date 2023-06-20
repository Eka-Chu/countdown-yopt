import { Button, Typography, styled } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import { Wrapper } from './Timer.styles';

// Компонент Timer
export const Timer = React.memo(() => {
  // Состояние времени и запущенного состояния
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Эффект для установки интервала обновления времени
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Если таймер запущен, устанавливаем интервал
    if (isRunning) {
      intervalId = setInterval(() => {
        // Увеличиваем время на 10 миллисекунд
        setTime(prevTime => prevTime + 10);
      }, 10);
    }

    // При размонтировании компонента очищаем интервал
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Обработчики событий для старта, паузы и сброса времени
  const handleStart = useCallback(() => setIsRunning(true), []);
  const handlePause = useCallback(() => setIsRunning(false), []);
  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
  }, []);

  // Расчет минут, секунд и миллисекунд, а также форматирование времени
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;

  return (
    <Wrapper>
      <Typography variant="h4" color="primary">Таймер</Typography>
      <Typography variant="h1">{formattedTime}</Typography>
      <Button variant="contained" onClick={isRunning ? handlePause : handleStart}>
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </Wrapper>
  );
});
