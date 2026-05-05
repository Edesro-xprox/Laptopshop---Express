import getAll from '../repositories/data.repository.js';

const findData = async () => {
  return await getAll();
};

export default findData;