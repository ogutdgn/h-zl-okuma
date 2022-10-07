import React, { useState } from 'react';
import "./SpotWatch.css";
import SpotWatchBtn from './SpotWatchBtn';
import SpotWatchDisplay from './SpotWatchDisplay';

export const SpotWatch = ({ notify }) => {

  const [time, setTime] = useState({s:0, m:0, ms:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  //console.log(time);
  // Not started = 0
  // started = 1
  // stopped = 2
  

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m;

  const run = () => {
    if(updatedM === 60){
      //updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  };

  const finish = () => {
    notify(time);
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  }

  const resume = () => start();

  return (
    <div className="main-section">
        <div className="clock-holder">
            <div className="stopwatch">
                <SpotWatchDisplay time={time}/>
                <SpotWatchBtn status={status} resume={resume} reset={reset} stop={stop} start={start} finish={finish}/>
            </div>
        </div>
    </div>
  );
}

export default SpotWatch;