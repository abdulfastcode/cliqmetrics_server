const { BigQuery } = require('@google-cloud/bigquery');

require('dotenv').config()


const bigquery = new BigQuery({
  keyFilename: process.env.KEY_FILE_NAME,
  projectId: process.env.PROJECT_ID,
});



module.exports = bigquery