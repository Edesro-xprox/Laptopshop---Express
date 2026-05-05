import mongoose from 'mongoose';

let _db; // To store the connected DB instance

const connectDB = async () => {
  try {
    console.log('Conectando a MongoDB...');
    console.log(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    _db = mongoose.connection.db;

    console.log('✅ MongoDB conectado correctamente');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB', error.message);
    process.exit(1);
  }
};

const getDb = () => {
  if (!_db) {
    throw new Error('Base de datos no encontrada');
  }
  return _db;
};

export { connectDB, getDb };
