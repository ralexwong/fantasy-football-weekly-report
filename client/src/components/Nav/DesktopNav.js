import React, { useState } from "react";
import { Link } from "react-router-dom";

const DesktopNav = () => {
    const [sleeperOpen, setSleeperOpen] = useState(false);
    const [espnOpen, setEspnOpen] = useState(false);

    return (
        <ul className='nav__list' tabindex="0">
            <li className='nav__item' tabindex="1">
                <Link className="nav__word" to="/">
                    Home
                </Link>
            </li>


            <li className={`nav__item ${sleeperOpen === true ? "nav__item--active" : ""}`}
                onClick={() => setSleeperOpen(true)}
                onMouseLeave={() => setSleeperOpen(false)}
                onKeyPress={() => setSleeperOpen(true)}
                tabindex="0"
            >
                <p className="nav__word">
                    Sleeper
                </p>

                {sleeperOpen ?
                    <ul className='nav__dropdown'>
                        <li className='nav__dropdown__item'
                            onClick={() => setSleeperOpen(false)}
                            onKeyPress={() => setSleeperOpen(false)}
                        >
                            <Link to="/weekly-report-sleeper">
                                Weekly Report
                            </Link>
                        </li>
                        <li className='nav__dropdown__item'
                            onClick={() => setSleeperOpen(false)}
                            onKeyPress={() => setSleeperOpen(false)}
                        >
                            <Link to="/overall-report-sleeper">
                                Overall Report
                            </Link>
                        </li>

                        <li className='nav__dropdown__item'
                            onClick={() => setSleeperOpen(false)}
                            onKeyPress={() => setSleeperOpen(false)}
                        >
                            <Link to="/sleeper">
                                Input
                            </Link>
                        </li>

                    </ul> : <></>
                }
            </li>

            <li className={`nav__item ${espnOpen === true ? "nav__item--active" : ""}`}
                onClick={() => setEspnOpen(true)}
                onMouseLeave={() => setEspnOpen(false)}
                onKeyPress={() => setEspnOpen(true)}
                tabindex="0"
            >
                <p className="nav__word">
                    ESPN
                </p>
                {espnOpen ?
                    <ul className='nav__dropdown'>
                        <li className='nav__dropdown__item'
                            onClick={() => setEspnOpen(false)}
                            onKeyPress={() => setEspnOpen(false)}
                        >
                            <Link to="/weekly-report-espn">
                                Weekly Report
                            </Link>
                        </li>

                        <li className='nav__dropdown__item'
                            onClick={() => setEspnOpen(false)}
                            onKeyPress={() => setEspnOpen(false)}
                        >
                            <Link to="/overall-report-espn">
                                Overall Report
                            </Link>
                        </li>

                        <li className='nav__dropdown__item'
                            onClick={() => setEspnOpen(false)}
                            onKeyPress={() => setEspnOpen(false)}
                        >
                            <Link to="/espn">
                                Input
                            </Link>
                        </li>

                    </ul> : <></>
                }
            </li>
        </ul>
    );
};

export default DesktopNav;
