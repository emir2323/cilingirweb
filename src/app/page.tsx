"use client";

import Image from "next/image";
import { useState } from "react";
import YorumFormu from "./YorumFormu";

const hizmetler = [
  {
    baslik: "Kilit Açma",
    // ikon: "/door.svg",
    gorsel: "/hizmetler/kilit-acma.jpg",
    aciklama:
      "Ev, iş yeri ve araç kapısı açma hizmeti. 7/24 hızlı ve güvenilir şekilde kapıda kalma sorununu çözüyoruz. Uzman ekibimizle kapınıza zarar vermeden işlem yapıyoruz.",
  },
  {
    baslik: "Anahtar Kopyalama",
    // ikon: "/key.svg",
    gorsel: "/hizmetler/anahtar-kopyalama.jpg",
    aciklama:
      "Her türlü anahtar çoğaltma işlemleri. Yedek anahtar ihtiyacınızda hızlı ve hassas kopyalama ile güvenliğinizi artırıyoruz.",
  },
  {
    baslik: "Kasa Açma",
    // ikon: "/safe.svg",
    gorsel: "/hizmetler/kasa-acma.jpg",
    aciklama:
      "Kilitli kasalarınızı güvenle açıyoruz. Şifreli, anahtarlı veya elektronik kasalar için profesyonel çözümler sunuyoruz.",
  },
  {
    baslik: "Oto Çilingir",
    // ikon: "/car.svg",
    gorsel: "/hizmetler/oto-cilingir.jpg",
    aciklama:
      "Otomobil kapısı açma ve anahtar hizmeti. Araç anahtarınızı kaybettiyseniz veya içeride unuttuysanız, hızlıca yanınızdayız.",
  },
  {
    baslik: "Kapı Tamiri",
    // ikon: "/repair.svg",
    gorsel: "/hizmetler/kapi-tamiri.jpg",
    aciklama:
      "Çelik kapı ve kilit tamiri, montajı. Eskiyen veya arızalanan kapı ve kilitleriniz için garantili tamir ve yenileme hizmeti.",
  },
];

const yorumlar = [
  {
    ad: "M. Başdaş",
    cinsiyet: "male",
    yorum:
      "İşinin hakkını veren bir usta ve müşteriye önem veren bir işletme. Her kalemde mükemmel.",
  },
  {
    ad: "E. Gençoğlu",
    cinsiyet: "female",
    yorum: "Çok memnunum, herkese tavsiye ediyorum.",
  },
  {
    ad: "Kadir Demir",
    cinsiyet: "male",
    yorum:
      "Kaliteyi fark etmek isteyenler işi ehline bıraksınlar, anahtar ve kilit konusunda doğru adres.",
  },
  {
    ad: "Ayşe Yılmaz",
    cinsiyet: "female",
    yorum:
      "Gece aradım, 20 dakikada geldiler. Çok hızlı ve güvenilir hizmet, teşekkürler!",
  },
  {
    ad: "S. Yılmaz",
    cinsiyet: "male",
    yorum:
      "Kasa açma konusunda çok profesyoneller. Hiçbir zarar vermeden işimi çözdüler.",
  },
  {
    ad: "Fatma K.",
    cinsiyet: "female",
    yorum:
      "Anahtar kopyalama işlemi çok hızlıydı. Güler yüzlü hizmet için teşekkürler!",
  },
  {
    ad: "Ali Demir",
    cinsiyet: "male",
    yorum:
      "Oto çilingir hizmeti aldım, çok memnun kaldım. Tavsiye ederim!",
  },
];

const sssSorular = [
  {
    soru: "Çilingir hizmeti ne kadar sürede gelir?",
    cevap: "Genellikle 15-30 dakika içinde adresinizde oluyoruz. Konumunuza göre değişiklik gösterebilir.",
  },
  {
    soru: "Gece veya tatil günlerinde hizmet veriyor musunuz?",
    cevap: "Evet, 7/24 hizmet veriyoruz. Her saat bize ulaşabilirsiniz.",
  },
  {
    soru: "Kilit açma işlemi kapıya zarar verir mi?",
    cevap: "Profesyonel ekipman ve tecrübemizle kapınıza zarar vermeden işlem yapıyoruz.",
  },
  {
    soru: "Fiyatlarınız neye göre değişiyor?",
    cevap: "Hizmetin türüne, kapının veya kilidin modeline ve mesafeye göre fiyatlarımız değişmektedir. Detaylı bilgi için lütfen arayın.",
  },
];

export default function Home() {
  // Slider için state
  const [sliderIndex, setSliderIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const sliderLength = yorumlar.length;

  // SSS için state
  const [sssOpen, setSssOpen] = useState(false);
  const [acikSoru, setAcikSoru] = useState<number | null>(null);

  // Slider ileri/geri fonksiyonları
  const nextSlide = () => {
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setSliderIndex((i) => (i + 1) % sliderLength);
      setAnimating(false);
    }, 600);
  };
  const prevSlide = () => {
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setSliderIndex((i) => (i - 1 + sliderLength) % sliderLength);
      setAnimating(false);
    }, 600);
  };

  // Avatar rengi ve ikon fonksiyonu
  const avatarBg = (cinsiyet: string) =>
    cinsiyet === "male" ? "bg-blue-600" : "bg-pink-500";
  const avatarIcon = (cinsiyet: string) =>
    cinsiyet === "male" ? "/male.svg" : "/female.svg";
  const avatarLetter = (ad: string) => ad.trim().charAt(0).toUpperCase();

  return (
    <>
      <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900">
        {/* Hero Alanı */}
        <section className="relative w-full flex flex-col items-center justify-center min-h-[350px] py-12 mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/galeri/galeri1.jpg')] bg-cover bg-center opacity-20 blur-sm z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <Image src="/logo.svg" alt="Çilingir Logo" width={100} height={100} className="mb-4 drop-shadow-lg" />
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-blue-800 drop-shadow">Anahtarcı Aziz</h1>
            <p className="text-lg sm:text-xl text-blue-700 font-semibold mb-6 drop-shadow">7/24 Profesyonel Çilingir ve Anahtarcı Hizmeti</p>
            <div className="flex gap-4 mt-2">
              <a href="tel:+905465661327" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
                <Image src="/phone.svg" alt="Telefon" width={24} height={24} />
                Hemen Ara
              </a>
              <a href="https://wa.me/905465661327" target="_blank" rel="noopener" className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Yan kutular (sadece masaüstü) */}
        <div className="relative w-full flex justify-center">
          <aside className="hidden xl:flex flex-col gap-6 fixed left-8 top-1/3 z-20">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-2 border border-blue-100">
              <span className="font-bold text-blue-700">Hızlı İletişim</span>
              <a href="tel:+905465661327" className="text-green-600 font-semibold hover:underline">Telefon</a>
              <a href="https://wa.me/905465661327" className="text-[#25D366] font-semibold hover:underline">WhatsApp</a>
              <a href="/iletisim" className="text-blue-700 font-semibold hover:underline">Adres</a>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-2 border border-blue-100">
              <span className="font-bold text-blue-700">Neden Biz?</span>
              <span className="text-xs text-gray-700">Yetkili Servis</span>
              <span className="text-xs text-gray-700">7/24 Hizmet</span>
              <span className="text-xs text-gray-700">Emniyet Kayıtlı</span>
              <span className="text-xs text-gray-700">20+ Yıl Tecrübe</span>
            </div>
          </aside>
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 grid gap-16">
            {/* Hizmetler */}
            <section id="hizmetler" className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center mb-6 animate-fade-in-up mt-6">
              <h2 className="text-3xl font-extrabold mb-2 text-blue-800 text-center tracking-tight">Hizmetler</h2>
            </section>
            {hizmetler.map((h, i) => (
              <section key={h.baslik} className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center mb-6 animate-fade-in-up">
                <h3 className="text-2xl font-extrabold mb-2 text-blue-800 text-center tracking-tight">{h.baslik}</h3>
                <Image src={h.gorsel} alt={h.baslik + ' görsel'} width={600} height={320} className="rounded-xl mb-4 object-cover w-full h-80" />
                <p className="text-lg text-gray-800 text-center max-w-2xl mb-2">{h.aciklama}</p>
              </section>
            ))}

            {/* Hakkımızda */}
            <section id="hakkimizda" className="bg-blue-50 rounded-2xl p-8 shadow flex flex-col items-center">
              <h2 className="text-2xl font-extrabold mb-2 text-blue-800">Hakkımızda</h2>
              <p className="text-gray-800 text-center max-w-2xl mb-4">
                2004 yılından beri Osmaniye ve çevresinde <b>profesyonel çilingir ve anahtarcı</b> hizmeti sunuyoruz. <br />
                <b>Emniyet kayıtlı ve yetki belgeli</b> bir işletmeyiz. <br />
                <b>Kale Kilit Yetkili Servisi</b> olarak, en güvenilir ve kaliteli ürünlerle çalışıyoruz.<br />
                <b>20 yılı aşkın tecrübemiz</b> ve <b>güler yüzlü ekibimiz</b> ile müşteri memnuniyetini her zaman ön planda tutuyoruz.<br />
                <b>7/24 hızlı ve güvenilir hizmet</b> için buradayız. <br />
                <br />
                <span className="text-blue-700 font-semibold">"Güvenliğiniz bizim için her şeyden önce gelir."</span>
              </p>
            </section>
          </main>
        </div>

        {/* Müşteri Yorumları (Slider) */}
        <section className="w-full py-12 bg-blue-50 border-t border-gray-200 text-center text-base text-gray-600 mt-8 font-semibold flex flex-col items-center gap-8">
          <div className="w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-4 text-blue-800">Müşteri Yorumları</h2>
            {/* Slider */}
            <div className="relative flex items-center justify-center min-h-[180px]">
              <button onClick={prevSlide} className="absolute left-0 bg-blue-200 hover:bg-blue-300 rounded-full p-2 text-blue-800 shadow transition top-1/2 -translate-y-1/2 z-10">&#8592;</button>
              <div className={`w-full flex flex-col items-center px-8 transition-all duration-300 ${animating ? (direction === 'right' ? 'animate-slide-left-smooth' : 'animate-slide-right-smooth') : ''}`}>
                <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto">
                  <div className={`flex flex-col items-center justify-center`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${avatarBg(yorumlar[sliderIndex].cinsiyet)} shadow-lg mb-2`}>
                      <Image src={avatarIcon(yorumlar[sliderIndex].cinsiyet)} alt="Cinsiyet" width={32} height={32} />
                    </div>
                    <span className="text-xs font-bold text-gray-700 bg-gray-100 rounded px-2 py-0.5">{avatarLetter(yorumlar[sliderIndex].ad)}</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center sm:items-start">
                    <p className="italic text-lg text-gray-800 mb-2">"{yorumlar[sliderIndex].yorum}"</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-bold text-blue-700">{yorumlar[sliderIndex].ad}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={nextSlide} className="absolute right-0 bg-blue-200 hover:bg-blue-300 rounded-full p-2 text-blue-800 shadow transition top-1/2 -translate-y-1/2 z-10">&#8594;</button>
            </div>
          </div>
        </section>

        {/* Yorum Ekleme Formu */}
        {/* Bu bölüm tamamen kaldırıldı */}

        {/* SSS kutusu en alt sağda */}
        {sssOpen && (
          <div className="fixed inset-0 z-40" onClick={() => setSssOpen(false)} style={{background: 'rgba(0,0,0,0.0)'}} />
        )}
        <aside className="fixed bottom-6 right-6 z-50 w-80">
          <div className="bg-white rounded-xl shadow p-4 border border-blue-100 flex flex-col items-center">
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold mb-2 transition"
              onClick={() => setSssOpen((v) => !v)}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><text x="12" y="17" textAnchor="middle" fontSize="16" fill="#2563eb" fontWeight="bold">?</text></svg>
              Sıkça Sorulan Sorular
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${sssOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ width: '100%' }}
            >
              {sssSorular.map((s, i) => (
                <div key={i} className="border-b last:border-b-0 border-gray-200 py-2">
                  <button
                    className="flex items-center justify-between w-full text-left font-semibold text-blue-800 hover:underline"
                    onClick={() => setAcikSoru(acikSoru === i ? null : i)}
                  >
                    <span>{s.soru}</span>
                    <span className={`transition-transform ${acikSoru === i ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  <div
                    className={`transition-all duration-300 text-gray-700 text-sm pl-2 ${acikSoru === i ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                  >
                    {s.cevap}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <footer className="w-full text-center py-4 text-sm text-gray-500 bg-transparent">
        © 2025 Anahtarcı Aziz | Tüm hakları saklıdır.
      </footer>
    </>
  );
}
