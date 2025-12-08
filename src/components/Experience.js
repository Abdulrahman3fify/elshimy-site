import React from 'react';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>{t('experience.title')}</h2>
        <p className="section-subtitle">{t('experience.subtitle')}</p>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="year">2019 - Present</div>
            <h3>{t('experience.milestone1.title')}</h3>
            <p>{t('experience.milestone1.description')}</p>
          </div>
          
          <div className="timeline-item">
            <div className="year">2019 - Present</div>
            <h3>{t('experience.milestone2.title')}</h3>
            <p>{t('experience.milestone2.description')}</p>
          </div>
          
          <div className="timeline-item">
            <div className="year">2017 - 2020</div>
            <h3>{t('experience.milestone3.title')}</h3>
            <p>{t('experience.milestone3.description')}</p>
          </div>
          
          <div className="timeline-item">
            <div className="year">{i18n.language === 'ar' ? 'التأسيس' : 'Foundation'}</div>
            <h3>{t('experience.milestone4.title')}</h3>
            <p>{t('experience.milestone4.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

