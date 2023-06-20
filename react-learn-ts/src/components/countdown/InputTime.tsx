import React from 'react';
import { StyledInputContainer, StyledLabel, StyledTextField } from './InputTime.styles';

interface InputTimeProps {
  minutes: number; // Значение минут
  seconds: number; // Значение секунд
  onChange: (minutes: number, seconds: number) => void; // Обработчик изменений в полях ввода
  isRunning: boolean; // Флаг, указывающий, запущен ли таймер
}

const InputTime: React.FC<InputTimeProps> = ({ minutes, seconds, onChange, isRunning }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const timeValue = parseInt(value);

    if (name === 'minutes') {
      onChange(timeValue, seconds); // Вызываем функцию onChange с новыми значениями минут и текущим значением секунд
    } else if (name === 'seconds') {
      onChange(minutes, timeValue); // Вызываем функцию onChange с текущим значением минут и новым значением секунд
    }
  };

  return (
    <StyledInputContainer>
      <StyledLabel>
        Минуты:
      </StyledLabel>
      <StyledTextField
        type="number"
        name="minutes"
        value={minutes}
        onChange={handleInputChange}
        disabled={isRunning} // Отключаем поле ввода, если таймер запущен
        inputProps={{
          min: 0,
          max: 59,
        }}
      />
      <StyledLabel>
        Секунды:
      </StyledLabel>
      <StyledTextField
        type="number"
        name="seconds"
        value={seconds}
        onChange={handleInputChange}
        disabled={isRunning} // Отключаем поле ввода, если таймер запущен
        inputProps={{
          min: 0,
          max: 59,
        }}
      />
    </StyledInputContainer>
  );
};

export default InputTime;
