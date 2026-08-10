import express from  'express';
import { getAllShop, getShopByUser, postShop, deleteShop, putShop, deleteAllShops  } from '../controllers/shop.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const routerShop = express.Router();
routerShop.use(authMiddleware);

// GET /shop
routerShop.get('/', getAllShop);

// GET BY ID /shop
routerShop.get('/:userId', getShopByUser);

// POST /shop
routerShop.post('/', postShop);
// DELETE /shop/:id
routerShop.delete('/:id', deleteShop);
// PUT /shop/:id/:value
routerShop.put('/:id/:value', putShop);
// DELETE /shop
routerShop.delete('/', deleteAllShops);

export default routerShop;