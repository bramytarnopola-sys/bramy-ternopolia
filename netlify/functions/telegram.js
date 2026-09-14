export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = await req.json();
    const { name, phone, email, comment, itemName } = data;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return new Response("Missing Telegram configuration", { status: 500 });
    }

    const text = `🛍 **Нове замовлення мерчу!**\n\n` +
                 `📦 **Товар:** ${itemName}\n` +
                 `👤 **Ім'я:** ${name}\n` +
                 `📞 **Телефон:** ${phone}\n` +
                 `📧 **Email:** ${email ? email : 'Не вказано'}\n` +
                 `💬 **Коментар:**\n${comment ? comment : 'Не вказано'}`;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API Error: ${await response.text()}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
