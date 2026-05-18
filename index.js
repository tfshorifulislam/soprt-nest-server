const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT
const uri = process.env.MONGODB_URI;



const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const db = client.db("sport-nest-server");
        const sportsCollection = db.collection("sports");

        //add facility data to database
        app.post('/sports', async (req, res) => {
            const sport = req.body;
            const result = await sportsCollection.insertOne(sport);
            res.send(result);
        });

        //find all sports
        app.get('/sports', async (req, res) => {
            const sports = await sportsCollection.find().toArray();
            res.send(sports);
        });

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('server is running')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})