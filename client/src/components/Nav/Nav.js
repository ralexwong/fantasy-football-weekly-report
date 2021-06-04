import React, { useState, useEffect } from "react";

import Hamburger from './Hamburger';
import DesktopNav from './DesktopNav';

const Navagation = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

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
        { isDesktop ? (<DesktopNav />) : (<Hamburger />) }
      </div>
    </>
  );
};

export default Navagation;
