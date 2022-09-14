import React, { useState, useEffect } from 'react';
import "./ReadingTest.css";
import Layout from '../../components/Layout/Layout';
import { TextField, Button } from '@mui/material';
import { useParagraphStore } from '../../store/useParagraphStore';
//import Button from '@mui/material/Button';


const ReadingTest = () => {

    const { currentParagraph, changeParagraphFunc} = useParagraphStore();

    const [textAreaValue, setTextAreaValue] = useState(currentParagraph);
    const [wordsInParagraph, setWordsInParagraph] = useState(0);

    useEffect(() => {
        setWordsInParagraph(currentParagraph.split(" "));
      }, [currentParagraph])

    const textFormSubmitted = (e) => {
        e.preventDefault();
    }

    const handleTextAreaChange = (e) => {
        setTextAreaValue(e.target.value);
        // let currentParagraph = textAreaValue;
        // setWordsInParagraph(currentParagraph.split(" "));
        // console.log(wordsInParagraph);
        // let wordsInParagraph = currentParagraph.split(" ");
        // console.log(wordsInParagraph);
    }

  return (
    <Layout>
        <div className="mainContainer">
            <h6><i><b>Not: </b>Bir metin giriniz. ardından aşağıdaki kutucukta metininiz içerisinden saniyede kaç kelime görülmesini istediğinize göre kutucuklara istediğiniz değerleri giriniz.</i></h6>

            <form className="textData" onSubmit={(e) => textFormSubmitted(e)}>
                <div className="textSide">
                    <label htmlFor="text">Metin Giriniz :</label>
                    <textarea name="text" id="text" cols="100" rows="10" value={textAreaValue} onChange={(e) => handleTextAreaChange(e)}/>
                </div>

                <div className="textTimeAndNumber">
                    <div className="textFieldsUpSide">
                        <TextField
                            id="outlined-number"
                            label="Kaç Saniye"
                            type="number"
                            InputProps={{
                                inputProps: { 
                                    max: 100, min: 0 
                                }
                            }}
                            sx={{ m: 1, width: '25ch' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Saniyede Kaç Kelime"
                            type="number"
                            InputProps={{
                                inputProps: { 
                                    max: 100, min: 0 
                                }
                            }}
                            sx={{ m: 1, width: '25ch' }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className="textFieldsDownSide">
                        <Button style={{width: "215px", height: "50px", backgroundColor: "green"}} 
                        variant="contained" 
                        id="button"
                        type="submit"
                        >
                            Başla
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    </Layout>
  )
}

export default ReadingTest