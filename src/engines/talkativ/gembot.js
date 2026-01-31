import { config } from '../../config/env.js';
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: config.apiKey });

async function main() {
  const response = await ai.models.generateContent({
    model: config.chatmodel || "gemini-3-flash-preview",
    contents: "How do I get to Mars from Earth?",
  });
  console.log(response.text);
  return response.text;
}

main().catch(console.error);