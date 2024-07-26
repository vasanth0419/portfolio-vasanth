import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contactus from "./components/Contactus";
import Project from "./components/Project";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
