
const express = require('express');
const cors = require('cors');
const port = process.env.port || 5000
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middleware
app.use(cors());

// help to convert data to json 
app.use(express.json());


app.get("/", (req, res) => {

    res.send("Running Leaking Fixers Server")
})

app.listen(port, () => {
    console.log("Listening to port: ", port);
})





const uri = `mongodb+srv://${process.env.DB_USERS}:${process.env.DB_PASSWORD}@cluster0.lda5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {
        await client.connect();

        const serviceCollection = client.db('leakingFixersDB').collection('services');


        // get all the service data 
        app.get('/services', async (req, res) => {
            const query = {};

            const cursor = serviceCollection.find(query);

            const services = await cursor.toArray();

            res.send(services);
        });

        // get single service via service id
        app.get('/services/:serviceId', async (req, res) => {

            const serviceId = req.params.serviceId;
            const query = {
                _id: ObjectId(serviceId)
            };

            const service = await serviceCollection.findOne(query);
            res.send(service);
        })

    }
    finally {
        // client.close();
    }
}

run().catch(console.dir);