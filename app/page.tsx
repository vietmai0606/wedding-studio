"use client";

import { useState } from "react";

const heroImages = [
  "/images/hero.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

const services = [
  "Chụp ảnh cưới studio",
  "Chụp ảnh cưới ngoại cảnh",
  "Makeup cô dâu",
  "Cho thuê váy cưới",
];

const albums = [
  {
    title: "Concept Hàn Quốc",
    image: "/images/album-1.jpg",
  },
  {
    title: "Concept Luxury",
    image: "/images/album-2.jpg",
  },
  {
    title: "Concept Outdoor",
    image: "/images/album-3.jpg",
  },
  {
    title: "Concept Áo dài",
    image: "/images/album-4.jpg",
  },
  {
    title: "Concept Cổ điển",
    image: "/images/album-5.jpg",
  },
  {
    title: "Concept Biển",
    image: "/images/album-6.jpg",
  },
];

const weddingAlbums = [
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

const process = [
  "Tư vấn concept",
  "Chọn gói chụp",
  "Thử váy & makeup",
  "Chụp ảnh",
  "Chọn ảnh",
  "Nhận album",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    setCurrentIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  }

  function goToNext() {
    setCurrentIndex((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <main className="bg-[#FAF7F2] text-[#1F1F1F]">
      <section className="relative min-h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Ảnh cưới Duy Toàn Wedding ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/15" />

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl font-semibold text-[#1F1F1F] shadow-lg transition hover:bg-white md:left-8"
          aria-label="Ảnh trước"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl font-semibold text-[#1F1F1F] shadow-lg transition hover:bg-white md:right-8"
          aria-label="Ảnh tiếp theo"
        >
          ›
        </button>

        <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-5">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/album"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1F1F1F] shadow-lg transition hover:bg-[#FAF7F2]"
            >
              Xem album
            </a>

            <a
              href="/lien-he"
              className="rounded-full border border-white bg-black/20 px-8 py-4 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-white hover:text-[#1F1F1F]"
            >
              Đặt lịch tư vấn
            </a>
          </div>

          <div className="flex justify-center gap-2">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Chuyển đến ảnh ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
        <div className="rounded-[2rem] bg-[#E8DED1] p-6 md:p-10">
          <img
            src="/images/album-2.jpg"
            alt="Ảnh giới thiệu studio"
            className="h-96 w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
            About us
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Mỗi bộ ảnh là một câu chuyện tình yêu riêng
          </h2>

          <p className="mt-6 leading-8 text-neutral-600">
            Duy Toàn Wedding đồng hành cùng các cặp đôi từ khâu lựa chọn
            concept, trang phục, makeup đến hoàn thiện album cưới. Mỗi khung
            hình đều được chăm chút để giữ lại cảm xúc tự nhiên và chân thật
            nhất.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-semibold">5+</p>
              <p className="mt-1 text-sm text-neutral-500">Năm kinh nghiệm</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">100+</p>
              <p className="mt-1 text-sm text-neutral-500">Album cưới</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">30+</p>
              <p className="mt-1 text-sm text-neutral-500">Concept</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
            Services
          </p>

          <h2 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
            Dịch vụ của studio
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-[2rem] border border-neutral-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FAF7F2] text-3xl text-[#B99A5F]">
                  ✦
                </div>

                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
          Portfolio
        </p>

        <h2 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
          Album nổi bật
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {albums.map((album) => (
            <div
              key={album.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={album.image}
                alt={album.title}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{album.title}</h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Bộ ảnh cưới tinh tế, tự nhiên và đầy cảm xúc.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/album"
            className="inline-block rounded-full bg-[#1F1F1F] px-8 py-4 text-sm font-semibold text-white transition hover:bg-black"
          >
            Xem toàn bộ album
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
            Wedding Album
          </p>

          <h2 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
            Album ảnh cưới
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-neutral-600">
            Những khoảnh khắc cưới được Duy Toàn Wedding lưu giữ với phong cách
            tự nhiên, tinh tế và đầy cảm xúc.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {weddingAlbums.map((album) => (
              <div
                key={album.title}
                className="group overflow-hidden rounded-[2rem] bg-[#FAF7F2] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{album.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Bộ ảnh cưới ghi lại những cảm xúc tự nhiên và đáng nhớ của
                    cô dâu chú rể.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
            Process
          </p>

          <h2 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
            Quy trình làm việc
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-6">
            {process.map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1F1F1F] text-white">
                  {index + 1}
                </div>

                <p className="mt-4 text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#B99A5F]">
          Booking
        </p>

        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Sẵn sàng lưu giữ khoảnh khắc đẹp nhất?
        </h2>

        <p className="mt-6 leading-8 text-neutral-600">
          Đặt lịch tư vấn miễn phí để studio gợi ý concept, váy cưới và gói
          chụp phù hợp với bạn.
        </p>

        <a
          href="/lien-he"
          className="mt-10 inline-block rounded-full bg-[#1F1F1F] px-8 py-4 text-sm font-semibold text-white transition hover:bg-black"
        >
          Đặt lịch ngay
        </a>
      </section>
    </main>
  );
}