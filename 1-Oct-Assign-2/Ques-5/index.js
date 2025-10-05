// index.js
const express = require('express');
const eventEmitter = require('./eventLogger');
const { delayMessage } = require('./delay');

const app = express();
const PORT = 3000;

// Basic test route
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Route: /emit?message=Hello
app.get('/emit', (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.status(400).json({ error: 'Missing "message" query parameter' });
  }

  // Trigger the log event
  eventEmitter.emit('log', message);

  res.json({
    status: 'success',
    message: `Log event emitted with message: "${message}"`,
  });
});

// Route: /delay?message=Hello&time=2000
app.get('/delay', async (req, res) => {
  const message = req.query.message;
  const time = parseInt(req.query.time);

  if (!message || isNaN(time)) {
    return res
      .status(400)
      .json({ error: 'Missing "message" or invalid "time" query parameter' });
  }

  const result = await delayMessage(message, time);
  res.json({
    status: 'success',
    delayedMessage: result,
    delayTime: time,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
