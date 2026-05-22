export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold">DUY TOÀN WEDDING</h3>

          <p className="mt-4 text-sm leading-7 text-white/70">
            Studio chụp ảnh cưới phong cách sang trọng, nhẹ nhàng và đầy cảm
            xúc dành cho các cặp đôi.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Menu</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <a href="/" className="hover:text-white">
              Trang chủ
            </a>
            <a href="/album" className="hover:text-white">
              Album
            </a>
            <a href="/dich-vu" className="hover:text-white">
              Dịch vụ
            </a>
            <a href="/bang-gia" className="hover:text-white">
              Bảng giá
            </a>
            <a href="/lien-he" className="hover:text-white">
              Liên hệ
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Liên hệ</h3>

          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p>Điện thoại: 0924 733 777</p>
            <p>Zalo: 0924 733 777</p>
            <p>Fanpage: Duy Toàn Wedding</p>
            <p>Địa chỉ: Address: 10 Trần Đình Châu, X. Hoài Ân, T. Gia Lai
( TT. Tăng Bạc Hổ, H. Hoài Ân, T. Bình Định cũ )</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
        © 2026 DUY TOÀN WEDDING Design by VIETMAI . All rights reserved.
      </div>
    </footer>
  );
}