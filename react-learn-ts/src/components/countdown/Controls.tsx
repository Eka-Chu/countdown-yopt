
import React from 'react';
import { Button } from '@mui/material';

interface ProgressProps {
  value: number;
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div>
      <progress value={value} max={100} />
      <span>{value}%</span>
    </div>
  );
};

export default Progress;






