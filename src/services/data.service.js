import { getDataType, getDataAll } from '../repositories/data.repository.js';

const findData = async (type) => {
  return await getDataType(type);
};

const findAll = async () => {
  return await getDataAll();
}

export {
  findData,
  findAll
};