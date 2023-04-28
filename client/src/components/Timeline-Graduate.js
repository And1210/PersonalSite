import React from 'react';

import '../styles/Timeline.css';

function University1() {
  return (
    <div className="timeline">
      <div date="May 2021" className="timeline-container">
        <div className="timeline-item">
          Completed my Undergraduate Engeering Degree (BASc) with Honors
        </div>
      </div>
      <div date="May 2021" className="timeline-container">
        <div className="timeline-item flip">
          Began my Master's research into AI full time rather than alongside my Undergrad degree
        </div>
      </div>
      <div date="Summer and Fall 2021" className="timeline-container">
        <div className="timeline-item">
          Was a contributor to an ICASSP paper titled: Multiscale Crowd Counting and Localization By Multitask Point Supervision
        </div>
      </div>
      <div date="Fall 2021" className="timeline-container">
        <div className="timeline-item flip">
          TA'd my supervising professor's course: Computer Vision
        </div>
      </div>
      <div date="January 2022" className="timeline-container">
        <div className="timeline-item">
          Spent a month in Halifax with friends from home while continuing to work
        </div>
      </div>
      <div date="Fall 2022" className="timeline-container">
        <div className="timeline-item flip">
          Finally got some better results in my research and began writing my Thesis
        </div>
      </div>
      <div date="January 2023" className="timeline-container">
        <div className="timeline-item">
          Successfully defended my Thesis, achieving a Masters of Applied Science in Artificial Intelligence
        </div>
      </div>
      <div date="March & April 2023" className="timeline-container">
        <div className="timeline-item flip">
          Submitted a paper to the Conference on Robots and Vision based on my thesis work and it got accepted
        </div>
      </div>
      <div date="April 2023 and Beyond" className="timeline-container">
        <div className="timeline-item">
          Off to travel as long as I can, enjoying working on projects such as this website
        </div>
      </div>
    </div>
  );
}
export default University1;
