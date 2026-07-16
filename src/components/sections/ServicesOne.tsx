export default function ServicesOne() {
  return (
    <section className="services-one" id="services">
      <div className="services-one__bg" style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="services-one__left">
              <div className="services-one__img-box">
                <div className="services-one__img wow slideInLeft" data-wow-delay="100ms"
                  data-wow-duration="2500ms">
                  <img src="/assets/images/cleanox5.webp" alt="" />
                </div>
                <div className="services-one__shape-1">
                  <div className="services-one__shape-2 float-bob-x">
                    <img src="/assets/images/shapes/services-one-shape-2.webp" alt="" />
                  </div>
                </div>
                <div className="services-one__shape-3" style={{ top: 'auto', bottom: '-20px', left: '0', right: '0', height: '150px', background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                <div className="services-one__shape-4 float-bob-y">
                  <img src="/assets/images/shapes/services-one-shape-4.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="services-one__right">
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/shapes/section-title-shape-1.webp" alt="" />
                  </div>
                  <p className="section-title__tagline">Layanan Kami</p>
                </div>
                <h2 className="section-title__title title-animation">Prioritas Kami Adalah<br /> Kepuasan Pelanggan</h2>
              </div>
              <div className="services-one__services-box">
                <ul className="services-one__list list-unstyled">
                  <li>
                    <div className="services-one__list-single">
                      <div className="services-one__list-single-inner">
                        <div className="services-one__count"></div>
                        <div className="services-one__icon">
                          <span className="icon-shower"></span>
                        </div>
                        <h3 className="services-one__title"><a href="#">Pembersihan<br /> Ruangan</a></h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="services-one__list-single">
                      <div className="services-one__list-single-inner">
                        <div className="services-one__count"></div>
                        <div className="services-one__icon">
                          <span className="icon-clean-house"></span>
                        </div>
                        <h3 className="services-one__title"><a href="#">Pembersihan<br /> Rumah</a></h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="services-one__list-single">
                      <div className="services-one__list-single-inner">
                        <div className="services-one__count"></div>
                        <div className="services-one__icon">
                          <span className="icon-cleaning"></span>
                        </div>
                        <h3 className="services-one__title"><a href="#">Pembersihan<br /> Kantor</a></h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="services-one__list-single">
                      <div className="services-one__list-single-inner">
                        <div className="services-one__count"></div>
                        <div className="services-one__icon">
                          <span className="icon-pipeline"></span>
                        </div>
                        <h3 className="services-one__title"><a href="#">Layanan<br /> Plumbing</a></h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="services-one__list-single">
                      <div className="services-one__list-single-inner">
                        <div className="services-one__count"></div>
                        <div className="services-one__icon">
                          <span className="icon-laundry"></span>
                        </div>
                        <h3 className="services-one__title"><a href="#">Layanan<br /> Laundry</a></h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="services-one__list-single">
                      <div className="services-one__list-single-inner">
                        <div className="services-one__count"></div>
                        <div className="services-one__icon">
                          <span className="icon-sanitary"></span>
                        </div>
                        <h3 className="services-one__title"><a href="#">Pembersihan<br /> Toilet</a></h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
