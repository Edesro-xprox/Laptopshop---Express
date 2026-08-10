import { findAllShop, findShopByUser, changeShop, removeAllShops, removeShop, changeQuantityShop  } from '../services/shop.service.js';

const getAllShop = async (req, res) => {
  try {
    const shops = await findAllShop();
    res.json(shops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getShopByUser = async (req, res) =>{
  try{ 
    const { userId } = req.params;
    const shop = await findShopByUser(userId);
    res.json(shop);
  }catch(error){
    res.status(500).json({ error: error.message })
  }
}

const postShop = async (req, res) => {
  try {
    const shop = await changeShop(req.body);
    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteShop = async (req, res) => {
  try {
    const { id } = req.params;
    const { cartId, userId } = req.body;
    await removeShop(id, {  cartId, userId });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putShop = async (req, res) => {
  try {
    const { id, value } = req.params; //id de producto y value de cantidad
    const { cartId, userId } = req.body; //cartId y userId para actualizar la cantidad en el carrito específico del usuario
    const shop = await changeQuantityShop(id, { quantity: value, cartId, userId });
    res.json(shop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllShops = async (req, res) => {
  try {
    const { cartId, userId } = req.body;
    await removeAllShops({ cartId, userId });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllShop,
  getShopByUser,
  postShop,
  deleteShop,
  putShop,
  deleteAllShops
}