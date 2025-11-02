import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  useEffect(() => {
    // Set initial direction based on current language
    const currentLang = i18n.language || 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">ELSHIMY<span>TRADE</span></div>
          <ul style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <li><a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >{t('nav.home')}</a></li>
            <li><a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={activeSection === 'about' ? 'active' : ''}
            >{t('nav.about')}</a></li>
            <li><a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className={activeSection === 'services' ? 'active' : ''}
            >{t('nav.services')}</a></li>
            <li><a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, 'experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >{t('nav.experience')}</a></li>
            <li><a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >{t('nav.contact')}</a></li>
            <li style={{display: 'flex', gap: '0.5rem'}}>
              <button 
                onClick={() => changeLanguage('en')}
                style={{
                  background: i18n.language === 'en' ? '#3b82f6' : 'transparent',
                  color: i18n.language === 'en' ? '#fff' : '#fff',
                  border: '1px solid #3b82f6',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ar')}
                style={{
                  background: i18n.language === 'ar' ? '#3b82f6' : 'transparent',
                  color: i18n.language === 'ar' ? '#fff' : '#fff',
                  border: '1px solid #3b82f6',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                AR
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <p>{t('hero.description')}</p>
          <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>{t('hero.getConsultation')}</a>
          <a href="#services" className="cta-button cta-secondary" onClick={(e) => handleNavClick(e, 'services')}>{t('hero.exploreServices')}</a>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Experience Timeline */}
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3 style={{marginBottom: '2rem', color: '#0f172a'}}>{t('contact.contactInfo')}</h3>
              
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <p><a href="tel:+96892407907" style={{color: '#64748b', textDecoration: 'none'}}>+968 9240 7907</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <p><a href="mailto:engineer.elshimy@gmail.com" style={{color: '#64748b', textDecoration: 'none'}}>engineer.elshimy@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <h4>{t('contact.address')}</h4>
                  <p>Flat: 21, Way 3360, Building: 1/A/5478<br />Block: 333 - Elkhoud, Seeb<br />Muscat, Oman</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">💼</div>
                <div>
                  <h4>{t('contact.business')}</h4>
                  <p>ELSHIMY FOR TRADE AND INVESTMENT</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">🤝</div>
                <div>
                  <h4>{t('contact.partnership')}</h4>
                  <p><a href="https://forextime.com/?Referral=35310" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'none'}}>IB for FOREX TIME (5+ years)</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/linkedin-icon.svg" alt="LinkedIn" style={{width: '1.5rem', height: '1.5rem'}} />
                </div>
                <div>
                  <h4>{t('contact.linkedin')}</h4>
                  <p><a href="https://www.linkedin.com/company/elshimy-for-trade-and-investment/" target="_blank" rel="noopener noreferrer" style={{color: '#0a66c2', textDecoration: 'none', fontWeight: '600'}}>@ElshimyForTrade</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {t('footer.copyright')}</p>
          <p style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>{t('footer.tagline')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
