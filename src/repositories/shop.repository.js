import mongoose from 'mongoose';

const COLLECTION_NAME = 'cart';

const getAll = async () => {
    return mongoose.connection
    .collection(COLLECTION_NAME)
    .find({})
    .toArray();
};;

const post = async (shopData) =>{
    const result = await mongoose.connection
    .collection(COLLECTION_NAME)
    .insertOne(shopData);

    return {
        _id: result.insertedId,
        ...shopData
    };
}

const put = async (id, shopData) =>{
    const result = await mongoose.connection
    .collection(COLLECTION_NAME)
    .findOneAndUpdate(
      { _id: id },
      { $set: shopData },
      { new: true }
    );

    return result;
}

const deleteById = async (id, itemId)  => {
  await mongoose.connection
    .collection(COLLECTION_NAME)
    .updateOne(
      { _id: id },
      { $pull: { items: { _id: itemId } } }
    );
};

const deleteAll = async (data) => {
  await mongoose.connection
    .collection(COLLECTION_NAME)
    .deleteOne({_id: data.cartId,});
};

export {
  getAll,
  post,
  put,
  deleteById,
  deleteAll
}