'use client';

import { useState } from 'react';

export default function AppoinmentOne() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: '',
    propertyType: '',
    additionalDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Cleanox,

Saya ingin berkonsultasi mengenai layanan cleaning.

Nama: ${formData.fullName}
Nomor HP: ${formData.phoneNumber}
Layanan: ${formData.service}
Jenis Properti: ${formData.propertyType}
Detail Kebutuhan: ${formData.additionalDetails}

Mohon informasi mengenai jadwal dan estimasi biayanya.

Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285122333381?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="appoinment-one" id="contact" style={{ paddingTop: '150px', paddingBottom: '280px', backgroundColor: '#ffffff' }}>
      <div className="appoinment-one__shape-1 float-bob-y" style={{ backgroundImage: 'url(/assets/images/shapes/appoinment-one-shape-1.webp)', filter: 'brightness(0) saturate(100%) invert(11%) sepia(90%) saturate(1983%) hue-rotate(194deg) brightness(88%) contrast(101%)', opacity: 1, zIndex: 1 }}></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="appoinment-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
              <div className="appoinment-one__form-inner" style={{ backgroundColor: '#012d59', borderRadius: '24px', boxShadow: '0 20px 40px rgba(1, 45, 89, 0.15)', padding: '50px 40px' }}>
                <div className="appoinment-one__form-shape-1 zoominout">
                  <img src="/assets/images/shapes/appoinment-one-form-shape-1.webp" alt="" />
                </div>
                <h3 className="appoinment-one__form-title" style={{ color: '#ffffff', fontWeight: '600' }}>Konsultasi Sekarang</h3>
                <form onSubmit={handleSubmit} className="default-form1 appoinment-one__form">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="appoinment-one__input-box">
                        <input 
                          type="text" 
                          name="fullName" 
                          placeholder="Masukkan nama lengkap Anda" 
                          value={formData.fullName} 
                          onChange={handleChange} 
                          required 
                          style={{ borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff' }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="appoinment-one__input-box">
                        <input 
                          type="text" 
                          name="phoneNumber" 
                          placeholder="+62 8xx xxxx xxxx" 
                          value={formData.phoneNumber} 
                          onChange={handleChange} 
                          required 
                          style={{ borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff' }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="appoinment-one__input-box">
                        <div className="select-box" style={{ borderRadius: '8px', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', marginBottom: '20px' }}>
                          <select 
                            name="service" 
                            className="selectmenu wide" 
                            value={formData.service} 
                            onChange={handleChange} 
                            style={{ width: '100%', padding: '15px', border: 'none', background: 'transparent', color: formData.service ? '#ffffff' : 'rgba(255,255,255,0.6)', outline: 'none' }}
                          >
                            <option value="" style={{ color: '#000000' }}>Pilih Layanan</option>
                            <option value="General Cleaning" style={{ color: '#000000' }}>General Cleaning</option>
                            <option value="Deep Cleaning" style={{ color: '#000000' }}>Deep Cleaning</option>
                            <option value="Vacuum Hydro Cleaning" style={{ color: '#000000' }}>Vacuum Hydro Cleaning</option>
                            <option value="Sofa Cleaning" style={{ color: '#000000' }}>Pembersihan Sofa</option>
                            <option value="Mattress Cleaning" style={{ color: '#000000' }}>Pembersihan Kasur</option>
                            <option value="Carpet Cleaning" style={{ color: '#000000' }}>Pembersihan Karpet</option>
                            <option value="Curtain Cleaning" style={{ color: '#000000' }}>Pembersihan Gorden</option>
                            <option value="Office Cleaning" style={{ color: '#000000' }}>Pembersihan Kantor</option>
                            <option value="Lainnya" style={{ color: '#000000' }}>Lainnya</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="appoinment-one__input-box">
                        <div className="select-box" style={{ borderRadius: '8px', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', marginBottom: '20px' }}>
                          <select 
                            name="propertyType" 
                            className="selectmenu wide" 
                            value={formData.propertyType} 
                            onChange={handleChange} 
                            style={{ width: '100%', padding: '15px', border: 'none', background: 'transparent', color: formData.propertyType ? '#ffffff' : 'rgba(255,255,255,0.6)', outline: 'none' }}
                          >
                            <option value="" style={{ color: '#000000' }}>Pilih Jenis Properti</option>
                            <option value="Rumah" style={{ color: '#000000' }}>Rumah</option>
                            <option value="Apartemen" style={{ color: '#000000' }}>Apartemen</option>
                            <option value="Kantor" style={{ color: '#000000' }}>Kantor</option>
                            <option value="Ruko" style={{ color: '#000000' }}>Ruko</option>
                            <option value="Cafe" style={{ color: '#000000' }}>Cafe</option>
                            <option value="Restoran" style={{ color: '#000000' }}>Restoran</option>
                            <option value="Hotel" style={{ color: '#000000' }}>Hotel</option>
                            <option value="Gudang" style={{ color: '#000000' }}>Gudang</option>
                            <option value="Villa" style={{ color: '#000000' }}>Villa</option>
                            <option value="Lainnya" style={{ color: '#000000' }}>Lainnya</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="appoinment-one__input-box text-message-box">
                        <textarea 
                          name="additionalDetails" 
                          placeholder="Ceritakan tentang kebutuhan pembersihan Anda..." 
                          value={formData.additionalDetails} 
                          onChange={handleChange}
                          style={{ borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff' }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="appoinment-one__btn-box">
                        <button type="submit" className="thm-btn appoinment-one__btn" style={{ borderRadius: '8px' }}>
                          Konsultasi via WhatsApp <span></span> <span></span> <span></span> <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6" style={{ display: 'flex', alignItems: 'stretch' }}>
            <div className="appoinment-one__right-map" style={{ width: '100%', height: '100%', minHeight: '580px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.06)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2573215881476!2d106.9157404!3d-6.3607736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992d9d1502447%3A0x63390cbf0bbdf6d3!2sRaffles%20Hills!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '580px', display: 'block' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        :global(.appoinment-one) {
          background-color: #ffffff !important;
        }
        :global(.appoinment-one:before) {
          display: none !important;
        }
        :global(.appoinment-one__bg) {
          display: none !important;
        }
        :global(.appoinment-one__bg-two-box) {
          display: none !important;
        }
        :global(.appoinment-one__form select) {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 40px;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }
        :global(.appoinment-one__form select option) {
          color: #000;
        }
        :global(.appoinment-one__form .select-box) {
          position: relative;
          z-index: 9;
        }
        @media (max-width: 768px) {
          :global(.appoinment-one__btn) {
            font-size: 12px;
            padding: 14px 18px;
            min-height: auto;
          }
          :global(.appoinment-one__form select) {
            padding: 15px 40px 15px 15px;
          }
        }
      `}</style>
    </section>
  );
}
