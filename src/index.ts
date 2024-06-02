// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './api/users';
import taskRoutes from './api/tasks';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
