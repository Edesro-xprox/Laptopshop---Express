import { findUserName, insertUser } from "../services/auth.service.js";

const getUser = async (req, res) =>{
    try{
        const { user, password } = req.body; 
        console.log(user, password);
        const { userFound, token } = await findUserName(user, password);
        res.json({ userFound, token });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

const postUser = async (req, res) => {
    try{
        const { newUser, password } = req.body;
        const user = await insertUser(newUser, password);
        res.json(user);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

export { getUser, postUser }