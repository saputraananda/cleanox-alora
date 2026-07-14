'use client';

export default function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundColor: '#012d59', color: '#ffffff', paddingBottom: '0' }}>
      <style jsx>{`
        .site-footer__bg-shape img {
          filter: brightness(0) saturate(100%) invert(11%) sepia(90%) saturate(1983%) hue-rotate(194deg) brightness(88%) contrast(101%);
        }
      `}</style>
      <div className="site-footer__bg" style={{ backgroundColor: '#012d59', backgroundImage: 'none' }}></div>
      
      <div className="site-footer__top" style={{ paddingBottom: '60px', paddingTop: '70px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <div className="row">
            
            {/* Contact Column */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="footer-widget__column footer-widget__contact">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title" style={{ color: '#ffffff', fontSize: '22px', fontWeight: '600' }}>Hubungi Kami</h3>
                </div>
                <ul className="footer-widget__contact-list list-unstyled" style={{ marginTop: '20px' }}>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                    <div className="icon" style={{ color: '#fbbd08', fontSize: '18px' }}>
                      <span className="icon-envelope"></span>
                    </div>
                    <div className="text">
                      <p><a href="mailto:info@cleanox.co.id" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s' }}>info@cleanox.co.id</a></p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                    <div className="icon" style={{ color: '#fbbd08', fontSize: '18px' }}>
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p style={{ color: '#ffffff', lineHeight: '1.6' }}>
                        Raffles Hills Blok T11 No.18
                        <br />
                        Jatikarya, Jatisampurna, Bekasi
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="footer-widget__open-hour" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', marginTop: '20px' }}>
                  <h4 className="footer-widget__open-hour-title" style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600' }}>Jam Kerja</h4>
                  <p className="footer-widget__open-hour-text" style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', marginTop: '6px' }}>
                    Senin – Sabtu : 08.00 – 17.00
                    <br />
                    Minggu : Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Pages Column */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="footer-widget__column footer-widget__pages">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title" style={{ color: '#ffffff', fontSize: '22px', fontWeight: '600' }}>Navigasi</h3>
                </div>
                <div className="footer-widget__pages-box" style={{ marginTop: '20px' }}>
                  <ul className="footer-widget__pages-list list-unstyled" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
                    <li>
                      <a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'all 0.2s' }}>Beranda</a>
                    </li>
                    <li>
                      <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'all 0.2s' }}>Tentang Kami</a>
                    </li>
                    <li>
                      <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'all 0.2s' }}>Layanan</a>
                    </li>
                    <li>
                      <a href="#testimonials" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'all 0.2s' }}>Testimoni</a>
                    </li>
                    <li>
                      <a href="#pricing" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'all 0.2s' }}>Harga</a>
                    </li>
                    <li>
                      <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'all 0.2s' }}>Kontak</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Free Consultation Column */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="footer-widget__column footer-widget__newsletter">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title" style={{ color: '#ffffff', fontSize: '22px', fontWeight: '600' }}>Konsultasi Gratis</h3>
                </div>
                <p className="footer-widget__newsletter-text" style={{ color: '#cbd5e1', marginTop: '20px', lineHeight: '1.6', fontSize: '14px' }}>
                  Hubungi customer service kami untuk menjadwalkan konsultasi kebersihan ruangan Anda.
                </p>
                <div className="footer-widget__btn-box" style={{ marginTop: '25px' }}>
                  <a 
                    href="https://wa.me/6285122333381" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="thm-btn"
                    style={{ 
                      background: '#fbbd08', 
                      color: '#012d59', 
                      padding: '12px 24px', 
                      borderRadius: '8px', 
                      fontSize: '14px', 
                      fontWeight: 'bold', 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span className="fab fa-whatsapp" style={{ fontSize: '18px' }}></span>
                    Hubungi WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="site-footer__bottom" style={{ background: '#001e3d', padding: '20px 0' }}>
        <div className="container">
          <div className="site-footer__bottom-inner" style={{ padding: '0', border: 'none', display: 'flex', justifyContent: 'center' }}>
            <p className="site-footer__bottom-text" style={{ color: '#94a3b8', margin: '0', fontSize: '13px' }}>© 2026 Cleanox. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        :global(.footer-widget__pages-list li a:hover) {
          color: #fbbd08 !important;
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
}
