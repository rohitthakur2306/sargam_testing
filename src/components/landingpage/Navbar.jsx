import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../landingpage/landing.css";
import logo from "../../assests/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Doctors",
      path: "/doctorspage",
    },
    {
      label: "Blogs",
      path: "/Blog-page",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <nav className="sargam-navbar">
        {/* =================================================
            BRAND
        ================================================= */}

        <Link to="/" className="sargam-brand" onClick={closeMenu}>
          <img src={logo} alt="Sargam Healthcare" className="sargam-logo" />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="sargam-desktop-nav">
          <div className="sargam-nav-pill">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  isActive(item.path)
                    ? "sargam-nav-link active"
                    : "sargam-nav-link"
                }
              >
                <span>{item.label}</span>

                {isActive(item.path) && <i className="nav-active-dot"></i>}
              </Link>
            ))}
          </div>
        </div>

        {/* =================================================
            DESKTOP RIGHT ACTION
        ================================================= */}

        <div className="sargam-navbar-actions">
          <div className="sargam-navbar-contact">
            <span className="contact-dot"></span>

            <div>
              <small>Emergency Support</small>
              <strong>24 × 7 Available</strong>
            </div>
          </div>

          <Link to="/book-appointment" className="sargam-appointment-btn">
            <span>Book Appointment</span>

            <span className="appointment-arrow">↗</span>
          </Link>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className={
            menuOpen ? "sargam-menu-button open" : "sargam-menu-button"
          }
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* ===================================================
          MOBILE OVERLAY
      =================================================== */}

      <div
        className={
          menuOpen ? "sargam-mobile-overlay show" : "sargam-mobile-overlay"
        }
        onClick={closeMenu}
      ></div>

      {/* ===================================================
          MOBILE DRAWER
      =================================================== */}

      <aside
        className={
          menuOpen ? "sargam-mobile-drawer open" : "sargam-mobile-drawer"
        }
      >
        {/* MOBILE HEADER */}

        <div className="mobile-drawer-header">
          <Link to="/" className="mobile-drawer-brand" onClick={closeMenu}>
            <img src={logo} alt="Sargam Healthcare" />
          </Link>

          <button
            type="button"
            className="mobile-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* MOBILE NAV */}

        <div className="mobile-navigation">
          <span className="mobile-navigation-label">NAVIGATION</span>

          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={
                isActive(item.path)
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span className="mobile-nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="mobile-nav-name">{item.label}</span>

              <span className="mobile-nav-arrow">↗</span>
            </Link>
          ))}
        </div>

        {/* MOBILE CTA */}

        <div className="mobile-drawer-bottom">
          <div className="mobile-emergency-card">
            <div className="mobile-emergency-icon">+</div>

            <div>
              <span>EMERGENCY SUPPORT</span>

              <strong>Available 24 × 7</strong>
            </div>
          </div>

          <Link
            to="/book-appointment"
            onClick={closeMenu}
            className="mobile-appointment-btn"
          >
            Book Appointment
            <span>↗</span>
          </Link>

          <p>Compassionate care. Experienced doctors. Better health.</p>
        </div>
      </aside>
    </>
  );
}
