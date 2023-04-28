import React from 'react';

import '../styles/Timeline.css';

function University1() {
  return (
    <div className="timeline">
      <div date="Summer 2019" className="timeline-container">
        <div className="timeline-item">
          Worked as a Global Trade Securities Intern at TD Bank where I created algorithms to detect insider trading
        </div>
      </div>
      <div date="2019-2020" className="timeline-container">
        <div className="timeline-item flip">
          Became the Director of IT for the Engineering Society
        </div>
      </div>
      <div date="December 2019" className="timeline-container">
        <div className="timeline-item">
          Completely reworked the entire EngSoc IT infrastructure due to a security breach and the failings of the platform
        </div>
      </div>
      <div date="February 2020" className="timeline-container">
        <div className="timeline-item flip">
          Competed at the Candian Engineering Comptetition programming section where we placed third nationally
        </div>
      </div>
      <div date="March 2020" className="timeline-container">
        <div className="timeline-item">
          Dealt with more security breaches into the EngSoc IT infrastructure due to poor legacy practices
        </div>
      </div>
      <div date="Spring 2020" className="timeline-container">
        <div className="timeline-item flip">
          Added to, and improved different features and functionalities of Dash, the hiring platform created for EngSoc written in Ruby on Rails
        </div>
      </div>
      <div date="September 2020" className="timeline-container">
        <div className="timeline-item">
          Began my accelerated Master's alongside my last year of Undergrad
        </div>
      </div>
      <div date="Summer 2020" className="timeline-container">
        <div className="timeline-item flip">
          Worked for the Offroad Robotics Lab at Queen's developing a comparison between robot simulators and real world data
        </div>
      </div>
      <div date="February" className="timeline-container">
        <div className="timeline-item">
          Competed again in the Canadian Engineering Comptetition where my team and I managed to place second nationally
        </div>
      </div>
      <div date="Spring 2021" className="timeline-container">
        <div className="timeline-item flip">
          Finished my Undergraduate thesis which was a precursor to my Graduate research
        </div>
      </div>
    </div>
  );
}
export default University1;
