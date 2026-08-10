import mongoose from 'mongoose';

const COLLECTION_NAME = 'users';

const getByUserName = (user) => {
        try {
            return mongoose.connection
                .collection(COLLECTION_NAME)
                .findOne({ user })
        } catch (error) {
            throw error;
        }
}

const postNewUser = (newUser, hashedPassword) => {
    try{
        return mongoose.connection
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
