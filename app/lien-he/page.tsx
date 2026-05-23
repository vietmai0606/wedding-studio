"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "3333020e-d897-43e2-8315-a45da961bf59";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const hoTen = String(formData.get("ho_ten") || "");
    const soDienThoai = String(formData.get("so_dien_thoai_zalo") || "");
    const diaChi = String(formData.get("dia_chi") || "");
    const ngayChup = String(formData.get("ngay_du_kien_chup") || "");
    const dichVu = String(formData.get("dich_vu_quan_tam") || "");
    const nganSach = String(formData.get("ngan_sach_du_kien") || "");
    const loiNhan = String(formData.get("loi_nhan") || "");

    const emailData = new FormData();

    emailData.append("access_key", WEB3FORMS_ACCESS_KEY);
    emailData.append("subject", "Khách hàng mới đặt lịch - Duy Toàn Wedding");
    emailData.append("from_name", "Website Duy Toàn Wedding");

    emailData.append(
      "message",
      `
Thông tin khách hàng mới:

Họ tên: ${hoTen}
Số điện thoại / Zalo: ${soDienThoai}
Địa chỉ: ${diaChi || "Chưa nhập"}
Ngày dự kiến chụp: ${ngayChup || "Chưa chọn"}
Dịch vụ quan tâm: ${dichVu}
Ngân sách dự kiến: ${nganSach}
Lời nhắn: ${loiNhan || "Không có"}

Thông tin liên hệ studio:
Duy Toàn Wedding
SĐT/Zalo: 0924 733 777
Facebook: Duy Toàn Wedding
Địa chỉ: 10 Trần Đình Châu, X. Hoài Ân, T. Gia Lai
Địa chỉ cũ: TT. Tăng Bạc Hổ, H. Hoài Ân, T. Bình Định cũ
`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 pt-40 pb-32 text-[#1F1F1F]">
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

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-[#FAF7F2] p-6 shadow-sm md:p-8"
        >
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Gửi yêu cầu tư vấn</h2>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Điền thông tin bên dưới, ekip sẽ liên hệ lại trong thời gian sớm
              nhất.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium">Họ tên *</label>

              <input
                name="ho_ten"
                required
                type="text"
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium text-[#1F1F1F] outline-none transition placeholder:text-neutral-400 focus:border-[#B99A5F]"
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Số điện thoại / Zalo *
              </label>

              <input
                name="so_dien_thoai_zalo"
                required
                type="text"
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium text-[#1F1F1F] outline-none transition placeholder:text-neutral-400 focus:border-[#B99A5F]"
                placeholder="Nhập số điện thoại hoặc Zalo"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Địa chỉ</label>

              <input
                name="dia_chi"
                type="text"
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium text-[#1F1F1F] outline-none transition placeholder:text-neutral-400 focus:border-[#B99A5F]"
                placeholder="Nhập địa chỉ của bạn"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Ngày dự kiến chụp</label>

              <input
                name="ngay_du_kien_chup"
                type="date"
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium text-[#1F1F1F] outline-none transition focus:border-[#B99A5F]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Dịch vụ quan tâm</label>

              <select
                name="dich_vu_quan_tam"
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium text-[#1F1F1F] outline-none transition focus:border-[#B99A5F]"
              >
                <option>Chụp ảnh cưới studio</option>
                <option>Chụp ảnh cưới ngoại cảnh</option>
                <option>Makeup cô dâu</option>
                <option>Thuê váy cưới</option>
                <option>Gói trọn ngày cưới</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Ngân sách dự kiến</label>

              <select
                name="ngan_sach_du_kien"
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium text-[#1F1F1F] outline-none transition focus:border-[#B99A5F]"
              >
                <option>Chưa xác định</option>
                <option>Dưới 5 triệu</option>
                <option>5 - 10 triệu</option>
                <option>10 - 20 triệu</option>
                <option>Trên 20 triệu</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Lời nhắn</label>

              <textarea
                name="loi_nhan"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-medium text-[#1F1F1F] outline-none transition placeholder:text-neutral-400 focus:border-[#B99A5F]"
                placeholder="Bạn muốn concept như thế nào? Studio, ngoại cảnh, Hàn Quốc, luxury..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-[#1F1F1F] px-6 py-4 font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
            </button>

            {status === "success" && (
              <p className="rounded-2xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                Gửi thành công! Duy Toàn Wedding sẽ liên hệ lại với bạn sớm.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
                Gửi chưa thành công. Bạn vui lòng thử lại hoặc nhắn Zalo 0924
                733 777.
              </p>
            )}

            <p className="text-center text-xs leading-5 text-neutral-500">
              Studio sẽ liên hệ lại qua số điện thoại hoặc Zalo bạn đã cung cấp.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}