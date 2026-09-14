export default function AboutOne() {
  return (
    <section className="about-one" id="about">
      <div className="about-one__shape-3 float-bob-x">
        <img src="/assets/images/shapes/about-one-shape-3.webp" alt="" />
      </div>
      <div className="about-one__shape-4 float-bob-y">
        <img src="/assets/images/shapes/about-one-shape-4.webp" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2000ms">
              <div className="about-one__img">
                <img src="/assets/images/cleanox1.webp" alt="Cleanox Layanan Pembersihan" />
              </div>
              <div className="about-one__experience">
                <div className="about-one__experience-shape-1 zoominout">
                  <img src="/assets/images/shapes/about-one-experience-shape-1.webp" alt="" />
                </div>
                <div className="about-one__count-box count-box">
                  <div className="about-one__count">
                    <h3 className="count-text" data-stop="1500" data-speed="1500">1.500</h3>
                    <span>+</span>
                  </div>
                  <p className="about-one__count-year">Area</p>
                </div>
                <p className="about-one__count-text">Area Berhasil Dibersihkan</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-one__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2000ms">
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/shapes/section-title-shape-1.webp" alt="" />
                  </div>
                  <p className="section-title__tagline">TENTANG CLEANOX</p>
                </div>
                <h2 className="section-title__title title-animation">
                  Menciptakan Ruangan Lebih Bersih<br /> Untuk Hidup Lebih Baik
                </h2>
              </div>
              <p className="about-one__text">
                Cleanox menyediakan layanan pembersihan profesional untuk kasur, sofa, karpet, dan ruangan dengan teknisi terlatih serta peralatan canggih dan higienis.
              </p>
              
              <div className="about-one__content-wrap">
                <div className="about-one__content-left">
                  <ul className="about-one__progress-box list-unstyled">
                    <li>
                      <div className="about-one__progress">
                        <div className="about-one__progress-head">
                          <h4 className="about-one__progress-title">Kepuasan Pelanggan</h4>
                          <span className="about-one__progress-val">98%</span>
                        </div>
                        <div className="bar">
                          <div className="bar-inner count-bar counted" style={{ width: '98%' }}>
                            <div className="count-text">98%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="about-one__progress">
                        <div className="about-one__progress-head">
                          <h4 className="about-one__progress-title">Layanan Profesional</h4>
                          <span className="about-one__progress-val">100%</span>
                        </div>
                        <div className="bar">
                          <div className="bar-inner count-bar counted" style={{ width: '100%' }}>
                            <div className="count-text">100%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="about-one__btn-box">
                    <a href="https://wa.me/6285122333381" className="thm-btn about-one__btn">
                      KONSULTASI SEKARANG <span></span>
                      <span></span> <span></span> <span></span> <span></span>
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>

                <div className="about-one__img-2-wrap">
                  <div className="about-one__img-2">
                    <img src="/assets/images/cleanox3.webp" alt="Teknisi Cleanox" />
                    <div className="about-one__shape-1">
                      <div className="about-one__shape-2 zoominout">
                        <img src="/assets/images/shapes/about-one-shape-2.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        :global(.about-one) {
          padding: 100px 0 110px;
          position: relative;
          overflow: hidden;
        }
        :global(.about-one__left) {
          position: relative;
          margin: 0 auto;
          max-width: 500px;
          padding-bottom: 20px;
        }
        :global(.about-one__img) {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 31, 63, 0.12);
        }
        :global(.about-one__img img) {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 24px;
        }
        :global(.about-one__experience) {
          position: absolute;
          bottom: 0px;
          right: -15px;
          background: linear-gradient(135deg, #0d3b66 0%, #001f3f 100%);
          border: 3px solid #ffffff;
          border-radius: 18px;
          padding: 20px 24px;
          box-shadow: 0 15px 35px rgba(13, 59, 102, 0.4);
          max-width: 250px;
          z-index: 2;
        }
        :global(.about-one__count h3) {
          color: #ffffff;
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
          margin: 0;
        }
        :global(.about-one__count span) {
          color: #38bdf8;
          font-size: 24px;
          font-weight: 700;
          margin-left: 2px;
          top: 0;
        }
        :global(.about-one__count-year) {
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          font-weight: 600;
          margin-left: 8px;
          margin-bottom: 0;
          top: 0;
        }
        :global(.about-one__count-text) {
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          line-height: 1.4;
          margin-top: 6px;
          margin-bottom: 0;
        }
        :global(.about-one__right) {
          margin-left: 15px;
        }
        :global(.about-one__right .section-title) {
          margin-bottom: 20px;
        }
        :global(.about-one__text) {
          font-size: 16px;
          line-height: 1.75;
          color: #555555;
          margin-bottom: 28px;
        }
        :global(.about-one__content-wrap) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }
        :global(.about-one__content-left) {
          flex: 1;
          min-width: 0;
        }
        :global(.about-one__progress-box) {
          max-width: 100%;
          margin-top: 0;
          margin-bottom: 28px;
        }
        :global(.about-one__progress-box li + li) {
          margin-top: 18px;
        }
        :global(.about-one__progress-head) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        :global(.about-one__progress-title) {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0;
        }
        :global(.about-one__progress-val) {
          font-size: 14px;
          font-weight: 700;
          color: #0d3b66;
        }
        :global(.about-one__progress .bar) {
          position: relative;
          width: 100%;
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }
        :global(.about-one__progress .bar-inner) {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #0d3b66, #0284c7);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }
        :global(.about-one__progress .count-text) {
          display: none;
        }
        :global(.about-one__img-2-wrap) {
          position: relative;
          flex-shrink: 0;
          width: 170px;
        }
        :global(.about-one__img-2) {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
        }
        :global(.about-one__img-2 img) {
          width: 100%;
          border-radius: 18px;
          display: block;
        }
        :global(.about-one__shape-1) {
          display: none;
        }
        :global(.about-one__btn-box .about-one__btn) {
          padding: 15px 30px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 30px;
        }

        @media (max-width: 1199px) {
          :global(.about-one__left) {
            margin-bottom: 50px;
            max-width: 100%;
          }
          :global(.about-one__right) {
            margin-left: 0;
          }
        }
        @media (max-width: 991px) {
          :global(.about-one__img-2-wrap) {
            display: none;
          }
        }
        @media (max-width: 767px) {
          :global(.about-one) {
            padding: 60px 0 80px;
          }
          :global(.about-one__experience) {
            right: 0;
            bottom: 0px;
            padding: 16px 20px;
            max-width: 220px;
          }
          :global(.about-one__count h3) {
            font-size: 28px;
          }
          :global(.about-one__count span) {
            font-size: 18px;
          }
          :global(.about-one__count-year) {
            font-size: 14px;
          }
          :global(.about-one__btn-box .about-one__btn) {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
