const albums = [
  "Concept Hàn Quốc",
  "Concept Luxury",
  "Concept Ngoại cảnh",
  "Concept Áo dài",
  "Concept Biển",
  "Concept Cổ điển",
];

export default function AlbumPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 py-32 text-[#1F1F1F]">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
          Portfolio
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Album ảnh cưới
        </h1>

        <p className="mt-5 max-w-2xl text-neutral-600">
          Những bộ ảnh cưới được thực hiện với phong cách tự nhiên, sang trọng
          và giàu cảm xúc.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {albums.map((album, index) => (
            <div
              key={album}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
            >
              <div className="flex h-72 items-center justify-center bg-[#E8DED1] text-neutral-500">
                Ảnh album {index + 1}
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold">{album}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Bộ ảnh cưới tinh tế dành cho các cặp đôi yêu thích sự nhẹ
                  nhàng và cảm xúc.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}