import React from "react";
import Header from './Header';
import About from './About';
import Platforms from './Platforms';
import Footer from '../../components/Footer'

import Features from './Features'
// import Reviews from './Reviews';
import Register from './Register';

const style = {
  color: "#777",
}

const Index = () => {
  const myRef = React.createRef()
  const scrollToSection = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el2 = myRef;

  return (
    <div style={style} >
      <Header click={()=> scrollToSection(el2)} />
      <About />
      <Features />
      <Platforms reference={el2} />
      {/* <Reviews /> */}
      <Register />
      <Footer />
    </div>
  );
}

export default Index;
