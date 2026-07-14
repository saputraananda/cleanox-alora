'use client';

export default function FloatingBookingButton() {
  return (
    <a
      href="https://wa.me/6285122333381"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#0f4c75',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 20px rgba(15, 76, 117, 0.4)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 6px 25px rgba(15, 76, 117, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 76, 117, 0.4)';
      }}
    >
      <span className="fas fa-phone"></span>
      Booking Sekarang
    </a>
  );
}
