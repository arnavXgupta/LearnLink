import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { subjectsRouter } from './routes/subjects.js';
import { pdfsRouter } from './routes/pdfs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/subjects', subjectsRouter);
app.use('/api/pdfs', pdfsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});