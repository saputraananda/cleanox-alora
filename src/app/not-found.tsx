import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8fafc',
      fontFamily: 'var(--font-poppins), sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '120px', fontWeight: 'bold', color: '#012d59', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#0f4c75', marginTop: '10px', marginBottom: '20px' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ color: '#64748b', maxWidth: '450px', marginBottom: '30px', lineHeight: '1.6' }}>
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke Beranda Cleanox.
      </p>
      <Link href="/" style={{
        backgroundColor: '#012d59',
        color: '#ffffff',
        padding: '12px 28px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '15px',
        textDecoration: 'none',
        boxShadow: '0 4px 15px rgba(1, 45, 89, 0.2)',
        transition: 'all 0.3s ease'
      }}>
        Kembali ke Beranda
      </Link>
    </div>
  );
}
