export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.25fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[#B99A5F]">
              Wedding Studio
            </p>

            <h3 className="mt-4 text-2xl font-semibold">Duy Toàn Wedding</h3>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Duy Toàn Wedding chuyên chụp ảnh cưới, makeup cô dâu, váy cưới và
              album cưới với phong cách nhẹ nhàng, sang trọng và đầy cảm xúc.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/lien-he"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1F1F1F] transition hover:bg-[#FAF7F2]"
              >
                Đặt lịch tư vấn
              </a>

              <a
                href="tel:+84924733777"
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1F1F1F]"
              >
                Gọi ngay
              </a>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
              <div>
                <p className="text-xl font-semibold">5+</p>
                <p className="mt-1 text-xs text-white/50">Năm kinh nghiệm</p>
              </div>

              <div>
                <p className="text-xl font-semibold">30+</p>
                <p className="mt-1 text-xs text-white/50">Concept</p>
              </div>

              <div>
                <p className="text-xl font-semibold">100+</p>
                <p className="mt-1 text-xs text-white/50">Album cưới</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-lg font-semibold">Menu</h3>

            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <a href="/" className="transition hover:text-white">
                Trang chủ
              </a>

              <a href="/album" className="transition hover:text-white">
                Album
              </a>

              <a href="/dich-vu" className="transition hover:text-white">
                Dịch vụ
              </a>

              <a href="/bang-gia" className="transition hover:text-white">
                Bảng giá
              </a>

              <a href="/lien-he" className="transition hover:text-white">
                Liên hệ
              </a>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-white/[0.04] p-5">
              <h4 className="text-sm font-semibold text-white">
                Giờ làm việc
              </h4>

              <div className="mt-4 space-y-2 text-sm leading-6 text-white/60">
                <p>Thứ 2 - Thứ 6: 9:00 - 20:00</p>
                <p>Thứ 7 - Chủ nhật: 8:00 - 21:00</p>
                <p>Vui lòng đặt lịch trước khi đến studio.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-lg font-semibold">Dịch vụ chính</h3>

            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <p>Chụp ảnh cưới studio</p>
              <p>Chụp ảnh cưới ngoại cảnh</p>
              <p>Makeup cô dâu</p>
              <p>Cho thuê váy cưới</p>
              <p>Album ảnh cưới</p>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-[#B99A5F]/15 p-5">
              <h4 className="text-sm font-semibold text-[#E8D3A3]">
                Tư vấn miễn phí
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Liên hệ studio để được tư vấn concept, lịch chụp và gói dịch vụ
                phù hợp.
              </p>

              <a
                href="/lien-he"
                className="mt-5 inline-block rounded-full bg-[#B99A5F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a88a52]"
              >
                Nhận tư vấn
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/70">
              <p>
                <span className="font-medium text-white">SĐT/Zalo:</span>{" "}
                0924 733 777
              </p>

              <p>
                <span className="font-medium text-white">Facebook:</span>{" "}
                Duy Toàn Wedding
              </p>

              <p>
                <span className="font-medium text-white">Địa chỉ:</span> 10
                Trần Đình Châu, X. Hoài Ân, T. Gia Lai
              </p>

              <p className="text-white/45">
                TT. Tăng Bạc Hổ, H. Hoài Ân, T. Bình Định cũ
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <iframe
                src="https://www.google.com/maps?q=10%20Tr%E1%BA%A7n%20%C4%90%C3%ACnh%20Ch%C3%A2u%2C%20Ho%C3%A0i%20%C3%82n%2C%20Gia%20Lai&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=10%20Tr%E1%BA%A7n%20%C4%90%C3%ACnh%20Ch%C3%A2u%2C%20Ho%C3%A0i%20%C3%82n%2C%20Gia%20Lai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#1F1F1F] transition hover:bg-[#FAF7F2]"
            >
              Xem đường đi trên Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Duy Toàn Wedding design by VIETMAI. All rights reserved.</p>

          <p>Studio chụp ảnh cưới tại Hoài Ân, Gia Lai.</p>
        </div>
      </div>
    </footer>
  );
}