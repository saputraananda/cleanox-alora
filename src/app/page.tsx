'use client';

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MainSliderOne from "@/components/sections/MainSliderOne";
import WhyChooseOne from "@/components/sections/WhyChooseOne";
import AboutOne from "@/components/sections/AboutOne";
import ServicesOne from "@/components/sections/ServicesOne";
import PricingOne from "@/components/sections/PricingOne";
import WorkProcess from "@/components/sections/WorkProcess";
import TestimonialOne from "@/components/sections/TestimonialOne";
import AppoinmentOne from "@/components/sections/AppoinmentOne";
import LocalSeoLinks from "@/components/sections/LocalSeoLinks";


export default function Home() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after a short delay
    const timer = setTimeout(() => {
      setPreloaderVisible(false);
    }, 1500);

    // Dynamically load JavaScript files sequentially
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.body.appendChild(script);
      });
    };

    // Load scripts in order
    const loadAllScripts = async () => {
      try {
        await loadScript('/assets/vendors/jquery/jquery-3.6.0.min.js');
        await loadScript('/assets/vendors/bootstrap/js/bootstrap.bundle.min.js');
        await loadScript('/assets/vendors/jarallax/jarallax.min.js');
        await loadScript('/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js');
        await loadScript('/assets/vendors/jquery-appear/jquery.appear.min.js');
        await loadScript('/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js');
        await loadScript('/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js');
        await loadScript('/assets/vendors/jquery-validate/jquery.validate.min.js');
        await loadScript('/assets/vendors/odometer/odometer.min.js');
        await loadScript('/assets/vendors/swiper/swiper.min.js');
        await loadScript('/assets/vendors/wnumb/wNumb.min.js');
        await loadScript('/assets/vendors/wow/wow.js');
        await loadScript('/assets/vendors/isotope/isotope.js');
        await loadScript('/assets/vendors/owl-carousel/owl.carousel.min.js');
        await loadScript('/assets/vendors/bootstrap-select/js/bootstrap-select.min.js');
        await loadScript('/assets/vendors/jquery-ui/jquery-ui.js');
        await loadScript('/assets/vendors/circleType/jquery.circleType.js');
        await loadScript('/assets/vendors/circleType/jquery.lettering.min.js');
        await loadScript('/assets/vendors/sidebar-content/jquery-sidebar-content.js');
        await loadScript('/assets/vendors/nice-select/jquery.nice-select.min.js');
        await loadScript('/assets/vendors/marquee/marquee.min.js');
        await loadScript('/assets/vendors/gsap/gsap.js');
        await loadScript('/assets/vendors/gsap/ScrollTrigger.js');
        await loadScript('/assets/vendors/gsap/SplitText.js');
        await loadScript('/assets/js/cleniq.js');
        setTimeout(() => {
          if (typeof window !== 'undefined' && (window as any).WOW) {
            new (window as any).WOW().init();
          }
        }, 500);
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadAllScripts();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      {preloaderVisible && (
        <div className="preloader">
          <div className="preloader__image"></div>
        </div>
      )}

      {/* Start sidebar widget content */}
      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">X</a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <a href="#"><img src="/assets/images/resources/logo-4.png" alt="" /></a>
                  </div>
                  <div className="content-box">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                      labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                  </div>
                  <div className="form-inner">
                    <h4>Get a free quote</h4>
                    <form action="#" className="contact-form-validated" noValidate>
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email" required />
                      </div>
                      <div className="form-group">
                        <textarea name="message" placeholder="Message..."></textarea>
                      </div>
                      <div className="form-group message-btn">
                        <button type="submit" className="thm-btn form-inner__btn">Submit Now <span></span>
                          <span></span> <span></span> <span></span> <span></span> </button>
                      </div>
                    </form>
                    <div className="result"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End sidebar widget content */}

      <div className="page-wrapper">
        <Header />
        <MainSliderOne />
        <AboutOne />
        <WhyChooseOne />
        <ServicesOne />
        <PricingOne />
        <WorkProcess />
        <TestimonialOne />
        <AppoinmentOne />
        <Footer />
      </div>
    </>
  );
}
