import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <p className="section-subtitle">{t('about.subtitle')}</p>
        <div className="about-content">
          <div className="about-text">
            <p>{t('about.paragraph1')}</p>
            
            <p>{t('about.paragraph2')}</p>
          </div>
          
          <div>
            <ul className="expertise-list">
              <li>
                <strong>📊 {t('about.methodology')}</strong>
                {t('about.methodologyDesc')}
              </li>
              <li>
                <strong>🌍 {t('about.globalExperience')}</strong>
                {t('about.globalExperienceDesc')}
              </li>
              <li>
                <strong>🤝 {t('about.partnership')}</strong>
                {t('about.partnershipDesc')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

