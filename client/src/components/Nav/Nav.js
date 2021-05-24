import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navagation = () => {
  const [sleeperOpen, setSleeperOpen] = useState(false);
  const [espnOpen, setEspnOpen] = useState(false)

  return (
    <>
    <div className='nav'>
      <Link className='nav__button nav__button--word' to="/">FFWR</Link>

      <div 
        className={`nav__button ${sleeperOpen === true ? 'nav__button--active' : ''}`} 
        onClick={() => setSleeperOpen(true)}
        onMouseLeave={() => setSleeperOpen(false)}
        >
        <div 
        className='nav__button--word' 
        // onMouseEnter={() => setSleeperActive(true)}
        // onMouseLeave={() => setSleeperActive(false)}
        >Sleeper</div>
        <div className={`nav__dropdown ${sleeperOpen === true ? 'nav__dropdown--active' : ''}`} >
          <Link to="/weekly-report-sleeper"><div className="nav__dropdown__link">Weekly Report</div></Link>
          <Link to="/overall-report-sleeper"><div className="nav__dropdown__link">Overall Report</div></Link>
          <Link to="/sleeper"><div className="nav__dropdown__link">Input</div></Link>
        </div>
      </div> 
        
      <div 
        className={`nav__button ${espnOpen === true ? 'nav__button--active' : ''}`} 
        onClick={() => setEspnOpen(true)}
        onMouseLeave={() => setEspnOpen(false)}
        >
        <p className='nav__button--word'>ESPN</p>
        <div className={`nav__dropdown ${espnOpen === true ? 'nav__dropdown--active' : ''}`} >
          <Link to="/weekly-report-espn"><div className="nav__dropdown__link">Weekly Report</div></Link>
          <Link to="/overall-report-espn"><div className="nav__dropdown__link">Overall Report</div></Link>
          <Link to="/espn"><div className="nav__dropdown__link">Input</div></Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navagation;