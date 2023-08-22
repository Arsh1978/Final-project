import express from 'express';
import { notecontroller } from '../controller/notes-controller.js';

export const noteRoutes=express.Router();

noteRoutes.post('/note',notecontroller.submitNote);
noteRoutes.get('/note',notecontroller.getNote);
noteRoutes.put('/note',notecontroller.updateNote);
noteRoutes.delete('/note',notecontroller.deleteNote);