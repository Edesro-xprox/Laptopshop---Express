import express from 'express';
import routerData from './routes/data.routes.js';
import cors from 'cors';
import shopRoutes from './routes/shop.routes.js';
import routerAuth from './routes/auth.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', routerAuth);
app.use('/data', routerData);
app.use('/shop', shopRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

export default app;