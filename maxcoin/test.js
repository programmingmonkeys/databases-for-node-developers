// request is a module that makes http calls easier
const request = require('request')

const MongoClient = require('mongodb', { useNewUrlParser: true })

const dsn = 'mongodb://localhost:27017/maxcoin'

// Generic function that fetches the closing bitcoin dates of the last month from a public API
function fetchFromAPI(callback) {

    // We are using fat arrow (=>) syntax here. This is a new way to create anonymous functions in Node
    // Please review the Node.js documentation if this looks unfamiliar to you
    request.get('https://api.coindesk.com/v1/bpi/historical/close.json', (err, raw, body) => {
        return callback(err, JSON.parse(body))
    });
}

function insertMongpDB(collection, data) {
    const promisedInserts = []

    Object.keys(data).forEach((key) => {
        promisedInserts.push(
            collection.insertOne({
                date: key,
                value: data[key]
            })
        )
    })

    return Promise.all(promisedInserts)
}

MongoClient.connect(dsn, (err, db) => {
    console.time('mongodb')
    if (err) throw err
    console.log('Connected successfully to MongoDB server')
    fetchFromAPI((err, data) => {
        if (err) throw err
        const collection = db.db('maxcoin').collection('value') // const collection = db.collection('value') // commented out doesn't work

        insertMongpDB(collection, data.bpi)
        .then((result) => {
            console.log(`Successful inserted ${result.length} documents into mongodb`)
            db.close()    
        })
        .catch((err) => {
            console.log(err)
            process.exit()
        })
    })
})