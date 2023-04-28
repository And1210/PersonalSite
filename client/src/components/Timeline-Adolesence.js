import React from 'react';

import '../styles/Timeline.css';

function Adolesence() {
  return (
    <div className="timeline">
      <div date="September 2011" className="timeline-container">
        <div className="timeline-item">
          Began middle school at Deer Park P.S.
        </div>
      </div>
      <div date="2012-2013" className="timeline-container">
        <div className="timeline-item flip">
          Large part of stage crew in grade 8 helping run anything in the auditorium.
        </div>
      </div>
      <div date="September 2013" className="timeline-container">
        <div className="timeline-item">
          Started high school at North Toronto C.I.
        </div>
      </div>
      <div date="2013" className="timeline-container">
        <div className="timeline-item flip">
          Beginning of my time curling which lasted for four years playing for both my school and The Leaside Curling Club.
        </div>
      </div>
      <div date="Spring 2014" className="timeline-container">
        <div className="timeline-item">
          Started at my school's robotics club which I was an active member of for all of high school becoming the programming lead in Grade 10.
        </div>
      </div>
      <div date="Fall 2014" className="timeline-container">
        <div className="timeline-item flip">
          Began my first proper coding class which fueled my love of programming and got me involved in coding competitions throughout high school.
        </div>
      </div>
      <div date="Fall 2016" className="timeline-container">
        <div className="timeline-item">
          Joined my school's swim team where I was able to get third place in the city for 50m breast stroke later in the school year.
        </div>
      </div>
      <div date="March 2017" className="timeline-container">
        <div className="timeline-item flip">
          Accepted to Queen's Engineering!
        </div>
      </div>
      <div date="Fall 2017" className="timeline-container">
        <div className="timeline-item">
          Off to University, leaving home for the first time full of excitment.
        </div>
      </div>
    </div>
  );
}
export default Adolesence;
