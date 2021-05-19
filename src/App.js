/** @format */

import { Fragment } from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <AboutMe />
    </Fragment>
  );
}

export default App;
