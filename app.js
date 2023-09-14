const express = require('express');


const insertData = require('./routes/insert_data')
const getdata = require('./routes/get_data')
const husers = require('./routes/hash_users')

const app = express();
const port = 3000;


app.use(express.json());


app.use('/insert-data',insertData);
app.use('/users',getdata)
app.use('/husers',husers)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
