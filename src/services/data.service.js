import getAll from '../repositories/data.repository.js';

const findData = async (type) => {
  return await getAll(type);
};

export default findData;