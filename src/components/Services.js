import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      key: "algorithmic",
      icon: "🤖",
    },
    {
      key: "accountManagement",
      icon: "📈",
    },
    {
      key: "consultation",
      icon: "💼",
    },
    {
      key: "signals",
      icon: "📡",
    },
  ];

  const handleViewDetails = (serviceKey) => {
    navigate(`/service/${serviceKey}`);
  };

  return (
    <section id="services">
      <div className="container">
        <h2>{t("services.title")}</h2>
        <p className="section-subtitle">{t("services.subtitle")}</p>

        <div className="services-grid">
          {services.map((service) => {
            const serviceKey = service.key;
            const brief = t(`services.${serviceKey}.brief`, {
              defaultValue: t(`services.${serviceKey}.description`),
            });

            return (
              <div key={serviceKey} className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{t(`services.${serviceKey}.title`)}</h3>
                </div>
                <p className="service-description">{brief}</p>

                <button
                  className="service-view-details-button"
                  onClick={() => handleViewDetails(serviceKey)}
                >
                  {t("services.viewDetails")}
                  <span className="button-arrow">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
