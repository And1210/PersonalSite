import React from 'react';

import '../styles/Timeline.css';

function EarlyYears() {
  return (
    <div className="timeline">
      <div date="December 10th, 1999" className="timeline-container">
        <div className="timeline-item">
          I Am Born!
        </div>
      </div>
      <div date="September 2005" className="timeline-container">
        <div className="timeline-item flip">
          Started elementary school at Whitney P.S.
        </div>
      </div>
      <div date="Winter 2005" className="timeline-container">
        <div className="timeline-item">
          Began to play houseleague hockey, something I would do through my entire grade school life (12 years)
        </div>
      </div>
      <div date="Fall 2006" className="timeline-container">
        <div className="timeline-item flip">
          I had a role in a High School Musical play
        </div>
      </div>
      <div date="2006-2007" className="timeline-container">
        <div className="timeline-item">
          Course in game development focused on GameMaker
        </div>
      </div>
      <div date="2007" className="timeline-container">
        <div className="timeline-item flip">
          Started fencing for the first time, a sport that I would continue to enjoy for nine years
        </div>
      </div>
      <div date="Summer 2008" className="timeline-container">
        <div className="timeline-item">
          Went to camp for the first time which became a big part of every summer moving forward
        </div>
      </div>
      <div date="June 2011" className="timeline-container">
        <div className="timeline-item flip">
          Finished elementary school!
        </div>
      </div>
    </div>
  );
}
export default EarlyYears;
