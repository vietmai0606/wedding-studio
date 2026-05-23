const albums = [
  {
    title: "Album ảnh cưới 01",
    image: "/images/wedding-1.jpg",
  },
  {
    title: "Album ảnh cưới 02",
    image: "/images/wedding-2.jpg",
  },
  {
    title: "Album ảnh cưới 03",
    image: "/images/wedding-3.jpg",
  },
  {
    title: "Album ảnh cưới 04",
    image: "/images/wedding-4.jpg",
  },
  {
    title: "Album ảnh cưới 05",
    image: "/images/wedding-5.jpg",
  },
  {
    title: "Album ảnh cưới 06",
    image: "/images/wedding-6.jpg",
  },
];

export default function AlbumPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 pt-40 pb-32 text-[#1F1F1F]">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
          Portfolio
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Album ảnh cưới
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-neutral-600">
          Những bộ ảnh cưới được Duy Toàn Wedding thực hiện với phong cách tự
          nhiên, sang trọng và giàu cảm xúc.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {albums.map((album) => (
            <div
              key={album.title}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={album.image}
                  alt={album.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold">{album.title}</h2>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Bộ ảnh cưới tinh tế dành cho các cặp đôi yêu thích sự nhẹ
                  nhàng, chỉn chu và cảm xúc.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}