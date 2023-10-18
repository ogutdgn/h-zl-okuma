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
            Start
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
              Stop
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
              Resume
            </Button>
            <Button 
            className="stopwatch-btn stopwatch-btn-yel"
            variant="contained"
            style={{ width: "100px", backgroundColor: "red" }}
            onClick={props.finish}
            >
              Finish
            </Button>
            <Button 
            className="stopwatch-btn stopwatch-btn-yel"
            variant="contained"
            style={{ width: "100px" }}
            onClick={props.reset}
            >
              Reset
            </Button>
          </div> : ""
        }
     </div>
     
    </div>
  );
}

export default SpotWatchBtn;