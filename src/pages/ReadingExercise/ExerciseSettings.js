import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParagraphStore } from '../../store/useParagraphStore';


const wordNumbers = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
];

const fontSizes = [
  {
    value: 15,
  },
  {
    value: 20,
  },
  {
    value: 25,
  },
  {
    value: 30,
  },
  {
    value: 35,
  },
];

const ExerciseSettings = () => {
  const { currentWordNumber, setCurrentWordNumber, changeExerciseFormat, currentWordPerMinute, setCurrentWordPerMinute, fontSizeofWord, setFontSizeofWord } = useParagraphStore();

  useEffect(() => {
    changeExerciseFormat();
  }, [changeExerciseFormat])

  const handleWordNumber = (e) => {
    setCurrentWordNumber(e.target.value);
    changeExerciseFormat();
  }

  const handleWordPerMinute = (e) => {
    setCurrentWordPerMinute(e.target.value);
  }

  const handleFontSizeChange = (e) => {
    setFontSizeofWord(e.target.value);
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: "8ch" },
      }}
      autoComplete="off"
      className="spreederContainer"
    >
    <div>

        <TextField
          id="standard-select-currency-native"
          select
          value={fontSizeofWord}
          onChange={handleFontSizeChange}
          SelectProps={{
            native: true,
          }}
          variant="standard"
          helperText="kelime boyutu"
        >
          {fontSizes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
        
        <TextField
          id="standard-select-currency-native"
          select
          value={currentWordNumber}
          onChange={handleWordNumber}
          SelectProps={{
            native: true,
          }}
          variant="standard"
          helperText="kelime sayısı"
        >
          {wordNumbers.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
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
          helperText="dk kaç kelime"
        />

        {/* <Button variant='contained' color='success' onClick={handleSave}>Kaydet</Button> */}
      </div>
    </Box>
  );
}

export default ExerciseSettings;
