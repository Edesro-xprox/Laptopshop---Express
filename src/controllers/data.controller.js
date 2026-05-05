import findData from '../services/data.service.js';

const getData = async (req, res) => {
  try {
    const data = await findData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getData;
