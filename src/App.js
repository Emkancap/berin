import About from "./About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Questions from "./Questions";
import Contact from "./Contact";
import News from "./News";
import Footer from "./Components/Footer";
import Recruitment from "./recruitment";
import Policy from "./Policy";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";
export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div dir="rtl">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/questions" element={<Questions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
}
