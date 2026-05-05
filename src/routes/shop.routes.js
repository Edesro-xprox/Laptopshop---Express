import express from  'express';
import { getAllShop, postShop, deleteShop, putShop, deleteAllShops  } from '../controllers/shop.controller.js';

const routerShop = express.Router();
// GET /shop
routerShop.get('/', getAllShop);
// POST /shop
routerShop.post('/', postShop);
// DELETE /shop/:id
routerShop.delete('/:id', deleteShop);
// PUT /shop/:id/:value
routerShop.put('/:id/:value', putShop);
// DELETE /shop
routerShop.delete('/', deleteAllShops);

export default routerShop;