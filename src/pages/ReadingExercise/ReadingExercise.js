import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import "./ReadingExercise.css";
import { useParagraphStore } from '../../store/useParagraphStore';
import ReadingExerciseBtns from './ReadingExerciseBtns';

const ReadingExercise = () => {
  //const wordArray = ["naber", "lebit", "esad", "doan", "ğhahaha"];

  const { currentParagraph, changeParagraphFunc, wordsInParagraph, setWordsInParagraph } = useParagraphStore();
  const [currentWord, setCurrentWord] = useState(wordsInParagraph[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    setWordsInParagraph(currentParagraph);
    //setCurrentWord(wordsInParagraph[0]);
  }, [setWordsInParagraph, currentParagraph])



  // const handleStart = () => {
  //   for (let i = 0; i < wordsInParagraph.length; i++) {
  //     setTimeout(() => {
  //       setCurrentWord(wordsInParagraph[i]);
  //     }, 100 * i);
  //   }
  // }

  let currentWordIndex = wordIndex;
  const handleStart = () => {
    setCurrentWord(wordsInParagraph[currentWordIndex]);
    currentWordIndex++;
    return setWordIndex(currentWordIndex);
  }

  const start = () => {
    handleStart();
    
    setInterv(setInterval(handleStart, 100));
    setStatus(1);
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setWordIndex(0);
    setCurrentWord(wordsInParagraph[0]);
    setStatus(0);
  }

  const resume = () => {
    start();
  }

  // const startText = () => {
  //   setInterv(setInterval(handleStart, 100))
  // }

  // wordArray.forEach((e) => {
  //   for (let i = 0; i < wordArray.length; i++) {
  //     setTimeout(() => {
  //       console.log(wordArray[i]);
  //       setCurrentWord(wordArray[i]);
  //     }, 500 * i);
  //   }
  // });


  return (
    <Layout>
        <div className="spreeder">
          <div className="wordBox">
              <div className="word">
                <p>{currentWord}</p>
              </div>
          </div>
          <ReadingExerciseBtns status={status} start={start} stop={stop} reset={reset} resume={resume}/>
        </div>
        {/* <button onClick={runWords}>Go</button>
        <button onClick={stopWords}>Stop</button> */}
    </Layout>
  )
}

export default ReadingExercise
