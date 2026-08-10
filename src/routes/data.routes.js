import express from 'express';
import { getData, getAllData } from '../controllers/data.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const routerData = express.Router();
routerData.use(authMiddleware);

routerData.get('/', getAllData);
// GET /data
routerData.get('/:type', getData);

export default routerData;
