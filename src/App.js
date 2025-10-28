import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
          <ul>
            <li><a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >Home</a></li>
            <li><a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={activeSection === 'about' ? 'active' : ''}
            >About</a></li>
            <li><a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className={activeSection === 'services' ? 'active' : ''}
            >Services</a></li>
            <li><a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, 'experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >Experience</a></li>
            <li><a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <p>Engineering precision meets market expertise. Specializing in algorithmic trading combined with fundamental and economic analysis across all financial markets.</p>
          <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>Get Consultation</a>
          <a href="#services" className="cta-button cta-secondary" onClick={(e) => handleNavClick(e, 'services')}>Explore Services</a>
        </div>
      </section>

      {/* Stats Section */}
      <div className="stats">
        <div className="container">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Trading Positions</p>
          </div>
          <div className="stat-item">
            <h3>40+</h3>
            <p>International Clients</p>
          </div>
          <div className="stat-item">
            <h3>6</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-item">
            <h3>6+</h3>
            <p>Years of Trading Experience</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About US</h2>
          <p className="section-subtitle">Where Engineering Meets Financial Markets</p>
          <div className="about-content">
            <div className="about-text">
              <p>The company's journey began in 2024 with trading while honing skills in market analysis. Since then, the team has dedicated the last 6+ years as traders, executing over 10,000 trading positions and serving more than 40 retail traders across Jordan, Egypt, Oman, Turkey, Saudi Arabia, and Germany.</p>
              
              <p>As an Introducing Broker (IB) for FOREX TIME for over 5 years, the company has built a reputation for combining technical precision with deep fundamental and economic analysis, all powered by sophisticated trading algorithms.</p>
            </div>
            
            <div>
              <ul className="expertise-list">
                <li>
                  <strong>🎓 Educational Background</strong>
                  Electronics & Communications Engineering - Systematic analytical approach
                </li>
                <li>
                  <strong>📊 Trading Methodology</strong>
                  Fundamentals + Economic Analysis + Algorithm Trading
                </li>
                <li>
                  <strong>🌍 Global Experience</strong>
                  Clients from 6 countries across Middle East, Europe & Africa
                </li>
                <li>
                  <strong>🤝 Industry Partnership</strong>
                  IB for FOREX TIME (5+ years of trusted collaboration)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2>My Services</h2>
          <p className="section-subtitle">Comprehensive Trading Solutions for All Financial Markets</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Professional Consultation</h3>
              <p>Personalized trading strategies tailored to your goals, risk tolerance, and market conditions. Benefit from 6+ years of full-time trading experience.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Account Management</h3>
              <p>Let me manage your trading account with proven strategies combining fundamental analysis, economic indicators, and algorithmic execution.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📡</div>
              <h3>Trading Signals</h3>
              <p>Receive high-probability trading signals based on comprehensive market analysis across Forex, Stocks, Commodities, and Cryptocurrencies.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>Algorithmic Trading</h3>
              <p>Custom trading algorithms leveraging my engineering background to automate strategies with precision timing and risk management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Company Milestones</h2>
          <p className="section-subtitle">Building Excellence in Trading & Investment Solutions</p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="year">2019 - Present</div>
              <h3>Global Client Portfolio Expansion</h3>
              <p>Executed over 10,000+ trading positions across all major financial markets, serving 40+ institutional and retail clients spanning six countries: Jordan, Egypt, Oman, Turkey, Saudi Arabia, and Germany. Established reputation for consistent performance and strategic market analysis.</p>
            </div>
            
            <div className="timeline-item">
              <div className="year">2019 - Present</div>
              <h3>Strategic Partnership with FOREX TIME</h3>
              <p>Established and maintained 5+ year partnership as Introducing Broker for FOREX TIME, providing clients with access to premier brokerage services while ensuring exceptional service standards and market execution quality.</p>
            </div>
            
            <div className="timeline-item">
              <div className="year">2017 - 2020</div>
              <h3>Proprietary Trading System Development</h3>
              <p>Developed comprehensive trading methodology utilizing proprietary techniques for tracking economic indicators and identifying which markets they impact. Established specialized frameworks for analyzing quarterly earnings results and their correlation with stock price movements. Created the foundation for our unique approach combining quantitative precision with fundamental market analysis and algorithmic execution systems.</p>
            </div>
            
            <div className="timeline-item">
              <div className="year">Foundation</div>
              <h3>Engineering-Driven Market Approach</h3>
              <p>Founded on principles of Electronics & Communications Engineering expertise, bringing systematic analytical frameworks, mathematical modeling capabilities, and algorithm development proficiency to financial market analysis and trading execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Ready to elevate your trading? Let's discuss your investment goals</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3 style={{marginBottom: '2rem', color: '#0f172a'}}>Contact Information</h3>
              
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+96892407907" style={{color: '#64748b', textDecoration: 'none'}}>+968 9240 7907</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:engineer.elshimy@gmail.com" style={{color: '#64748b', textDecoration: 'none'}}>engineer.elshimy@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>Flat: 21, Way 3360, Building: 1/A/5478<br />Block: 333 - Elkhoud, Seeb<br />Muscat, Oman</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">💼</div>
                <div>
                  <h4>Business</h4>
                  <p>ELSHIMY FOR TRADE AND INVESTMENT</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">🤝</div>
                <div>
                  <h4>Partnership</h4>
                  <p><a href="https://forextime.com/?Referral=35310" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'none'}}>IB for FOREX TIME (5+ years)</a></p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3 style={{marginBottom: '1.5rem', color: '#0f172a'}}>Get In Touch</h3>
              <p style={{color: '#64748b', marginBottom: '2rem', fontSize: '1.1rem'}}>Ready to elevate your trading? Contact us through email or phone.</p>
              
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <a 
                  href="mailto:engineer.elshimy@gmail.com?subject=Trading Consultation Inquiry" 
                  className="cta-button"
                  style={{display: 'inline-block'}}
                >
                  📧 Send Email
                </a>
                <a 
                  href="tel:+96892407907" 
                  className="cta-button cta-secondary"
                  style={{display: 'inline-block'}}
                >
                  📞 Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Mahmoud Elshimy - ELSHIMY FOR TRADE AND INVESTMENT. All rights reserved.</p>
          <p style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>Professional Trader | Investment Specialist | Money Expo Oman Speaker</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
