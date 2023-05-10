import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Events from "./components/events/Events";
import Galerry from "./components/gallery/Galerry";
import Review from "./components/review/Review";
import Contact from "./components/contact/Contact";
import SVG from "./assets/Untitled-2.png";
import { useSpring, animated } from "@react-spring/web";

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // Delay of 1000ms (1 seconds)

    return () => clearTimeout(timer);
  }, []);

  const springs = useSpring({
    opacity: show ? 1 : 0,
    config: {
      duration: 2000,
    },
  });

  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <About />
      <animated.div
        className="svg1"
        id="header"
        style={{
          ...springs,
        }}
      >
        <img src={SVG} alt="" />
      </animated.div>

      <Events />
      <Galerry />
      <Review />
      <Contact />
    </>
  );
};

export default App;
