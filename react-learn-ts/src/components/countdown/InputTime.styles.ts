import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';

export const StyledInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const StyledLabel = styled('label')(({ theme }) => ({
  marginRight: theme.spacing(1),
  fontSize: '1rem',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: 50,
  '& .MuiInputBase-input': {
    padding: '8px 6px',
    backgroundColor: '#fff',
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));
