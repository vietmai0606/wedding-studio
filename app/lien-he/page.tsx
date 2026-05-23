const googleFormUrl = "https://byvn.net/xB3I";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 pt-40 pb-32 text-[#1F1F1F]">
      <section className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
            Booking
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Đặt lịch tư vấn
          </h1>

          <p className="mt-5 leading-8 text-neutral-600">
            Để lại thông tin, Duy Toàn Wedding sẽ liên hệ tư vấn concept, gói
            chụp, trang phục và lịch chụp phù hợp với bạn.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[2rem] bg-[#FAF7F2] p-6">
              <h2 className="text-xl font-semibold">Thông tin liên hệ</h2>

              <div className="mt-5 space-y-3 text-neutral-700">
                <p>
                  <span className="font-semibold">Số điện thoại:</span>{" "}
                  0924 733 777
                </p>

                <p>
                  <span className="font-semibold">Zalo:</span> 0924 733 777
                </p>

                <p>
                  <span className="font-semibold">Facebook:</span>{" "}
                  Duy Toàn Wedding
                </p>

                <p>
                  <span className="font-semibold">Địa chỉ:</span> 10 Trần Đình
                  Châu, X. Hoài Ân, T. Gia Lai
                </p>

                <p className="text-sm text-neutral-500">
                  TT. Tăng Bạc Hổ, H. Hoài Ân, T. Bình Định cũ
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 p-6">
              <h2 className="text-xl font-semibold">Giờ làm việc</h2>

              <div className="mt-5 space-y-3 text-neutral-700">
                <p>Thứ 2 - Thứ 6: 9:00 - 20:00</p>
                <p>Thứ 7 - Chủ nhật: 8:00 - 21:00</p>
                <p>Vui lòng đặt lịch trước để được tư vấn tốt nhất.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#FAF7F2] p-6 shadow-sm md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Gửi yêu cầu tư vấn</h2>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Bấm vào nút bên dưới để mở form đặt lịch. Thông tin của bạn sẽ
              được gửi trực tiếp đến Duy Toàn Wedding.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6">
            <h3 className="text-xl font-semibold">
              Form đặt lịch Duy Toàn Wedding
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              Form gồm: họ tên, số điện thoại/Zalo, ngày dự kiến chụp, dịch vụ
              quan tâm, ngân sách và lời nhắn.
            </p>

            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block w-full rounded-full bg-[#1F1F1F] px-6 py-4 text-center font-semibold text-white transition hover:bg-black"
            >
              Mở form đặt lịch
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
              Sau khi gửi form, studio sẽ liên hệ lại qua số điện thoại hoặc
              Zalo bạn đã cung cấp.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:0924733777"
              className="rounded-full border border-[#1F1F1F] px-5 py-3 text-center text-sm font-semibold transition hover:bg-white"
            >
              Gọi ngay
            </a>

            <a
              href="https://zalo.me/0924733777"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#0068FF] px-5 py-3 text-center text-sm font-semibold text-[#0068FF] transition hover:bg-white"
            >
              Nhắn Zalo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}