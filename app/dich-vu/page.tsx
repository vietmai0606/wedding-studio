const services = [
  {
    title: "Chụp ảnh cưới studio",
    desc: "Phù hợp với cặp đôi yêu thích phong cách tối giản, tinh tế và sang trọng.",
  },
  {
    title: "Chụp ảnh cưới ngoại cảnh",
    desc: "Ghi lại khoảnh khắc tự nhiên tại biển, thành phố, Đà Lạt hoặc địa điểm riêng.",
  },
  {
    title: "Makeup cô dâu",
    desc: "Phong cách makeup nhẹ nhàng, tôn đường nét tự nhiên và phù hợp concept.",
  },
  {
    title: "Cho thuê váy cưới",
    desc: "Nhiều mẫu váy cưới, áo dài và trang phục phù hợp từng phong cách chụp.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-32 text-[#1F1F1F]">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
          Services
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Dịch vụ cưới
        </h1>

        <p className="mt-5 max-w-2xl text-neutral-600">
          Studio cung cấp các dịch vụ chụp ảnh cưới, makeup và trang phục cưới
          trọn gói cho các cặp đôi.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-neutral-200 p-8"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-4 leading-7 text-neutral-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}