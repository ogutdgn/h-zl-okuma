import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import "./ReadingExercise.css";
import { useParagraphStore } from '../../store/useParagraphStore';
import ReadingExerciseBtns from './ReadingExerciseBtns';
import ExerciseSettings from './ExerciseSettings';

const ReadingExercise = () => {

  const { currentParagraph, setWordsInParagraph, wordsInParagraph, exerciseFormat, currentWordNumber, currentWordPerMinute } = useParagraphStore();
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


  return (
    <Layout>
        <div className="spreeder">
          <div className="wordBox">
              <div className="word">
                <p>{currentWord}</p>
              </div>
              <ExerciseSettings/>
          </div>
          <ReadingExerciseBtns status={status} start={start} stop={stop} reset={reset} resume={resume}/>
        </div>
    </Layout>
  )
}

export default ReadingExercise;
