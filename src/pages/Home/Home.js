import React, { useState, useEffect } from 'react';
import "./Home.css";
import Layout from '../../components/Layout/Layout';
import { Button } from '@mui/material';
import { useParagraphStore } from '../../store/useParagraphStore';

const Home = () => {
  const { currentParagraph, changeParagraphFunc} = useParagraphStore();

  const [textAreaValue, setTextAreaValue] = useState(currentParagraph);
  const [wordsInParagraph, setWordsInParagraph] = useState([]);

  useEffect(() => {
    setWordsInParagraph(currentParagraph.split(" "));
  }, [currentParagraph])
  

  const textFormSubmitted = (e) => {
      e.preventDefault();
      changeParagraphFunc(textAreaValue);
  }

  const handleTextAreaChange = (e) => {
      setTextAreaValue(e.target.value);
      setWordsInParagraph(e.target.value.split(" ")); 
  }

  return (
    <Layout>
        <div className="mainContainer">
            {/* <h6><i><b>Not: </b>Bir metin giriniz. ardından aşağıdaki kutucukta metininiz içerisinden saniyede kaç kelime görülmesini istediğinize göre kutucuklara istediğiniz değerleri giriniz.</i></h6> */}

            <form className="textData" onSubmit={(e) => textFormSubmitted(e)}>
                <div className="textSide">
                    <label htmlFor="text">Metin Giriniz :</label>
                    <textarea name="text" id="text" cols="100" rows="10" value={textAreaValue} onChange={(e) => handleTextAreaChange(e)}/>
                    <p>Metinde {wordsInParagraph.length} kelime var</p>
                </div>

                <div className="submitButtons">
                    <Button style={{width: "215px", height: "50px", backgroundColor: "green"}} 
                    variant="contained" 
                    id="button"
                    type="submit"
                    >
                      Okuma Egzersizi
                    </Button>

                    <Button style={{width: "215px", height: "50px", backgroundColor: "green"}} 
                    variant="contained" 
                    id="button"
                    type="submit"
                    >
                      Okuma Testi
                    </Button>
                </div>
            </form>
        </div>
    </Layout>
  )
}

export default Home