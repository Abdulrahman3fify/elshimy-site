import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";

function ServiceDetail() {
  const { serviceKey } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [serviceKey]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const services = {
    algorithmic: { icon: "🤖" },
    accountManagement: { icon: "📈" },
    consultation: { icon: "💼" },
    signals: { icon: "📡" },
  };

  const service = services[serviceKey];
  if (!service) {
    return (
      <div>
        <Navigation
          activeSection=""
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          handleNavClick={() => {}}
        />
        <div
          className="container"
          style={{ padding: "100px 5%", textAlign: "center" }}
        >
          <h2>Service Not Found</h2>
          <button
            onClick={() => navigate("/", { state: { scrollToServices: true } })}
            className="cta-button"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const isAlgorithmic = serviceKey === "algorithmic";
  const features = isAlgorithmic
    ? t(`services.${serviceKey}.features`, { returnObjects: true })
    : null;
  const whyChoose = isAlgorithmic
    ? t(`services.${serviceKey}.whyChoose`, { returnObjects: true })
    : null;
  const whatWeDeliver = isAlgorithmic
    ? t(`services.${serviceKey}.whatWeDeliver`, { returnObjects: true })
    : null;
  const result = isAlgorithmic
    ? t(`services.${serviceKey}.result`, { returnObjects: true })
    : null;
  const contact = isAlgorithmic
    ? t(`services.${serviceKey}.contact`, { returnObjects: true })
    : null;
  const details = !isAlgorithmic
    ? t(`services.${serviceKey}.details`, { returnObjects: true })
    : null;

  return (
    <div className="App">
      <Navigation
        activeSection=""
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={() => {}}
      />
      <section className="service-detail-section">
        <div className="container">
          <button
            onClick={() =>
              navigate("/", { state: { scrollToServices: true, serviceKey } })
            }
            className="back-button"
          >
            ← {t("services.backToServices")}
          </button>

          <div className="service-detail-header">
            <div className="service-detail-icon">{service.icon}</div>
            <div>
              <h1>{t(`services.${serviceKey}.title`)}</h1>
              {t(`services.${serviceKey}.description`) && (
                <p className="service-detail-subtitle">
                  {t(`services.${serviceKey}.description`)}
                </p>
              )}
            </div>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-description">
              <h2>{t("services.fullDescription")}</h2>
              <p>{t(`services.${serviceKey}.description`)}</p>
            </div>

            {isAlgorithmic ? (
              <>
                {Array.isArray(features) && features.length > 0 && (
                  <div className="service-detail-features">
                    <h2>{t("services.keyFeatures")}</h2>
                    <div className="service-features-grid">
                      {features.map((feature, idx) => (
                        <div key={idx} className="service-feature-item">
                          <div className="service-feature-icon">
                            {feature.icon}
                          </div>
                          <div className="service-feature-content">
                            <h3 className="service-feature-title">
                              {feature.title}
                            </h3>
                            <p className="service-feature-description">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {whyChoose && whyChoose.points && (
                  <div className="service-detail-section-block">
                    <h2>{whyChoose.title}</h2>
                    <ul className="service-details-list">
                      {whyChoose.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {whatWeDeliver && whatWeDeliver.points && (
                  <div className="service-detail-section-block">
                    <h2>{whatWeDeliver.title}</h2>
                    <ul className="service-details-list">
                      {whatWeDeliver.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {result && (
                  <div className="service-result">
                    <h2 className="service-result-title">{result.title}</h2>
                    <p className="service-result-description">
                      {result.description}
                    </p>
                  </div>
                )}

                {contact && (
                  <div className="service-detail-contact">
                    <h2>{t("services.contactUs")}</h2>
                    <div className="service-contact-info">
                      <div className="service-contact-item">
                        <span className="service-contact-label">Info:</span>
                        <a
                          href={`mailto:${contact.info}`}
                          className="service-contact-link"
                        >
                          {contact.info}
                        </a>
                      </div>
                      <div className="service-contact-item">
                        <span className="service-contact-label">Support:</span>
                        <a
                          href={`mailto:${contact.support}`}
                          className="service-contact-link"
                        >
                          {contact.support}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {Array.isArray(details) && details.length > 0 && (
                  <div className="service-detail-section-block">
                    <h2>{t("services.whatsIncluded")}</h2>
                    <ul className="service-details-list">
                      {details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
