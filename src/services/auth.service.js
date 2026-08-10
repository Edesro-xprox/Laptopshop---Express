import { getByUserName, postNewUser } from "../repositories/auth.repository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const findUserName = async (user, password) =>{
    const userFound = await getByUserName(user);
    
    if(!userFound) return null;
    
    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if(!passwordMatch) return null;

    //Crear el token de autenticación

    //Contenido identificador del token
    const payload = {
        id: userFound._id,
    };
    
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
    return { userFound, token };
}

const insertUser = async (newUser, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await postNewUser(newUser, hashedPassword);
    return user;
}

export {
    findUserName,
    insertUser
}