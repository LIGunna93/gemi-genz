
import express from 'express';
import path from 'node:path';

const app = express();
//import { getProfileImprovementAdvice } from './engines/talkativ/gembot.js';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static(path.join(process.cwd(), 'src', 'resource')));

// Home Route
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// API Explorer Route
app.get('/apiexp', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'apiexp.html'));
});


// API Explorer Service Health Check
app.get('/apiexp/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Explorer Improve Profile Endpoint [POST]
app.post('/apiexp/api/improve-profile', async (req, res) => {
  const { prompt } = req.body;
  try {
    const advice = await getProfileImprovementAdvice(prompt);
    res.json({ success: true, data: advice });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(process.env.PORT || 6800, () => console.log('🚀 Server running on http://localhost:6800'));