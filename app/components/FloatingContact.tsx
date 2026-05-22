export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="tel:0924 733 777"
        className="rounded-full bg-[#1F1F1F] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-black"
      >
        Gọi ngay
      </a>

      <a
        href="https://zalo.me/0924733777"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#0068FF] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
      >
        Zalo
      </a>

      <a
        href="https://www.facebook.com/DUYTOANWEDDING"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
      >
        Facebook
      </a>
    </div>
  );
}