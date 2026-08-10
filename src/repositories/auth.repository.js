import mongoose from 'mongoose';

const COLLECTION_NAME = 'users';

const getByUserName = async (user) => {
        try {
            return await mongoose.connection
                .collection(COLLECTION_NAME)
                .findOne({ user })
        } catch (error) {
            throw error;
        }
}

const postNewUser = async (newUser, hashedPassword) => {
    try{
        return await mongoose.connection
            .collection(COLLECTION_NAME)
            .insertOne({ user: newUser, password: hashedPassword });
    }catch(error){
        throw error;
    }
}

export {
    getByUserName,
    postNewUser
};
