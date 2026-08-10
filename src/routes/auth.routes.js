import express from 'express';
import { getUser, postUser } from '../controllers/auth.controller.js';

const routerAuth = express.Router();

routerAuth.post('/login', getUser);
routerAuth.post('/register', postUser);

export default routerAuth;
