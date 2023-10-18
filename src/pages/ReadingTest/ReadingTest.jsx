import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useParagraphStore } from '../../store/useParagraphStore';
import SpotWatch from '../../components/SpotWatch/SpotWatch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, TextareaAutosize, Typography, Grid } from '@mui/material';

const ReadingTest = () => {
    const { currentParagraph, changeParagraphFunc, setWordsInParagraph, wordsInParagraph } = useParagraphStore();

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
            <Box margin={2} textAlign="left">
                <Typography variant="subtitle1" gutterBottom>
                    <i><b>Note: </b>Start the counter and read the text you entered. When you finish, find out how many words per minute you read.</i>
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextareaAutosize 
                            minRows={10}
                            style={{ width: '100%', padding: '10px' }}
                            value={currentParagraph}
                            onChange={handleTextAreaChange}
                        />
                        <Typography>
                            There are {wordsInParagraph.length} words in this passage.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} container direction="column" spacing={3}>
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
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default ReadingTest;
