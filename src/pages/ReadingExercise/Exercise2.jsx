import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Typography, Menu, MenuItem } from '@mui/material';
import Layout from '../../components/Layout/Layout';

function Exercise2() {
    const [userInput, setUserInput] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [distance, setDistance] = useState(30);
    const [showNumbers, setShowNumbers] = useState(false);
    const [running, setRunning] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [inputBorderColor, setInputBorderColor] = useState("#ccc");
    const [digitCount, setDigitCount] = useState(1);
    const [numbers, setNumbers] = useState([generateRandomNumber(digitCount), generateRandomNumber(digitCount)]);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const timeoutRef = useRef(null);
    const inputRef = useRef(null);

    function generateRandomNumber(digitCount) {
        const min = Math.pow(10, digitCount - 1);
        const max = Math.pow(10, digitCount) - 1;
        return Math.floor(min + Math.random() * (max - min));
    }

    const startExercise = () => {
        setShowNumbers(true);
        generateNewNumbers();
        setTimeout(() => {
            setShowNumbers(false); // belirli bir süre sonra sayıları sakla
        }, 500); // Buradaki 2000 milisaniye yani 2 saniye, sayıların ekranda kalacağı süreyi belirtir
    };
    
    const resetExercise = () => {
        setShowNumbers(false);
        setDistance(40);
        setUserInput("");
        setCorrectCount(0);
        setIncorrectCount(0);
    };

    const checkAnswer = () => {
        if (!userInput) return;
    
        if (userInput === `${numbers[0]}${numbers[1]}`) {
            setCorrectCount(prev => prev + 1);
            setDistance(prevDistance => Math.min(prevDistance + 10, 500)); // Mesafeyi arttırma
            setUserInput("");
            setTimeout(() => {
                generateNewNumbers();
                setShowNumbers(true);
                setTimeout(() => {
                    setShowNumbers(false);
                }, 500);
            }, 500);
        } else {
            setIncorrectCount(prev => prev + 1);
            setUserInput("");
            setTimeout(() => {
                generateNewNumbers();
                setShowNumbers(true);
                setTimeout(() => {
                    setShowNumbers(false);
                }, 500);
            }, 500);
        }
    };    
    

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    }

    const generateNewNumbers = () => {
        let num1, num2;
        switch (digitCount) {
            case 1:
                num1 = Math.floor(Math.random() * 10);
                num2 = Math.floor(Math.random() * 10);
                break;
            case 2:
                num1 = Math.floor(Math.random() * 90) + 10;
                num2 = Math.floor(Math.random() * 90) + 10;
                break;
            case 3:
                num1 = Math.floor(Math.random() * 900) + 100;
                num2 = Math.floor(Math.random() * 900) + 100;
                break;
            default:
                num1 = 0;
                num2 = 0;
        }
        setNumbers([num1, num2]);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Layout>
        <Container style={{ display: 'flex', flexDirection: 'column',  justifyContent: 'space-around', height: "100%" }}>

                <div style={{ display: "flex", justifyContent: "space-between"}}>
        
                    <div style={{ position: '', top: '10px', left: '10px' }}>
                        
                            <Button variant="contained" color="secondary" onClick={startExercise}>
                                Egzersizi Başlat
                            </Button>
                        
                    </div>
                    
                    <div style={{ position: '', top: '10px', right: '10px' }}>
                        <Button variant="contained" color="primary" onClick={handleClick}>
                            Seçenekler
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => { setDigitCount(1); handleClose(); resetExercise(); }}>Tek Basamaklı</MenuItem>
                            <MenuItem onClick={() => { setDigitCount(2); handleClose(); resetExercise(); }}>Çift Basamaklı</MenuItem>
                            <MenuItem onClick={() => { setDigitCount(3); handleClose(); resetExercise(); }}>Üç Basamaklı</MenuItem>
                        </Menu>
                    </div>

                </div>
                
    
                <Typography variant="h6" style={{ marginBottom: '20px' }}>Doğru: {correctCount} Yanlış: {incorrectCount}</Typography>
    
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'inline-block', position: 'relative', marginBottom: '20px' }}>
                        {showNumbers && (
                            <>
                                <span style={{ position: 'absolute', left: `calc(50% - ${distance}px - 10px)`, fontSize: '24px' }}>{numbers[0]}</span>
                                <span style={{ position: 'absolute', right: `calc(50% - ${distance}px - 10px)`, fontSize: '24px' }}>{numbers[1]}</span>
                            </>
                        )}
                        <Typography variant="h3">•</Typography>
                    </div>
                </div>
    
                <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                        variant="filled"
                        value={userInput}
                        onChange={e => setUserInput(e.target.value)}
                        placeholder="Sayıları Girin"
                        style={{ marginBottom: '10px' }}
                        onKeyPress={handleKeyPress}
                    />
                    <Button variant="contained" onClick={checkAnswer}>Doğrula</Button>
                </div>
            </Container>
        </Layout>
    );
    
}

export default Exercise2;