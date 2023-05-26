import React from 'react';
import { Progress } from 'antd';

interface Props {
  time: number;
  progress: number;
  value: number;
}

const Result: React.FC<Props> = ({ time, progress }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h2>Time remaining: {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h2>
      <Progress {...{ percent: progress }} />
    </div>
  );
};

export default Result;