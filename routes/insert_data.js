const express = require('express')
const router = express.Router()
const bigquery = require('../config/serverconfig')

router.post('/', async (req, res) => {
  try {
    const datasetId = 'all_star_engineers';
    const tableId = 'dummy_table';
    const data = req.body;

    const [apiResponse] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .insert(data);

    res.json(apiResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Data insertion failed' });
  }
});

module.exports = router


