'use client';

import { useState } from 'react';

export default function AppoinmentOne() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: 'General Cleaning',
    propertyType: 'House',
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
      <div className="appoinment-one__shape-1 float-bob-y" style={{ backgroundImage: 'url(/assets/images/shapes/appoinment-one-shape-1.png)', filter: 'brightness(0) saturate(100%) invert(11%) sepia(90%) saturate(1983%) hue-rotate(194deg) brightness(88%) contrast(101%)', opacity: 1, zIndex: 1 }}></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="appoinment-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
              <div className="appoinment-one__form-inner" style={{ backgroundColor: '#012d59', borderRadius: '24px', boxShadow: '0 20px 40px rgba(1, 45, 89, 0.15)', padding: '50px 40px' }}>
                <div className="appoinment-one__form-shape-1 zoominout">
                  <img src="/assets/images/shapes/appoinment-one-form-shape-1.png" alt="" />
                </div>
                <h3 className="appoinment-one__form-title" style={{ color: '#ffffff', fontWeight: '600' }}>Free Consultation</h3>
                <form onSubmit={handleSubmit} className="default-form1 appoinment-one__form">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="appoinment-one__input-box">
                        <input 
                          type="text" 
                          name="fullName" 
                          placeholder="Enter your full name" 
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
                            style={{ width: '100%', padding: '15px', border: 'none', background: 'transparent', color: '#ffffff', outline: 'none' }}
                          >
                            <option value="General Cleaning" style={{ color: '#000000' }}>General Cleaning</option>
                            <option value="Deep Cleaning" style={{ color: '#000000' }}>Deep Cleaning</option>
                            <option value="Vacuum Hydro Cleaning" style={{ color: '#000000' }}>Vacuum Hydro Cleaning</option>
                            <option value="Sofa Cleaning" style={{ color: '#000000' }}>Sofa Cleaning</option>
                            <option value="Mattress Cleaning" style={{ color: '#000000' }}>Mattress Cleaning</option>
                            <option value="Carpet Cleaning" style={{ color: '#000000' }}>Carpet Cleaning</option>
                            <option value="Curtain Cleaning" style={{ color: '#000000' }}>Curtain Cleaning</option>
                            <option value="Office Cleaning" style={{ color: '#000000' }}>Office Cleaning</option>
                            <option value="Others" style={{ color: '#000000' }}>Others</option>
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
                            style={{ width: '100%', padding: '15px', border: 'none', background: 'transparent', color: '#ffffff', outline: 'none' }}
                          >
                            <option value="House" style={{ color: '#000000' }}>House</option>
                            <option value="Apartment" style={{ color: '#000000' }}>Apartment</option>
                            <option value="Office" style={{ color: '#000000' }}>Office</option>
                            <option value="Shop House (Ruko)" style={{ color: '#000000' }}>Shop House (Ruko)</option>
                            <option value="Cafe" style={{ color: '#000000' }}>Cafe</option>
                            <option value="Restaurant" style={{ color: '#000000' }}>Restaurant</option>
                            <option value="Hotel" style={{ color: '#000000' }}>Hotel</option>
                            <option value="Warehouse" style={{ color: '#000000' }}>Warehouse</option>
                            <option value="Villa" style={{ color: '#000000' }}>Villa</option>
                            <option value="Others" style={{ color: '#000000' }}>Others</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="appoinment-one__input-box text-message-box">
                        <textarea 
                          name="additionalDetails" 
                          placeholder="Tell us about your cleaning needs..." 
                          value={formData.additionalDetails} 
                          onChange={handleChange}
                          style={{ borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff' }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="appoinment-one__btn-box">
                        <button type="submit" className="thm-btn appoinment-one__btn" style={{ borderRadius: '8px' }}>
                          Consult via WhatsApp <span></span> <span></span> <span></span> <span></span>
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
      `}</style>
    </section>
  );
}
