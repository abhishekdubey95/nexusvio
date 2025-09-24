import React from 'react';
import './App.css';

const SectionHeader = ({ id, title, subtitle }) => (
  <div id={id} className="products-section-header">
    <h2 className="products-title">{title}</h2>
    {subtitle && <p className="products-subtitle">{subtitle}</p>}
  </div>
);

const ProductCard = ({ title, tags = [], desc, badge, highlight, image }) => (
  <div className={`product-card ${highlight ? 'highlight' : ''}`}>
    {badge && <div className="product-badge">{badge}</div>}
    <div
      className="product-visual"
      style={{ backgroundImage: image ? `url('${image}')` : undefined }}
    />
    <div className="product-body">
      <h3 className="product-name">{title}</h3>
      {desc && <p className="product-desc">{desc}</p>}
      {tags?.length > 0 && (
        <div className="product-tags">
          {tags.map((t) => (
            <span key={t} className="product-tag">{t}</span>
          ))}
        </div>
      )}
      {/* <div className="product-actions">
        <button className="btn btn-primary">Learn more</button>
        <button className="btn btn-outline">Buy now</button>
      </div> */}
    </div>
  </div>
);

const Products = () => {
  return (
    <section className="products-wrapper">
      <SectionHeader
        id="products"
        title="Products Offered"
        subtitle="A curated lineup of Nexusvio networking devices for homes and businesses"
      />

      <div className="products-grid">
        <ProductCard
          badge="Wi‑Fi 7"
          title="Nexusvio Stratus 7000"
          desc="Tri‑band 10.8 Gbps Wi‑Fi 7 router with 2.5G WAN/LAN and OFDMA+MU‑MIMO"
          tags={["Tri‑band", "2.5G", "OFDMA", "Gaming"]}
          highlight
          image='../images/wifi7.png'
        />
        <ProductCard
          badge="Mesh"
          title="Nexusvio Orbit Pro (3‑Pack)"
          desc="Whole‑home coverage with seamless roaming • Wi‑Fi 6"
          tags={["Backhaul", "Tri‑band", "Parental Control"]}
          image="https://images.unsplash.com/photo-1752595883241-f7c69d5092cb"
        />
        <ProductCard
          title="Nexusvio Boost X6"
          desc="Wall‑plug Wi‑Fi 6 extender to eliminate dead zones"
          tags={["OneMesh", "Gigabit"]}
          image="https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85"
        />
        <ProductCard
          title="Nexusvio Switch S8 PoE"
          desc="8‑Port Smart switch • 4× PoE+ • VLAN • IGMP"
          tags={["VLAN", "PoE+", "QoS"]}
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
        />
        <ProductCard
          title="Nexusvio Gateway Combo"
          desc="Cable modem‑router combo • DOCSIS 3.1 • Wi‑Fi 6"
          tags={["Multi‑Gig", "Voice"]}
          image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        />
        <ProductCard
          title="Nexusvio Home 4G"
          desc="Fixed LTE router with phone port and external antennas"
          tags={["LTE‑A", "VoLTE"]}
          image="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop"
        />
      </div>
    </section>
  );
};

export default Products;
