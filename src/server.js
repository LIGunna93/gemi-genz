import 'dotenv/config'; 
import express from 'express';
import { getProfileImprovementAdvice } from './engines/talkativ/gembot.js';

const app = express();
app.use(express.json());

app.post('/api/improve-profile', async (req, res) => {
  const { prompt } = req.body;
  try {
    const advice = await getProfileImprovementAdvice(prompt);
    res.json({ success: true, data: advice });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(process.env.PORT || 6060, () => console.log('🚀 Server running on http://localhost:6060'));