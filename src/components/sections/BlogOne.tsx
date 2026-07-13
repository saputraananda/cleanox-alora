export default function BlogOne() {
  return (
    <section className="blog-one">
      <div className="blog-one__shape-1 float-bob-x">
        <img src="/assets/images/shapes/blog-one-shape-1.png" alt="" />
      </div>
      <div className="blog-one__shape-2 float-bob-y">
        <img src="/assets/images/shapes/blog-one-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title-two text-center sec-title-animation animation-style1">
          <div className="section-title-two__tagline-box">
            <div className="section-title-two__shape-1">
              <img src="/assets/images/shapes/section-title-shape-2.webp" alt="" />
            </div>
            <p className="section-title-two__tagline">News & Articles</p>
            <div className="section-title-two__shape-1">
              <img src="/assets/images/shapes/section-title-shape-2.webp" alt="" />
            </div>
          </div>
          <h2 className="section-title-two__title title-animation">Our Latest News & Articles</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
            <div className="blog-one__single">
              <div className="blog-one__img">
                <img src="/assets/images/blog/blog-1-1.webp" alt="" />
                <div className="blog-one__date">
                  <p>24<br /><span>May</span></p>
                </div>
                <div className="blog-one__img-hover">
                  <div className="blog-one__plus-icon">
                    <a href="blog-details.html"><i className="icon-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="blog-one__content">
                <ul className="blog-one__meta list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-user"></i>
                    </div>
                    <p>By Admin</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-comment"></i>
                    </div>
                    <p>2 Comments</p>
                  </li>
                </ul>
                <h3 className="blog-one__title"><a href="blog-details.html">Residential Cleaning & Services for Your Home</a></h3>
                <p className="blog-one__text">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                <div className="blog-one__btn">
                  <a href="blog-details.html" className="blog-one__btn-link">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <div className="blog-one__single">
              <div className="blog-one__img">
                <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
                <div className="blog-one__date">
                  <p>24<br /><span>May</span></p>
                </div>
                <div className="blog-one__img-hover">
                  <div className="blog-one__plus-icon">
                    <a href="blog-details.html"><i className="icon-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="blog-one__content">
                <ul className="blog-one__meta list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-user"></i>
                    </div>
                    <p>By Admin</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-comment"></i>
                    </div>
                    <p>2 Comments</p>
                  </li>
                </ul>
                <h3 className="blog-one__title"><a href="blog-details.html">We are specialists in both commercial and domestic</a></h3>
                <p className="blog-one__text">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                <div className="blog-one__btn">
                  <a href="blog-details.html" className="blog-one__btn-link">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
            <div className="blog-one__single">
              <div className="blog-one__img">
                <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
                <div className="blog-one__date">
                  <p>24<br /><span>May</span></p>
                </div>
                <div className="blog-one__img-hover">
                  <div className="blog-one__plus-icon">
                    <a href="blog-details.html"><i className="icon-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="blog-one__content">
                <ul className="blog-one__meta list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-user"></i>
                    </div>
                    <p>By Admin</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-comment"></i>
                    </div>
                    <p>2 Comments</p>
                  </li>
                </ul>
                <h3 className="blog-one__title"><a href="blog-details.html">Commercial cleaning services with monthly</a></h3>
                <p className="blog-one__text">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                <div className="blog-one__btn">
                  <a href="blog-details.html" className="blog-one__btn-link">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
