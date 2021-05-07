import React from "react";
import Header from './Header';
import About from './About';
import Platforms from './Platforms';
import Footer from '../../components/Footer'

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
      <Platforms reference={el2} />
      <Footer />
    </div>
  );
}

export default Index;
