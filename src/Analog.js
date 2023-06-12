import React, { useState, useEffect } from 'react';
import './AnalogClock.css';
const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourRotation = (hour * 30) + (minute / 2);
  const minuteRotation = (minute * 6) + (second / 10);
  const secondRotation = second * 6;

  return (
    <div className="analog-clock">
      <div className="hand hour-hand" style={{ transform: `rotate(${hourRotation}deg)` }}></div>
      <div className="hand minute-hand" style={{ transform: `rotate(${minuteRotation}deg)` }}></div>
      <div className="hand second-hand" style={{ transform: `rotate(${secondRotation}deg)` }}></div>
      
      <div style={{fontFamily:'cursive',width:560,marginLeft:-140}}>
      <h4 style={{marginTop:210,color:'darkmagenta'}}>"Make Every Moment Count for Your Health"</h4>
      </div>
    </div>
    
  );
};

export default AnalogClock;
