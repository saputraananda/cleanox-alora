'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled-header' : ''}`}>
        {/* Navy blue top bar */}
        <div className="main-menu__top" style={{ backgroundColor: '#012d59' }}>
          <div className="main-menu__top-inner">
            <ul className="list-unstyled main-menu__contact-list">
              <li>
                <div className="icon" style={{ color: '#ffffff' }}>
                  <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">
                  <p><a href="https://wa.me/6285122333381" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>WhatsApp: 085122333381</a></p>
                </div>
              </li>
              <li>
                <div className="icon" style={{ color: '#ffffff' }}>
                  <span className="fas fa-map-marker-alt"></span>
                </div>
                <div className="text">
                  <p style={{ color: '#ffffff' }}>Raffles Hills Blok T11 No.18</p>
                </div>
              </li>
              <li>
                <div className="icon" style={{ color: '#ffffff' }}>
                  <span className="far fa-clock"></span>
                </div>
                <div className="text">
                  <p style={{ color: '#ffffff' }}>Jam Operasional: 08.00–17.00</p>
                </div>
              </li>
            </ul>
            <div className="main-menu__top-right">
              <div className="main-menu__social-and-top-menu">
                <div className="main-menu__social">
                  <a href="https://wa.me/6285122333381" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}><span className="fab fa-whatsapp"></span></a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}><span className="fab fa-instagram"></span></a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}><span className="fas fa-map-marked-alt"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="main-menu" style={{ backgroundColor: '#ffffff', transition: 'all 0.3s' }}>
          <div className="main-menu__wrapper" style={{ padding: '0 30px' }}>
            <div className="main-menu__wrapper-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              <div className="main-menu__left-logo" style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#home">
                  <img src="/logo-cleanox.webp" alt="Cleanox Logo" style={{ height: isScrolled ? '32px' : '42px', width: 'auto', transition: 'all 0.3s' }} />
                </a>
              </div>

              <div className="main-menu__main-menu-box" style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#" className="mobile-nav__toggler" style={{ color: '#012d59', fontSize: '20px' }}>
                  <span className="fa fa-bars"></span>
                </a>
                <ul className="main-menu__list nav-links">
                  <li><a href="#home">Beranda</a></li>
                  <li><a href="#about">Tentang Kami</a></li>
                  <li><a href="#services">Layanan</a></li>
                  <li><a href="#pricing">Paket Harga</a></li>
                  <li><a href="#testimonials">Testimoni</a></li>
                  <li><a href="#contact">Kontak</a></li>
                </ul>
              </div>

              <div className="main-menu__right-btn" style={{ minWidth: '160px', display: 'flex', justifyContent: 'flex-end' }}>
                {isScrolled && (
                  <a
                    href="https://wa.me/6285122333381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-btn"
                  >
                    Booking Sekarang
                  </a>
                )}
              </div>

            </div>
          </div>
        </nav>

        <style jsx>{`
          :global(.main-header) {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            padding: 0 !important;
            border-bottom-left-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            z-index: 9999 !important;
            transition: all 0.3s ease;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
          }

          .scrolled-header .main-menu__top {
            display: none;
          }

          .scrolled-header .main-menu {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 25px;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .nav-links :global(li) {
            margin: 0;
            padding-top: 22px !important;
            padding-bottom: 22px !important;
          }

          .scrolled-header .nav-links :global(li) {
            padding-top: 14px !important;
            padding-bottom: 14px !important;
          }

          .nav-links :global(a) {
            color: #475569 !important;
            font-size: 15px;
            font-weight: 600;
            text-decoration: none;
            transition: color 0.3s ease;
            position: relative;
            padding: 6px 0;
            display: block;
          }

          .scrolled-header .nav-links :global(a) {
            padding: 4px 0;
          }

          .nav-links :global(a::after) {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #012d59;
            transition: width 0.3s ease;
          }

          .scrolled-header .nav-links :global(a::after) {
            bottom: 0px;
          }

          .nav-links :global(a:hover) {
            color: #012d59 !important;
          }

          .nav-links :global(a:hover::after) {
            width: 100%;
          }

          .booking-btn {
            background-color: #012d59; /* Navy booking button */
            color: #ffffff !important;
            padding: 8px 18px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            box-shadow: none;
            transition: all 0.3s ease;
            animation: fadeIn 0.3s forwards;
            white-space: nowrap;
          }

          .booking-btn:hover {
            background-color: #0f4c75;
            transform: translateY(-2px);
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 991px) {
            .nav-links {
              display: none !important;
            }
            .main-menu__right-btn {
              min-width: auto;
            }
          }
        `}</style>
      </header>
    </>
  );
}
