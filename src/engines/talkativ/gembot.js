import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

// Centralize the setup
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash" });

export const getProfileImprovementAdvice = async (userPrompt) => {
  try {
    const result = await model.generateContent(userPrompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw new Error("Failed to fetch AI advice");
  }
};