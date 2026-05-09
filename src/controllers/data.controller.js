import findData from '../services/data.service.js';

const getData = async (req, res) => {
  try {
    const { type } = req.params;
    const data = await findData(type);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getData;
