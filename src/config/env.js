import 'dotenv/config';

const requiredEnvVars = ['GEMINI_API_KEY'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Error: Missing environment variable ${envVar}`);
    process.exit(1); // Stop the server
  }
}

export const config = {
  apiKey: process.env.GEMINI_API_KEY,
  model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
  port: process.env.PORT || 6060,
};