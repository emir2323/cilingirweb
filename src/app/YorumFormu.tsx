"use client";

export default function YorumFormu() {
  return (
    <form className="flex flex-col gap-3">
      <input type="text" placeholder="Ad Soyad" className="border rounded px-3 py-2" required />
      <input type="email" placeholder="E-posta" className="border rounded px-3 py-2" required />
      <textarea placeholder="Yorumunuz" className="border rounded px-3 py-2" rows={3} required></textarea>
      <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold">Gönder</button>
    </form>
  );
} 