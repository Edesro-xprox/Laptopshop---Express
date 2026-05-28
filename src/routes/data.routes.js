import express from 'express';
import { getData, getAllData } from '../controllers/data.controller.js';

const routerData = express.Router();

routerData.get('/', getAllData);
// GET /data
routerData.get('/:type', getData);

export default routerData;
