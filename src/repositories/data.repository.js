// repositories/UserRepository.js
import mongoose from 'mongoose';

const COLLECTION_NAME = 'products';

const getAll = async (type) => {
        try {
            return mongoose.connection
                .collection(COLLECTION_NAME)
                .find({ type: type })
                .toArray();
        } catch (error) {
            throw error;
        }
}

export default getAll;
