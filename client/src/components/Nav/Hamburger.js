import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
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

    return (
        <>
            <div className={`nav__hamburger ${hamburgerMenuActive ? "nav__hamburger--active" : ""}`}
                onClick={() => stopScroll()}
            ></div>
            <div className={hamburgerMenuActive ? "nav__overlay" : ""}></div>
            <div
                className={hamburgerMenuActive ? "nav__overlay__exit" : ""}
                onClick={() => stopScroll()}
            ></div>
            <div className={`sidebarNav ${hamburgerMenuActive ? "sidebarNav--active" : ""}`}>
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

export default Hamburger;