import React from 'react';
import { Progress } from 'antd';

interface Props {
  time: number; // Оставшееся время в секундах
  progress: number; // Прогресс в процентах
  value: number; // Значение (не используется в данном компоненте)
}

const Result: React.FC<Props> = ({ time, progress }) => {
  const minutes = Math.floor(time / 60); // Расчет минут
  const seconds = time % 60; // Расчет секунд

  return (
    <div>
      <h2>Time remaining: {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h2> // Отображение оставшегося времени в формате ММ:СС
      <Progress {...{ percent: progress }} /> // Отображение прогресса в виде полосы прогресса
    </div>
  );
};

export default Result;
