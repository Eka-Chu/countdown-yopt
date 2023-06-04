import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButtonGroup = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& > :not(:last-child)': {
    marginRight: theme.spacing(2),
  },
}));

interface ButtonGroupProps {
  isRunning: boolean;
  handleStartStopClick: () => void;
  handleResetClick: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ isRunning, handleStartStopClick, handleResetClick }) => {
  return (
    <StyledButtonGroup>
      <Button variant="contained" onClick={handleStartStopClick}>
        {isRunning ? 'Пауза' : 'Запуск'}
      </Button>
      <Button variant="contained" onClick={handleResetClick}>
        Сброс
      </Button>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
