const packages = [
  {
    name: "Gói Studio",
    price: "Liên hệ",
    features: [
      "1 concept studio",
      "Makeup cô dâu",
      "Trang phục cơ bản",
      "Ảnh chỉnh sửa",
      "Tư vấn tạo dáng",
    ],
  },
  {
    name: "Gói Ngoại Cảnh",
    price: "Liên hệ",
    features: [
      "2-3 bối cảnh",
      "Makeup & trang phục",
      "Ekip hỗ trợ",
      "Ảnh chỉnh sửa cao cấp",
      "Album cưới",
    ],
  },
  {
    name: "Gói Premium",
    price: "Liên hệ",
    features: [
      "Nhiều concept",
      "Váy cưới cao cấp",
      "Makeup chuyên sâu",
      "Album lớn",
      "Ảnh phóng cưới",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 pt-40 pb-32 text-[#1F1F1F]">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
          Packages
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Gói chụp ảnh cưới
        </h1>

        <p className="mt-5 max-w-2xl text-neutral-600">
          Các gói chụp được thiết kế linh hoạt theo nhu cầu, concept và ngân
          sách của từng cặp đôi.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold">{item.name}</h2>

              <p className="mt-4 text-3xl font-semibold text-[#B99A5F]">
                {item.price}
              </p>

              <ul className="mt-6 space-y-3 text-neutral-600">
                {item.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="/lien-he"
                className="mt-8 inline-block rounded-full bg-[#1F1F1F] px-6 py-3 text-sm font-semibold text-white"
              >
                Nhận tư vấn
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}