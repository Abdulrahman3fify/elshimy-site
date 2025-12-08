import React from "react";
import { useTranslation } from "react-i18next";

function Footer({ handleNavClick }) {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t("footer.contactUs")}</h3>
            <div className="footer-contact-info">
              <p>
                <a
                  href="tel:+96892407907"
                  style={{ color: "#cbd5e1", textDecoration: "none" }}
                >
                  📞 +968 9240 7907
                </a>
              </p>
              <p>
                <a
                  href="mailto:engineer.elshimy@gmail.com"
                  style={{ color: "#cbd5e1", textDecoration: "none" }}
                >
                  ✉️ engineer.elshimy@gmail.com
                </a>
              </p>
              <p style={{ color: "#cbd5e1", marginTop: "0.5rem" }}>
                📍 Muscat, Oman
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t("footer.quickLinks")}</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick && handleNavClick(e, "home")}
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick && handleNavClick(e, "about")}
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) =>
                    handleNavClick && handleNavClick(e, "services")
                  }
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) =>
                    handleNavClick && handleNavClick(e, "experience")
                  }
                >
                  {t("nav.experience")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) =>
                    handleNavClick && handleNavClick(e, "contact")
                  }
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t("footer.followUs")}</h3>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/elshimy-for-trade-and-investment/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <img
                  src="/linkedin-icon.svg"
                  alt="LinkedIn"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
            </div>
            <div className="footer-partnership" style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                <a
                  href="https://forextime.com/?Referral=35310"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  IB for FOREX TIME
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {t("footer.copyright")}</p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
