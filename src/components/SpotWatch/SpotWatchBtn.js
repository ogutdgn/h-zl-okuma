import React from 'react';
import { Button } from '@mui/material';

const SpotWatchBtn = (props) => {
  return (
    <div className="buttons">
      <div className="startBtn">
        {(props.status === 0)? 
          <Button 
          className="stopwatch-btn stopwatch-btn-gre"
          variant="contained"
          style={{ width: "100px", backgroundColor: "green" }}
          onClick={props.start}
          >
            Başla
          </Button> : ""
        }
      </div>

      <div className="stopResetBtn">
        {(props.status === 1)? 
          <div>
            <Button 
            className="stopwatch-btn stopwatch-btn-red"
            variant="contained"
            style={{ width: "100px", backgroundColor: "red" }}
            onClick={props.stop}
            >
              Durdur
            </Button>
            <Button 
            className="stopwatch-btn stopwatch-btn-yel"
            variant="contained"
            style={{ width: "100px" }}
            onClick={props.reset}
            >
              Sıfırla
            </Button>
          </div> : ""
        }
      </div>

     <div className="resumeFinishBtn">
      {(props.status === 2)? 
          <div>
            <Button 
            className="stopwatch-btn stopwatch-btn-gre"
            variant="contained"
            style={{ width: "100px", backgroundColor: "green" }}
            onClick={props.resume}
            >
              Devam
            </Button>
            <Button 
            className="stopwatch-btn stopwatch-btn-yel"
            variant="contained"
            style={{ width: "100px", backgroundColor: "red" }}
            onClick={props.finish}
            >
              Bitir
            </Button>
          </div> : ""
        }
     </div>
     
    </div>
  );
}

export default SpotWatchBtn;