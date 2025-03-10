import express from 'express';
import { getPDFs } from '../controllers/pdfs.js';

export const pdfsRouter = express.Router();

pdfsRouter.get('/:year/:branch/:subject', getPDFs);