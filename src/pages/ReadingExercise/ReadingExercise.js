import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import "./ReadingExercise.css";
import { useParagraphStore } from '../../store/useParagraphStore';
import ReadingExerciseBtns from './ReadingExerciseBtns';
import ExerciseSettings from './ExerciseSettings';
import { KeyPressEvent } from '../../components/KeyPressEvent/KeyPressEvent';

const ReadingExercise = () => {

  const { currentParagraph, setWordsInParagraph, wordsInParagraph, exerciseFormat, currentWordNumber, currentWordPerMinute, fontSizeofWord } = useParagraphStore();
  const [currentWord, setCurrentWord] = useState(wordsInParagraph[0]);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    setWordsInParagraph(currentParagraph);
  }, [setWordsInParagraph, currentParagraph])


  let currentWordIndex = 0;

  const handleStart = () => {
    
    setCurrentWord(exerciseFormat[currentWordIndex]);
    if(currentWordIndex < exerciseFormat.length){
      currentWordIndex++;
    }else{
      reset();
    }
  }

  const start = () => {
    setInterv(setInterval(handleStart, 1000 / (currentWordPerMinute / 60) * currentWordNumber));
    setStatus(1);
    clearInterval(interv);
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setCurrentWord(exerciseFormat[0]);
  }

  const resume = () => {
    start();
  }

  KeyPressEvent(start, stop, " ");

  return (
    <Layout>
      <div className="spreeder">
        <div className="spreederBox">
          <div className="word">
            <p style={{ fontSize: `${fontSizeofWord}px` }}>{currentWord}</p>
          </div>
          <ExerciseSettings/>
          <ReadingExerciseBtns status={status} start={start} stop={stop} reset={reset} resume={resume}/>
        </div>
      </div>
    </Layout>
  )
}

export default ReadingExercise;
