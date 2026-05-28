// repositories/UserRepository.js
import mongoose from 'mongoose';

const COLLECTION_NAME = 'products';

const getDataType = async (type) => {
        try {
            return mongoose.connection
                .collection(COLLECTION_NAME)
                .find({ type: type })
                .toArray();
        } catch (error) {
            throw error;
        }
}

const getDataAll = async () => {
    try{
        return mongoose.connection
                .collection(COLLECTION_NAME)
                .find({})
                .toArray();
    }catch(error){
        throw error;
    }
}

export {
    getDataType,
    getDataAll
};
