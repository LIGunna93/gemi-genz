import 'dotenv/config';

const requiredEnvVars = ['GEMINI_API_KEY', 'GEMINI_MODEL_NAME', 'GEMINI_ImgMODEL_NAME'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Error: Missing environment variable ${envVar}`);
    process.exit(1); // Stop the server
  }
}

export const config = {
  apiKey: process.env.GEMINI_API_KEY,
  model: process.env.GEMINI_CMODEL_NAME,
  imgmodel: process.env.GEMINI_ImgMODEL_NAME,
  port: process.env.PORT || 6060,
};