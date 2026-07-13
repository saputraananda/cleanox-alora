'use client';

export default function PricingOne() {
  return (
    <section className="pricing-two" id="pricing" style={{ position: 'relative', zIndex: 1, padding: '100px 0 120px' }}>
      <div 
        className="pricing-two__bg"
        style={{ 
          backgroundColor: '#ffffff',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      ></div>
      
      <div className="container">
        <div className="section-title-two text-center">
          <div className="section-title-two__tagline-box" style={{ justifyContent: 'center' }}>
            <div className="section-title-two__shape-1">
              <img src="/assets/images/shapes/section-title-shape-3.webp" alt="" />
            </div>
            <p className="section-title-two__tagline">Pricing Plan</p>
          </div>
          <h2 className="section-title-two__title title-animation">
            Pilih Layanan Cleaning Sesuai Kebutuhan Anda
          </h2>
          <p style={{ maxWidth: '600px', margin: '15px auto 0', color: '#64748b' }}>
            Harga transparan untuk layanan cleaning profesional rumah, apartemen, kantor, dan area komersial.
          </p>
        </div>
        
        <div className="row" style={{ marginTop: '50px' }}>
          {/* Card 1 */}
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
            <div className="pricing-two__single" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', background: '#ffffff', transition: 'all 0.4s ease' }}>
              
              {/* Header Image Cover */}
              <div className="pricing-card-header" style={{ position: 'relative', height: '170px', display: 'flex', alignItems: 'center', padding: '30px 35px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/cleanox-rumah.webp)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(1, 45, 89, 0.45) 0%, rgba(1, 45, 89, 0.85) 100%)', zIndex: 2 }}></div>
                
                <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#7cc835', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '20px', boxShadow: '0 4px 12px rgba(124, 200, 53, 0.3)' }}>
                    <span className="icon-hand"></span>
                  </div>
                  <div>
                    <p style={{ textDecoration: 'line-through', color: '#cbd5e1', margin: 0, fontSize: '13px', fontWeight: 'bold' }}>Rp 340k</p>
                    <h3 style={{ fontSize: '28px', color: '#ffffff', margin: 0, fontWeight: '800', lineHeight: '30px' }}>Rp 170k</h3>
                    <p style={{ margin: 0, fontSize: '11px', color: '#e2e8f0', opacity: 0.9 }}>/ Jam</p>
                  </div>
                </div>
              </div>

              <div className="pricing-two__clean-box-inner" style={{ padding: '35px 35px 40px' }}>
                <div className="pricing-two__clean-box" style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#012d59', margin: '0 0 6px' }}>
                    <a href="https://wa.me/6285122333381" style={{ color: '#012d59', textDecoration: 'none' }}>General Cleaning</a>
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>1 Orang Teknisi Berpengalaman</p>
                </div>
                <ul className="pricing-two__list list-unstyled" style={{ margin: 0, padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Peralatan Standard Lengkap</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Hasil Bersih, Rapi &amp; Higienis</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 0 }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Pengerjaan Cepat &amp; Efisien</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <div className="pricing-two__single popular-card" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(124, 200, 53, 0.15)', border: '2px solid #7cc835', background: '#ffffff', transition: 'all 0.4s ease', position: 'relative' }}>
              
              {/* Populer Badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'linear-gradient(135deg, #7cc835 0%, #5b9620 100%)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '700',
                padding: '4px 12px',
                borderRadius: '50px',
                boxShadow: '0 4px 10px rgba(124, 200, 53, 0.3)',
                zIndex: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Terpopuler
              </div>

              {/* Header Image Cover */}
              <div className="pricing-card-header" style={{ position: 'relative', height: '170px', display: 'flex', alignItems: 'center', padding: '30px 35px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/cleanox-kantor.webp)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(1, 45, 89, 0.45) 0%, rgba(1, 45, 89, 0.85) 100%)', zIndex: 2 }}></div>
                
                <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#7cc835', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '20px', boxShadow: '0 4px 12px rgba(124, 200, 53, 0.3)' }}>
                    <span className="icon-hand"></span>
                  </div>
                  <div>
                    <p style={{ textDecoration: 'line-through', color: '#cbd5e1', margin: 0, fontSize: '13px', fontWeight: 'bold' }}>Rp 420k</p>
                    <h3 style={{ fontSize: '28px', color: '#ffffff', margin: 0, fontWeight: '800', lineHeight: '30px' }}>Rp 210k</h3>
                    <p style={{ margin: 0, fontSize: '11px', color: '#e2e8f0', opacity: 0.9 }}>/ Jam</p>
                  </div>
                </div>
              </div>

              <div className="pricing-two__clean-box-inner" style={{ padding: '35px 35px 40px' }}>
                <div className="pricing-two__clean-box" style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#012d59', margin: '0 0 6px' }}>
                    <a href="https://wa.me/6285122333381" style={{ color: '#012d59', textDecoration: 'none' }}>General Cleaning</a>
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>2 Orang Teknisi (⭐ Rekomendasi)</p>
                </div>
                <ul className="pricing-two__list list-unstyled" style={{ margin: 0, padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Peralatan Standard Lengkap</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Hasil Bersih, Rapi &amp; Higienis</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 0 }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Pengerjaan Cepat &amp; Efisien</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <div className="pricing-two__single" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', background: '#ffffff', transition: 'all 0.4s ease' }}>
              
              {/* Header Image Cover */}
              <div className="pricing-card-header" style={{ position: 'relative', height: '170px', display: 'flex', alignItems: 'center', padding: '30px 35px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/cleanox-cafe.webp)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(1, 45, 89, 0.45) 0%, rgba(1, 45, 89, 0.85) 100%)', zIndex: 2 }}></div>
                
                <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#7cc835', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '20px', boxShadow: '0 4px 12px rgba(124, 200, 53, 0.3)' }}>
                    <span className="icon-hand"></span>
                  </div>
                  <div>
                    <p style={{ textDecoration: 'line-through', color: '#cbd5e1', margin: 0, fontSize: '13px', fontWeight: 'bold' }}>Rp 620k</p>
                    <h3 style={{ fontSize: '28px', color: '#ffffff', margin: 0, fontWeight: '800', lineHeight: '30px' }}>Rp 310k</h3>
                    <p style={{ margin: 0, fontSize: '11px', color: '#e2e8f0', opacity: 0.9 }}>/ Jam</p>
                  </div>
                </div>
              </div>

              <div className="pricing-two__clean-box-inner" style={{ padding: '35px 35px 40px' }}>
                <div className="pricing-two__clean-box" style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#012d59', margin: '0 0 6px' }}>
                    <a href="https://wa.me/6285122333381" style={{ color: '#012d59', textDecoration: 'none' }}>General Cleaning</a>
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>3 Orang Teknisi Berpengalaman</p>
                </div>
                <ul className="pricing-two__list list-unstyled" style={{ margin: 0, padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Peralatan Standard Lengkap</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Hasil Bersih, Rapi &amp; Higienis</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 0 }}>
                    <span className="fas fa-angle-double-right" style={{ color: '#7cc835' }}></span>
                    <span style={{ fontSize: '14px', color: '#475569' }}>Pengerjaan Cepat &amp; Efisien</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pricing-two__single:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(1, 45, 89, 0.12) !important;
        }
        .pricing-two__single.popular-card:hover {
          box-shadow: 0 20px 45px rgba(124, 200, 53, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
