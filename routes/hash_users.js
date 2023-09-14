const express = require('express')
const router = express.Router()
// const bigquery = require('../config/serverconfig')
const redisClient = require('../middleware/redisMiddleware')

router.get('/',async(req,res)=>{
    try{
    await redisClient.hset(
        'users',
        {
            roy: 'clothing_-_electronics_-_home',
            karan: 'fashon_-_toys_-_cars',
            jain: 'gym_-_mobiles_-_footware',
        },
    )
    const users = await redisClient.hgetall('users');
    return res.json(users);
}catch(err){
    console.error(err)
    res.status(500).json({ error: 'failed to fetch data' });
}
})


module.exports = router
