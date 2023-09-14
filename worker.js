const { parentPort, workerData } = require('worker_threads')
const fetchDataAndCache = require('./utils/fetchDataAndCache')


// let counter = 0 ;
// for(let i = 0; i<20_000_000_000;i++){
//   counter++
// }

console.log("fetch and catch ")
fetchDataAndCache();


// parentPort.postMessage(counter)
parentPort.postMessage('Worker initialized successfully');




setInterval(()=>{
  console.log("fetching data from redis")
  return fetchDataAndCache
}, 1000);
