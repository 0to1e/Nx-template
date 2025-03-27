const express = require('express');
const app = express();

import type { Request, Response } from 'express';

app.get('/api', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to backend!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
