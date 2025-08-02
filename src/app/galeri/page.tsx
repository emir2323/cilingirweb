import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Galeri() {
  // Sunucu tarafında /public/galeri klasöründeki resimleri oku
  let images: string[] = [];
  try {
    const galeriPath = path.join(process.cwd(), "public", "galeri");
    images = fs.readdirSync(galeriPath).filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i));
  } catch (e) {
    // klasör boşsa veya yoksa
    images = [];
  }

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-8 text-center">Galeri</h1>
      {images.length === 0 ? (
        <div className="text-center text-gray-500">Henüz galeriye resim eklenmedi.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img) => (
            <div key={img} className="rounded-lg overflow-hidden shadow border bg-gray-50 flex items-center justify-center">
              <Image
                src={`/galeri/${img}`}
                alt="Çilingir Galeri Fotoğrafı"
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 