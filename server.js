import app from './src/app.js';
import dotenv from 'dotenv';
import { connectDB } from './src/config/database.js';

dotenv.config();
await connectDB();

app.listen(process.env.PORT || 3000, () =>{
    console.log(`Puerto ${process.env.PORT} siendo escuchado`);
});