import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import "./ReadingExercise.css";
import { useParagraphStore } from '../../store/useParagraphStore';
import ReadingExerciseBtns from './ReadingExerciseBtns';
import ExerciseSettings from './ExerciseSettings';
import { KeyPressEvent } from '../../components/KeyPressEvent/KeyPressEvent';

const ReadingExercise = () => {

  // var wordIndex = 0;
  
  const { currentParagraph, setWordsInParagraph, wordsInParagraph, exerciseFormat, currentWordNumber, currentWordPerMinute, fontSizeofWord, setStartSpotWatch } = useParagraphStore();
  const [currentWord, setCurrentWord] = useState(wordsInParagraph[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    setWordsInParagraph(currentParagraph);
  }, [setWordsInParagraph, currentParagraph])


  
  let wordIndex = currentWordIndex;

  const handleStart = () => {
    setCurrentWord(exerciseFormat[wordIndex]);
    if(wordIndex < exerciseFormat.length){
      wordIndex++;
      setCurrentWordIndex(wordIndex);
    }else{
      // console.log("bitti");
      reset();
    }
  }

  const start = () => {
    setInterv(setInterval(handleStart, 1000 / (currentWordPerMinute / 60) * currentWordNumber));
    setStatus(1);
    clearInterval(interv);
    setStartSpotWatch(true);
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    setStartSpotWatch(false);
    setCurrentWordIndex(currentWordIndex);
    console.log(currentWordIndex);
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setCurrentWord(exerciseFormat[0]);
    setStartSpotWatch(false);
    // wordIndex = 0;
    setCurrentWordIndex(0);
  }

  const resume = () => {
    setStatus(1);
    clearInterval(interv);
    setStartSpotWatch(true);
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
