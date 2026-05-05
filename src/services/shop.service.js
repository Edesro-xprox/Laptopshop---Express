import { getAll, post, put, deleteById, deleteAll  } from '../repositories/shop.repository.js';

const findAllShop = async () => {
  return await getAll();
};

const changeShop = async (shopData) => {
  const shops = await getAll();
  const shopExists = shops.some(shop => shop._id == shopData._id);
  if(shopExists){
    return await put(shopData._id, shopData);
  }else{
    return await post(shopData);
  }
};

const removeShop = async (id, data) => {
  const shops = await getAll();
  let shopData = shops.find(shop => shop._id == data.cartId);
  return await deleteById(shopData._id, id);
};

const changeQuantityShop = async (id, data) => {
  const shops = await getAll();
  let shopData = shops.find(shop => shop._id == data.cartId);
  shopData.items = shopData.items.map((s) =>{
    if(s._id == id){
      s.quantity += Number(data.quantity);
    }
    return s;
  });
  return await put(shopData._id, shopData);
};

const removeAllShops = async (data) => {
  return await deleteAll(data);
};

export {
  findAllShop,
  changeShop,
  removeShop,
  changeQuantityShop,
  removeAllShops
}