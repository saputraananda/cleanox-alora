export default function CtaOne() {
  return (
    <section className="cta-one">
      <div className="cta-one__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-one-bg.jpg)' }}></div>
      <div className="cta-one__shape-1 float-bob-y">
        <img src="/assets/images/shapes/cta-one-shape-1.png" alt="" />
      </div>
      <div className="cta-one__shape-2 float-bob-x">
        <img src="/assets/images/shapes/cta-one-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="cta-one__inner">
          <div className="cta-one__left">
            <div className="section-title text-left">
              <p className="section-title__tagline">Contact With Us</p>
              <h2 className="section-title__title">Let's Clean Your Home & Office</h2>
            </div>
          </div>
          <div className="cta-one__right">
            <div className="cta-one__btn-box">
              <a href="#" className="thm-btn cta-one__btn">Contact With Us <span></span>
                <span></span> <span></span> <span></span> <span></span><i
                  className="icon-right-arrow"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
