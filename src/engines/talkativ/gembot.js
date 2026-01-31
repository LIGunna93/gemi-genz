import '../../config/env.js';
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: process.env.GEMINI_CMODEL_NAME || "gemini-3-flash-preview",
    contents: "How many stars are there in the Milky Way galaxy? Explain in a concise, brief paragraph.",
  });
  console.log(response.text);
  return response.text;
}

main().catch(console.error);