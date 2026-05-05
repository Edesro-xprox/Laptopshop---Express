// repositories/UserRepository.js
import mongoose from 'mongoose';

const COLLECTION_NAME = 'products';

const getAll = async () => {
        try {
            return mongoose.connection
                .collection(COLLECTION_NAME)
                .find({})
                .toArray();
        } catch (error) {
            throw error;
        }
}

export default getAll;
