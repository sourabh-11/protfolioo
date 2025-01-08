
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import About from "./components/About";
// import Hero from "./components/Hero";




const Projects = () => <div className="p-6"><h1 className="text-3xl font-bold">Projects   by sourabh</h1></div>;
const Contact = () => <div className="p-6"><h1 className="text-3xl font-bold">Contact</h1></div>;

function App() {
  return (
    <Router>
     <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
