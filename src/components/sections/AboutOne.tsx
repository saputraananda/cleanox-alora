export default function AboutOne() {
  return (
    <section className="about-one">
      <div className="about-one__shape-3 float-bob-x">
        <img src="/assets/images/shapes/about-one-shape-3.png" alt="" />
      </div>
      <div className="about-one__shape-4 float-bob-y">
        <img src="/assets/images/shapes/about-one-shape-4.png" alt="" />
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
                  <img src="/assets/images/shapes/about-one-experience-shape-1.png" alt="" />
                </div>
                <div className="about-one__count-box count-box">
                  <div className="about-one__count">
                    <h3 className="count-text" data-stop="1500" data-speed="1500">1.500</h3>
                    <span>+</span>
                  </div>
                  <p className="about-one__count-year">Area</p>
                </div>
                <p className="about-one__count-text">Successfully Cleaned</p>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="about-one__right">
              <div className="about-one__img-2 wow slideInRight" data-wow-delay="100ms"
                data-wow-duration="2500ms">
                <img src="/assets/images/cleanox3.png" alt="" />
                <div className="about-one__shape-1">
                  <div className="about-one__shape-2 zoominout">
                    <img src="/assets/images/shapes/about-one-shape-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__shape-1">
                    <img src="/assets/images/shapes/section-title-shape-1.png" alt="" />
                  </div>
                  <p className="section-title__tagline">ABOUT CLEANOX</p>
                </div>
                <h2 className="section-title__title title-animation">Creating Cleaner Spaces<br /> For Better Living</h2>
              </div>
              <p className="about-one__text">Cleanox provides professional cleaning services for homes, offices, and commercial spaces with trained technicians and reliable cleaning solutions.</p>
              <ul className="about-one__progress-box list-unstyled">
                <li>
                  <div className="about-one__progress">
                    <h4 className="about-one__progress-title">Customer Satisfaction</h4>
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="98%">
                        <div className="count-text">98%</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="about-one__progress">
                    <h4 className="about-one__progress-title">Professional Service</h4>
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="100%">
                        <div className="count-text">100%</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="about-one__btn-box">
                <a href="https://wa.me/6285122333381" className="thm-btn about-one__btn">CONSULT NOW <span></span>
                  <span></span> <span></span> <span></span> <span></span><i
                    className="icon-right-arrow"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
