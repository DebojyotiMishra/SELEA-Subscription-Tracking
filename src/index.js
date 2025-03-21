import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracking API');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000 in development mode at http://localhost:3000');
});

export default app;
