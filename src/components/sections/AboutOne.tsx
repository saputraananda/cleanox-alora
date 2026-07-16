export default function AboutOne() {
  return (
    <section className="about-one">
      <div className="about-one__shape-3 float-bob-x">
        <img src="/assets/images/shapes/about-one-shape-3.webp" alt="" />
      </div>
      <div className="about-one__shape-4 float-bob-y">
        <img src="/assets/images/shapes/about-one-shape-4.webp" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
              <div className="about-one__img">
                <img src="/assets/images/cleanox1.webp" alt="" />
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
          <div className="col-xl-9">
            <div className="about-one__right">
              <div className="about-one__img-2 wow slideInRight" data-wow-delay="100ms"
                data-wow-duration="2500ms">
                <img src="/assets/images/cleanox3.webp" alt="" />
                <div className="about-one__shape-1">
                  <div className="about-one__shape-2 zoominout">
                    <img src="/assets/images/shapes/about-one-shape-2.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/shapes/section-title-shape-1.webp" alt="" />
                  </div>
                  <p className="section-title__tagline">TENTANG CLEANOX</p>
                </div>
                <h2 className="section-title__title title-animation">Menciptakan Ruangan Lebih Bersih<br /> Untuk Hidup Lebih Baik</h2>
              </div>
              <p className="about-one__text">Cleanox menyediakan layanan pembersihan profesional dengan teknisi terlatih dan solusi terpercaya.</p>
              <ul className="about-one__progress-box list-unstyled">
                <li>
                  <div className="about-one__progress">
                    <h4 className="about-one__progress-title">Kepuasan Pelanggan</h4>
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="98%">
                        <div className="count-text">98%</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="about-one__progress">
                    <h4 className="about-one__progress-title">Layanan Profesional</h4>
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="100%">
                        <div className="count-text">100%</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="about-one__btn-box">
                <a href="https://wa.me/6285122333381" className="thm-btn about-one__btn">KONSULTASI SEKARANG <span></span>
                  <span></span> <span></span> <span></span> <span></span><i
                    className="icon-right-arrow"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        :global(.about-one__right) {
          position: relative;
          z-index: 2;
        }
        :global(.about-one__img-2) {
          position: relative;
          z-index: 1;
        }
        @media (max-width: 1199px) {
          :global(.about-one__left) {
            margin-bottom: 40px;
          }
        }
        @media (max-width: 767px) {
          :global(.about-one__btn-box .about-one__btn) {
            font-size: 12px;
            padding: 14px 20px;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
