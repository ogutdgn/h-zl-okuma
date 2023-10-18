import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParagraphStore } from '../../store/useParagraphStore';

const wordNumbers = [...Array(9)].map((_, i) => ({ value: i + 1 }));
const fontSizes = [15, 20, 25, 30, 35].map(value => ({ value }));

const ExerciseSettings = () => {
  const { 
    currentWordNumber, setCurrentWordNumber, changeExerciseFormat, 
    currentWordPerMinute, setCurrentWordPerMinute, 
    fontSizeofWord, setFontSizeofWord 
  } = useParagraphStore();

  useEffect(() => {
    changeExerciseFormat();
  }, [changeExerciseFormat]);

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: "100px" }}} autoComplete="off" className="spreederContainer">
      <div>
        <TextField
          id="fontSize"
          select
          value={fontSizeofWord}
          onChange={(e) => setFontSizeofWord(e.target.value)}
          SelectProps={{ native: true }}
          variant="standard"
          helperText="kelime boyutu"
        >
          {fontSizes.map(option => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
        
        <TextField
          id="wordCount"
          select
          value={currentWordNumber}
          onChange={(e) => {
            setCurrentWordNumber(e.target.value);
            changeExerciseFormat();
          }}
          SelectProps={{ native: true }}
          variant="standard"
          helperText="kelime sayısı"
        >
          {wordNumbers.map(option => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>

        <TextField
          id="wordsPerMinute"
          type="number"
          value={currentWordPerMinute}
          onChange={(e) => setCurrentWordPerMinute(e.target.value)}
          InputLabelProps={{ shrink: true }}
          variant="standard"
          helperText="dk kaç kelime"
        />
      </div>
    </Box>
  );
}

export default ExerciseSettings;
