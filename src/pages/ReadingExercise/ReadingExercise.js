import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import "./ReadingExercise.css";
import { useParagraphStore } from '../../store/useParagraphStore';

const ReadingExercise = () => {
  //const wordArray = ["naber", "lebit", "esad", "doan", "ğhahaha"];

  const { currentParagraph, changeParagraphFunc, wordsInParagraph, setWordsInParagraph } = useParagraphStore();
  const [currentWord, setCurrentWord] = useState(wordsInParagraph[0]);

  useEffect(() => {
    setWordsInParagraph(currentParagraph);
    //setCurrentWord(wordsInParagraph[0]);
  }, [setWordsInParagraph, currentParagraph])



  const handleStart = () => {
    for (let i = 0; i < wordsInParagraph.length; i++) {
      setTimeout(() => {
        console.log(wordsInParagraph[i]);
        setCurrentWord(wordsInParagraph[i]);
      }, 100 * i);
    }
  }

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
        <div className="wordBox">
            <div className="word">
              <p>{currentWord}</p>
            </div>
        </div>
        <button onClick={handleStart}>Go</button>
    </Layout>
  )
}

export default ReadingExercise
