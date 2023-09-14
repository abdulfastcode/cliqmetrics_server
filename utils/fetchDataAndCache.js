const bigquery = require('../config/serverconfig')
const redisClient = require('../middleware/redisMiddleware')
const query = 'SELECT * FROM all_star_engineers.dummy_table';


const fetchDataAndCache = async () => {
    const [rows] = await bigquery.query(query);

    await redisClient.set('actl:users', JSON.stringify(rows))
}

module.exports = fetchDataAndCache