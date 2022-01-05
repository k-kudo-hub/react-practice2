import {Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import AboutContentA from "../components/AboutContentA";
import AboutContentB from "../components/AboutContentB";
import Contact from "../components/Contact";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="about/contentA" element={<AboutContentA />} />
      <Route path="about/contentB" element={<AboutContentB />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}
