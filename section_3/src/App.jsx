import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import AboutContentA from "./components/AboutContentA";
import AboutContentB from "./components/AboutContentB";
import Contact from './components/Contact';
import styles from './styles/Home.module.scss';

const App = () => {
  const { links } = styles;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/contentA" element={<AboutContentA />} />
        <Route path="about/contentB" element={<AboutContentB />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      
      <nav className={links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </BrowserRouter>
  )
}

export default App;
