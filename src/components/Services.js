import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState("algorithmic");

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

  const handleToggleService = (serviceKey) => {
    setExpandedService(expandedService === serviceKey ? null : serviceKey);
  };

  const handleViewDetails = (serviceKey, e) => {
    e.stopPropagation(); // Prevent the accordion from toggling
    navigate(`/service/${serviceKey}`);
  };

  return (
    <section id="services">
      <div className="container">
        <h2>{t("services.title")}</h2>
        <p className="section-subtitle">{t("services.subtitle")}</p>

        <div className="services-accordion">
          {services.map((service) => {
            const serviceKey = service.key;
            const isExpanded = expandedService === serviceKey;
            const brief = t(`services.${serviceKey}.brief`, {
              defaultValue: t(`services.${serviceKey}.description`),
            });

            return (
              <div
                key={serviceKey}
                className={`service-accordion-item ${
                  isExpanded ? "expanded" : ""
                }`}
              >
                <div
                  className="service-accordion-header"
                  onClick={() => handleToggleService(serviceKey)}
                >
                  <div className="service-accordion-header-content">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{t(`services.${serviceKey}.title`)}</h3>
                  </div>
                  <span
                    className={`service-accordion-arrow ${
                      isExpanded ? "expanded" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`service-accordion-content ${
                    isExpanded ? "expanded" : ""
                  }`}
                >
                  <p className="service-description">{brief}</p>
                  <button
                    className="service-view-details-button"
                    onClick={(e) => handleViewDetails(serviceKey, e)}
                  >
                    {t("services.viewDetails")}
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
