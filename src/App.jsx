import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Router>
      <MenuBar />
      <Hero />
      <About />
      <Projects />
      <div className="w-full h-[25vh] bg-white "></div>
      <Contact />
    </Router>
  );
}

export default App;
