import express from "express";
import OpenAI from "openai";

const app = express();
app.use(express.json());
app.use(express.static("."));

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY"
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are ComptCare's professional AI support assistant. Answer clearly about IT services, support, networking, cloud, security, and business IT solutions."
      },
      { role: "user", content: userMessage }
    ]
  });

  res.json({ reply: completion.choices[0].message.content });
});

app.listen(3000, () => {
  console.log("✅ ComptCare AI running at http://localhost:3000");
});
