import React from 'react';
import { Progress as AntdProgress } from 'antd';

type ProgressProps = {
  percent: number;
};

const Progress: React.FC<ProgressProps> = ({ percent }) => {
  const roundedPercent = parseInt(percent.toFixed(0), 10);

  return <AntdProgress percent={roundedPercent} />;
};

export default Progress;
