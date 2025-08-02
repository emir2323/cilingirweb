export default function SSS() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-800 mb-8">Sık Sorulan Sorular</h1>
      <div className="w-full max-w-2xl grid gap-6">
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <h2 className="font-semibold text-blue-700 mb-2">Çilingir hizmeti ne kadar sürede gelir?</h2>
          <p>Genellikle 15-30 dakika içinde adresinizde oluyoruz. Konumunuza göre değişiklik gösterebilir.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <h2 className="font-semibold text-blue-700 mb-2">Gece veya tatil günlerinde hizmet veriyor musunuz?</h2>
          <p>Evet, 7/24 hizmet veriyoruz. Her saat bize ulaşabilirsiniz.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <h2 className="font-semibold text-blue-700 mb-2">Kilit açma işlemi kapıya zarar verir mi?</h2>
          <p>Profesyonel ekipman ve tecrübemizle kapınıza zarar vermeden işlem yapıyoruz.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <h2 className="font-semibold text-blue-700 mb-2">Fiyatlarınız neye göre değişiyor?</h2>
          <p>Hizmetin türüne, kapının veya kilidin modeline ve mesafeye göre fiyatlarımız değişmektedir. Detaylı bilgi için lütfen arayın.</p>
        </div>
      </div>
    </div>
  );
} 