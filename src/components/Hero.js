import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero({ handleNavClick }) {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="container">
        <p>{t('hero.description')}</p>
        <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>{t('hero.getConsultation')}</a>
        <a href="#services" className="cta-button cta-secondary" onClick={(e) => handleNavClick(e, 'services')}>{t('hero.exploreServices')}</a>
      </div>
    </section>
  );
}

export default Hero;

