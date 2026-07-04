import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import Home from "./components/Home";

import About from "./components/About";

import Contact from "./components/Contact";

import NotFound from "./components/NotFound";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
