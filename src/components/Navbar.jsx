import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar bg-black navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold text-white" href="#home">
            Harsh Vats
          </a>
          <button
            className="navbar-toggler border-0 bg-white"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {/* Hamburger / Cross Icon */}
            <div className={`menu-icon ${isOpen ? "open" : ""}`}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mx-3">
              <li className="nav-item mx-2">
                <a className="nav-link fw-bold fs-5 text-white" href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link fs-5 fw-bold text-white" href="#experience" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link fs-5 fw-bold text-white" href="#skills" onClick={() => setIsOpen(false)}>
                  Skills
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link fs-5 fw-bold text-white" href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link fs-5 fw-bold text-white" href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

      
      </nav>
    </>
  );
};

export default Navbar;

