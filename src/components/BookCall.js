import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function BookCall() {
  const { t } = useTranslation();

  // Wait for Calendly script to load
  useEffect(() => {
    // Calendly script is loaded in index.html
    // No initialization needed here, just check if it's available
  }, []);

  const openCalendly = () => {
    const calendlyUrl =
      process.env.REACT_APP_CALENDLY_URL ||
      "https://calendly.com/abdulrahmanafify-95/30min";
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    } else {
      // Fallback: open in new tab
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="book-call" className="book-call-section">
      <div className="container">
        <div className="book-call-card">
          <div className="book-call-icon">📅</div>
          <div className="book-call-content">
            <h3>{t("contact.bookCallTitle")}</h3>
            <p>{t("contact.bookCallDescription")}</p>
            <button
              onClick={openCalendly}
              className="book-call-button"
              type="button"
            >
              {t("contact.bookCallButton")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCall;

