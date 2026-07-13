'use client';

export default function LocalSeoLinks() {
  const keywords = [
    "cleaning service jakarta", "cleaning service jakarta selatan", "cleaning service jakarta pusat", 
    "cleaning service jakarta barat", "cleaning service jakarta timur", "cleaning service jakarta utara", 
    "cleaning service jabodetabek", "cleaning service bekasi", "cleaning service bogor", 
    "cleaning service depok", "cleaning service cibubur", "cleaning service cileungsi", 
    "cleaning service gunung putri", "cleaning service jatisampurna", "cleaning service raffles hills", 
    "cleaning service harjamukti", "cleaning service kota wisata", "cleaning service citra gran cibubur", 
    "cleaning service", "cleaning service sentul", "jasa cleaning service jakarta", 
    "jasa cleaning service bekasi", "jasa cleaning service bogor", "jasa cleaning service depok", 
    "jasa cleaning service cibubur", "jasa cleaning rumah jakarta", "jasa cleaning rumah bekasi", 
    "jasa cleaning rumah bogor", "jasa cleaning rumah depok", "jasa cleaning rumah cibubur", 
    "general cleaning jakarta", "general cleaning bekasi", "general cleaning bogor", 
    "general cleaning depok", "general cleaning cibubur", "deep cleaning jakarta", 
    "deep cleaning bekasi", "deep cleaning bogor", "deep cleaning depok", 
    "deep cleaning cibubur", "office cleaning jakarta", "office cleaning bekasi", 
    "office cleaning bogor", "office cleaning depok", "office cleaning cibubur", 
    "sofa cleaning cibubur", "mattress cleaning cibubur", "carpet cleaning cibubur", 
    "vacuum hydro cleaning cibubur", "cleanox cleaning service"
  ];

  return (
    <section className="local-seo-links-section" style={{ backgroundColor: '#f8fafc', padding: '60px 0 80px', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        <div className="section-title-two text-center sec-title-animation animation-style1">
          <div className="section-title-two__tagline-box">
            <div className="section-title-two__shape-1">
              <img src="/assets/images/shapes/section-title-shape-3.webp" alt="" />
            </div>
            <p className="section-title-two__tagline" style={{ textTransform: 'uppercase' }}>Wilayah Layanan Kami</p>
          </div>
          <h2 className="section-title-two__title title-animation" style={{ fontSize: '32px', margin: '10px 0' }}>
            Area Cakupan Jasa Cleaning Service Cleanox
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#64748b', fontSize: '15px', lineHeight: '1.6' }}>
            Cleanox menyediakan layanan kebersihan berkualitas tinggi untuk rumah, apartemen, kantor, dan ruko di seluruh wilayah Jabodetabek. Temukan layanan kami di lokasi Anda:
          </p>
        </div>

        <div className="seo-tags-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 14px' }}>
          {keywords.map((kw, idx) => (
            <a 
              key={idx} 
              href="#contact" 
              style={{
                fontSize: '13px',
                color: '#475569',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                padding: '8px 16px',
                borderRadius: '25px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                textTransform: 'capitalize',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.backgroundColor = '#012d59';
                e.currentTarget.style.borderColor = '#012d59';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              {kw}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
