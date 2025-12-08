import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "submitting", message: t("contact.sending") });

    try {
      // EmailJS configuration
      // Note: You'll need to set up EmailJS service and get your keys
      // For now, we'll use a mailto fallback
      const serviceId =
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "your_public_key";

      // If EmailJS is configured, use it
      if (
        serviceId !== "your_service_id" &&
        templateId !== "your_template_id" &&
        publicKey !== "your_public_key"
      ) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_email: "engineer.elshimy@gmail.com",
          },
          publicKey
        );

        setStatus({
          type: "success",
          message: t("contact.success"),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent("Contact Form Submission");
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:engineer.elshimy@gmail.com?subject=${subject}&body=${body}`;
        setStatus({
          type: "success",
          message: t("contact.success"),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message: t("contact.error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{t("contact.title")}</h2>
        <p className="section-subtitle">{t("contact.subtitle")}</p>

        <div>
          {/* <div className="contact-info">
            <h3 style={{ marginBottom: "2rem", color: "#0f172a" }}>
              {t("contact.contactInfo")}
            </h3>

            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div>
                <h4>{t("contact.phone")}</h4>
                <p>
                  <a
                    href="tel:+96892407907"
                    style={{ color: "#64748b", textDecoration: "none" }}
                  >
                    +968 9240 7907
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div>
                <h4>{t("contact.email")}</h4>
                <p>
                  <a
                    href="mailto:engineer.elshimy@gmail.com"
                    style={{ color: "#64748b", textDecoration: "none" }}
                  >
                    engineer.elshimy@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div>
                <h4>{t("contact.address")}</h4>
                <p>
                  Flat: 21, Way 3360, Building: 1/A/5478
                  <br />
                  Block: 333 - Elkhoud, Seeb
                  <br />
                  Muscat, Oman
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">💼</div>
              <div>
                <h4>{t("contact.business")}</h4>
                <p>ELSHIMY FOR TRADE AND INVESTMENT</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">🤝</div>
              <div>
                <h4>{t("contact.partnership")}</h4>
                <p>
                  <a
                    href="https://forextime.com/?Referral=35310"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#3b82f6", textDecoration: "none" }}
                  >
                    IB for FOREX TIME (5+ years)
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div
                className="contact-item-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/linkedin-icon.svg"
                  alt="LinkedIn"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              </div>
              <div>
                <h4>{t("contact.linkedin")}</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/company/elshimy-for-trade-and-investment/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0a66c2",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    @ElshimyForTrade
                  </a>
                </p>
              </div>
            </div>
          </div> */}

          <div className="contact-form">
            <h3 style={{ marginBottom: "0.5rem", color: "#0f172a" }}>
              {t("contact.formTitle")}
            </h3>
            <p
              style={{
                marginBottom: "2rem",
                color: "#64748b",
                fontSize: "0.95rem",
              }}
            >
              {t("contact.formSubtitle")}
            </p>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                <p>{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("contact.name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.namePlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("contact.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t("contact.phoneNumber")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.phonePlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contact.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("contact.sending") : t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
