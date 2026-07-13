'use client';

export default function MainSliderOne() {
  return (
    <section className="main-slider-one" id="home">
      {/* Sparkles / Decors from original design */}
      <div className="main-slider-one__shape-1">
        <img src="/assets/images/shapes/main-slider-one-shape-1.png" alt="" />
      </div>
      <div className="main-slider-one__shape-2">
        <img src="/assets/images/shapes/main-slider-one-shape-2.png" alt="" />
      </div>
      <div className="main-slider-one__shape-3">
        <img src="/assets/images/shapes/main-slider-one-shape-3.png" alt="" />
      </div>
      <div className="main-slider-one__shape-4">
        <img src="/assets/images/shapes/main-slider-one-shape-4.png" alt="" />
      </div>

      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column: Copywriting and buttons */}
          <div className="col-xl-5 col-lg-5 order-2 order-xl-1 order-lg-1">
            <div className="main-slider-one__content">
              
              {/* Tagline */}
              <div className="main-slider-one__tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#ffffff', padding: '8px 18px', borderRadius: '50px', border: '1px solid #e2e8f0', marginBottom: '36px' }}>
                <div className="main-slider-one__tag-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px' }}>
                  <img src="/logo-cleanox.webp" alt="Cleanox Logo" style={{ width: '28px', height: 'auto', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '13px', color: '#012d59', fontWeight: '600', letterSpacing: '0.3px' }}>Cleanox - Premium Cleaning Services</span>
              </div>

              {/* Title */}
              <h1 className="main-slider-one__title" style={{ fontSize: '42px', fontWeight: '800', color: '#012d59', lineHeight: '1.25', marginBottom: '28px', fontFamily: 'var(--font-poppins), sans-serif' }}>
                Profesional Home &amp;<br /> Office Cleaning Solution
              </h1>

              {/* Description */}
              <p className="main-slider-one__text" style={{ fontSize: '17px', color: '#475569', lineHeight: '1.75', marginBottom: '44px', fontFamily: 'var(--font-poppins), sans-serif' }}>
                Cleanox menghadirkan layanan pembersihan profesional dengan tenaga ahli, peralatan modern, dan standar kebersihan terbaik untuk menciptakan ruangan yang lebih bersih dan nyaman.
              </p>

              {/* Action Buttons */}
              <div className="main-slider-one__btns" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/6285122333381" className="main-slider-one__btn main-slider-one__btn--primary">
                  <span className="main-slider-one__btn-icon">
                    <span className="fas fa-phone-alt"></span>
                  </span>
                  Konsultasi Gratis
                  <span className="main-slider-one__btn-arrow">
                    <span className="fas fa-arrow-right"></span>
                  </span>
                </a>
                <a href="#services" className="main-slider-one__btn main-slider-one__btn--secondary">
                  <span className="main-slider-one__btn-icon">
                    <span className="far fa-calendar-alt"></span>
                  </span>
                  Lihat Layanan
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Hero Cutout Image and Floating Cards */}
          <div className="col-xl-7 col-lg-7 order-1 order-xl-2 order-lg-2">
            <div className="main-slider-one__image-wrapper" style={{ transform: 'translateX(35px)' }}>
              
              {/* Radial Navy-Green Gradient Background Circle */}
              <div className="hero-bg-circle" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '540px',
                height: '540px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(1, 45, 89, 0.10) 0%, rgba(124, 200, 53, 0.08) 100%)',
                zIndex: -1,
                pointerEvents: 'none'
              }}></div>

              <div className="main-slider-one__image">
                <img src="/hero.webp" alt="Cleaning Service Professionals" style={{ width: '100%', height: 'auto' }} />
              </div>
              
              {/* Floating Card: Teknisi Profesional (Top Right, lowered to not cover face) */}
              <div className="main-slider-one__floating-card main-slider-one__floating-card--top-right">
                <div className="main-slider-one__floating-card-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                  <span className="fas fa-users"></span>
                </div>
                <div className="main-slider-one__floating-card-content">
                  <h4>Teknisi Profesional</h4>
                  <p>Tim teknisi berpengalaman dan terlatih</p>
                </div>
              </div>

              {/* Floating Card: Hasil Lebih Higienis (Center Left) */}
              <div className="main-slider-one__floating-card main-slider-one__floating-card--center-left">
                <div className="main-slider-one__floating-card-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                  <span className="fas fa-bolt"></span>
                </div>
                <div className="main-slider-one__floating-card-content">
                  <h4>Hasil Lebih Higienis</h4>
                  <p>Standar kebersihan yang tinggi</p>
                </div>
              </div>

              {/* Floating Card: Kepuasan Pelanggan (Bottom Left) */}
              <div className="main-slider-one__floating-card main-slider-one__floating-card--bottom-left">
                <div className="main-slider-one__floating-card-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                  <span className="fas fa-heart"></span>
                </div>
                <div className="main-slider-one__floating-card-content">
                  <h4>Kepuasan Pelanggan</h4>
                  <p>Prioritas utama adalah kepuasan Anda</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .main-slider-one {
          position: relative;
          padding: 170px 0 150px;
          background: #ffffff;
          overflow: hidden;
          min-height: 820px;
          display: flex;
          align-items: center;
        }

        .main-slider-one__btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .main-slider-one__btn--primary {
          background: #012d59;
          color: #ffffff !important;
          box-shadow: 0 8px 24px rgba(1, 45, 89, 0.15);
        }

        .main-slider-one__btn--primary:hover {
          background: #0b457e;
          transform: translateY(-2px);
        }

        .main-slider-one__btn--secondary {
          background: #e0f2fe;
          color: #012d59 !important;
        }

        .main-slider-one__btn--secondary:hover {
          background: #bae6fd;
          transform: translateY(-2px);
        }

        .main-slider-one__image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 20px 40px;
          width: 100%;
        }

        .main-slider-one__image img {
          width: 100%;
          max-width: 820px;
          height: auto;
          border-radius: 0px;
          box-shadow: none;
        }

        .main-slider-one__floating-card {
          position: absolute;
          background: white;
          padding: 8px 14px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #f1f5f9;
          z-index: 10;
        }

        .main-slider-one__floating-card--top-right {
          top: 42%;
          right: -55px;
          animation: float 3.5s ease-in-out infinite;
        }

        .main-slider-one__floating-card--center-left {
          top: 38%;
          left: -65px;
          animation: float 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .main-slider-one__floating-card--bottom-left {
          bottom: 12%;
          left: -40px;
          animation: float 3.8s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .main-slider-one__floating-card-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .main-slider-one__floating-card-content h4 {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .main-slider-one__floating-card-content p {
          font-size: 11px;
          color: #64748b;
          margin: 2px 0 0;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 1200px) {
          .main-slider-one__floating-card--top-right {
            right: 0px;
          }
          .main-slider-one__floating-card--center-left {
            left: 0px;
          }
          .main-slider-one__floating-card--bottom-left {
            left: 0px;
          }
        }

        @media (max-width: 991px) {
          .main-slider-one {
            padding: 80px 0;
          }
          .main-slider-one__title {
            font-size: 34px !important;
          }
          .main-slider-one__image-wrapper {
            margin-top: 40px;
            transform: none !important;
          }
          .main-slider-one__floating-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
