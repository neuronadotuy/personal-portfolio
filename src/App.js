/** @format */

import { Fragment } from "react";
import "./App.scss";
import Abilities from "./components/Abilities";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Abilities />
      <Portfolio />
    </Fragment>
  );
}

export default App;
