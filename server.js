import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: userMessage
    });

    res.json({ reply: response.output_text });
  } catch (err) {
    console.log(err);
    res.json({ reply: err.message });
  }
});

app.listen(3000, () => {
  console.log("brbrs AI çalışıyor");
});
console.log(process.env.OPENAI_API_KEY);