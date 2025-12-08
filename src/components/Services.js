import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  return (
    <section id="services">
      <div className="container">
        <h2>{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💼</div>
            <h3>{t('services.consultation.title')}</h3>
            <p>{t('services.consultation.description')}</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3>{t('services.accountManagement.title')}</h3>
            <p>{t('services.accountManagement.description')}</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">📡</div>
            <h3>{t('services.signals.title')}</h3>
            <p>{t('services.signals.description')}</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>{t('services.algorithmic.title')}</h3>
            <p>{t('services.algorithmic.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

