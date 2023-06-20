import React from 'react';
import { Progress as AntdProgress } from 'antd';

type ProgressProps = {
  percent: number;
};

const Progress: React.FC<ProgressProps> = ({ percent }) => {
  return <AntdProgress percent={percent} />;
};

export default Progress;

// import React from 'react';
// import { Progress as AntdProgress } from 'antd';

// type ProgressProps = {
//   percent: number;
// };

// const Progress: React.FC<ProgressProps> = ({ percent }) => {
//   const roundedPercent = Math.round(percent);

//   return <AntdProgress percent={roundedPercent} />;
// };

// export default Progress;
