import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navagation = () => {
  const [sleeperOpen, setSleeperOpen] = useState(false);
  const [espnOpen, setEspnOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  const [sidebarContent, setSidebarContent] = useState('main')
  const [open, setOpen] = useState(true)

  const stopScroll = () => {
    setHamburgerMenuActive(!hamburgerMenuActive)
    if (open) {
      document.body.style.overflow = 'hidden';
      setOpen(false)
    } else {
      document.body.style.overflow = 'unset';
      setOpen(true)
    }
  }

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <div className="nav">
        {isDesktop ? (
          <>
            <Link className="nav__button nav__button--word" to="/">
              FFWR
            </Link>

            <div
              className={`nav__button ${sleeperOpen === true ? "nav__button--active" : ""
                }`}
              onClick={() => setSleeperOpen(true)}
              onMouseLeave={() => setSleeperOpen(false)}
            >
              <div
                className="nav__button--word"
              // onMouseEnter={() => setSleeperActive(true)}
              // onMouseLeave={() => setSleeperActive(false)}
              >
                Sleeper
              </div>
              <div
                className={`nav__dropdown ${sleeperOpen === true ? "nav__dropdown--active" : ""
                  }`}
              >
                <Link to="/weekly-report-sleeper">
                  <div className="nav__dropdown__link">Weekly Report</div>
                </Link>
                <Link to="/overall-report-sleeper">
                  <div className="nav__dropdown__link">Overall Report</div>
                </Link>
                <Link to="/sleeper">
                  <div className="nav__dropdown__link">Input</div>
                </Link>
              </div>
            </div>

            <div
              className={`nav__button ${espnOpen === true ? "nav__button--active" : ""
                }`}
              onClick={() => setEspnOpen(true)}
              onMouseLeave={() => setEspnOpen(false)}
            >
              <p className="nav__button--word">ESPN</p>
              <div
                className={`nav__dropdown ${espnOpen === true ? "nav__dropdown--active" : ""
                  }`}
              >
                <Link to="/weekly-report-espn">
                  <div className="nav__dropdown__link">Weekly Report</div>
                </Link>
                <Link to="/overall-report-espn">
                  <div className="nav__dropdown__link">Overall Report</div>
                </Link>
                <Link to="/espn">
                  <div className="nav__dropdown__link">Input</div>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`nav__hamburger ${hamburgerMenuActive ? "nav__hamburger--active" : ""
                }`}
              onClick={() => stopScroll()}
            ></div>
            {hamburgerMenuActive ? <></> : <></>}
          </>
        )}
      </div>
      <div className={hamburgerMenuActive ? "nav__overlay" : ""}></div>
      <div
        className={hamburgerMenuActive ? "nav__overlay__exit" : ""}
        onClick={() => setHamburgerMenuActive(false)}
      ></div>
      <div
        className={`sidebarNav ${hamburgerMenuActive ? "sidebarNav--active" : ""
          }`}
      >
        <div className={`sidebarNav__content ${sidebarContent === 'main' ? '' : 'sidebarNav__content--off'}`}>
          <div className="sidebarNav__link">
            <Link className="bold-underline" to="/" onClick={() => stopScroll()}>
              Home
            </Link>
          </div>
          <div className={`sidebarNav__link ${sidebarContent === 'sleeper' ? 'sidebarNav__link--active' : ''}`} onClick={() => setSidebarContent('sleeper')}>
            Sleeper <span className='sidebarNav__arrow'>&#8250;</span>
          </div>
          <div className={`sidebarNav__link ${sidebarContent === 'espn' ? 'sidebarNav__link--active' : ''}`} onClick={() => setSidebarContent('espn')}>
            ESPN <span className='sidebarNav__arrow'>&#8250;</span>
          </div>
        </div>

        <div className={`sidebarNav__content ${sidebarContent === 'sleeper' ? '' : 'sidebarNav__content--off'}`}>
          <div className='bold-underline' onClick={() => setSidebarContent('main')}>&#8592; Back</div>
          <Link to="/weekly-report-sleeper" onClick={() => stopScroll()}>
            <div className="">Weekly Report</div>
          </Link>
          <Link to="/overall-report-sleeper" onClick={() => stopScroll()}>
            <div className="">Overall Report</div>
          </Link>
          <Link to="/sleeper" onClick={() => stopScroll()}>
            <div className="">Input</div>
          </Link>
        </div>

        <div className={`sidebarNav__content ${sidebarContent === 'espn' ? '' : 'sidebarNav__content--off'}`}>
          <div className='bold-underline' onClick={() => setSidebarContent('main')}>&#8592; Back</div>
          <Link to="/weekly-report-espn" onClick={() => stopScroll()}>
            <div className="">Weekly Report</div>
          </Link>
          <Link to="/overall-report-espn" onClick={() => stopScroll()}>
            <div className="">Overall Report</div>
          </Link>
          <Link to="/espn" onClick={() => stopScroll()}>
            <div className="">Input</div>
          </Link>
        </div>

      </div>
    </>
  );
};

export default Navagation;
