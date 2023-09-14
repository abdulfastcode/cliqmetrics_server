const express = require('express')
const router = express.Router()
const redisClient = require('../middleware/redisMiddleware')
const fetchDataAndCache = require('../utils/fetchDataAndCache')
const { Worker,isMainThread } = require('worker_threads')


// Only run the worker script in the main thread
if (isMainThread) {
    const worker = new Worker('./worker.js');
    worker.on('message', (message) => {
        console.log(message);
    });

    worker.on('error', (error) => {
        console.error(error);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });
}



// fetchDataAndCache
// setInterval(() => fetchDataAndCache , 60 * 1000)

router.get('/block',async (req,res)=>{
    const worker = new Worker('./worker.js')

    worker.on('message',(data)=>{
        res.status(200).send(`result is ${data}`)
    })
})

router.get('/', async (req, res) => {

    try {
        const cachedData = await redisClient.get('actl:users');
        console.log('Data fetched from Redis cache');
        return res.json(JSON.parse(cachedData));

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Query failed' });
    }


})

module.exports = router
