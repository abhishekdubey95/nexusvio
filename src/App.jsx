import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="hero-section">
      <div
  className="hero-background"
  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1")' }}
>
          <div className="light-trails"></div>
        </div>
        <div className="hero-content">
          <div className="event-title">NEXUSVIO LIVE !</div>
          <div className="event-details">Bangalore, India | 15-18 October</div>
          <div className="main-headline">
            <div>Learn, connect, and get</div>
            <div>inspiring Networks</div>
          </div>
          <div className="sub-text">Join us to experience the future of technology, build community, and celebrate one another.</div>
        </div>
      </main>
      <section className="nexusvio-highlights">
        <h2 className="highlights-title">Nexusvio Highlights</h2>
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80')" }}>
              <div className="new-tag">New</div>
            </div>
            <div className="card-content">
              <div className="card-category">Technology</div>
              <div className="card-title">Nexusvio Innovation Report 2025</div>
              <div className="card-action">→</div>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')" }}>
              <div className="new-tag">New</div>
            </div>
            <div className="card-content">
              <div className="card-category">Sustainability</div>
              <div className="card-title">Nexusvio Sustainability Report 2025</div>
              <div className="card-action">→</div>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80')" }}>
            </div>
            <div className="card-content">
              <div className="card-category">Investor Relations</div>
              <div className="card-title">[Webcast] Financial Results Q1 2025</div>
              <div className="card-action red">→</div>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80')" }}>
            </div>
            <div className="card-content">
              <div className="card-category">Corporate</div>
              <div className="card-title">New \"Nexusvio Group Corporate Video\"</div>
              <div className="card-action">→</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-us-section" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Nexusvio</h2>
            <p className="about-description">
            Nexusvio Technologies is a forward-thinking provider of enterprise-grade networking solutions. With a focus on performance, scalability, and reliability, we deliver infrastructure that drives business success.
            Our mission is to help businesses unlock their full potential through smarter connectivity. We specialize in robust active and passive networking solutions tailored to meet the demands of today's digital world.
            By partnering with global technology leaders, we bring cutting-edge products, superior technical support, and future-ready systems that scale with your growth.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Devices Connected</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
            </div>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="about-image">
            <div className="image-placeholder" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1645725677294-ed0843b97d5c')" }}>
              <div className="tech-icons">
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Products />

      <section className="our-clients-section">
        <div className="clients-container">
          <div className="clients-header">
            <h2 className="clients-title">Our Clients</h2>
            <div className="title-underline"></div>
            <p className="clients-description">
              Meet our happy clients
            </p>
          </div>
          <div className="clients-grid">
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1654277040981-82984a49c63a" alt="Abof" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1662052955098-042b46e60c2b" alt="Lucubrate" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1654277040981-82984a49c63a" alt="Restaurant Appliance Depot" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1654277040981-82984a49c63a" alt="Lilly" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1654277040981-82984a49c63a" alt="Citrus" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1654277040981-82984a49c63a" alt="Trustly" className="client-logo" />
            </div>
          </div>
        </div>
      </section>
      
      <div className="accessibility-icon">♿</div>
    </div>
  );
}

export default App;
