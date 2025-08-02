export default function Iletisim() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-800 mb-8">İletişim</h1>
      <div className="w-full max-w-2xl grid gap-8">
        <div className="bg-white rounded-lg p-6 shadow flex flex-col gap-2 text-gray-900">
          <div><span className="font-semibold">Adres:</span> Adnan Menderes Bulvarı Sefa Evler Altı, 80010 Osmaniye</div>
          <div><span className="font-semibold">Telefon:</span> <a href="tel:+905465661327" className="text-blue-700 hover:underline">+90 546 566 13 27</a></div>
          <div><span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/905465661327" target="_blank" rel="noopener" className="text-green-600 hover:underline">Hemen Yaz</a></div>
        </div>
        <div className="rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps?q=Anahtarcı+Aziz,+Adnan+Menderes+Bulvarı+Sefa+Evler+Altı,+80010+Osmaniye&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        {/* Form bölümü tamamen kaldırıldı */}
      </div>
    </div>
  );
} 