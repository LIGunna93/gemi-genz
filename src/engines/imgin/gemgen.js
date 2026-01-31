import { GoogleGenAI } from '@google/genai';
const fs = require("fs");

// Initialize the SDK with your API Key
const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);
async function generateImage() {
  // Use the 'imagen' model (powered by Nano Banana)
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = "A pondering cityscape at sunset, with futuristic buildings and flying cars. Picture in vibrant colors and high detail.";

  try {
    const result = await model.generateContent({
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
    const response = result.response;
    const imageData = response.candidates[0].content.parts[0].inlineData;

    if (imageData) {
      const buffer = Buffer.from(imageData.data, "base64");
      fs.writeFileSync(`gem_${Date.now()}.png`, buffer);
      console.log("✅ Image saved successfully as 'gem_${Date.now()}.png'");
    }

  } catch (error) {
    console.error("❌ Error generating image:", error.message);
  }
}

generateImage();