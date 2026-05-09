import express from 'express';
import getData from '../controllers/data.controller.js';

const routerData = express.Router();

// GET /data
routerData.get('/:type', getData);

export default routerData;
