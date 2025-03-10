import express from 'express';
import { getSubjects } from '../controllers/subjects.js';

export const subjectsRouter = express.Router();

subjectsRouter.get('/:year/:branch', getSubjects);