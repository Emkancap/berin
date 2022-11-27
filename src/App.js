import About from "./About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Questions from "./Questions";
import Contact from "./Contact";
import News from "./News";
import Footer from "./Components/Footer";
import Recruitment from "./recruitment";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div dir="rtl">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/questions" element={<Questions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/recruitment" element={<Recruitment />} />
      </Routes>
      <Footer />
    </div>
  );
}
