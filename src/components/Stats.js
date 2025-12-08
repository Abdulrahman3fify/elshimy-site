import React from 'react';
import { useTranslation } from 'react-i18next';

function Stats() {
  const { t } = useTranslation();

  return (
    <div className="stats">
      <div className="container">
        <div className="stat-item">
          <h3>10,000+</h3>
          <p>{t('stats.tradingPositions')}</p>
        </div>
        <div className="stat-item">
          <h3>40+</h3>
          <p>{t('stats.internationalClients')}</p>
        </div>
        <div className="stat-item">
          <h3>6</h3>
          <p>{t('stats.countriesServed')}</p>
        </div>
        <div className="stat-item">
          <h3>6+</h3>
          <p>{t('stats.yearsExperience')}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

