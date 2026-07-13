'use client';

import { useState, useEffect } from 'react';

export default function WhyChooseOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="why-choose-one" style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(224, 242, 254, 0.4) 0%, rgba(220, 252, 231, 0.4) 100%)' }}>
      <div className="why-choose-one__shape-two">
        <img src="/assets/images/shapes/why-choose-one-shape-2.png" alt="" />
      </div>
      <div className="why-choose-one__shape-three">
        <img src="/assets/images/shapes/why-choose-one-shape-3.png" alt="" />
      </div>
      <div className="why-choose-one__shape-4">
        <img src="/assets/images/shapes/why-choose-one-shape-4.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__shape-1">
              <img src="/assets/images/shapes/section-title-shape-1.png" alt="" />
            </div>
            <p className="section-title__tagline">Why Choose Us</p>
            <div className="section-title__shape-1">
              <img src="/assets/images/shapes/section-title-shape-1.png" alt="" />
            </div>
          </div>
          <h2 className="section-title__title title-animation">Why We Are Better Than<br /> Others</h2>
        </div>
        <div className="row">
          
          {/* Card 1 */}
          <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
            <div 
              className={`why-choose-one__single ${activeIndex === 0 ? 'is-active' : ''}`}
              onMouseEnter={() => {
                setActiveIndex(0);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="why-choose-one__icon">
                <span className="icon-sofa"></span>
              </div>
              <div className="why-choose-one__single-inner">
                <div className="why-choose-one__shape-1">
                  <img src="/assets/images/shapes/why-choose-one-shape-1.png" alt="" />
                </div>
                <h3 className="why-choose-one__title"><a href="#services">Professional Cleaning Service</a></h3>
                <p className="why-choose-one__text">Ditangani oleh teknisi profesional dengan standar kerja yang konsisten untuk hasil bersih, rapi, dan higienis.</p>
              </div>
              <div className="why-choose-one__single-hover-inner">
                <div className="why-choose-one__single-hover-shape-1 zoominout">
                  <img src="/assets/images/shapes/why-choose-one-single-hover-shape-1.png" alt="" />
                </div>
                <div className="why-choose-one__single-hover-shape-2 zoominout">
                  <img src="/assets/images/shapes/why-choose-one-single-hover-shape-2.png" alt="" />
                </div>
                <div className="why-choose-one__single-hover-inner-bg"
                  style={{ backgroundImage: 'url(/assets/images/backgrounds/why-choose-one-single-inner-bg.jpg)' }}>
                </div>
                <h3 className="why-choose-one__hover-title"><a href="#services">Professional Cleaning Service</a></h3>
                <p className="why-choose-one__hover-text">Ditangani oleh teknisi profesional dengan standar kerja yang konsisten untuk hasil bersih, rapi, dan higienis.</p>
              </div>
              <div className="why-choose-one__shape-2"></div>
              <div className="why-choose-one__shape-3"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <div 
              className={`why-choose-one__single ${activeIndex === 1 ? 'is-active' : ''}`}
              onMouseEnter={() => {
                setActiveIndex(1);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="why-choose-one__icon">
                <span className="icon-cleaning"></span>
              </div>
              <div className="why-choose-one__single-inner">
                <div className="why-choose-one__shape-1">
                  <img src="/assets/images/shapes/why-choose-one-shape-1.png" alt="" />
                </div>
                <h3 className="why-choose-one__title"><a href="#services">Modern Cleaning Equipment</a></h3>
                <p className="why-choose-one__text">Menggunakan peralatan modern dan metode kerja efektif agar proses pembersihan lebih maksimal dan efisien.</p>
              </div>
              <div className="why-choose-one__single-hover-inner">
                <div className="why-choose-one__single-hover-shape-1 zoominout">
                  <img src="/assets/images/shapes/why-choose-one-single-hover-shape-1.png" alt="" />
                </div>
                <div className="why-choose-one__single-hover-shape-2 zoominout">
                  <img src="/assets/images/shapes/why-choose-one-single-hover-shape-2.png" alt="" />
                </div>
                <div className="why-choose-one__single-hover-inner-bg"
                  style={{ backgroundImage: 'url(/assets/images/backgrounds/why-choose-one-single-inner-bg.jpg)' }}>
                </div>
                <h3 className="why-choose-one__hover-title"><a href="#services">Modern Cleaning Equipment</a></h3>
                <p className="why-choose-one__hover-text">Menggunakan peralatan modern dan metode kerja efektif agar proses pembersihan lebih maksimal dan efisien.</p>
              </div>
              <div className="why-choose-one__shape-2"></div>
              <div className="why-choose-one__shape-3"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
            <div 
              className={`why-choose-one__single ${activeIndex === 2 ? 'is-active' : ''}`}
              onMouseEnter={() => {
                setActiveIndex(2);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="why-choose-one__icon">
                <span className="icon-rating"></span>
              </div>
              <div className="why-choose-one__single-inner">
                <div className="why-choose-one__shape-1">
                  <img src="/assets/images/shapes/why-choose-one-shape-1.png" alt="" />
                </div>
                <h3 className="why-choose-one__title"><a href="#services">Safe Cleaning Solution</a></h3>
                <p className="why-choose-one__text">Memakai bahan pembersih yang aman, berkualitas, dan ramah digunakan untuk rumah maupun area komersial.</p>
              </div>
              <div className="why-choose-one__single-hover-inner">
                <div className="why-choose-one__single-hover-shape-1 zoominout">
                  <img src="/assets/images/shapes/why-choose-one-single-hover-shape-1.png" alt="" />
                </div>
                <div className="why-choose-one__single-hover-shape-2 zoominout">
                  <img src="/assets/images/shapes/why-choose-one-single-hover-shape-2.png" alt="" />
                </div>
                <div className="why-choose-one__single-hover-inner-bg"
                  style={{ backgroundImage: 'url(/assets/images/backgrounds/why-choose-one-single-inner-bg.jpg)' }}>
                </div>
                <h3 className="why-choose-one__hover-title"><a href="#services">Safe Cleaning Solution</a></h3>
                <p className="why-choose-one__hover-text">Memakai bahan pembersih yang aman, berkualitas, dan ramah digunakan untuk rumah maupun area komersial.</p>
              </div>
              <div className="why-choose-one__shape-2"></div>
              <div className="why-choose-one__shape-3"></div>
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        :global(.why-choose-one__single.is-active) {
          transform: translateY(-10px);
        }
        :global(.why-choose-one__single.is-active .why-choose-one__single-hover-inner) {
          opacity: 1 !important;
          visibility: visible !important;
          transform: scaleY(1) !important;
        }
        :global(.why-choose-one__single.is-active .why-choose-one__shape-3) {
          transform: scaleY(1.0) !important;
        }
        :global(.why-choose-one__single.is-active .why-choose-one__icon) {
          background-color: var(--cleniq-white) !important;
          color: var(--cleniq-black) !important;
          transform: scale(0.9);
        }
      `}</style>
    </section>
  );
}
