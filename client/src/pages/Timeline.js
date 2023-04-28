import {React, useState, useEffect} from 'react';

import EarlyYears from '../components/Timeline-EarlyYears.js';
import Adolesence from '../components/Timeline-Adolesence.js';
import University0 from '../components/Timeline-University0.js';
import University1 from '../components/Timeline-University1.js';
import Graduate from '../components/Timeline-Graduate.js';

import '../styles/Timeline.css';

function Timeline() {
  const [curTimeline, setCurTimeline] = useState("");

  const timelineReset = () => {
    setCurTimeline("");
  }

  const getCurTimelineComponent = () => {
    if (curTimeline == 'EarlyYears') {
      return <EarlyYears />;
    } else if (curTimeline == 'Adolesence') {
      return <Adolesence />;
    } else if (curTimeline == 'University0') {
      return <University0 />;
    } else if (curTimeline == 'University1') {
      return <University1 />;
    } else if (curTimeline == 'Graduate') {
      return <Graduate />;
    } else {
      setCurTimeline("");
    }
  }

  const handleTimelineSelect = (event) => {
    let timeline = event.target.id;
    console.log(timeline);
    setCurTimeline(timeline);
  }

  return (
    <div>
      <div className="timeline-layout-container">
        <div className="timeline-layout-item">
          <div className="timeline-title-container">
            {curTimeline.length > 0 && (
              <div className="reset-button" onClick={() => {timelineReset()}}>
                &larr;
              </div>
            )}
            <div className="timeline-title">The Timeline of My Life</div>
          </div>
        </div>
        <div className="timeline-layout-item">
          {curTimeline.length == 0 && (
            <div className="timeline">
              <div date="December 10th, 1999" className="timeline-container">
                <div className="timeline-item">
                  The Day of My Birth (still technically a 90s kid)
                </div>
              </div>
              <div date="December 1999 - September 2011" className="timeline-container">
                <div id="EarlyYears" className="timeline-item flip can-click" onClick={handleTimelineSelect}>
                  My Early Years
                </div>
              </div>
              <div date="September 2011 - September 2017" className="timeline-container">
                <div id="Adolesence" className="timeline-item can-click" onClick={handleTimelineSelect}>
                  Adolesence
                </div>
              </div>
              <div date="September 2017 - May 2019" className="timeline-container">
                <div id="University0" className="timeline-item flip can-click" onClick={handleTimelineSelect}>
                  Undergraduate Degree (Years 1 and 2)
                </div>
              </div>
              <div date="May 2019 - May 2021" className="timeline-container">
                <div id="University1" className="timeline-item can-click" onClick={handleTimelineSelect}>
                  Undergraduate Degree (Years 3 and 4)
                </div>
              </div>
              <div date="September 2020 - April 2023" className="timeline-container">
                <div id="Graduate" className="timeline-item flip can-click" onClick={handleTimelineSelect}>
                  Graduate School
                </div>
              </div>
              <div date="April 2023 - Present" className="timeline-container">
                <div className="timeline-item">
                  Travelling and Beyond
                </div>
              </div>
            </div>
          )}
          {curTimeline.length > 0 && getCurTimelineComponent()}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
