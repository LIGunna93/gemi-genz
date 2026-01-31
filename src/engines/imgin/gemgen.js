import { config } from '../../config/env.js';
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

async function generateImg() {

  const aiImg = new GoogleGenAI({ apiKey: config.apiKey });

  const prompt =
    "An elegant oil painting of a serene mountain landscape during autumn, with vibrant fall foliage, a calm river reflecting the colorful trees, and a clear blue sky with soft clouds. High detail, warm tones.";
    
  const response = await aiImg.models.generateContent({
    model: config.imgmodel,
    contents: prompt,
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
      console.log("Image saved as gemini-native-image.png");
    }
  }
}

// Run the image generation
generateImg();