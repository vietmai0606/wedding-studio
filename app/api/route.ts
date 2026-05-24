export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = String(body.message || "").trim();

    if (!message) {
      return Response.json(
        { reply: "Bạn vui lòng nhập nội dung cần tư vấn nhé." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json({
        reply:
          "Trợ lý chưa được cấu hình Gemini API key. Bạn có thể gọi hoặc nhắn Zalo 0924 733 777 để được tư vấn nhanh nhất.",
      });
    }

    const systemPrompt = `
Bạn là trợ lý tư vấn của Duy Toàn Wedding.

Thông tin studio:
- Tên: Duy Toàn Wedding
- SĐT/Zalo: 0924 733 777
- Facebook: https://www.facebook.com/Duytoanwedding
- Địa chỉ: 10 Trần Đình Châu, X. Hoài Ân, T. Gia Lai
- Địa chỉ cũ: TT. Tăng Bạc Hổ, H. Hoài Ân, T. Bình Định cũ
- Dịch vụ: chụp ảnh cưới studio, chụp ảnh cưới ngoại cảnh, makeup cô dâu, thuê váy cưới, album cưới, gói trọn ngày cưới.

Cách trả lời:
- Luôn trả lời bằng tiếng Việt.
- Giọng thân thiện, lịch sự, tự nhiên như nhân viên tư vấn.
- Trả lời ngắn gọn, dễ hiểu, không quá dài.
- Tập trung tư vấn dịch vụ cưới của Duy Toàn Wedding.
- Không bịa giá cụ thể nếu khách hỏi giá.
- Nếu khách hỏi giá, hãy mời khách để lại số điện thoại/Zalo hoặc nhắn Zalo 0924 733 777.
- Nếu khách muốn đặt lịch, hãy hỏi họ tên, số điện thoại/Zalo, ngày dự kiến chụp và dịch vụ quan tâm.
- Nếu khách hỏi địa chỉ, hãy trả lời địa chỉ studio rõ ràng.
- Nếu khách hỏi ngoài phạm vi studio cưới, trả lời ngắn gọn rồi kéo về nhu cầu tư vấn cưới.
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${systemPrompt}\n\nKhách hỏi: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 350,
          },
        }),
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Xin lỗi, hiện tại tôi chưa phản hồi được. Bạn có thể nhắn Zalo 0924 733 777 để được tư vấn nhanh nhất.";

    return Response.json({ reply });
  } catch (error) {
    console.error(error);

    return Response.json({
      reply:
        "Xin lỗi, trợ lý đang gặp lỗi tạm thời. Bạn có thể gọi hoặc nhắn Zalo 0924 733 777 để được hỗ trợ nhanh nhất.",
    });
  }
}