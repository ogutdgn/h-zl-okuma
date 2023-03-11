import React from 'react';
import "./ReadingTest.css";
import Layout from '../../components/Layout/Layout';
import { useParagraphStore } from '../../store/useParagraphStore';
import SpotWatch from '../../components/SpotWatch/SpotWatch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReadingTest = () => {

    const { currentParagraph, changeParagraphFunc, setWordsInParagraph, wordsInParagraph } = useParagraphStore();

    // const [isFocus, setIsFocus] = useState(false);

    const handleTextAreaChange = (e) => {
        changeParagraphFunc(e.target.value);
        setWordsInParagraph(e.target.value);
    }
    
    const notify = (time) => {
      let totalMin = (time.m * 60 + time.s) / 60; 
      toast.success(`Dakikada ${Math.round(wordsInParagraph.length / totalMin)} kelime okuyorsunuz.`,{
        position: "bottom-right",
        theme: "colored",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }


  return (
    <Layout>
        <div className="mainContainer">
            <h6><i><b>Not: </b>Sayacı başlatıp girmiş olduğunuz metini okuyun. Bitirdiğinizde dakikada kaç kelime okuduğunuzu öğrenin.</i></h6>

            <div className="textDataTest">
                <div className="mainSideText">
                  <div className="textSideTest">
                      <textarea name="text" id="text" cols="100" rows="10" value={currentParagraph} onChange={(e) => handleTextAreaChange(e)}/>
                      {/* {isFocus ? setActiveElement(true) : setActiveElement(false)} */}
                      <p>Metinde {wordsInParagraph.length} kelime var.</p>
                  </div>
                </div>
                <div className="spotWatchMain">
                    <ToastContainer
                      position="bottom-right"
                      theme="colored"
                      autoClose={false}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                    />
                    <SpotWatch notify={notify}/>
                </div>
    
            </div>
        </div>
    </Layout>
  )
}

export default ReadingTest;