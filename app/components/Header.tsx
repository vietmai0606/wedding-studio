"use client";

import { useState } from "react";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [logoError, setLogoError] = useState(false);

  function handleSearch() {
    const text = keyword.toLowerCase().trim();

    if (!text) return;

    if (
      text.includes("album") ||
      text.includes("ảnh") ||
      text.includes("anh") ||
      text.includes("concept")
    ) {
      window.location.href = "/album";
      return;
    }

    if (
      text.includes("dịch vụ") ||
      text.includes("dich vu") ||
      text.includes("makeup") ||
      text.includes("váy") ||
      text.includes("vay")
    ) {
      window.location.href = "/dich-vu";
      return;
    }

    if (
      text.includes("giá") ||
      text.includes("gia") ||
      text.includes("bảng giá") ||
      text.includes("bang gia") ||
      text.includes("gói") ||
      text.includes("goi")
    ) {
      window.location.href = "/bang-gia";
      return;
    }

    if (
      text.includes("liên hệ") ||
      text.includes("lien he") ||
      text.includes("zalo") ||
      text.includes("số điện thoại") ||
      text.includes("sdt") ||
      text.includes("địa chỉ") ||
      text.includes("dia chi")
    ) {
      window.location.href = "/lien-he";
      return;
    }

    window.location.href = "/album";
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <div className="bg-[#8f8f8f] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-[11px] font-medium sm:text-xs md:justify-start md:text-sm">
          <a
            href="tel:+84924733777"
            className="shrink-0 transition hover:text-white/80"
          >
            0924 733 777
          </a>

          <span className="text-white/60">|</span>

          <span className="line-clamp-1 text-white/90">
            10 Trần Đình Châu, X. Hoài Ân, T. Gia Lai
          </span>
        </div>
      </div>

      <div className="border-b border-black/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="mr-3 flex h-10 w-10 items-center justify-center rounded-full text-3xl text-[#8f8f8f] transition hover:bg-[#FAF7F2] md:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>

            <a href="/" className="flex items-center gap-3">
              {!logoError && (
                <img
                  src="/images/logo-duytoan.png"
                  alt=""
                  onError={() => setLogoError(true)}
                  className="h-10 w-auto object-contain md:h-12"
                />
              )}

              <span className="text-base font-bold tracking-wide text-[#1F1F1F] md:text-xl">
                DUY TOÀN WEDDING
              </span>
            </a>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#1F1F1F] md:flex">
            <a href="/" className="transition hover:text-[#B99A5F]">
              Trang chủ
            </a>

            <div className="group relative">
              <a
                href="/album"
                className="flex items-center gap-1 transition hover:text-[#B99A5F]"
              >
                Album
                <span className="text-xs">▾</span>
              </a>

              <div className="invisible absolute left-1/2 top-full mt-5 w-[760px] -translate-x-1/2 rounded-b-[1.5rem] border border-neutral-200 bg-white p-8 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:mt-4 group-hover:opacity-100">
                <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-l border-t border-neutral-200 bg-white" />

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h3 className="mb-5 text-base font-semibold text-neutral-700">
                      Album Studio
                    </h3>

                    <div className="space-y-1 text-[15px] text-neutral-500">
                      {[
                        "Signature Concept",
                        "Sample Concept",
                        "Collection",
                        "Beauty",
                        "Gia đình",
                        "Creative Style",
                        "Phim Trường",
                        "Phóng Sự Cưới",
                      ].map((item, index) => (
                        <a
                          key={item}
                          href="/album"
                          className={`block py-2 transition hover:text-[#B99A5F] ${
                            index < 6
                              ? "border-b border-neutral-100"
                              : "font-semibold text-neutral-700"
                          }`}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-5 text-base font-semibold text-neutral-700">
                      Album Ngoại Cảnh
                    </h3>

                    <div className="space-y-3 text-[15px] font-semibold text-neutral-500">
                      {[
                        "Sài Gòn",
                        "Đà Lạt",
                        "Vĩnh Hy / Phú Quốc",
                        "Hồ Cốc / Vũng Tàu / Phan Thiết",
                        "Bình Dương",
                        "Mỹ Tho",
                        "Buôn Ma Thuột",
                      ].map((item) => (
                        <a
                          key={item}
                          href="/album"
                          className="block transition hover:text-[#B99A5F]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

          <div className="flex items-center gap-2 md:gap-3">
            {searchOpen && (
              <div className="hidden items-center rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm md:flex">
                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  autoFocus
                  placeholder="Tìm kiếm..."
                  className="w-44 bg-transparent text-sm font-medium text-[#1F1F1F] outline-none placeholder:font-medium placeholder:text-neutral-500"
                />

                <button
                  type="button"
                  onClick={handleSearch}
                  className="ml-2 text-sm font-bold text-[#8A6A35] transition hover:text-[#B99A5F]"
                >
                  Tìm
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DDCF] bg-[#FAF7F2] text-lg text-[#8A6A35] transition hover:bg-[#F2E8DA] hover:text-[#6F5429]"
              aria-label="Mở tìm kiếm"
            >
              🔎
            </button>

            <a
              href="/lien-he"
              className="hidden rounded-full bg-[#1F1F1F] px-5 py-2 text-sm font-medium text-white transition hover:bg-black sm:inline-block"
            >
              Đặt lịch
            </a>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-neutral-100 px-4 py-3 md:hidden">
            <div className="mx-auto flex max-w-7xl items-center rounded-full border border-neutral-200 bg-white px-4 py-3">
              <input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Tìm album, dịch vụ, bảng giá..."
                className="flex-1 bg-transparent text-sm font-medium text-[#1F1F1F] outline-none placeholder:font-medium placeholder:text-neutral-500"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="ml-3 text-sm font-bold text-[#8A6A35] transition hover:text-[#B99A5F]"
              >
                Tìm
              </button>
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="border-t border-neutral-100 bg-white px-4 py-4 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 text-sm font-medium text-[#1F1F1F]">
              <a
                href="/"
                className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2]"
              >
                Trang chủ
              </a>

              <a
                href="/album"
                className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2]"
              >
                Album
              </a>

              <a
                href="/dich-vu"
                className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2]"
              >
                Dịch vụ
              </a>

              <a
                href="/bang-gia"
                className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2]"
              >
                Bảng giá
              </a>

              <a
                href="/lien-he"
                className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2]"
              >
                Liên hệ
              </a>

              <a
                href="/lien-he"
                className="mt-2 rounded-full bg-[#1F1F1F] px-5 py-3 text-center font-semibold text-white"
              >
                Đặt lịch tư vấn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}