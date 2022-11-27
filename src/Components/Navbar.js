import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navbar, setNavbar] = useState("Home");
  const [count, setCount] = useState("");
  console.log(count);

  return (
    <div>
      <div className="fixed-top">
        <nav
          className="navbar navbar-expand-lg "
          style={{
            boxShadow: "12px 14px 30px rgba(0, 0, 0, 0.18",
            backdropFilter: "blur(5px)",
            background: "rgba(242, 242, 242, 0.15)",
            fontSize: "18px",
            fontWeight: "600",
            position: "absolute",
            top: "0",
            width: "100%",
            zIndex: "1",
          }}
        >
          <div className="container">
            <a href="/" className="navbar-brand">
              <img
                src={require("../Assest/Home/Berain 2.png")}
                alt="Berin Logo"
                width="86px"
              />
            </a>
            <button
              onClick={(e) => setCount(e.currentTarget.classList.value)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ border: "none" }}
            >
              {count === "navbar-toggler" ? (
                <img
                  src={require("../Assest/Home/closecircle.png")}
                  alt="close"
                />
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${navbar === "Home" && "active"}`}
                    aria-current="page"
                    onClick={() => setNavbar("Home")}
                  >
                    الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link ${navbar === "About Us" && "active"}`}
                    onClick={() => setNavbar("About Us")}
                  >
                    من نحن
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/questions"
                    className={`nav-link question-nav ${
                      navbar === "questions" && "active"
                    }`}
                    onClick={() => setNavbar("questions")}
                  >
                    الاسئلة الشائعة
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/news"}
                    className={`nav-link ${navbar === "news" && "active"}`}
                    onClick={() => setNavbar("news")}
                  >
                    الأخبار
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/recruitment"}
                    className={`nav-link ${
                      navbar === "recruitment" && "active"
                    }`}
                    onClick={() => setNavbar("recruitment")}
                  >
                    التوظيف
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={`nav-link ${navbar === "contact" && "active"}`}
                    onClick={() => setNavbar("contact")}
                  >
                    التواصل
                  </Link>
                </li>
              </ul>
              <div className="lang d-flex align-items-center">
                <p className="m-0">العربية</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
