import React from 'react';
import './Timeline.css';
import Sugesstions from "./Sugesstions";
function TimeLine() {
  return (
    <div className='timeline'>
      <div className="timeline__left">TimeLine</div>
      <div className="timeline__right">
       <Sugesstions />
      </div>
    </div>
  )
}

export default TimeLine