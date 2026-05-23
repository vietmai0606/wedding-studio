"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      {open && (
        <div className="mb-4 flex flex-col items-end gap-3">
          <a
            href="tel:+84924733777"
            className="rounded-full bg-[#1F1F1F] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-black"
          >
            Gọi ngay
          </a>

          <a
            href="https://zalo.me/0924733777"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#0068FF] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Nhắn Zalo
          </a>

          <a
            href="https://www.facebook.com/search/top?q=Duy%20To%C3%A0n%20Wedding"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Facebook
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=10%20Tr%E1%BA%A7n%20%C4%90%C3%ACnh%20Ch%C3%A2u%2C%20Ho%C3%A0i%20%C3%82n%2C%20Gia%20Lai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#B99A5F] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#a88a52]"
          >
            Đường đi
          </a>
        </div>
      )}

      <div className="flex items-center gap-3">
        {!open && (
          <div className="relative rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1F1F1F] shadow-lg">
            Liên hệ
            <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white" />
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8f8f8f] text-2xl text-white shadow-xl transition hover:scale-105 hover:bg-[#777]"
          aria-label="Mở liên hệ nhanh"
        >
          {open ? "×" : "💬"}
        </button>
      </div>
    </div>
  );
}