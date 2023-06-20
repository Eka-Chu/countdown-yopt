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
  isRunning: boolean; // Флаг, указывающий на состояние выполнения (запущено/не запущено)
  handleStartStopClick: () => void; // Обработчик клика на кнопку "Запуск/Пауза"
  handleResetClick: () => void; // Обработчик клика на кнопку "Сброс"
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ isRunning, handleStartStopClick, handleResetClick }) => {
  return (
    <StyledButtonGroup>
      <Button variant="contained" onClick={handleStartStopClick}>
        {isRunning ? 'Пауза' : 'Запуск'} {/* Текст на кнопке зависит от значения флага isRunning */}
      </Button>
      <Button variant="contained" onClick={handleResetClick}>
        Сброс {/* Текст на кнопке "Сброс" */}
      </Button>
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
