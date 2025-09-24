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


          <a
            href="https://www.wired.com/story/what-is-wi-fi-7/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-card"
          >
            <div
              className="card-image"
              style={{
                backgroundImage: "url('/images/wifi7.png')",
              }}
            >
              <div className="new-tag">New</div>
            </div>

            <div className="card-content">
              <div className="card-category">Technology</div>
              <div className="card-title">What Is Wi-Fi 7 ?</div>
              <div className="card-action">→</div>
            </div>
          </a>

          <a
            href="https://mkt.panduit.com/apac-blog-cat6a-vs-cat6.html"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-card"
          >
            <div
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1675024226990-36dcb7252c62')",
              }}
            >
              <div className="new-tag">New</div>
            </div>

            <div className="card-content">
              <div className="card-category">Technology</div>
              <div className="card-title">Choosing Between Cat6A and Cat6 Cables</div>
              <div className="card-action">→</div>
            </div>
          </a>


          <a
            href="https://www.cbre.co.in/insights/articles/indias-data-centre-market-seizing-growth-opportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-card"
          >
            <div
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1682562031269-58a59c81432c')",
              }}
            >
            </div>

            <div className="card-content">
              <div className="card-category">Technology</div>
              <div className="card-title">India's Data Centre Market</div>
              <div className="card-action">→</div>
            </div>
          </a>

          <a
            href="https://neosnetworks.com/resources/blog/what-is-digital-infrastructure/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-card"
          >
            <div
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89')",
              }}
            >
            </div>

            <div className="card-content">
              <div className="card-category">Technology</div>
              <div className="card-title">Choosing Between Cat6A and Cat6 Cables</div>
              <div className="card-action">→</div>
            </div>
          </a>
          
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
            <h2 className="clients-title">Our Partners</h2>
            <div className="title-underline"></div>
            <p className="clients-description">
              Meet our happy Partners
            </p>
          </div>
          <div className="clients-grid">
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1704089272382-201cf5c1bbbb" alt="Restaurant Appliance Depot" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1654277040981-82984a49c63a" alt="Abof" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1678483789107-6402b5848d95" alt="Lucubrate" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1649006708938-cf885c646df6" alt="Abof" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1678483789107-6402b5848d95" alt="Lucubrate" className="client-logo" />
            </div>
            <div className="client-card">
              <img src="https://images.unsplash.com/photo-1704089272382-201cf5c1bbbb" alt="Restaurant Appliance Depot" className="client-logo" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
