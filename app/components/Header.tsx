export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-semibold tracking-wide text-[#1F1F1F]">
          DUY TOÀN WEDDING
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#1F1F1F] md:flex">
          <a href="/" className="transition hover:text-[#B99A5F]">
            Trang chủ
          </a>

          <a href="/album" className="transition hover:text-[#B99A5F]">
            Album
          </a>

          <a href="/dich-vu" className="transition hover:text-[#B99A5F]">
            Dịch vụ
          </a>

          <a href="/bang-gia" className="transition hover:text-[#B99A5F]">
            Bảng giá
          </a>

          <a href="/lien-he" className="transition hover:text-[#B99A5F]">
            Liên hệ
          </a>
        </nav>

        <a
          href="/lien-he"
          className="rounded-full bg-[#1F1F1F] px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
        >
          Đặt lịch
        </a>
      </div>
    </header>
  );
}