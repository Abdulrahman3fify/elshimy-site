import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavClick,
}) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClickWithRoute = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else if (handleNavClick) {
      handleNavClick(e, targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">
          ELSHIMY<span>TRADE</span>
        </div>
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {mobileMenuOpen && (
          <div
            className="mobile-menu-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
        <ul className={mobileMenuOpen ? "mobile-menu-open" : ""}>
          <li>
            <a
              href="#home"
              onClick={(e) => handleNavClickWithRoute(e, "home")}
              className={activeSection === "home" ? "active" : ""}
            >
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClickWithRoute(e, "about")}
              className={activeSection === "about" ? "active" : ""}
            >
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleNavClickWithRoute(e, "services")}
              className={activeSection === "services" ? "active" : ""}
            >
              {t("nav.services")}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleNavClickWithRoute(e, "experience")}
              className={activeSection === "experience" ? "active" : ""}
            >
              {t("nav.experience")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClickWithRoute(e, "contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              {t("nav.contact")}
            </a>
          </li>
          <li className="language-buttons">
            <button
              onClick={() => changeLanguage("en")}
              style={{
                background: i18n.language === "en" ? "#3b82f6" : "transparent",
                color: i18n.language === "en" ? "#fff" : "#fff",
                border: "1px solid #3b82f6",
                padding: "0.4rem 0.8rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              style={{
                background: i18n.language === "ar" ? "#3b82f6" : "transparent",
                color: i18n.language === "ar" ? "#fff" : "#fff",
                border: "1px solid #3b82f6",
                padding: "0.4rem 0.8rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              AR
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
