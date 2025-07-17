import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import History from "./History.jsx";
import Portfelio from "./Portfelio.jsx";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Custom cursor tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 20 + "px";
        cursorRef.current.style.top = e.clientY - 20 + "px";
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX - 3 + "px";
        cursorDotRef.current.style.top = e.clientY - 3 + "px";
      }
    };

    // Magnetic effect for buttons and links
    const handleMouseEnter = (e) => {
      if (
        e.target.closest(
          ".magnetic-btn, .magnetic-link, .service-card, .stat-card",
        )
      ) {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "scale(1.5)";
          cursorRef.current.style.mixBlendMode = "difference";
        }
      }
    };

    const handleMouseLeave = (e) => {
      if (
        e.target.closest(
          ".magnetic-btn, .magnetic-link, .service-card, .stat-card",
        )
      ) {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "scale(1)";
          cursorRef.current.style.mixBlendMode = "normal";
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="aesthetic-loading">
        <div className="loading-container">
          <div className="glitch-text" data-text="UMAROV">
            UMAROV
          </div>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
          <div className="loading-subtitle">Crafting Digital Experiences</div>
        </div>
        <div className="loading-particles"></div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="cursor-dot"></div>

      {/* Noise Background */}
      <div className="noise-background"></div>

      <Routes>
        <Route path="/" element={<Home mousePosition={mousePosition} />} />
        <Route path="/portfolio" element={<Portfelio />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
