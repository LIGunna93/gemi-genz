import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Explicitly point to the .env file in root DIR
dotenv.config({ path: resolve(__dirname, '../../.env') });

const requiredEnvVars = ["GEMINI_API_KEY", "GEMINI_CMODEL_NAME", "GEMINI_ImgMODEL_NAME"];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Error: Missing environment variable ${envVar}`);
    process.exit(1); 
  }
}

export const config = {
  apiKey: process.env.GEMINI_API_KEY,
  chatmodel: process.env.GEMINI_CMODEL_NAME,
  imgmodel: process.env.GEMINI_ImgMODEL_NAME,
  port: process.env.PORT || 6060,
};