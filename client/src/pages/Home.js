import React from 'react';

import importAll from '../helpers/importAll.js';

import '../styles/Home.css';

const bgImgs = importAll(require.context('../imgs/home', false, /\.(png|jpe?g)$/));

function Home() {
  let colCount = 5;
  let bgImgCols = [];
  for (let i = 0; i < colCount; i++) {
    bgImgCols.push([]);
  }
  for (let i = 0; i < bgImgs.length; i++) {
    bgImgCols[i%colCount].push(bgImgs[i]);
  }

  const getRandAnim = () => {
    let val = Math.floor(Math.random()*4);
    return `bg-img-anim${val}`;
  }

  return (
    <div>
      <div className="main-title-container">
        <div className="main-title">Who is</div>
        <div className="main-title">Andrew Farley?</div>
      </div>
      <div className="bg-container">
        {bgImgCols.map((imgCol) =>
          <div className="bg-col">
            {imgCol.map((img) =>
              <img className={`bg-img ${getRandAnim()}`} src={img} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
