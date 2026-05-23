"use client";

import { useState } from "react";

type Message = {
  role: "bot" | "user";
  text: string;
};

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Xin chào! Tôi là trợ lý của Duy Toàn Wedding. Bạn cần tư vấn chụp ảnh cưới, váy cưới, makeup hay đặt lịch ạ?",
    },
  ]);

  async function handleSend() {
    if (!input.trim() || isSending) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            data.reply ||
            "Xin lỗi, tôi chưa phản hồi được. Bạn có thể nhắn Zalo 0924 733 777 để được tư vấn nhanh nhất.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Xin lỗi, trợ lý đang gặp lỗi kết nối. Bạn có thể gọi hoặc nhắn Zalo 0924 733 777 nhé.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 left-5 z-[60] w-[calc(100vw-40px)] max-w-[430px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#202020] text-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-black px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">
                🤖
              </div>

              <div>
                <h3 className="font-semibold">Trợ Lý AI 24/7</h3>
                <p className="text-xs text-white/50">Duy Toàn Wedding</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xl transition hover:bg-white/20"
              aria-label="Đóng chat"
            >
              ×
            </button>
          </div>

          <div className="h-[420px] overflow-y-auto px-5 py-5">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl">
                🤖
              </div>

              <h4 className="text-xl font-semibold">Trợ Lý AI 24/7</h4>

              <p className="mt-2 text-sm text-white/70">
                Tôi có thể giúp gì cho bạn?
              </p>
            </div>

            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-[#0068FF] text-white"
                        : "bg-white/10 text-white/85"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isSending && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl bg-white/10 px-4 py-3 text-sm leading-6 text-white/70">
                    Đang trả lời...
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#202020] p-4">
            <div className="mb-3 grid grid-cols-2 gap-2">
              <a
                href="tel:+84924733777"
                className="rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#1F1F1F] transition hover:bg-[#FAF7F2]"
              >
                Gọi ngay
              </a>

              <a
                href="https://zalo.me/0924733777"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0068FF] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                Nhắn Zalo
              </a>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Nhập tin nhắn..."
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="button"
                onClick={handleSend}
                disabled={isSending}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0068FF] text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Gửi tin nhắn"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-2xl transition hover:scale-105"
        aria-label="Mở trợ lý chat"
      >
        {open ? <span className="text-3xl text-black">×</span> : "🤖"}
      </button>
    </>
  );
}