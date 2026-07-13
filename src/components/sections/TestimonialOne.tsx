'use client';

export default function TestimonialOne() {
  return (
    <section className="testimonial-one" id="testimonials" style={{ paddingBottom: '90px', paddingTop: '90px', backgroundColor: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      
      {/* Edge decoration anims (Top-Left & Bottom-Right, size-constrained) */}
      <div className="testimonial-edge-left">
        <img src="/assets/images/kiri.png" alt="Left Decor" />
      </div>
      <div className="testimonial-edge-right">
        <img src="/assets/images/kanan.png" alt="Right Decor" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          
          <div className="col-xl-12 col-lg-12">
            <div className="testimonial-one__right">
              <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box" style={{ justifyContent: 'center' }}>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/shapes/section-title-shape-1.png" alt="" />
                  </div>
                  <p className="section-title__tagline">Testimonial</p>
                  <div className="section-title__shape-1">
                    <img src="/assets/images/shapes/section-title-shape-1.png" alt="" />
                  </div>
                </div>
                <h2 className="section-title__title title-animation">Apa Kata Pelanggan Kami</h2>
              </div>
              
              <div className="row justify-content-center" style={{ marginTop: '30px' }}>
                {/* Item 1 */}
                <div className="col-xl-4 col-md-6" style={{ marginBottom: '30px', zIndex: 5 }}>
                  <div className="testimonial-one__single" style={{ display: 'block', height: '100%' }}>
                    <div className="testimonial-one__single-bg-box">
                      <div className="testimonial-one__single-bg"
                        style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-single-bg-1.jpg)' }}>
                      </div>
                    </div>
                    <div className="testimonial-one__shape-1">
                      <img src="/assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                    </div>
                    <div className="testimonial-one__single-top">
                      <div className="testimonial-one__ratting">
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                      </div>
                      <p className="testimonial-one__text" style={{ fontSize: '13px', lineHeight: '1.5' }}>Kasur di apartemenku jadi bersih banget, noda dan debunya hilang. Tidur jadi jauh lebih nyaman. Recommended!</p>
                      <div className="testimonial-one__icon">
                        <span className="icon-conversation"></span>
                      </div>
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3>@xokyxo0</h3>
                      <span>Pelanggan</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-xl-4 col-md-6" style={{ marginBottom: '30px', zIndex: 5 }}>
                  <div className="testimonial-one__single" style={{ display: 'block', height: '100%' }}>
                    <div className="testimonial-one__single-bg-box">
                      <div className="testimonial-one__single-bg"
                        style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-single-bg-1.jpg)' }}>
                      </div>
                    </div>
                    <div className="testimonial-one__shape-1">
                      <img src="/assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                    </div>
                    <div className="testimonial-one__single-top">
                      <div className="testimonial-one__ratting">
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                      </div>
                      <p className="testimonial-one__text" style={{ fontSize: '13px', lineHeight: '1.5' }}>Sangat terbantu sama layanannya! Petugasnya datang tepat waktu dan kerjanya rapi banget. AC kamar jadi dingin lagi dan udara terasa lebih segar.</p>
                      <div className="testimonial-one__icon">
                        <span className="icon-conversation"></span>
                      </div>
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3>@jefryz</h3>
                      <span>Pelanggan</span>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-xl-4 col-md-6" style={{ marginBottom: '30px', zIndex: 5 }}>
                  <div className="testimonial-one__single" style={{ display: 'block', height: '100%' }}>
                    <div className="testimonial-one__single-bg-box">
                      <div className="testimonial-one__single-bg"
                        style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-one-single-bg-1.jpg)' }}>
                      </div>
                    </div>
                    <div className="testimonial-one__shape-1">
                      <img src="/assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                    </div>
                    <div className="testimonial-one__single-top">
                      <div className="testimonial-one__ratting">
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                      </div>
                      <p className="testimonial-one__text" style={{ fontSize: '13px', lineHeight: '1.5' }}>Sangat puas dengan layanan bed cleaning dari Cleanox, sekarang berasa kasurku udah gak ada tungau lagi yang bikin gatal. Tidur jadi super nyenyak!</p>
                      <div className="testimonial-one__icon">
                        <span className="icon-conversation"></span>
                      </div>
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3>Malik</h3>
                      <span>Mahasiswa</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        .testimonial-edge-left {
          position: absolute;
          left: 15px;
          top: 15px;
          width: 240px;
          height: auto;
          pointer-events: none;
          z-index: 1;
          animation: float-top-left 5s ease-in-out infinite;
        }
        .testimonial-edge-left img {
          width: 100%;
          height: auto;
        }
        .testimonial-edge-right {
          position: absolute;
          right: 15px;
          bottom: 15px;
          width: 240px;
          height: auto;
          pointer-events: none;
          z-index: 1;
          animation: float-bottom-right 5s ease-in-out infinite;
        }
        .testimonial-edge-right img {
          width: 100%;
          height: auto;
        }
        @keyframes float-top-left {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(8px) translateX(8px) rotate(2deg);
          }
        }
        @keyframes float-bottom-right {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) translateX(-8px) rotate(-2deg);
          }
        }
        :global(.testimonial-one__single) {
          background-color: rgba(124, 200, 53, 0.05) !important;
          border: 1px solid rgba(124, 200, 53, 0.22) !important;
          transition: all 400ms ease !important;
          border-bottom-left-radius: 30px !important;
          border-bottom-right-radius: 30px !important;
        }
        :global(.testimonial-one__single:hover) {
          background-color: #012d59 !important;
          border-color: #012d59 !important;
          transform: translateY(-5px);
        }
        :global(.testimonial-one__single .testimonial-one__ratting span) {
          color: #7cc835 !important;
          transition: color 400ms ease;
        }
        :global(.testimonial-one__single:hover .testimonial-one__ratting span) {
          color: #fbbd08 !important;
        }
        :global(.testimonial-one__single .testimonial-one__text) {
          color: #475569 !important;
          position: relative !important;
          z-index: 2 !important;
          transition: color 400ms ease;
        }
        :global(.testimonial-one__single:hover .testimonial-one__text) {
          color: #ffffff !important;
        }
        :global(.testimonial-one__client-info h3) {
          color: #012d59 !important;
          transition: color 400ms ease;
        }
        :global(.testimonial-one__single:hover .testimonial-one__client-info h3) {
          color: #ffffff !important;
        }
        :global(.testimonial-one__client-info span) {
          color: #64748b !important;
          transition: color 400ms ease;
        }
        :global(.testimonial-one__single:hover .testimonial-one__client-info span) {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        :global(.testimonial-one__icon) {
          z-index: 1 !important;
          top: 15px !important;
          opacity: 0.2 !important;
        }
      `}</style>
    </section>
  );
}
