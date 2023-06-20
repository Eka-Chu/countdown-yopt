import React from 'react';
import { Button } from '@mui/material';

interface ProgressProps {
  value: number; // Значение прогресса
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div>
      <progress value={value} max={100} /> {/* Элемент <progress> для отображения прогресса */}
      <span>{value}%</span> {/* Отображение значения прогресса в процентах */}
    </div>
  );
};

export default Progress;
