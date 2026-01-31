
import express from 'express';
import path from 'node:path';

const app = express();
//import { getProfileImprovementAdvice } from './engines/talkativ/gembot.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.static(path.join(process.cwd(), 'src/resource')));

// Home Route
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(process.cwd(), 'public') });
});

// API Explorer Route
app.get('/apiexp/', (req, res) => {
  res.sendFile('apiexp.html', { root: path.join(process.cwd(), 'public') });
});

// API Explorer Service Health Check
app.get('/apiexp/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Xplorer Chat-Completion API
/*
app.post('/apiexp/api/chat-complete', async (req, res) => {
  const { prompt } = req.body;
  try {
    const advice = await getProfileImprovementAdvice(prompt);
    res.json({ success: true, data: advice });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});*/

// Launch Server
app.listen(process.env.PORT || 6800, () => console.log('🚀 Server running on http://localhost:6800'));