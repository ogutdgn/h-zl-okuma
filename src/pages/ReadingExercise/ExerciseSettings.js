import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParagraphStore } from '../../store/useParagraphStore';
import { Button } from '@mui/material';

const currencies = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '9',
    label: '9',
  },
];

const ExerciseSettings = () => {
  const { currentWordNumber, setCurrentWordNumber, changeExerciseFormat, currentWordPerMinute, setCurrentWordPerMinute } = useParagraphStore();

  useEffect(() => {
    changeExerciseFormat();
  }, [changeExerciseFormat])

  const handleWordNumber = (event) => {
    setCurrentWordNumber(event.target.value);
  }

  const handleWordPerMinute = (event) => {
    setCurrentWordPerMinute(event.target.value);
  }

  const handleSave = () => {
    changeExerciseFormat();
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: "5ch" },
      }}
      
    //   noValidate
      autoComplete="off"
    >
      <div>
        
        <TextField
          id="standard-select-currency-native"
          select
        //   label="Native select"
          value={currentWordNumber}
          onChange={handleWordNumber}
          SelectProps={{
            native: true,
          }}
        //   helperText=""
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="standard-number"
          type="number"
          value={currentWordPerMinute}
          onChange={handleWordPerMinute}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />

        <Button variant='contained' color='success' onClick={handleSave}>Kaydet</Button>
      </div>
    </Box>
  );
}

export default ExerciseSettings;
