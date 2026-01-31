import '../../config/env.js';
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

// Initialize the SDK with your API Key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage() {
  // Use the 'imagen' model (powered by Nano Banana) -- or specify another available model
  const prompt = "A pondering cityscape at sunset, with futuristic buildings and flying cars. Picture in vibrant colors and high detail.";

  try {
    const result = await ai.models.generateContent({
      model: process.env.GEMINI_ImgMODEL_NAME || "gemini-3-pro-image-preview",  // Specify the image generation model
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        // --- Common Config Options ---
        temperature: 0.7,          // Higher = more creative/random
        // topP: 1.0,                 // Nucleus sampling
        candidateCount: 1,         // Number of images to generate

        // --- Image Specific Parameters (Passed via custom params in 2026) ---
        aspect_ratio: "16:9",      // "1:1", "4:3", "9:16"
        output_mime_type: "image/png"
      }
    });

    // In 2026, the SDK returns the image as a base64 string or a cloud URI
    const response = result.candidates[0].content;
    const txtData = response.parts.find(part => part.mimeType === "text/plain");
    console.log("Generation Info:", txtData ? txtData.text : "No text info available");
    const imageData = response.parts[0].inlineData;

    if (!imageData) {
      console.error("❌ No image data returned from the API.");
    }
    else {
      const buffer = Buffer.from(imageData.data, "base64");
      fs.writeFileSync(`gem_${Date.now()}.png`, buffer);
      console.log(`Image saved in the directory successfully ✅ -- 'gem_${Date.now()}.png'`);
    }
  } catch (error) {
    console.error("❌ Error generating image:", error.message);
  }
}

generateImage();