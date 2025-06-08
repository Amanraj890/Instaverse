import React, { useState } from "react";

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(["👋 Hello! How can I help?"]);

  const handleSend = async (msg) => {
    setMessages([...messages, `🧑: ${msg}`, "🤖: Typing..."]);
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_OPENAI_API_KEY`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: msg }],
      }),
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "Error";
    setMessages((prev) => [...prev.slice(0, -1), `🤖: ${reply}`]);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        🤖 Help
      </button>
      {open && (
        <div className="w-72 p-3 bg-white rounded shadow-lg mt-2">
          {messages.map((m, i) => (
            <p key={i} className="text-sm my-1">{m}</p>
          ))}
          <input
            type="text"
            onKeyDown={(e) => e.key === "Enter" && handleSend(e.target.value)}
            placeholder="Ask me..."
            className="border w-full px-2 py-1 rounded mt-2"
          />
        </div>
      )}
    </div>
  );
};
export default AIChatbot;