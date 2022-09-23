import React, { useState, useEffect } from 'react';
import "./ReadingTest.css";
import Layout from '../../components/Layout/Layout';
import { useParagraphStore } from '../../store/useParagraphStore';
import SpotWatch from '../../components/SpotWatch/SpotWatch';
import { Button } from '@mui/material';
//import Button from '@mui/material/Button';


const ReadingTest = () => {

    const { currentParagraph, changeParagraphFunc, setWordsInParagraph, wordsInParagraph } = useParagraphStore();
    
    const [textAreaValue, setTextAreaValue] = useState(currentParagraph);

    useEffect(() => {
        setWordsInParagraph(currentParagraph);
      }, [setWordsInParagraph, currentParagraph])

    const changeTextValue = (e) => {
      e.preventDefault();
      changeParagraphFunc(textAreaValue);
    }

    const handleTextAreaChange = (e) => {
        setTextAreaValue(e.target.value);
        setWordsInParagraph(e.target.value);
    }

  return (
    <Layout>
        <div className="mainContainer">
            <h6><i><b>Not: </b>Sayacı başlatıp girmiş olduğunuz metini okuyun. Bitirdiğinizde dakikada kaç kelime okuduğunuzu öğrenin.</i></h6>

            <form className="textDataTest">
                <div className="textSideTest">
                    <textarea name="text" id="text" cols="100" rows="10" value={textAreaValue} onChange={(e) => handleTextAreaChange(e)}/>
                    <p>Metinde {wordsInParagraph.length} kelime var.</p>
                    <Button style={{width: "200px"}}
                      //{...textAreaValue !== currentParagraph ? "" : disabled}
                      variant="contained" 
                      id="button"
                      disabled={textAreaValue === currentParagraph ? true : false}
                      onClick={(e) => changeTextValue(e)}
                    >
                        Metini Değiştir
                    </Button>
                </div>
                <div className="spotWatchMain">
                    <SpotWatch/>
                </div>

            </form>
        </div>
    </Layout>
  )
}

export default ReadingTest;